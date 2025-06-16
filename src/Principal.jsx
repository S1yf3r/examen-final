import React from "react";

// Componente Cartilla para mostrar información de un actor
function Cartilla({ nombre, imagen, descripcion }) {
    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            width: "250px",
            margin: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            textAlign: "center",
            background: "Black",
        }}>
            <img
                src={imagen}
                alt={nombre}
                style={{ width: "100%", height: "320px", objectFit: "cover", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
            />
            <h2 style={{ margin: "16px 0 8px 0" }}>{nombre}</h2>
            <p style={{ padding: "0 16px 16px 16px", color: "#555" }}>{descripcion}</p>
        </div>
    );
}

// Página Principal
export default function Principal() {
    const actores = [
        {
            nombre: "Leonardo DiCaprio",
            imagen: "https://www.lasfuriasmagazine.com/wp-content/uploads/2020/10/leonardo-dicaprio-1.jpeg",
            descripcion: "Actor estadounidense conocido por películas como Titanic, Inception y The Revenant."
        },
        {
            nombre: "Scarlett Johansson",
            imagen: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/06/scarlett-johansson-2383127.jpg?tf=3840x",
            descripcion: "Actriz estadounidense famosa por su papel de Black Widow en el Universo Marvel."
        },
        {
            nombre: "Morgan Freeman",
            imagen: "https://cdn.milenio.com/uploads/media/2022/06/01/morgan-freeman-via-everett-collection.jpg",
            descripcion: "Actor y narrador estadounidense, conocido por The Shawshank Redemption y Million Dollar Baby."
        }
    ];

    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #ece9e6 0%, blue 100%)",
            padding: "40px"
        }}>
            <h1 style={{ textAlign: "center", marginBottom: "32px" }}>Principal</h1>
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "24px"
            }}>
                {actores.map((actor) => (
                    <Cartilla
                        key={actor.nombre}
                        nombre={actor.nombre}
                        imagen={actor.imagen}
                        descripcion={actor.descripcion}
                    />
                ))}
            </div>
        </div>
    );
}