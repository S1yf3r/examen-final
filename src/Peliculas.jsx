import React, { useState } from "react";

// src/Peliculas.jsx

// Componente Modal simple
function Modal({ show, onClose, titulo, resumen }) {
    if (!show) return null;
    return (
        <div style={{
            position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
            background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center"
        }}>
            <div style={{ background: "orange", padding: 24, borderRadius: 8, minWidth: 300 }}>
                <h2>{titulo}</h2>
                <p>{resumen}</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}

const peliculas = [
    {
        titulo: "Inception",
        resumen: "Un ladrón que roba secretos corporativos a través del uso de la tecnología de sueños compartidos es dado la tarea inversa de plantar una idea en la mente de un CEO."
    },
    {
        titulo: "Interstellar",
        resumen: "Un grupo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad."
    },
    {
        titulo: "The Matrix",
        resumen: "Un hacker descubre la verdadera naturaleza de su realidad y su papel en la guerra contra sus controladores."
    },
    {
        titulo: "The Shawshank Redemption",
        resumen: "Dos hombres encarcelados forman un vínculo durante varios años, encontrando consuelo y eventual redención a través de actos de decencia común."
    },
    {
        titulo: "The Godfather",
        resumen: "El patriarca envejecido de una dinastía criminal organizada transfiere el control de su imperio clandestino a su hijo reacio."
    }
];

export default function Peliculas() {
    const [modalIndex, setModalIndex] = useState(null);

    return (
        <div style={{ padding: 40, textAlign: "center" }}>
            <h1>Películas</h1>
            <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 32 }}>
                {peliculas.map((pelicula, idx) => (
                    <button key={idx} onClick={() => setModalIndex(idx)}>
                        {pelicula.titulo}
                    </button>
                ))}
            </div>
            <Modal
                show={modalIndex !== null}
                onClose={() => setModalIndex(null)}
                titulo={modalIndex !== null ? peliculas[modalIndex].titulo : ""}
                resumen={modalIndex !== null ? peliculas[modalIndex].resumen : ""}
            />
        </div>
    );
}
