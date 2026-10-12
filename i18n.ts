// @ts-nocheck
import {getRequestConfig} from 'next-intl/server';

// รายชื่อภาษาที่รองรับ
const locales = ['en', 'th'];

export default getRequestConfig(async ({requestLocale}) => {
  // รอค่า locale
  let locale = await requestLocale;

  // ถ้าไม่มีค่า หรือค่าผิด ให้ Default เป็น 'en'
  if (!locale || !locales.includes(locale)) {
    locale = 'en';
  }

  return {
    locale, // 👈👈👈 ตัวนี้ครับที่ขาดไป! ต้องใส่คืนค่ากลับไปให้ระบบด้วย
    messages: {
      ...(await import(`./messages/${locale}.json`)).default,
      // New agency pages (clinics, pricing, founder). Kept in a separate file so they can ship independently.
      ...(await import(`./messages/agency/${locale}.json`)).default,
    }
  };
});