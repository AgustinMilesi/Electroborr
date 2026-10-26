import { 
  WorkshopData, 
  ServiceItem, 
  Symptom, 
  Review, 
  BlogPost, 
  FaqItem 
} from '../types/electroborr';

export const WORKSHOP_DATA: WorkshopData = {
  name: "ELECTROBORR",
  brandSubtitle: "Electromecánica Integral del Automotor",
  owner: "Nacho",
  taglines: [
    "Tecnología de última generación para un diagnóstico preciso y confiable",
    "La electrónica también es parte del motor",
    "Tu vehículo, en las mejores manos",
    "Multimarca + Equipamiento Original"
  ],
  address: {
    street: "Florida 647",
    neighborhood: "Loma Hermosa",
    municipality: "Partido de Tres de Febrero",
    province: "Provincia de Buenos Aires",
    fullText: "Florida 647, Loma Hermosa, Partido de Tres de Febrero, Buenos Aires",
    googleMapsUrl: "https://maps.google.com/?q=Florida+647,+Loma+Hermosa,+Tres+de+Febrero",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.8872658428456!2d-58.5997!3d-34.5681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb991753c1dd7%3A0x7d6a5e1cf4142f1b!2sFlorida%20647%2C%20B1657%20Loma%20Hermosa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
  },
  contact: {
    phoneDisplay: "11-2556-1949",
    phoneRaw: "+5491125561949",
    whatsappRaw: "5491125561949",
    whatsappUrl: "https://wa.me/5491125561949",
    instagramHandle: "@Electroborr",
    instagramUrl: "https://www.instagram.com/Electroborr",
    facebookName: "Electroborr Electromecánica integral del automotor",
    facebookUrl: "https://www.facebook.com/profile.php?id=Electroborr"
  },
  hours: {
    weekdays: "Lunes a Viernes de 08:30 a 18:00 hs",
    saturdays: "Sábados de 08:30 a 13:00 hs",
    sundays: "Domingos cerrado (Atención de guardia vía WhatsApp)",
    shortNotice: "Turnos programados con prioridad técnica de ingreso"
  },
  supportedBrands: [
    { name: "Volkswagen", category: "nacional" },
    { name: "Chevrolet", category: "nacional" },
    { name: "Renault", category: "nacional" },
    { name: "Ford", category: "nacional" },
    { name: "Fiat", category: "nacional" },
    { name: "Peugeot", category: "nacional" },
    { name: "Citroën", category: "nacional" },
    { name: "Toyota", category: "nacional" },
    { name: "Honda", category: "importado" },
    { name: "Audi", category: "importado" },
    { name: "BMW", category: "importado" },
    { name: "Mercedes-Benz", category: "utilitario" }
  ],
  paymentPolicy: {
    title: "Presupuesto Quirúrgico & Transparencia Total",
    quoteGuarantee: "Ningún trabajo se realiza sin autorización previa del cliente tras el escaneo inicial. Cero costos sorpresa en repuestos o mano de obra.",
    methods: [
      {
        title: "Efectivo",
        description: "Bonificación especial en mano de obra en pago contado efectivo.",
        badge: "Descuento Directo",
        iconName: "Banknote"
      },
      {
        title: "Transferencia Bancaria",
        description: "Acreditación instantánea por alias bancario / CBU sin demoras en la entrega.",
        badge: "Inmediato",
        iconName: "ArrowRightLeft"
      },
      {
        title: "Billeteras Virtuales",
        description: "Mercado Pago, Cuenta DNI, Ualá y tarjetas de débito/crédito.",
        badge: "QR Disponible",
        iconName: "QrCode"
      }
    ]
  },
  warranty: {
    title: "Garantía Escrita Electroborr",
    description: "Cada intervención electrónica y mecánica cuenta con respaldo documentado. Verificamos tolerancias con instrumental homologado antes de emitir la conformidad de entrega.",
    coveragePoints: [
      "Garantía de 90 días en mano de obra y adaptaciones de módulos",
      "Prueba en banco con osciloscopio previa a la colocación en vehículo",
      "Informe digital del escaneo pre y post reparación entregado al titular",
      "Repuestos legítimos o de primer nivel OEM de proveedores certificados"
    ],
    originalEquipmentProof: "Equipamiento de diagnóstico multimarca y específico con actualización de protocolos CAN-Bus, Kline y DoIP 2026."
  },
  coupon: {
    code: "WEB-ELECTRO2026",
    badge: "BENEFICIO EXCLUSIVO WEB",
    title: "Prioridad en Diagnóstico + Chequeo Eléctrico Bonificado",
    highlight: "100% Bonificado al realizar servicio mecánico o de distribución",
    description: "Al reservar tu turno a través de esta web, recibís prioridad inmediata en la agenda técnica y el control computarizado de carga de batería, alternador y escaneo de módulos sin costo adicional al contratar cualquier mantenimiento preventivo o correctivo.",
    terms: "Válido mencionando el código WEB-ELECTRO2026 al iniciar la conversación de WhatsApp. Un cupón por vehículo.",
    whatsappPresetText: "Hola Nacho! Quiero solicitar turno para mi auto aprovechando el beneficio web [WEB-ELECTRO2026]."
  },
  story: {
    lead: "La mecánica tradicional ya no alcanza. Los autos modernos son computadoras sobre ruedas que exigen precisión de laboratorio.",
    body: [
      "Fundado y liderado por Nacho en Loma Hermosa, ELECTROBORR nació con una convicción clara: terminar con el método de 'cambiar piezas a ciegas'. En una industria donde muchos talleres tradicionales reemplazan sensores costosos por intuición, nosotros invertimos en instrumental de laboratorio, osciloscopios de 4 canales y bancos de prueba de módulos.",
      "Entendemos que la electrónica no es un accesorio aislado; es el cerebro y el sistema nervioso del motor. Por eso unimos bajo el mismo techo la mecánica pesada de precisión —como distribuciones sincronizadas y sistemas de freno— con la microelectrónica de ECUs, inmovilizadores y redes multiplexadas.",
      "En Florida 647 cuidamos el vehículo de cada vecino de Loma Hermosa y de todo el Partido de Tres de Febrero como si fuera propio: con explicaciones honestas, diagnósticos que se demuestran con lecturas reales y presupuestos cerrados antes de tocar un tornillo."
    ],
    pillars: [
      {
        title: "Diagnóstico con Evidencia",
        desc: "No adivinamos: mostramos en pantalla la señal del osciloscopio o el código de falla congelado (Freeze Frame) que justifica la intervención."
      },
      {
        title: "Laboratorio Propio en Banco",
        desc: "Reparamos y clonamos unidades de mando sin necesidad de tercerizar ni enviar tu vehículo a intermediarios."
      },
      {
        title: "Atención Directa por Nacho",
        desc: "Hablas directamente con el especialista a cargo de tu auto, con comunicación transparente y fotos del proceso vía WhatsApp."
      }
    ]
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "diag-integral",
    slug: "diagnostico-integral-avanzado",
    category: "diagnostico",
    title: "Diagnóstico Integral Avanzado",
    badge: "Laboratorio Computarizado",
    tagline: "Escaneo profundo multimarca con instrumental original y osciloscopio digital",
    shortDescription: "Escaneo computarizado con equipamiento original, medición de ramales eléctricos, inyección Nafta/Diésel, ABS, Airbag y resolución de fallas fantasmas.",
    heroHighlight: "Localizamos la causa raíz de cualquier testigo en tablero sin cambiar piezas al azar.",
    iconName: "Cpu",
    clientProfileSimple: {
      summary: "¿Se prendió una luz en el tablero o el auto tironea sin explicación? Te entregamos un informe claro que traduce los códigos técnicos a soluciones concretas y presupuesto exacto.",
      benefits: [
        "Identificación exacta de la falla en menos de 45 minutos",
        "Ahorro de dinero evitando el reemplazo innecesario de sensores sanos",
        "Informe en tu WhatsApp con los parámetros analizados",
        "Tranquilidad total para viajar en ruta o salir a trabajar"
      ]
    },
    clientProfileTechnical: {
      specifications: [
        "Lectura de flujo de datos en vivo (Live Data Stream) y Freeze Frames",
        "Pruebas de actuadores bidireccionales en bombas, mariposas y electroválvulas",
        "Monitoreo de osciloscopio de señales de sensor CKP, CMP, sonda Lambda y MAF",
        "Medición de caídas de tensión y aislamiento en ramales de cableado automotor"
      ],
      equipmentUsed: [
        "Escáner de nivel OEM con protocolos UDS, Kline y CAN-Bus",
        "Osciloscopio automotriz de 4 canales de muestreo rápido",
        "Pinza amperimétrica de precisión para consumos parasitarios",
        "Generador de señales de prueba PWM / CKP / inductivas"
      ],
      protocols: [
        "Protocolo ISO 14229 (UDS)",
        "ISO 15765-4 (CAN 11/29 bit 250k/500k)",
        "SAE J1850 y Kline ISO 9141-2"
      ]
    },
    symptomsSolved: [
      "Testigo Check Engine, EPC o Llave de Servicio encendido",
      "Pérdida súbita de potencia (Modo Emergencia / Limp Mode)",
      "Tironeos intermitentes a ciertas revoluciones o temperatura",
      "Consumo excesivo de combustible o humo negro en el escape",
      "Fallas intermitentes que desaparecen al apagar y encender el motor"
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Recepción y Registro de Síntomas",
        description: "Evaluamos las condiciones exactas en las que ocurre la falla (frío/calor, aceleración, carga eléctrica)."
      },
      {
        stepNumber: 2,
        title: "Escaneo Completo Multimódulo",
        description: "Revisamos no solo motor, sino BCM, ABS, Airbag, tablero y climatización para descartar fallas de red."
      },
      {
        stepNumber: 3,
        title: "Verificación Física con Osciloscopio",
        description: "Comprobamos que el componente sospechoso realmente falle y que no sea un cable cortado o sulfatado."
      },
      {
        stepNumber: 4,
        title: "Presupuesto y Plan de Reparación",
        description: "Te explicamos la causa raíz y te enviamos la cotización definitiva antes de reparar."
      }
    ],
    deliverables: [
      "Reporte digital de escaneo pre-reparación",
      "Informe de prueba de sensores con oscilograma",
      "Borrado y reseteo de adaptaciones autoadaptativas",
      "Prueba de rodaje y verificación final de parámetros"
    ],
    metaTitle: "Diagnóstico Computarizado y Escaneo en Loma Hermosa | ELECTROBORR",
    metaDescription: "Diagnóstico computarizado avanzado para autos en Loma Hermosa, Tres de Febrero. Escaneo con equipo original, osciloscopio y detección de fallas en inyección."
  },
  {
    id: "lab-ecus",
    slug: "laboratorio-electronica-automotriz",
    category: "laboratorio-ecu",
    title: "Laboratorio de Electrónica Automotriz",
    badge: "Reparación & Banco de Módulos",
    tagline: "Reparación, clonación, emparejamiento y desinmovilización de ECUs en banco",
    shortDescription: "Prueba y diagnóstico en banco de módulos, reparación y verificación de ECUs, clonación y virginización, hermanado de conjuntos y codificación.",
    heroHighlight: "Salvamos tu computadora de motor original. Si es irreparable, clonamos la información a una sustituta sin perder llaves ni odómetro.",
    iconName: "CircuitBoard",
    clientProfileSimple: {
      summary: "Si tu mecánico te dijo 'se quemó la computadora' o el auto no arranca porque no reconoce la llave, no compres una nueva a ciegas. En nuestro banco reparamos circuitos dañados o clonamos tus datos a un módulo usado por una fracción del costo de uno nuevo.",
      benefits: [
        "Ahorro de hasta un 70% comparado con una ECU 0km en concesionaria",
        "Mantenés las llaves originales sin necesidad de cerrajería extra",
        "Pruebas reales en mesa de trabajo simulando el vehículo completo",
        "Diagnóstico honesto: si el módulo está sano, te decimos dónde está la falla real"
      ]
    },
    clientProfileTechnical: {
      specifications: [
        "Reparación de etapas de potencia: drivers de encendido (MOSFET/IGBT) e inyectores",
        "Lectura y escritura en banco vía BOOT, BDM, JTAG y Bench Mode (sin abrir cuando aplica)",
        "Clonación de memorias EEPROM, Flash interna y Microcontroladores TriCore/Renesas",
        "Hermanado y virginización de módulos BCM, UCH, BSI, Inmovilizador y Cuadro de Instrumentos"
      ],
      equipmentUsed: [
        "Banco de pruebas ECU Bench con simulación de sensores CKP/CMP Hall e Inductivo",
        "Estación de microsoldadura SMD/BGA con control térmico por microprocesador",
        "Programadores de microcontroladores y memorias de alta gama",
        "Microscopio óptico estéreo para inspección de pistas multicapa"
      ],
      protocols: [
        "Bench / Boot TriCore TC17xx / TC2xx",
        "BDM Motorola MPC5xx / Renesas SH705x",
        "OBD-II Direct Kline & CAN FD"
      ]
    },
    symptomsSolved: [
      "El motor no gira o gira pero no hay chispa ni pulso de inyección",
      "Falta de disparo en 1 o 2 cilindros por driver de bobina dañado",
      "El auto se apagó repentinamente tras un salto de corriente o puente de batería",
      "Testigo de llave inglesa o candado parpadeando (bloqueo de inmovilizador)",
      "ECU sin comunicación por escáner luego de una inundación o corto"
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Ingreso e Inspección Estática",
        description: "Revisamos visualmente el módulo bajo microscopio en busca de componentes quemados, pistas levantadas o humedad."
      },
      {
        stepNumber: 2,
        title: "Conexión en Banco Simulado",
        description: "Alimentamos la ECU y simulamos las señales de rotación del motor para comprobar la respuesta de salidas lógicas."
      },
      {
        stepNumber: 3,
        title: "Intervención Microelectrónica o Backup",
        description: "Reemplazamos componentes originales o extraemos el volcado completo de memoria (Full Backup)."
      },
      {
        stepNumber: 4,
        title: "Prueba de Estrés y Sellado",
        description: "Sometemos el módulo a ciclos térmicos de prueba antes de volver a sellar herméticamente su carcasa."
      }
    ],
    deliverables: [
      "Copia de seguridad digital (Backup) de la memoria de tu ECU",
      "Garantía escrita sobre componentes reemplazados",
      "Informe de prueba funcional de salidas y entradas en banco"
    ],
    metaTitle: "Reparación y Clonación de ECUs en Banco | ELECTROBORR Loma Hermosa",
    metaDescription: "Laboratorio de computadoras automotrices en Tres de Febrero. Reparación de ECUs quemadas, clonación de memorias, desinmovilizaciones y banco de pruebas."
  },
  {
    id: "software-motor",
    slug: "soluciones-software-motor",
    category: "software-motor",
    title: "Soluciones de Software y Calibración",
    badge: "Gestión Electrónica de Motor",
    tagline: "Reprogramaciones a medida, anulación de limitaciones y configuración de parámetros",
    shortDescription: "Configuraciones avanzadas en banco y vehículo: AdBlue OFF, EGR OFF, DPF/FAP OFF (eliminación de fallas crónicas) y limitadores de velocidad/par.",
    heroHighlight: "Solucionamos fallas crónicas de sistemas anticontaminación en Diésel modernos que dejan tu vehículo inmovilizado o sin potencia.",
    iconName: "Binary",
    clientProfileSimple: {
      summary: "¿Tu utilitario o camioneta Diésel se puso en cuenta regresiva de kilómetros por falla de urea (AdBlue), o el filtro de partículas (DPF) vive tapado? Te ofrecemos soluciones definitivas de software para recuperar la confiabilidad y no gastar fortunas en sensores que vuelven a fallar.",
      benefits: [
        "Eliminación definitiva de alertas de bloqueo de arranque por AdBlue",
        "Fin de los ciclos fallidos de regeneración de DPF que contaminan el aceite",
        "Ahorro de combustible y respuesta de acelerador más limpia",
        "Ideal para flotas y utilitarios de trabajo que no pueden detenerse"
      ]
    },
    clientProfileTechnical: {
      specifications: [
        "Desactivación precisa de mapas de gestión SCR/DEF (Urea / AdBlue)",
        "Cierre de software de válvula EGR manteniendo adaptativos de ralentí estables",
        "Anulación de rutinas de regeneración DPF/FAP y sensores de presión diferencial",
        "Deslimitación de velocidad máxima para flotas o ajuste de torque por marcha"
      ],
      equipmentUsed: [
        "Interfaces maestras de lectura/escritura de flash con verificación de Checksum",
        "Software de edición de mapas en 2D y 3D con direccionamiento hexadecimal",
        "Fuente estabilizada de laboratorio a 14.2V continuo durante todo el flasheo"
      ],
      protocols: [
        "EDC16, EDC17, MD1, SID208, SID209, Delphi DCM",
        "Cálculo algorítmico y corrección automática de Checksum SHA-256"
      ]
    },
    symptomsSolved: [
      "Aviso en tablero: 'Imposible arrancar en 500 km por falla en sistema de emisiones'",
      "Filtro DPF saturado al 100% que ahoga el motor y eleva el nivel de aceite",
      "Válvula EGR trabada en abierto que provoca humo negro y falta de pique",
      "Vehículo limitado a 80 km/h o 2500 RPM por código de anticontaminación",
      "Costos astronómicos de recambio de catalizadores o bombas de urea"
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Diagnóstico Previo de Estados de Emisión",
        description: "Leemos las presiones diferenciales y el estado térmico de los sensores para verificar la viabilidad técnica."
      },
      {
        stepNumber: 2,
        title: "Extracción y Respaldo del Archivo Original",
        description: "Guardamos una copia 100% original e inalterada de tu software para poder restaurarla en el futuro si lo deseás."
      },
      {
        stepNumber: 3,
        title: "Modificación Quirúrgica de Mapas",
        description: "Editamos los interruptores (switches) exactos en la cartografía de la ECU sin alterar mapas de inyección vitales."
      },
      {
        stepNumber: 4,
        title: "Flasheo con Tensión Estabilizada y Prueba",
        description: "Escribimos el nuevo firmware con corrección de Checksum y realizamos un test dinámico con escáner conectado."
      }
    ],
    deliverables: [
      "Archivo original entregado en pendrive o correo electrónico",
      "Garantía de software sin testigos residuales en tablero",
      "Control de emisiones y prueba de potencia en ruta"
    ],
    metaTitle: "Soluciones DPF OFF, EGR OFF y AdBlue en Loma Hermosa | ELECTROBORR",
    metaDescription: "Anulación y calibración de software para DPF/FAP, EGR y AdBlue en vehículos Diésel. Solución definitiva a fallas anticontaminación en Tres de Febrero."
  },
  {
    id: "elec-adas",
    slug: "electricidad-integral-adas",
    category: "electricidad-adas",
    title: "Electricidad Integral y Redes ADAS",
    badge: "Instalación & Redes Multiplexadas",
    tagline: "Reparación de sistemas de carga, arranque, iluminación, CAN-Bus y cámaras ADAS",
    shortDescription: "Sistemas de carga inteligente y arranque, iluminación LED/xenón, inyección electrónica, infoentretenimiento, sistemas ADAS-AFIL y diagnóstico de redes CAN-Bus.",
    heroHighlight: "Resolvemos problemas eléctricos complejos que queman fusibles o hacen enloquecer los tableros digitales.",
    iconName: "Zap",
    clientProfileSimple: {
      summary: "¿Baterías que se descargan de la noche a la mañana, luces que parpadean o sistemas de asistencia que marcan error? Diagnosticamos circuitos eléctricos completos con prolijidad de fábrica, sin cables colgando ni empalmes improvisados.",
      benefits: [
        "Reparaciones seguras con terminales y aislaciones de grado automotriz",
        "Fin de las descargas parásitas que agotan baterías nuevas",
        "Recuperación de funciones de confort: levantavidrios, cierre y audio",
        "Alineación y calibración de sistemas de seguridad y sensores de estacionamiento"
      ]
    },
    clientProfileTechnical: {
      specifications: [
        "Diagnóstico de redes CAN High / CAN Low (medición de 60 ohms e integridad de onda)",
        "Reparación y reconstrucción de alternadores con reguladores LIN / BSS inteligentes",
        "Reacondicionamiento de motores de arranque con cambio de bendix, carbones y solenoide",
        "Calibración estática/dinámica de radares de proximidad y cámaras AFIL (asistencia de carril)"
      ],
      equipmentUsed: [
        "Analizador digital de conductancia de baterías y prueba de rizado de diodos",
        "Banco de prueba de alternadores con simulación de comunicación por protocolo LIN",
        "Osciloscopio para captura de tramas de red multiplexada CAN y LIN-Bus",
        "Cámara termográfica para detección de puntos calientes en fusileras y relays"
      ],
      protocols: [
        "CAN 2.0A / 2.0B / CAN FD",
        "LIN Bus 1.3 / 2.0 / 2.1",
        "Sistemas ADAS ISO 26262 Functional Safety"
      ]
    },
    symptomsSolved: [
      "Batería nueva que se descarga tras 2 o 3 días sin usar el auto",
      "Testigo de batería prendido o aviso de 'Falla en sistema de carga'",
      "El motor de arranque hace 'clack' o gira muy pesado",
      "Luces de tablero que destellan o agujas que caen a cero al encender accesorios",
      "Alerta de 'Radar frontal no disponible' o 'Falla de asistencia de carril'"
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Test de Consumo en Reposo (Sleep Mode)",
        description: "Monitoreamos con pinza amperimétrica qué módulo no entra en reposo y descarga la batería."
      },
      {
        stepNumber: 2,
        title: "Análisis de Tramas de Red",
        description: "Verificamos si hay colisiones o caída de comunicación entre las computadoras del habitáculo."
      },
      {
        stepNumber: 3,
        title: "Reparación Mecánica o Eléctrica",
        description: "Desarmamos alternadores o cambiamos tramos de ramal con conectores originales sellados."
      },
      {
        stepNumber: 4,
        title: "Control de Carga con Consumidores Encendidos",
        description: "Probamos el voltaje a 2500 RPM con aire acondicionado y luces altas encendidas."
      }
    ],
    deliverables: [
      "Informe impreso/digital del estado de salud de la batería y alternador",
      "Garantía en mano de obra eléctrica y componentes instalados",
      "Limpieza y protección anticorrosiva de bornes y masas de chasis"
    ],
    metaTitle: "Electricidad Automotriz y Redes CAN-Bus en Loma Hermosa | ELECTROBORR",
    metaDescription: "Taller de electricidad automotriz en Loma Hermosa, Tres de Febrero. Alternadores, arranque, consumos de batería y redes CAN-Bus / ADAS."
  },
  {
    id: "mecanica-dist",
    slug: "mecanica-general-precision",
    category: "mecanica-precision",
    title: "Mecánica General y Distribución",
    badge: "Mantenimiento Crítico",
    tagline: "Kits de distribución sincronizada, frenos completos, tren delantero y suspensión",
    shortDescription: "Cambio de kits de distribución (Nafta y Diésel) con trabas de levas específicas, embragues, frenos completos con rectificación y tren delantero.",
    heroHighlight: "Aseguramos la integridad de tu motor con herramientas de calado milimétrico y torquímetro según manual de taller.",
    iconName: "Wrench",
    clientProfileSimple: {
      summary: "El cambio de correa de distribución o la reparación de frenos no admite errores. En ELECTROBORR sincronizamos tu motor con las herramientas originales de cada fabricante y ajustamos cada bulón con torquímetro para que manejes con absoluta tranquilidad.",
      benefits: [
        "Prevención de roturas catastróficas de motor por corte de correa",
        "Frenado parejo, firme y sin ruidos ni vibraciones en el pedal",
        "Andar silencioso y confortable en tren delantero sobre calles desparejas",
        "Uso exclusivo de kits de distribución de marcas líderes mundiales (Gates, Dayco, SKF)"
      ]
    },
    clientProfileTechnical: {
      specifications: [
        "Puesta a punto con plantillas y trabas de árboles de levas y cigüeñal OEM",
        "Reemplazo de bomba de agua y purgado al vacío del circuito de refrigeración",
        "Medición con comparador micrométrico de alabeo en discos de freno (< 0.03 mm)",
        "Apriete angular y por par dinamométrico conforme a tolerancias de fábrica"
      ],
      equipmentUsed: [
        "Set completo de herramientas de sincronización para motores PureTech, Fire, K4M, EA211, etc.",
        "Torquímetros calibrados de precisión de 5 a 250 Nm",
        "Purgador neumático a presión para fluido de freno DOT 4 / DOT 5.1",
        "Extractor hidráulico para bujes y rulemanes de masa de rueda"
      ],
      protocols: [
        "Procedimiento de purgado de bloque ABS mediante software de diagnóstico",
        "Especificaciones de torque OEM para tornillería de levas y bomba de agua"
      ]
    },
    symptomsSolved: [
      "Se cumplió el kilometraje o los 4 años desde el último cambio de distribución",
      "Chillido agudo o zumbido en correas de accesorios al encender el auto",
      "Pedal de freno esponjoso, largo o que vibra al frenar a alta velocidad",
      "Golpes secos o 'clonc' en tren delantero al pasar por badenes o empedrados",
      "Pérdida de líquido refrigerante por la zona de la bomba de agua"
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Inspección Visual y Desarme Cuidadoso",
        description: "Revisamos retenes de levas y cigüeñal para evitar que pérdidas de aceite contaminen la correa nueva."
      },
      {
        stepNumber: 2,
        title: "Calado de Precisión del Motor",
        description: "Fijamos cigüeñal y árboles de levas con trabas específicas antes de retirar la correa vieja."
      },
      {
        stepNumber: 3,
        title: "Instalación del Kit Completo",
        description: "Colocamos correa, tensores automáticos, bomba de agua nueva y bulones de reemplazo obligatorio."
      },
      {
        stepNumber: 4,
        title: "Purga de Refrigerante y Control Dinámico",
        description: "Cargamos refrigerante orgánico concentrado y comprobamos el encendido del electroventilador a temperatura justa."
      }
    ],
    deliverables: [
      "Constancia firmada con kilometraje y fecha para tu historial de mantenimiento",
      "Devolución de los componentes reemplazados para tu total verificación",
      "Calcomanía técnica de recordatorio de próximo cambio pegada en vano motor"
    ],
    metaTitle: "Cambio de Correa de Distribución y Frenos en Loma Hermosa | ELECTROBORR",
    metaDescription: "Taller especializado en cambio de kits de distribución, bombas de agua y frenos en Tres de Febrero. Puesta a punto con herramientas originales y garantía escrita."
  }
];

export const SYMPTOMS_DATA: Symptom[] = [
  {
    id: "check-engine",
    category: "tablero",
    label: "Luz de Check Engine encendida o parpadeando",
    iconName: "AlertTriangle",
    technicalDiagnosis: "La ECU detectó un desvío fuera de rango en la mezcla estequiométrica, encendido o sistema anticontaminación.",
    urgency: "moderada",
    recommendedServiceSlug: "diagnostico-integral-avanzado",
    initialAdvice: "Si la luz es fija, podés circular a velocidad moderada hasta el taller. Si parpadea, detené el vehículo para evitar daños en el catalizador."
  },
  {
    id: "no-arranca",
    category: "arranque",
    label: "El motor gira pero no arranca (o no hace nada)",
    iconName: "PowerOff",
    technicalDiagnosis: "Posible falta de señal de giro (sensor CKP), bloqueo por inmovilizador o falla en la etapa de potencia de la ECU.",
    urgency: "critica",
    recommendedServiceSlug: "laboratorio-electronica-automotriz",
    initialAdvice: "Verificá si en el tablero titila un testigo con forma de llave o candado. No insistas con arranques prolongados para no quemar el burro."
  },
  {
    id: "alerta-adblue-dpf",
    category: "motor",
    label: "Aviso de AdBlue / Filtro DPF tapado en Diésel",
    iconName: "Gauge",
    technicalDiagnosis: "Saturación de hollín por encima del 75% o cristalización de urea en el inyector SCR con cuenta regresiva de arranque.",
    urgency: "critica",
    recommendedServiceSlug: "soluciones-software-motor",
    initialAdvice: "No apagues el motor si estás en medio de una regeneración forzada en ruta. Si el odómetro de bloqueo ya bajó de 200 km, traelo de inmediato."
  },
  {
    id: "descarga-bateria",
    category: "arranque",
    label: "La batería amanece descargada o el alternador no carga",
    iconName: "BatteryWarning",
    technicalDiagnosis: "Fuga parasitaria de corriente por módulo que no duerme o diodo del alternador en cortocircuito.",
    urgency: "moderada",
    recommendedServiceSlug: "electricidad-integral-adas",
    initialAdvice: "No coloques otra batería sin antes medir si el alternador está sobrecargando (más de 14.8V) o si hay un consumo fantasma activo."
  },
  {
    id: "ruido-frenos-tren",
    category: "frenos-tren",
    label: "Vibración al frenar o ruidos en baches",
    iconName: "Disc",
    technicalDiagnosis: "Discos de freno con alabeo térmico fuera de tolerancia o bujes de parrilla con juego excesivo.",
    urgency: "moderada",
    recommendedServiceSlug: "mecanica-general-precision",
    initialAdvice: "Evitá frenadas bruscas en autopista para no comprometer la estabilidad y agendá una revisión de espesor de discos y pastillas."
  },
  {
    id: "distribucion-vencida",
    category: "motor",
    label: "Cumplí 50.000 km o 4 años sin cambiar distribución",
    iconName: "Clock",
    technicalDiagnosis: "Fatiga del polímero de la correa dentada y desgaste de rodamientos de tensores y bomba de agua.",
    urgency: "preventiva",
    recommendedServiceSlug: "mecanica-general-precision",
    initialAdvice: "El mantenimiento preventivo de distribución cuesta una fracción mínima de lo que implica reconstruir una tapa de cilindros rota."
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    author: "Martín R.",
    carModel: "Volkswagen Amarok 2.0 TDI",
    rating: 5,
    date: "Hace 2 semanas",
    comment: "Excelente atención de Nacho. En dos talleres me decían de cambiar la ECU entera por una fortuna. Nacho la probó en banco, reparó un driver quemado y me ahorró un dineral. Además me explicó todo con el osciloscopio adelante mío. 100% honesto.",
    serviceCategory: "Laboratorio Electrónico",
    verified: true,
    location: "Loma Hermosa, Tres de Febrero"
  },
  {
    id: "rev-2",
    author: "Gonzalo Peralta",
    carModel: "Peugeot 208 1.6 VTi",
    rating: 5,
    date: "Hace 1 mes",
    comment: "Tenía una falla intermitente en el tablero que me volvía loco, nadie le encontraba la vuelta. En Electroborr conectaron el escáner original, encontraron un ramal sulfatado y lo solucionaron en el día. Un taller prolijo, limpio y de primera categoría.",
    serviceCategory: "Diagnóstico Integral",
    verified: true,
    location: "Caseros, Tres de Febrero"
  },
  {
    id: "rev-3",
    author: "Diego Fernández",
    carModel: "Renault Kangoo II 1.5 dCi",
    rating: 5,
    date: "Hace 3 semanas",
    comment: "Hice el cambio de kit de distribución con bomba de agua y anulación de problemas crónicos de EGR. El vehículo quedó impecable, serenito y con mucho mejor rendimiento. Te dan presupuesto cerrado y cumplen con los horarios exactos.",
    serviceCategory: "Mecánica & Distribución",
    verified: true,
    location: "San Martín"
  },
  {
    id: "rev-4",
    author: "Valeria Benítez",
    carModel: "Chevrolet Onix 1.4",
    rating: 5,
    date: "Hace 1 mes y medio",
    comment: "Se me descargaba la batería cada 3 días. Nacho encontró un consumo parásito en un módulo de alarma que habían instalado mal en otro lado. Muy agradecida por la amabilidad y por la claridad con la que me explicaron todo.",
    serviceCategory: "Electricidad Integral",
    verified: true,
    location: "El Palomar, Tres de Febrero"
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: "post-check-engine",
    slug: "que-hacer-luz-check-engine-loma-hermosa",
    title: "¿Qué hacer si se enciende la luz de Check Engine circulando por Loma Hermosa o Tres de Febrero?",
    subtitle: "Guía rápida para conductores: cómo diferenciar una alerta menor de una emergencia crítica de motor",
    excerpt: "Descubrí qué significa realmente el testigo del motor, qué precauciones tomar en las calles de Tres de Febrero y por qué borrar el código sin reparar es un error grave.",
    readTime: "4 min de lectura",
    date: "Octubre 2026",
    category: "Diagnóstico Electrónico",
    author: "Nacho - ELECTROBORR",
    geoTarget: "Loma Hermosa / Tres de Febrero",
    intro: "Vas circulando por Ruta 8 o por las avenidas de Tres de Febrero y, de repente, ese pequeño icono amarillo con forma de motor se enciende en tu tablero. El pulso se acelera: ¿puedo seguir manejando o tengo que llamar a la grúa de inmediato? En esta guía técnica directa, te explicamos cómo actuar con seguridad.",
    sections: [
      {
        heading: "1. La regla de oro: Luz Fija vs. Luz Parpadeante",
        body: "No todas las alertas de Check Engine son iguales. Si la luz permanece encendida de forma constante (fija), la computadora del auto detectó un parámetro fuera de rango (como una sonda lambda descalibrada o una pequeña fuga de vacío), pero el motor puede seguir funcionando en modo de contingencia. Podés continuar tu viaje a velocidad moderada y agendar un escaneo en los próximos días.",
        technicalCallout: "¡ATENCIÓN! Si la luz de Check Engine PARPADEA intermitentemente, significa que se están produciendo fallas de combustión severas (misfires). El combustible sin quemar está llegando crudo al catalizador al rojo vivo y puede fundirlo en pocos minutos. Detené la marcha en un lugar seguro."
      },
      {
        heading: "2. Por qué 'borrar la falla' con un escáner barato no sirve",
        body: "Muchos conductores compran escáneres genéricos por internet y simplemente presionan 'Clear DTCs'. Lo que ocurre es que la computadora reinicia sus tablas de adaptación y, al cabo de unos kilómetros, cuando el ciclo de prueba interno (Readiness Monitors) vuelve a completarse, la falla reaparece. En ELECTROBORR analizamos los 'Freeze Frames' (la foto exacta de temperatura, RPM y carga en el momento en que ocurrió el fallo) para atacar la causa raíz."
      },
      {
        heading: "3. ¿Qué hacer en Loma Hermosa y alrededores?",
        body: "Si estás en la zona de Loma Hermosa, Caseros, San Martín o El Palomar, podés acercarte a Florida 647. Conectamos el escáner original, verificamos en minutos el código de falla real (DTC) y te damos un diagnóstico honesto para que decidas con tranquilidad."
      }
    ],
    localTakeaway: "En ELECTROBORR atendemos a diario vecinos de Loma Hermosa y de todo Tres de Febrero con fallas electrónicas complejas. Si viste el testigo encendido, escribinos por WhatsApp al 11-2556-1949 para coordinar un escaneo preventivo.",
    metaTitle: "¿Luz de Check Engine encendida en Loma Hermosa? | Guía ELECTROBORR",
    metaDescription: "Qué hacer si se prende la luz de Check Engine en Loma Hermosa y Tres de Febrero. Diferencias entre luz fija y parpadeante, riesgos y diagnóstico certero."
  },
  {
    id: "post-reparacion-ecus",
    slug: "reparacion-clonacion-ecus-banco-vs-modulo-nuevo",
    title: "Reparación y clonación de ECUs en banco vs. comprar un módulo nuevo: cómo ahorrar tiempo y dinero",
    subtitle: "La verdad técnica sobre las computadoras de motor y por qué el 80% de los módulos dados por muertos tienen salvación",
    excerpt: "Conocé cómo funciona nuestro laboratorio electrónico en Loma Hermosa, por qué una clonación en banco conserva tus llaves originales y cuánto podés ahorrar respecto a una concesionaria.",
    readTime: "5 min de lectura",
    date: "Octubre 2026",
    category: "Laboratorio Electrónico",
    author: "Nacho - ELECTROBORR",
    geoTarget: "Loma Hermosa / Gran Buenos Aires",
    intro: "Cuando un vehículo deja de arrancar y el diagnóstico apunta a la ECU (Engine Control Unit), el dueño suele recibir una noticia demoledora: un módulo nuevo en concesionaria oficial cuesta fortunas y tarda meses en importarse. Sin embargo, en el 80% de los casos existe una alternativa infinitamente más rápida, económica y confiable.",
    sections: [
      {
        heading: "1. ¿Qué se rompe realmente dentro de una ECU?",
        body: "Una computadora de motor automotriz no es un bloque indivisible. Está compuesta por etapas diferenciadas: la fuente de alimentación interna de 5V, los microcontroladores lógicos (como Infineon TriCore), las memorias EEPROM/Flash y los 'drivers' de potencia (transistores MOSFET que disparan bobinas de encendido e inyectores). La inmensa mayoría de las fallas provienen de un driver quemado por una bobina en cortocircuito o una sobretensión externa.",
        technicalCallout: "Dato técnico: Reemplazar un driver SMD de encendido en nuestro laboratorio devuelve a la ECU sus especificaciones de fábrica al 100%, conservando el hardware original del auto."
      },
      {
        heading: "2. ¿Y si la placa está rajada o inundada? La solución: Clonación en Banco",
        body: "Si el módulo sufrió daños físicos irreparables, no hace falta comprar uno nuevo y pagar costosas codificaciones de cerrajería. En ELECTROBORR adquirimos o recibimos una ECU usada de idéntico hardware, conectamos nuestras interfaces en modo Bench/Boot y transferimos bit por bit el volcado de memoria (código inmovilizador, llaves, calibraciones y kilometraje). El resultado: conectar y arrancar (Plug & Play)."
      },
      {
        heading: "3. Equipamiento de laboratorio en Loma Hermosa",
        body: "En nuestro taller sobre Florida 647 contamos con banco de simulación donde encendemos las computadoras fuera del auto, emulando señales de sensores Hall e inductivos. De esta forma te entregamos el módulo probado y con garantía de funcionamiento comprobada."
      }
    ],
    localTakeaway: "No descarte la computadora de su vehículo antes de consultarnos. En ELECTROBORR recibimos módulos de talleres colegas y particulares de todo Tres de Febrero y Buenos Aires.",
    metaTitle: "Reparación y Clonación de ECUs en Tres de Febrero | ELECTROBORR",
    metaDescription: "Reparación de computadoras de auto en banco de pruebas y clonación de memorias en Loma Hermosa. Ahorrá hasta un 70% frente a un módulo nuevo."
  },
  {
    id: "post-dpf-egr-adblue",
    slug: "fallas-comunes-dpf-egr-adblue-diesel-soluciones",
    title: "Fallas comunes de DPF, EGR y AdBlue en vehículos Diésel: síntomas y soluciones definitivas",
    subtitle: "Cómo el tránsito urbano de Buenos Aires acelera el colapso de los sistemas anticontaminación y qué opciones tenés",
    excerpt: "Si manejás una camioneta o utilitario Diésel en el conurbano, tarde o temprano enfrentarás el aviso de emisiones. Analizamos causas, costos y soluciones técnicas de software.",
    readTime: "6 min de lectura",
    date: "Octubre 2026",
    category: "Software de Motor",
    author: "Nacho - ELECTROBORR",
    geoTarget: "Loma Hermosa / Zona Oeste / Norte",
    intro: "Los motores turbodiésel modernos (Common Rail) son máquinas de alta eficiencia y excelente torque. Sin embargo, para cumplir con las normativas Euro 5 y Euro 6, incorporan tres subsistemas extremadamente sensibles: la recirculación de gases (EGR), el filtro de partículas (DPF/FAP) y la inyección de urea líquida (AdBlue / SCR). En el tránsito trabado de Buenos Aires, estos sistemas suelen convertirse en un dolor de cabeza crónico.",
    sections: [
      {
        heading: "1. El ciclo urbano: el enemigo número uno del DPF",
        body: "Para que un filtro DPF se regenere de manera pasiva y queme el hollín acumulado, el escape necesita superar los 600 °C durante al menos 20 minutos de marcha sostenida. En trayectos cortos por Loma Hermosa, San Martín o Capital, el motor nunca alcanza esa condición. El resultado es saturación del filtro, paso de diésel al cárter de aceite por regeneraciones fallidas y pérdida total de fuerza.",
        technicalCallout: "Alerta crítica: Si el nivel de aceite en la varilla supera el máximo, es señal de que las post-inyecciones de diésel para regenerar el DPF están diluyendo el lubricante. Esto puede provocar la auto-ignición del motor."
      },
      {
        heading: "2. AdBlue / Urea: cristalización y bloqueos de arranque",
        body: "Las bombas y calentadores de urea son propensos a atascarse por cristalización del reactivo. Cuando el sistema falla, la ECU activa un ultimátum en el tablero: 'Arranque impedido en 500 km'. Si ese contador llega a cero, el auto no vuelve a encender aunque el motor mecánico esté perfecto."
      },
      {
        heading: "3. Soluciones profesionales de calibración de software",
        body: "En ELECTROBORR realizamos intervenciones a medida en la memoria de gestión del motor (ECU) para desactivar de raíz estas rutinas problemáticas (DPF OFF, EGR OFF, AdBlue OFF), permitiendo que vehículos de trabajo recuperen su operatividad inmediata sin testigos de error y con óptima respuesta mecánica."
      }
    ],
    localTakeaway: "¿Tu camioneta o utilitario entró en modo de emergencia? Consultanos por WhatsApp y te asesoramos sobre la solución técnica más conveniente y duradera para tu vehículo.",
    metaTitle: "Fallas de DPF, EGR y AdBlue en Tres de Febrero | ELECTROBORR",
    metaDescription: "Soluciones definitivas para filtros DPF tapados, válvulas EGR trabadas y fallas de urea AdBlue en Loma Hermosa, Tres de Febrero."
  },
  {
    id: "post-distribucion-frenos",
    slug: "guia-mantenimiento-distribucion-frenos-preventivo",
    title: "Cada cuánto cambiar el kit de distribución y revisar frenos: guía preventiva para tu vehículo",
    subtitle: "Por qué la sincronización milimétrica y el estado del líquido de frenos son las dos inversiones más inteligentes para tu seguridad",
    excerpt: "Mitos y realidades sobre la vida útil de las correas dentadas, tensores y discos. Cómo trabajamos en ELECTROBORR con herramientas de calado original.",
    readTime: "4 min de lectura",
    date: "Octubre 2026",
    category: "Mecánica Preventiva",
    author: "Nacho - ELECTROBORR",
    geoTarget: "Loma Hermosa / Tres de Febrero",
    intro: "Existe un dicho popular en los talleres mecánicos: 'La distribución no avisa, se corta'. Y cuando se corta con el motor en marcha, los pistones impactan contra las válvulas abiertas, provocando un daño económico que a menudo supera el 30% del valor del auto. Repasamos aquí los plazos reales y los síntomas que nunca debés ignorar.",
    sections: [
      {
        heading: "1. Intervalos reales: Kilometraje vs. Tiempo",
        body: "La mayoría de los fabricantes recomiendan cambiar el kit de distribución entre los 50.000 y 60.000 kilómetros. Pero hay un factor que muchos olvidan: el tiempo. Aunque tu auto tenga solo 20.000 km, si pasaron 4 o 5 años desde que se colocó la correa, el compuesto de caucho y fibra se reseca y pierde flexibilidad, volviéndose vulnerable a la tracción súbita del arranque.",
        technicalCallout: "Regla técnica: Al hacer la distribución se cambia SIEMPRE el kit completo (correa + tensores) y la bomba de agua si es movida por la misma correa. Un rulemán viejo que se engrana corta la correa más nueva en segundos."
      },
      {
        heading: "2. Frenos: más allá de 'le quedan pastillas'",
        body: "Muchos conductores creen que los frenos están bien mientras el auto 'frene'. Sin embargo, el líquido de frenos es higroscópico: absorbe humedad del aire con el paso de los meses. Un líquido con más de 2 años hierve a menor temperatura ante una frenada exigida, generando burbujas de vapor que dejan el pedal en el fondo (vapor lock). Además, los discos desgastados por debajo del espesor mínimo se fisuran con facilidad."
      },
      {
        heading: "3. El estándar de ajuste en ELECTROBORR",
        body: "En nuestro taller de Loma Hermosa no apretamos 'a ojo'. Usamos trabas específicas para fijar los árboles de levas de cada motor y torquímetros calibrados para aplicar el apriete exacto indicado por el fabricante en cada bulón."
      }
    ],
    localTakeaway: "Pedí tu presupuesto sin compromiso para el cambio de distribución o revisión integral de frenos. En ELECTROBORR te garantizamos repuestos de primera línea y mano de obra responsable.",
    metaTitle: "Cambio de Distribución y Frenos en Loma Hermosa | ELECTROBORR",
    metaDescription: "Guía preventiva sobre el cambio de correa de distribución y revisión de frenos en Tres de Febrero. Consejos de taller y mantenimiento seguro."
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: "faq-1",
    category: "pagos-turnos",
    question: "¿Cómo solicito un turno y cuánto demora la atención?",
    answer: "Podés solicitar tu turno directamente a través de nuestro turnero web o escribiéndonos por WhatsApp al 11-2556-1949. Te asignaremos una fecha y franja horaria para recibir tu auto. Los diagnósticos por escaneo y chequeo inicial suelen realizarse en el día para entregarte el presupuesto antes de avanzar."
  },
  {
    id: "faq-2",
    category: "pagos-turnos",
    question: "¿Me van a cobrar trabajos que no autoricé previamente?",
    answer: "Absolutamente NO. En ELECTROBORR nos regimos por la política de Presupuesto Transparente: primero realizamos el escaneo e inspección, te explicamos con claridad qué tiene tu auto y cuánto cuesta resolverlo. Ninguna pieza se cambia ni se repara sin tu expresa autorización previa."
  },
  {
    id: "faq-3",
    category: "laboratorio",
    question: "¿Qué garantía tienen las reparaciones de computadoras de motor (ECUs)?",
    answer: "Todas nuestras intervenciones en laboratorio de módulos cuentan con garantía escrita de 90 días sobre los componentes microelectrónicos reemplazados y la programación realizada. Cada módulo se prueba en nuestro banco de simulación con osciloscopio antes de ser colocado nuevamente en el vehículo."
  },
  {
    id: "faq-4",
    category: "laboratorio",
    question: "¿Es necesario dejar el auto completo para reparar o clonar una ECU?",
    answer: "No siempre. Si sos un taller colega o el auto está inmovilizado lejos, podés traernos la ECU junto con el módulo de inmovilizador (UCH, BSI o antena según el modelo) y la llave original. Los probamos y programamos directamente sobre nuestro banco de trabajo."
  },
  {
    id: "faq-5",
    category: "mecanica",
    question: "¿Qué marcas de repuestos utilizan para la distribución y frenos?",
    answer: "Trabajamos únicamente con marcas homologadas de primer nivel internacional y equipo original (OEM), tales como Gates, Dayco, SKF, Ina, Bosch, Ferodo y Fras-le. Te devolvemos los componentes viejos en la caja del repuesto nuevo para tu total tranquilidad."
  },
  {
    id: "faq-6",
    category: "garantia",
    question: "¿Qué medios de pago aceptan en el taller?",
    answer: "Aceptamos efectivo (con descuento en mano de obra), transferencias bancarias directas mediante CBU/CVU o alias, y pagos con tarjeta de débito/crédito y billeteras virtuales (Mercado Pago, Cuenta DNI)."
  },
  {
    id: "faq-7",
    category: "mecanica",
    question: "¿Están ubicados en Loma Hermosa? ¿Cómo llego al taller?",
    answer: "Estamos en Florida 647, Loma Hermosa, Partido de Tres de Febrero (a pocas cuadras de Av. Márquez y Ruta 8). Contamos con fácil acceso desde San Martín, Caseros, El Palomar, Hurlingham y todo el corredor noroeste del Gran Buenos Aires."
  }
];
