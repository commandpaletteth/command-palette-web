import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Command & Palette: websites that bring customers to you';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Share preview for LINE, Facebook, Slack, X. Everything is stacked in the centre so
// apps that crop the image to a square (LINE on desktop) still show the whole logo.
export default async function Image() {
  // Use the real app icon so the mark matches the favicon exactly
  const logoData = await fetch(new URL('./icon.png', import.meta.url)).then((r) => r.arrayBuffer());

  return new ImageResponse(
    (
      <div style={{ background: '#f8fafc', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-200px', left: '-200px', width: '800px', height: '800px', background: 'rgba(191, 219, 254, 0.5)', filter: 'blur(120px)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-200px', right: '-200px', width: '700px', height: '700px', background: 'rgba(233, 213, 255, 0.5)', filter: 'blur(120px)', borderRadius: '50%' }} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
          {/* @ts-expect-error Satori accepts an ArrayBuffer as the image source */}
          <img src={logoData} width={300} height={300} alt="" />

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '28px' }}>
            <div style={{ display: 'flex', fontSize: '64px', fontWeight: 700, color: '#0f172a', letterSpacing: '-2px', lineHeight: 1.05 }}>
              Command <span style={{ color: '#7c3aed', margin: '0 18px' }}>&amp;</span> Palette
            </div>
            <div style={{ display: 'flex', fontSize: '32px', color: '#334155', marginTop: '14px' }}>
              Websites that bring customers to you
            </div>
            <div style={{ display: 'flex', fontSize: '24px', color: '#2563eb', fontWeight: 700, marginTop: '14px' }}>
              Fixed price · Live in 3 weeks · Bangkok
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
