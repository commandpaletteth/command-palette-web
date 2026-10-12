/**
 * Switch for the new agency pages (/pricing, /founder, /clinics).
 * false: pages work but are hidden from Google (noindex) and left out of the sitemap.
 * true:  pages are indexable and listed in sitemap.xml. Flip this when they go live.
 */
export const AGENCY_PAGES_LIVE = false;

export const AGENCY_PAGE_PATHS = ["/pricing", "/founder", "/clinics"] as const;
