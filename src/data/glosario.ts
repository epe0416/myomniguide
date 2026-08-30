// src/data/glosario.ts
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
    arabinoxilano: {
        titulo: "Arabinoxilano",
        descripcion: "Hemicelulosa modificada enzimáticamente (derivada del salvado de arroz y hongo Shiitake) de bajo peso molecular que estimula de forma fisiológica la actividad de las células del sistema inmunitario.",
    },
    "celulas-nk": {
        titulo: "Células Natural Killer (NK)",
        descripcion: "Linfocitos pertenecientes al sistema inmunitario innato especializados en la identificación, respuesta y eliminación de células alteradas, estresadas o infectadas en el organismo.",
    },
    "coenzima-q10": {
        titulo: "Coenzima Q10 (CoQ10)",
        descripcion: "Nutriente antioxidante lipídico esencial para la cadena de transporte de electrones en la mitocondria, fundamental para la producción de energía celular (ATP) y la protección del tejido cardíaco.",
    },
    "l-carnitina": {
        titulo: "L-Carnitina",
        descripcion: "Derivado aminoacídico especializado en transportar ácidos grasos hacia la matriz mitocondrial para su conversión en energía (beta-oxidación), apoyando el rendimiento físico y la recuperación.",
    },
    "d-ribosa": {
        titulo: "D-Ribosa",
        descripcion: "Monosacárido natural que actúa como precursor directo en la síntesis de ATP, acelerando la resíntesis de energía en tejidos con alta demanda metabólica como el corazón y los músculos.",
    },
    glucosamina: {
        titulo: "Glucosamina",
        descripcion: "Aminazúcar precursor indispensable en la biosíntesis de proteoglicanos y glicosaminoglicanos, que favorece la formación del cartílago hialino y la producción de líquido sinovial.",
    },
    condroitina: {
        titulo: "Sulfato de Condroitina",
        descripcion: "Glicosaminoglicano estrutural que retiene agua dentro de la matriz articular, otorgando resistencia mecánica frente a impactos y compresión.",
    },
    msm: {
        titulo: "MSM (Metilsulfonilmetano)",
        descripcion: "Compuesto orgánico azufrado de alta biodisponibilidad que apoya la flexibilidad del tejido conectivo, ayudando a disminuir la rigidez y el discomfort físico.",
    },
    fitoesteroles: {
        titulo: "Fitoesteroles (Esteroles Vegetales)",
        descripcion: "Compuestos lipídicos de origen vegetal con una estructura similar al colesterol que compiten con él a nivel intestinal, reduciendo su absorción y favoreciendo su excreción.",
    },
    inulina: {
        titulo: "Inulina",
        descripcion: "Fibra dietética soluble que se une a los ácidos biliares en el tracto digestivo, promoviendo su excreción y apoyando la reducción del colesterol sistémico.",
    },
    niacina: {
        titulo: "Niacina (Vitamina B3)",
        descripcion: "Coenzima esencial en el metabolismo de lípidos y carbohidratos que contribuye a mantener niveles saludables de colesterol y apoya el control de triglicéridos.",
    },
};