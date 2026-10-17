// Where "talk to us" buttons point.
// Thai visitors prefer to start on LINE; everyone else books a video call.
export const CALENDLY_URL = "https://calendly.com/command-palette-th/45min";
export const LINE_URL = "https://lin.ee/SkHZiwO";
export const LINE_ID = "@541yrffb";

export function contactHref(locale: string): string {
  return locale === "th" ? LINE_URL : CALENDLY_URL;
}
