import { NextResponse } from 'next/server';

// Simple in-memory rate limit (use Upstash Redis in prod)
const hits = new Map<string, number>();

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for') || 'unknown';
  
  // Rate limit: 5 per hour per IP
  const count = hits.get(ip) || 0;
  if (count > 5) {
    return NextResponse.json({ message: 'Too many requests - Try later' }, { status: 429 });
  }
  hits.set(ip, count + 1);
  setTimeout(()=> hits.set(ip, (hits.get(ip)||1)-1), 60*60*1000);

  try {
    const body = await req.json();

    // Re-sanitize backend - NEVER trust frontend
    const childFirstName = (body.childFirstName || '').toString().replace(/[^a-zA-Z ]/g,'').trim().slice(0,30);
    const childAge = parseInt(body.childAge);
    const parentFirstName = (body.parentFirstName || '').toString().replace(/[^a-zA-Z ]/g,'').trim().slice(0,30);
    const parentPhone = (body.parentPhone || '').toString().replace(/[^0-9]/g,'').slice(0,10);

    if (!childFirstName || childFirstName.length < 2) return NextResponse.json({message:'Invalid child name'}, {status:400});
    if (childAge < 2 || childAge > 6) return NextResponse.json({message:'Age 2-6 only'}, {status:400});
    if (!/^[0-9]{10}$/.test(parentPhone)) return NextResponse.json({message:'Phone 10 digits'}, {status:400});
    if (!body.consentPOPIA) return NextResponse.json({message:'POPIA required'}, {status:400});
    if (body.honeypot) return NextResponse.json({message:'Bot detected'}, {status:400});

    // TODO: Save to DB encrypted - Supabase / Sheet - Only first name + phone
    console.log("ENROLL:", { childFirstName, childAge, fees: body.fees, parentFirstName, parentPhone, ip });

    // TODO: Send WhatsApp / Email to Mirriam

    return NextResponse.json({ ok:true, ref:`ENR-2026/447870/08/${Date.now().toString().slice(-4)}` });
  } catch (e) {
    return NextResponse.json({message:'Server error'}, {status:500});
  }
}