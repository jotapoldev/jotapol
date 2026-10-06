// Cada proyecto publicado es un "commit" del log del estudio: agregar uno nuevo = agregar un objeto aquí.
export type Proyecto = {
  hash: string;
  mensaje: string;
  nombre: string;
  descripcion: string;
  stack: string[];
  openSource: boolean;
  codigo?: string;
  demo?: string;
  tono: "indigo" | "menta";
  imagen: { src: string; movil: string; alt: string };
};

export const proyectos: Proyecto[] = [
  {
    hash: "6919c13",
    mensaje: "feat: shiplog v0.1",
    nombre: "Shiplog",
    descripcion:
      "Tu historial de git convertido en bitácora: qué hiciste cada día, qué ramas faltan por subir a qa o a main, y tus pendientes. Corre en tu compu; tus repos no salen de ahí.",
    stack: ["Next.js", "React", "PGlite"],
    openSource: true,
    codigo: "https://github.com/jotapoldev/shiplog",
    demo: "https://shiplog.jotapol.com",
    tono: "indigo",
    imagen: { src: "/img/shiplog.webp", movil: "/img/shiplog-movil.webp", alt: "Vista de ramas de Shiplog: develop tiene 9 commits que qa todavía no tiene." },
  },
  {
    hash: "9d5e674",
    mensaje: "feat: llaves v1",
    nombre: "LLAVES",
    descripcion:
      "Torneos con llaves en vivo: liga, eliminación directa y doble eliminación. Armás el torneo, compartís el código de la sala y todos ven el cuadro actualizarse al instante. Sin cuentas y sin guardar datos.",
    stack: ["Node", "Express", "SSE"],
    openSource: true,
    codigo: "https://github.com/jotapoldev/llaves",
    demo: "https://llaves.jotapol.com",
    tono: "menta",
    imagen: { src: "/img/llaves.webp", movil: "/img/llaves-movil.webp", alt: "Cuadro de eliminación de LLAVES con ocho equipos y Halcones como campeón." },
  },
  {
    hash: "c41e7b2",
    mensaje: "feat: tradelearn demo",
    nombre: "TradeLearn",
    descripcion:
      "Panel de mercados para aprender a invertir: precios de cripto y ETFs, portafolio, lecciones y backtests de estrategias. La demo usa datos simulados y no se conecta a ningún broker.",
    stack: ["Next.js", "React", "Recharts"],
    openSource: false,
    demo: "https://trading.jotapol.com",
    tono: "indigo",
    imagen: { src: "/img/trading.webp", movil: "/img/trading-movil.webp", alt: "Dashboard de TradeLearn con el precio de Bitcoin y el índice de miedo y codicia." },
  },
  {
    hash: "69c80f7",
    mensaje: "feat: taplog",
    nombre: "Taplog",
    descripcion:
      "Links cortos con contador para saber qué post o reel trae gente: de dónde vienen los clics, cuántos por día y cuánto alcance se vuelve visita. No guarda datos de nadie, solo números agregados.",
    stack: ["Node", "SQLite", "SVG"],
    openSource: false,
    demo: "https://jotapol.com/r/demo",
    tono: "menta",
    imagen: { src: "/img/taplog.webp", movil: "/img/taplog-movil.webp", alt: "Tablero de Taplog en modo oscuro: clics de la semana, la línea de clics por día y el ranking de posts." },
  },
];

export const contacto = [
  { tipo: "correo", texto: "hola@jotapol.com", href: "mailto:hola@jotapol.com" },
  { tipo: "instagram", texto: "@jotapol.dev", href: "https://www.instagram.com/jotapol.dev/" },
  { tipo: "github", texto: "github.com/jotapoldev", href: "https://github.com/jotapoldev" },
];
