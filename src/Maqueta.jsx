import React from "react";

const styles = {
    container: {
        display: "grid",
        gridTemplateAreas: `
            "header header header"
            "menu content ads"
            "footer footer footer"
        `,
        gridTemplateRows: "60px 1fr 40px",
        gridTemplateColumns: "200px 1fr 150px",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        background: "#f4f4f4",
    },
    header: {
        gridArea: "header",
        background: "#2c3e50",
        color: "#fff",
        display: "center",
        alignItems: "center",
        paddingLeft: "20px",
        fontSize: "1.5rem",
        fontWeight: "bold",
        letterSpacing: "2px",
    },
    menu: {
        gridArea: "menu",
        background: "skyblue",
        color: "#fff",
        padding: "20px 10px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    content: {
        gridArea: "content",
        background: "brown",
        padding: "30px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    },
    ads: {
        gridArea: "ads",
        background: "#f1c40f",
        color: "#222",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: "1.1rem",
        padding: "10px",
    },
    footer: {
        gridArea: "footer",
        background: "#2c3e50",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
        letterSpacing: "1px",
    },
};

function Maqueta() {
    return (
        <div style={styles.container}>
            <header style={styles.header}>BARRA DE TITULO</header>
            <nav style={styles.menu}>
                <a href="#" style={{ color: "black", textDecoration: "none" }}>Inicio</a>
                <a href="#" style={{ color: "black", textDecoration: "none" }}>Servicios</a>
                <a href="#" style={{ color: "black", textDecoration: "none" }}>Acerca de</a>
                <a href="#" style={{ color: "black", textDecoration: "none" }}>Contacto</a>
            </nav>
            <main style={styles.content}>
                <h2>SECCION DE CONTENIDO</h2>
                <p>
                    Bienvenido a la sección principal de contenido.
                </p>
            </main>
            <aside style={styles.ads}>
                INF-122 PROG WEB II 
            </aside>
            <footer style={styles.footer}>
                FERNANDO QUISPE TARQUI &copy; {new Date().getFullYear()}
            </footer>
        </div>
    );
}

export default Maqueta;