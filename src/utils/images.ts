import type { ImageMetadata } from 'astro';

// Carga todas las imágenes ubicadas en src/assets
const imagesMap = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{jpeg,jpg,png,gif,webp,svg}'
);

export async function resolveAssetImage(path: string): Promise<ImageMetadata | undefined> {
  if (!path) return undefined;

  // Normaliza rutas relativas ("../../../assets/...") a la raíz "/src/assets/..."
  const normalizedPath = path.replace(/^(\.\.\/)+assets\//, '/src/assets/');

  if (imagesMap[normalizedPath]) {
    const imageModule = await imagesMap[normalizedPath]();
    return imageModule.default;
  }

  return undefined;
}