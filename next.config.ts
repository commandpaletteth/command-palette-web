import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next'; // ✅ เพิ่มการ Import Type

const withNextIntl = createNextIntlPlugin('./i18n.ts');

// ✅ ระบุ Type ให้ชัดเจนว่าเป็น NextConfig
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default withNextIntl(nextConfig);