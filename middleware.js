import { match } from "@formatjs/intl-localematcher";
import { Negotiator } from "negotiator";
import { NextResponse } from "next/server";

const defaultLocale = "bn";
const locales = ["bn", "en"];

const getLocale = (request) => {
  const preferredLanguage = request.headers.get("accept-language");

  const languages = new Negotiator({
    headers: { "accept-language": preferredLanguage },
  }).languages();

  return match(languages, locales, defaultLocale);
};

export default function middleware(req) {
  const pathname = req.nextUrl.pathname;

  const pathnameHasLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}`) && !pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    // locale hasn't in pathname, get use preferred locale and redirect with the locale
    const locale = getLocale(req);

    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|assets.*//..*|_next).*)"],
};
