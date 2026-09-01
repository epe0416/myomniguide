// src/utils/whatsapp.ts
import { CONFIG_NEGOCIO } from '../data/config';

export function getActiveWhatsAppNumber(): string {
  if (typeof window === 'undefined') return CONFIG_NEGOCIO.whatsappNumero;

  const urlParams = new URLSearchParams(window.location.search);
  const refPhone = urlParams.get('w') || urlParams.get('ref');
  if (refPhone) {
    return refPhone.replace(/\D/g, ''); 
  }

  const savedMyPhone = localStorage.getItem('my_whatsapp_phone');
  if (savedMyPhone) {
    return savedMyPhone.replace(/\D/g, '');
  }

  return CONFIG_NEGOCIO.whatsappNumero;
}

export function getDirectContactUrl(productName?: string): string {
  const phone = getActiveWhatsAppNumber();
  const message = productName 
    ? `${CONFIG_NEGOCIO.mensajeBase} el producto *${productName}*.`
    : `${CONFIG_NEGOCIO.mensajeBase} los productos de la guía.`;
  
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getShareUrl(productName: string, productUrl: string): string {
  if (typeof window === 'undefined') return productUrl;

  const urlParams = new URLSearchParams(window.location.search);
  const currentRef = urlParams.get('w') || urlParams.get('ref');
  
  // Jerarquía: Si el usuario configuró su número en este dispositivo, úsalo. Si no, usa el de la URL que venía visitando, o tu número por defecto.
  const myPhone = localStorage.getItem('my_whatsapp_phone') || currentRef || CONFIG_NEGOCIO.whatsappNumero;
  const cleanPhone = myPhone.replace(/\D/g, '');
  
  const baseCleanUrl = productUrl.split('?')[0];
  const referralUrl = `${baseCleanUrl}?w=${cleanPhone}`;

  const message = `¡Hola! Te comparto la ficha técnica oficial de *${productName}* en MyOmniGuide:\n\n${referralUrl}`;
  
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
}