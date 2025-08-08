import Cookies from "js-cookie";

export function hasConsentedCookies() {
  if (typeof window === "undefined") return false;

  const consent = Cookies.get("mi_consentimiento_cookie");
  return consent === "true";
}
