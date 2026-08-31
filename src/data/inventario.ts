// src/data/inventario.ts

export interface MercadoData {
    precio: number;
    puntos: number;
}

export interface ProductoComercial {
    codigo: string;
    destacado?: boolean;
    nio: MercadoData;
    usa?: MercadoData;
}

export const INVENTARIO_GLOBAL: Record<string, ProductoComercial> = {
    "uzo-supreme": {
        codigo: "3875700",
        destacado: true,
        nio: { precio: 3350, puntos: 166 }
    },
    "aqtua-evolucion": {
        codigo: "3905934",
        destacado: false,
        nio: { precio: 2480, puntos: 118 }
    },
    "power-maker": {
        codigo: "2603201",
        destacado: true,
        nio: { precio: 2230, puntos: 110 },
        usa: { precio: 75.48, puntos: 127 }
    },
    "undu": {
        codigo: "3705934",
        nio: { precio: 2050, puntos: 107 },
        usa: { precio: 67.16, puntos: 107 }
    },
    "estop-plus-supreme": {
        codigo: "1675700",
        nio: { precio: 2550, puntos: 102 },
        usa: { precio: 78.26, puntos: 102 }
    },
    "teatino-maracuya": {
        codigo: "3505609",
        destacado: true,
        nio: { precio: 2170, puntos: 93 },
        usa: { precio: 64.94, puntos: 99 }
    },
    "omniplus-frutas": {
        codigo: "2350430",
        destacado: true,
        nio: { precio: 1740, puntos: 87 },
        usa: { precio: 66.05, puntos: 92 }
    },
    "omniplus-naranja": {
        codigo: "2350401",
        nio: { precio: 1740, puntos: 87 },
        usa: { precio: 67.71, puntos: 92 }
    },
    "shake-supreme": {
        codigo: "7170943",
        nio: { precio: 1775, puntos: 76 },
        usa: { precio: 47.73, puntos: 76 }
    },
    "vkids": {
        codigo: "5025516",
        nio: { precio: 1770, puntos: 73 },
        usa: { precio: 51.62, puntos: 71 }
    },
    "dolce-vita": {
        codigo: "4404710",
        nio: { precio: 1470, puntos: 70 },
        usa: { precio: 47.73, puntos: 70 }
    },
    "fiber-n-plus": {
        codigo: "1502208",
        nio: { precio: 1655, puntos: 70 },
        usa: { precio: 52.73, puntos: 76 }
    },
    "super-mix": {
        codigo: "3125317",
        nio: { precio: 1750, puntos: 68 },
        usa: { precio: 48.84, puntos: 75 }
    },
    "probiotic": {
        codigo: "6724761",
        nio: { precio: 1570, puntos: 66 },
        usa: { precio: 44.40, puntos: 66 }
    },
    "optimus": {
        codigo: "2505711",
        nio: { precio: 1410, puntos: 64 },
        usa: { precio: 47.73, puntos: 67 }
    },
    "teatino-limon": {
        codigo: "3505605",
        destacado: true,
        nio: { precio: 1500, puntos: 63 },
        usa: { precio: 42.18, puntos: 63 }
    },
    "omniviu-supreme": {
        codigo: "5827415",
        nio: { precio: 1705, puntos: 59 },
        usa: { precio: 43.85, puntos: 59 }
    },
    "cafezzino-plus": {
        codigo: "5105932",
        destacado: true,
        nio: { precio: 1640, puntos: 57 },
        usa: { precio: 41.07, puntos: 52 }
    },
    "omniost": {
        codigo: "6571959",
        nio: { precio: 1550, puntos: 57 },
        usa: { precio: 49.95, puntos: 57 }
    },
    "fem-evolucion": {
        codigo: "1409621",
        nio: { precio: 1405, puntos: 56 },
        usa: { precio: 42.74, puntos: 56 }
    },
    "homo-plus": {
        codigo: "1729752",
        destacado: true,
        nio: { precio: 1340, puntos: 55 },
        usa: { precio: 41.07, puntos: 55 }
    },
    "magnus-supreme": {
        codigo: "2075722",
        nio: { precio: 1185, puntos: 54 },
        usa: { precio: 37.19, puntos: 57 }
    },
    "starbien": {
        codigo: "3000730",
        nio: { precio: 1240, puntos: 53 },
        usa: { precio: 34.41, puntos: 53 }
    },
    "magnus": {
        codigo: "2023500",
        nio: { precio: 1125, puntos: 51 },
        usa: { precio: 34.97, puntos: 56 }
    },
    "one-c-mix": {
        codigo: "6305929",
        nio: { precio: 1185, puntos: 46 },
        usa: { precio: 30.53, puntos: 46 }
    },
    "flu-y": {
        codigo: "8453000",
        nio: { precio: 875, puntos: 44 },
        usa: { precio: 30.19, puntos: 44 }
    },
    "iqu-lata": {
        codigo: "3659152",
        nio: { precio: 1279, puntos: 42 },
        usa: { precio: 34.92, puntos: 42 }
    },
    "tmgn-coffee": {
        codigo: "3304732",
        nio: { precio: 1075, puntos: 39 }
    },
    "ego-frutas": {
        codigo: "4850500",
        nio: { precio: 843, puntos: 27 },
        usa: { precio: 25.45, puntos: 27 }
    },
    "aloe-beta": {
        codigo: "4250204",
        destacado: true,
        nio: { precio: 590, puntos: 26 },
        usa: { precio: 20.72, puntos: 26 }
    },
    "fx-naranja": {
        codigo: "5350501",
        nio: { precio: 328, puntos: 11 }
    },
    "omliqu": {
        codigo: "3659295",
        nio: { precio: 214, puntos: 7 }
    },
    "ego-plant": {
        codigo: "1260600",
        nio: { precio: 133, puntos: 5 },
        usa: { precio: 4.32, puntos: 5 }
    },
    "aloe-beta-200ml": {
        codigo: "4250604",
        nio: { precio: 133, puntos: 5 },
        usa: { precio: 4.32, puntos: 5 }
    },
    "ego-10": {
        codigo: "4650609",
        nio: { precio: 133, puntos: 5 },
        usa: { precio: 4.32, puntos: 5 }
    },
    "kolina": {
        codigo: "1850610",
        nio: { precio: 133, puntos: 5 },
        usa: { precio: 4.32, puntos: 5 }
    },
    "agua-blu": {
        codigo: "4160400",
        nio: { precio: 60, puntos: 2 },
        usa: { precio: 1.72, puntos: 2 }
    },
    "fx-naranja-individual": {
        codigo: "5350595",
        nio: { precio: 56, puntos: 2 }
    }
};

// Mapa centralizado de equivalencias (Slug del .md -> clave en INVENTARIO_GLOBAL)
const EQUIVALENCIAS_SLUGS: Record<string, string> = {
    'fem-plus': 'fem-evolucion',
    'thermogen-coffee': 'tmgn-coffee',
    'omniplus-frutas': 'omniplus-frutas'
};

/**
 * Función centralizada para resolver los datos comerciales de cualquier producto.
 */
export function getProductoComercial(rawSlug: string): ProductoComercial | undefined {
    if (!rawSlug) return undefined;

    // 1. Extraer solo el nombre base sin la subcarpeta (ej: "omnilife/fem-plus" -> "fem-plus")
    const nombreArchivo = rawSlug.split('/').pop() || '';
    
    // 2. Normalizar eliminando sufijos comunes y llevando a minúsculas
    const idLimpio = nombreArchivo.replace(/-e$/, '').toLowerCase();

    // 3. Resolver usando el mapa de equivalencias o la llave directa
    const claveFinal = EQUIVALENCIAS_SLUGS[idLimpio] || idLimpio;

    // 4. Búsqueda directa o tolerante sin errores de tipos
    if (INVENTARIO_GLOBAL[claveFinal]) {
        return INVENTARIO_GLOBAL[claveFinal];
    }

    const resultadoEncontrado = Object.entries(INVENTARIO_GLOBAL).find(
        ([key]) => key.replace(/-e$/, '').toLowerCase() === claveFinal
    );

    return resultadoEncontrado ? resultadoEncontrado[1] : undefined;
}