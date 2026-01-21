import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18, // ปรับขนาดให้พอดี
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '8px',
          fontWeight: 900, // ตัวหนาพิเศษ
          border: '1px solid #333',
          fontFamily: 'sans-serif', // ใช้ฟอนต์มาตรฐานที่ทุกเครื่องมี
          letterSpacing: '-1px' // บีบตัวอักษรให้ชิดกันเท่ๆ
        }}
      >
        CP
      </div>
    ),
    {
      ...size,
    }
  )
}