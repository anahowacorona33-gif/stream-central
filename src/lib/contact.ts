export const WHATSAPP_NUMBER = "+4915123456789"; // TODO: Echte Nummer eintragen
export const WHATSAPP_DISPLAY = "+49 151 234 567 89";
export const SUPPORT_EMAIL = "support@iptvs-anbieter.de";
export const SITE_NAME = "IPTVs-Anbieter";
export const SITE_DOMAIN = "iptvs-anbieter.de";

export function whatsappLink(message = "Hallo, ich interessiere mich für das IPTV-Jahresabo (€45/Jahr).") {
  const num = WHATSAPP_NUMBER.replace(/[^\d]/g, "");
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}
