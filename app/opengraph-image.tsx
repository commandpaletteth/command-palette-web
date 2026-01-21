import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Command & Palette - High Performance Digital Agency'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: 'linear-gradient(to bottom right, #09090b, #1a1a1a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Background Accents */}
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '600px', height: '600px', background: '#22c55e', opacity: '0.1', filter: 'blur(100px)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '600px', height: '600px', background: '#3b82f6', opacity: '0.1', filter: 'blur(100px)', borderRadius: '50%' }}></div>

        {/* Logo CP */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '120px',
            height: '120px',
            background: 'black',
            color: 'white',
            borderRadius: '24px',
            fontSize: '60px',
            fontWeight: 900,
            border: '2px solid #333',
            marginBottom: '40px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          }}
        >
          CP
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '70px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '20px',
            lineHeight: 1.1,
            textShadow: '0 4px 10px rgba(0,0,0,0.5)',
          }}
        >
          Command & Palette
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '32px',
            color: '#a1a1aa',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.5,
          }}
        >
          High-Performance Web & AI Automation
        </div>
        
        {/* Domain */}
         <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '24px',
            color: '#52525b',
            letterSpacing: '2px',
          }}
        >
          COMMAND-PALETTE.CO
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}