export const WHATSAPP_NUMBER = "+447446431335";
export const WHATSAPP_DISPLAY = "+44 7446 431335";
export const SUPPORT_EMAIL = "support@iptvs-anbieter.de";
export const SITE_NAME = "IPTV Anbieter";
export const SITE_DOMAIN = "iptvs-anbieter.de";

export function whatsappLink(message = "Hallo, ich interessiere mich für das IPTV-Jahresabo (€45/Jahr).") {
  const num = WHATSAPP_NUMBER.replace(/[^\d]/g, "");
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}
