// Cada proyecto publicado es un "commit" del log del estudio: agregar uno nuevo = agregar un objeto aquí.
export type Proyecto = {
  hash: string;
  mensaje: string;
  nombre: string;
  descripcion: string;
  stack: string[];
  openSource: boolean;
  codigo: string;
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
];

export const contacto = [
  { tipo: "correo", texto: "hola@jotapol.com", href: "mailto:hola@jotapol.com" },
  { tipo: "instagram", texto: "@jotapol.dev", href: "https://www.instagram.com/jotapol.dev/" },
  { tipo: "github", texto: "github.com/jotapoldev", href: "https://github.com/jotapoldev" },
];
