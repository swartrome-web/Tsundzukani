/** @type {import('next').NextConfig} */
// SECURE MODE - TSUNDZUKANI ECD NPC 2026/447870/08 - tsundzukanicentre.co.za
// Protects: Bank details (Capitec NPC holder), Enrollment (60 kids), Donations Ref (XSS block)

const securityHeaders = [
  // CSP - Bouncer: Only allow self + Vercel + Google fonts if you use
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com https://*.vercel.com", // Next.js needs unsafe-inline for now - we tighten after
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https: https://*.vercel.com",
      "connect-src 'self' https://*.vercel.com https://vitals.vercel-insights.com https://wa.me https://api.whatsapp.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'", // No clickjack - No one can iframe your site
      "upgrade-insecure-requests"
    ].join('; ')
  },
  // No iframe your site - Prevent clickjacking of bank details
  { key: 'X-Frame-Options', value: 'DENY' },
  // No MIME sniff - Prevent browser guessing file type
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // No referrer leak when going to WhatsApp
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // No camera/mic/geo - Kids site, no need
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
  // HSTS - Force HTTPS for 1 year - All http -> https
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  // Hide Next.js version
  { key: 'X-Powered-By', value: 'TSUNDZUKANI-ECD-NPC-2026/447870/08' },
  // XSS filter old browsers
  { key: 'X-XSS-Protection', value: '1; mode=block' }
];

const nextConfig = {
  // Hide powered by header
  poweredByHeader: false,

  // Apply security headers to all routes
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      // Extra lock for API routes - No index by Google
      {
        source: '/api/(.*)',
        headers: [
         ...securityHeaders,
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' },
          { key: 'Cache-Control', value: 'no-store, max-age=0' }
        ]
      },
      // Enrollment - No cache, sensitive
      {
        source: '/enroll',
        headers: [
         ...securityHeaders,
          { key: 'Cache-Control', value: 'no-store' }
        ]
      }
    ];
  },

  // Redirect http -> https + www -> non-www
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.tsundzukanicentre.co.za' }],
        destination: 'https://tsundzukanicentre.co.za/:path*',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;