import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Command & Palette: websites that bring customers to you';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Share preview for LINE, Facebook, Slack, X. Logo mark on the left, name and promise on the right.
export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ background: '#f8fafc', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-200px', left: '-200px', width: '800px', height: '800px', background: 'rgba(191, 219, 254, 0.5)', filter: 'blur(120px)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-200px', right: '-200px', width: '700px', height: '700px', background: 'rgba(233, 213, 255, 0.5)', filter: 'blur(120px)', borderRadius: '50%' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '56px', zIndex: 10 }}>
          <svg width="260" height="260" viewBox="281 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M481 0C591.457 0 681 89.5431 681 200C681 232.084 673.443 262.403 660.015 289.276C651.833 283.437 641.818 280 631 280C603.386 280 581 302.386 581 330C581 343.372 586.249 355.518 594.799 364.489C562.496 386.88 523.28 400 481 400C370.543 400 281 310.457 281 200C281 89.5431 370.543 0 481 0Z" fill="url(#g1)"/>
            <path d="M443.972 277.267C438.337 277.267 433.176 275.894 428.489 273.148C423.801 270.354 420.061 266.614 417.267 261.926C414.521 257.239 413.148 252.078 413.148 246.443C413.148 240.761 414.521 235.577 417.267 230.889C420.061 226.202 423.801 222.461 428.489 219.668C433.176 216.874 438.337 215.477 443.972 215.477H460.449V186.926H443.972C438.337 186.926 433.176 185.553 428.489 182.807C423.801 180.013 420.061 176.296 417.267 171.656C414.521 166.969 413.148 161.784 413.148 156.102C413.148 150.42 414.521 145.259 417.267 140.619C420.061 135.932 423.801 132.215 428.489 129.469C433.176 126.675 438.337 125.278 443.972 125.278C449.653 125.278 454.838 126.675 459.526 129.469C464.213 132.215 467.954 135.932 470.747 140.619C473.541 145.259 474.938 150.42 474.938 156.102V172.438H503.489V156.102C503.489 150.42 504.862 145.259 507.608 140.619C510.402 135.932 514.118 132.215 518.759 129.469C523.446 126.675 528.631 125.278 534.312 125.278C539.994 125.278 545.155 126.675 549.795 129.469C554.483 132.215 558.2 135.932 560.946 140.619C563.74 145.259 565.136 150.42 565.136 156.102C565.136 161.784 563.74 166.969 560.946 171.656C558.2 176.296 554.483 180.013 549.795 182.807C545.155 185.553 539.994 186.926 534.312 186.926H517.977V215.477H534.312C539.994 215.477 545.155 216.874 549.795 219.668C554.483 222.461 558.2 226.202 560.946 230.889C563.74 235.577 565.136 240.761 565.136 246.443C565.136 252.078 563.74 257.239 560.946 261.926C558.2 266.614 554.483 270.354 549.795 273.148C545.155 275.894 539.994 277.267 534.312 277.267C528.631 277.267 523.446 275.894 518.759 273.148C514.118 270.354 510.402 266.614 507.608 261.926C504.862 257.239 503.489 252.078 503.489 246.443V229.966H474.938V246.443C474.938 252.078 473.541 257.239 470.747 261.926C467.954 266.614 464.213 270.354 459.526 273.148C454.838 275.894 449.653 277.267 443.972 277.267ZM474.938 215.477H503.489V186.926H474.938V215.477Z" fill="white"/>
            <defs>
              <linearGradient id="g1" x1="348.5" y1="57" x2="644" y2="350.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2563EB"/>
                <stop offset="1" stopColor="#9333EA"/>
              </linearGradient>
            </defs>
          </svg>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: '76px', fontWeight: 700, color: '#0f172a', letterSpacing: '-2px', lineHeight: 1.05 }}>
              Command <span style={{ color: '#7c3aed', margin: '0 18px' }}>&amp;</span> Palette
            </div>
            <div style={{ display: 'flex', fontSize: '36px', color: '#334155', marginTop: '22px' }}>
              Websites that bring customers to you
            </div>
            <div style={{ display: 'flex', fontSize: '26px', color: '#2563eb', fontWeight: 700, marginTop: '26px' }}>
              Fixed price · Live in 3 weeks · Bangkok
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
