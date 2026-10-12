import createMiddleware from 'next-intl/middleware';

// Next.js 16 renamed the "middleware" file convention to "proxy".
export default createMiddleware({
  locales: ['en', 'th'],
  defaultLocale: 'en',
});

export const config = {
  // Run on every page URL so links without a locale (e.g. /pricing) are sent to /en/pricing.
  // Skips API routes, Next internals, files with an extension (sitemap.xml, favicon.ico, images)
  // and the generated Open Graph image.
  matcher: ['/((?!api|_next|_vercel|opengraph-image|.*\\..*).*)'],
};
