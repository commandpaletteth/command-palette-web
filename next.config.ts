import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // นายสามารถเพิ่ม Config อื่นๆ ของ Next.js ตรงนี้ได้ในอนาคต
};

// ✅ ยุบรวมการ Export ไว้ที่เดียวแบบ Clean Code
export default withNextIntl(nextConfig);