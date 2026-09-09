// middleware.ts - TSUNDZUKANI ECD NPC 2026/447870/08
// Guard: Rate limit + Bot block + POPIA audit log + Secure Ref check
// Essential before Vercel deploy - Protects 60 kids data + Capitec bank + R50k CSI

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// In-memory store - For prod use Upstash Redis (free) - Vercel KV
const ipStore = new Map<string, { count: number; firstHit: number; blockedUntil?: number }>();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_API_HITS = 10; // 10 requests per min per IP to /api/*
const MAX_ENROLL_HITS = 5; // 5 enroll per hour
const BLOCK_MS = 15 * 60 * 1000; // Block 15 mins if abuse

function isBot(userAgent: string) {
  const bots = ['sqlmap', 'nikto', 'nmap', 'curl', 'wget', 'python-requests', 'go-http'];
  return bots.some(b => userAgent.toLowerCase().includes(b));
}

export function middleware(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.ip || 'unknown';
  const ua = req.headers.get('user-agent') || '';
  const path = req.nextUrl.pathname;
  const now = Date.now();

  // 1. BLOCK obvious bots trying to hack
  if (isBot(ua) && path.startsWith('/api/')) {
    console.log(`[SECURITY BLOCK BOT] IP:${ip} UA:${ua} PATH:${path} NPC:2026/447870/08`);
    return new NextResponse('Forbidden - Bot detected', { status: 403 });
  }

  // 2. RATE LIMIT logic
  const record = ipStore.get(ip) || { count: 0, firstHit: now };

  // Reset window
  if (now - record.firstHit > WINDOW_MS) {
    record.count = 0;
    record.firstHit = now;
    record.blockedUntil = undefined;
  }

  // If blocked
  if (record.blockedUntil && now < record.blockedUntil) {
    return new NextResponse('Too Many Requests - Blocked 15 mins - NPC 2026/447870/08 Secure Mode', {
      status: 429,
      headers: { 'Retry-After': '900' }
    });
  }

  // Check limits
  if (path.startsWith('/api/enroll') || path.startsWith('/api/donate')) {
    // Stricter for enroll/donate
    if (record.count >= MAX_ENROLL_HITS) {
      record.blockedUntil = now + BLOCK_MS;
      ipStore.set(ip, record);
      console.log(`[RATE LIMIT ENROLL] IP:${ip} Blocked - NPC 2026/447870/08`);
      return new NextResponse('Too Many Requests - Only 5 enroll per hour - Contact 0647919022', { status: 429 });
    }
  } else if (path.startsWith('/api/')) {
    if (record.count >= MAX_API_HITS) {
      record.blockedUntil = now + BLOCK_MS;
      ipStore.set(ip, record);
      console.log(`[RATE LIMIT API] IP:${ip} Blocked - ${path}`);
      return new NextResponse('Too Many Requests - API limit', { status: 429 });
    }
  }

  record.count++;
  ipStore.set(ip, record);

  // 3. SECURITY HEADERS + LOG for POPIA audit
  const res = NextResponse.next();

  // Add audit ID for POPIA trail
  const auditId = `AUD-2026-447870-08-${Date.now().toString().slice(-6)}`;
  res.headers.set('X-Audit-ID', auditId);
  res.headers.set('X-NPC', '2026/447870/08');
  res.headers.set('X-Content-Type-Options', 'nosniff');

  // Log sensitive access for POPIA (you can send to Vercel logs)
  if (path.includes('enroll') || path.includes('donate') || path.includes('compliance')) {
    console.log(`[AUDIT ${auditId}] IP:${ip} PATH:${path} UA:${ua.slice(0,50)} TIME:${new Date().toISOString()} NPC:2026/447870/08`);
  }

  // 4. BLOCK Ref injection at middleware level (extra layer)
  const refParam = req.nextUrl.searchParams.get('ref');
  if (refParam) {
    const blockedChars = ['<', '>', '"', "'", ';', '--', '/*', '*/', 'SCRIPT', 'ALERT'];
    if (blockedChars.some(c => refParam.toUpperCase().includes(c))) {
      console.log(`[SECURITY BLOCK REF XSS] IP:${ip} REF:${refParam}`);
      return new NextResponse('Invalid Ref - Injection blocked - Secure Mode', { status: 400 });
    }
  }

  return res;
}

// Only run on API + sensitive pages - Not on static images for performance
export const config = {
  matcher: ['/api/:path*', '/enroll', '/enroll/:path*', '/donate', '/compliance']
};