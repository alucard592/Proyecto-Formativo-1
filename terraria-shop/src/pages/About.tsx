export default function About() {
  return (
    <div className="page about-page">
      <h1>Sobre Nosotros</h1>
      <p className="about-intro">
        Terraria Shop es una tienda conceptual creada como proyecto formativo para demostrar
        el manejo de estado global con Redux en React + TypeScript.
      </p>
      <div className="about-cards">
        <div className="about-card">
          <h3>🏪 La Tienda</h3>
          <p>Ofrecemos los mejores ítems del mundo de Terraria, desde armas de alto daño hasta armaduras legendarias del modo endgame.</p>
        </div>
        <div className="about-card">
          <h3>⚙️ Tecnologías</h3>
          <ul>
            <li>React + TypeScript</li>
            <li>Redux Toolkit (estado global)</li>
            <li>React Router DOM (rutas)</li>
            <li>Vite (bundler)</li>
          </ul>
        </div>
        <div className="about-card">
          <h3>📦 Estado Global</h3>
          <p>El carrito, el tema oscuro y el catálogo de productos están manejados con Redux, accesibles desde cualquier ruta.</p>
        </div>
      </div>
    </div>
  )
}
