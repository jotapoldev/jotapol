/* eslint-disable @next/next/no-img-element -- sitio estático: las imágenes ya van optimizadas en webp */
import { contacto, proyectos } from "@/lib/proyectos";
import { ThemeToggle } from "./theme-toggle";

const gancho = {
  j: "M8 8 H26 V38 C26 44.6 31.4 50 38 50 H56 V56 H38 C28.1 56 20 47.9 20 38 V14 H8 Z",
  p: "M34 8 H44 C51.7 8 56 12.3 56 20 C56 27.7 51.7 32 44 32 H34 Z",
};

function Cursor() {
  return <span className="cur" aria-hidden="true" />;
}

export default function Home() {
  const [ultimo] = proyectos.slice(-1);
  return (
    <>
      <a className="skip" href="#proyectos">Saltar a los proyectos</a>

      <header className="top">
        <div className="wrap">
          <a className="wm" href="#inicio" aria-label="jotapol, inicio">jotapol<Cursor /></a>
          <div className="top-right">
            <nav aria-label="Secciones">
              <a href="#proyectos">Proyectos</a>
              <a href="#clientes">Para clientes</a>
              <a href="#contacto">Contacto</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        <section className="hero wrap" id="inicio">
          <svg className="ghost" viewBox="0 0 64 64" aria-hidden="true">
            <path d={gancho.j} fill="#7B70FF" />
            <path d={gancho.p} fill="#5EEAD4" />
          </svg>
          <div className="hero-grid">
            <div>
              <p className="cmd">$ git init <b>jotapol-dev</b></p>
              <h1>
                <span className="w"><span>Initial</span></span> <span className="w"><span>commit</span></span>
                <Cursor />
              </h1>
              <p className="lead">Construimos software: productos propios y proyectos para clientes, de la idea a producción.</p>
              <p className="actions">
                <a className="btn" href="#proyectos">Ver proyectos</a>
                <a className="btn btn-ghost" href="#contacto">Contar tu proyecto</a>
              </p>
            </div>
            <div className="term" aria-label="Historial del estudio">
              <div className="term-bar"><i /><i /><i /><span>~/jotapol-dev</span></div>
              <pre>
                <span><span className="dim">$</span> git log --graph --oneline</span>
                {[...proyectos].reverse().map((p) => (
                  <span key={p.hash}>
                    <span className="g">*</span> <span className="h">{p.hash}</span>{" "}
                    {p === ultimo && <span className="ref">(HEAD → main) </span>}
                    {p.mensaje}
                  </span>
                ))}
                <span><span className="g">*</span> <span className="h">3c8e1a4</span> feat: nace jotapol_</span>
                <span><span className="g">*</span> <span className="h">9e04b71</span> feat: proyectos para clientes</span>
                <span><span className="g">|</span></span>
                <span className="dim">  … lo que sigue</span>
              </pre>
            </div>
          </div>
        </section>

        <div className="wrap">
          <div className="log">
            <div className="rail" aria-hidden="true" />

            <section className="section" id="proyectos" aria-labelledby="t-proyectos">
              <p className="cmd">$ git log <b>--proyectos</b></p>
              <h2 id="t-proyectos">Lo que ya salió.</h2>

              {proyectos.map((p) => (
                <article className="commit node" key={p.hash}>
                  <div className="meta">
                    <p className="hash"><span>{p.hash}</span>{p.openSource && <b className="ref">(open source)</b>}{p.mensaje}</p>
                    <h3>{p.nombre}</h3>
                    <p className="desc">{p.descripcion}</p>
                    <p className="trailer">Hecho-con: {p.stack.join(", ")}</p>
                    <p className="plinks">
                      {p.demo && <a className="btn" href={p.demo} target="_blank" rel="noopener noreferrer">Probar en vivo</a>}
                      {p.codigo && <a className="ulink" href={p.codigo} target="_blank" rel="noopener noreferrer">Ver el código</a>}
                    </p>
                  </div>
                  {/* Escena: la app en escritorio y en celular. En pantallas chicas queda solo el celular, completo. */}
                  <figure className="shot" data-tono={p.tono}>
                    <div className="browser">
                      <div className="bar" aria-hidden="true"><i /><i /><i /><span>{p.demo?.replace("https://", "")}</span></div>
                      <img src={p.imagen.src} width={1600} height={1100} alt={p.imagen.alt} loading="lazy" decoding="async" />
                    </div>
                    <div className="phone">
                      <img src={p.imagen.movil} width={600} height={1298} alt={`${p.nombre} en el celular`} loading="lazy" decoding="async" />
                    </div>
                  </figure>
                </article>
              ))}

              <p className="next">········ lo que sigue, en este log</p>
            </section>

            <section className="section clients node" id="clientes" aria-labelledby="t-clientes">
              <p className="cmd">$ cat CLIENTES.md</p>
              <h2 id="t-clientes">También construimos para tu negocio.</h2>
              <p className="lead">Tiendas en línea, paneles internos y APIs para negocios reales. Te decimos qué conviene construir y qué no, y lo entregamos funcionando.</p>
              <div className="diff" role="list" aria-label="Cómo trabajamos">
                <div className="hd">@@ cómo trabajamos @@</div>
                <div className="add" role="listitem"><b>+</b><span>Primero funciona, después se presume.</span></div>
                <div className="add" role="listitem"><b>+</b><span>Código limpio aunque nadie lo vaya a leer.</span></div>
                <div className="add" role="listitem"><b>+</b><span>Si no está bien hecho, no sale.</span></div>
                <div className="del" role="listitem"><b>-</b><span>Promesas sin entregas.</span></div>
              </div>
            </section>

            <section className="section node" id="contacto" aria-labelledby="t-contacto">
              <p className="cmd">$ git remote -v</p>
              <h2 id="t-contacto">¿Tenés un proyecto? Escribinos.</h2>
              <ul className="remotes">
                {contacto.map((c) => (
                  <li key={c.tipo}>
                    <span>{c.tipo}</span>
                    <a className="ulink" href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{c.texto}</a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <footer className="foot">
        <div className="wrap">
          <span className="wm">jotapol<Cursor /></span>
          <span>© {new Date().getFullYear()} JOTAPOL DEV</span>
        </div>
      </footer>
    </>
  );
}
