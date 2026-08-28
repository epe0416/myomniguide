export interface TerminoGlosario {
    titulo: string;
    descripcion: string;
}

export const GLOSARIO: Record<string, TerminoGlosario> = {
    fitoestrogenos: {
        titulo: "Fitoestrógenos",
        descripcion: "Compuestos naturales de origen vegetal con una estructura similar a los estrógenos del cuerpo. Ayudan a regular el equilibrio hormonal de forma suave y sin efectos secundarios sintéticos.",
    },
    micelizacion: {
        titulo: "Tecnología de Micelización",
        descripcion: "Proceso biotecnológico que divide las vitaminas solubles en grasa en partículas microscópicas compatibles con el agua. Permite que el cuerpo las absorba hasta en un 95% en solo 8 a 10 minutos.",
    },
    licopeno: {
        titulo: "Licopeno",
        descripcion: "Potente antioxidante natural de la familia de los carotenoides (presente en tomates) que se acumula en la próstata para proteger sus células del envejecimiento y daño oxidativo.",
    },
    cromo: {
        titulo: "Picolinato de Cromo",
        descripcion: "Mineral traza esencial que actúa como cofactor de la insulina, ayudando a que la glucosa ingrese a las células para convertirse en energía en lugar de almacenarse como grasa.",
    },
};