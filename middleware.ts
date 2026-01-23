import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // รายการภาษา
  locales: ['en', 'th'],
 
  // ภาษาเริ่มต้น
  defaultLocale: 'en'
});
 
export const config = {
  // บังคับให้ Middleware ทำงานกับ URL ทั่วไป (ยกเว้นไฟล์ระบบ)
  matcher: ['/', '/(th|en)/:path*']
};