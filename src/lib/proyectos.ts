// Cada proyecto publicado es un "commit" del log del estudio: agregar uno nuevo = agregar un objeto aquí.
export type Proyecto = {
  hash: string;
  mensaje: string;
  nombre: string;
  descripcion: string;
  stack: string[];
  openSource: boolean;
  codigo: string;
  imagen: { src: string; alt: string };
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
    imagen: { src: "/img/shiplog.webp", alt: "Vista de ramas de Shiplog: develop tiene 9 commits que qa todavía no tiene." },
  },
  {
    hash: "9d5e674",
    mensaje: "feat: llaves v1",
    nombre: "LLAVES",
    descripcion:
      "Torneos con llaves en vivo: liga, eliminación directa y doble eliminación. El organizador marca los resultados y todos los que tienen el link ven el cuadro actualizarse al instante.",
    stack: ["Node", "Express", "SSE", "Postgres"],
    openSource: true,
    codigo: "https://github.com/jotapoldev/llaves",
    imagen: { src: "/img/llaves.webp", alt: "Cuadro de eliminación de LLAVES con ocho equipos y Halcones como campeón." },
  },
];

export const contacto = [
  { tipo: "correo", texto: "jotapoldev@gmail.com", href: "mailto:jotapoldev@gmail.com" },
  { tipo: "instagram", texto: "@jotapol.dev", href: "https://www.instagram.com/jotapol.dev/" },
  { tipo: "github", texto: "github.com/jotapoldev", href: "https://github.com/jotapoldev" },
];
