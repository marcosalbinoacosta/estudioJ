export const WHATSAPP_NUMBER = "5493834000000"; // Reemplazar con número real
export const WHATSAPP_MESSAGE_DEFAULT =
  "Hola Estudio J! Quiero consultar sobre una prenda 🌿";
export const INSTAGRAM_URL = "https://instagram.com/estudioj";
export const STORE_ADDRESS = "San Fernando del Valle de Catamarca, Argentina";
export const STORE_HOURS = "Lun a Vie | 18 a 21 hs";
export const SHIPPING_TEXT = "Envíos a todo el país";

export function buildWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(message ?? WHATSAPP_MESSAGE_DEFAULT);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
