import { MetadataRoute } from 'next';
import { AGENCY_PAGES_LIVE } from '@/lib/launch';

const BASE_URL = 'https://www.command-palette.co';
const LOCALES = ['en', 'th'] as const;

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

interface RouteConfig {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
}

const ROUTES: RouteConfig[] = [
  { path: '',           changeFrequency: 'weekly',  priority: 1.0 },
  { path: '/services',  changeFrequency: 'monthly', priority: 0.9 },
  { path: '/works',     changeFrequency: 'monthly', priority: 0.9 },
  { path: '/process',   changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact',   changeFrequency: 'yearly',  priority: 0.7 },
  { path: '/privacy',   changeFrequency: 'yearly',  priority: 0.3 },
  { path: '/terms',     changeFrequency: 'yearly',  priority: 0.3 },
  { path: '/kado/privacy', changeFrequency: 'yearly', priority: 0.3 },
];

// New agency pages: listed only once they go live (see lib/launch.ts).
const AGENCY_ROUTES: RouteConfig[] = [
  { path: '/pricing', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/founder', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/clinics', changeFrequency: 'monthly', priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return LOCALES.flatMap((locale) =>
    [...ROUTES, ...(AGENCY_PAGES_LIVE ? AGENCY_ROUTES : [])].map(({ path, changeFrequency, priority }) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    }))
  );
}