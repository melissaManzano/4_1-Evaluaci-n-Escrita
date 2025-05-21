document.addEventListener("DOMContentLoaded", () => {
  const bienvenida = document.getElementById("bienvenida");
  const mensajeExtra = document.getElementById("mensajeExtra");
  const motivadores = [
    "¡Hoy será un gran día para comer bien! 🍳🥨❤️",
    "¡La vida es mejor con buena comida!😋✨",
    "¡Disfruta cada bocado!🥹🍴",
    "¡Buen provecho y que disfrutes!🥰🥞✨",
  ];
  const randomMensaje = motivadores[Math.floor(Math.random() * motivadores.length)];

  const fecha = document.createElement("span");
  fecha.className = "fecha";
  fecha.textContent = new Date().toLocaleString();

  const mensaje = document.createElement("span");
  mensaje.className = "mensaje";
  mensaje.textContent = "¡Buen provecho!";

  bienvenida.innerHTML = `${randomMensaje}`;
  bienvenida.appendChild(fecha);
  bienvenida.appendChild(mensaje);
});

document.getElementById("btnActualizar").addEventListener("click", () => {
  const bienvenida = document.getElementById("bienvenida");
  bienvenida.innerHTML = "¡Gracias por volver!";
  
  const nuevaFecha = document.createElement("span");
  nuevaFecha.className = "fecha";
  nuevaFecha.textContent = new Date().toLocaleString();
  
  const nuevoMensaje = document.createElement("span");
  nuevoMensaje.className = "mensaje";
  nuevoMensaje.textContent = "¡Esperamos que tengas una gran experiencia!";

  bienvenida.appendChild(nuevaFecha);
  bienvenida.appendChild(nuevoMensaje);

  const extra = document.createElement("p");
  extra.textContent = "Gracias por visitarnos ♥";
  mensajeExtra.innerHTML = ""; // limpiar anteriores
  mensajeExtra.appendChild(extra);
});

const menuDatos = {
  desayuno: [
    { nombre: "Huevos Revueltos", precio: "$80", imagen: "images/huevo revuelto.webp" },
    { nombre: "Enchiladas", precio: "$120", imagen: "images/Enchiladas.jpg" },
    { nombre: "Chilaquiles verdes", precio: "$90", imagen: "images/Chilaquiles verdes.jpg" },
    { nombre: "Hot Cakes con fruta", precio: "$100", imagen: "images/Hot Cakes con fruta.jpg" },
    { nombre: "Omelette de jamón y queso", precio: "$95", imagen: "images/Omelette de jamón y queso.webp" }
  ],
  comida: [
    { nombre: "Arrachera", precio: "$170", imagen: "images/Arrachera.jpeg" },
    { nombre: "Pozole", precio: "$160", imagen: "images/Pozole.jpg" },
    { nombre: "Milanesa de res", precio: "$140", imagen: "images/Milanesa de res.jpg" },
    { nombre: "Pollo en mole", precio: "$135", imagen: "images/Pollo en mole.jpg" },
    { nombre: "Fajitas mixtas", precio: "$150", imagen: "images/Fajitas mixtas.jpg" }
  ],
  cena: [
    { nombre: "Sopa azteca", precio: "$120", imagen: "images/Sopa azteca.jpg" },
    { nombre: "Carne asada", precio: "$125", imagen: "images/Carne asada.jpg" },
    { nombre: "Tacos dorados", precio: "$110", imagen: "images/Tacos dorados.jpg" },
    { nombre: "Quesadillas surtidas", precio: "$100", imagen: "images/Quesadillas surtidas.jpeg"},
    { nombre: "Caldo de pollo", precio: "$115", imagen: "images/Caldo de pollo.jpg" }
  ],
  brunch: [
    { nombre: "Tlacoyos", precio: "$20 c/u", imagen: "images/Tlacoyos.jpg" },
    { nombre: "Molletes", precio: "$30 c/u", imagen: "images/Molletes.jpg" },
    { nombre: "Tostadas de atún", precio: "$35 c/u", imagen: "images/Tostadas de atún.jpg" },
    { nombre: "Wraps de pollo", precio: "$85", imagen: "images/Wraps de pollo.jpg" },
    { nombre: "Ensalada de frutas", precio: "$60", imagen: "images/Ensalada de frutas.jpg" }
  ]
};

function mostrarMenu(categoria) {
  const menu = document.getElementById("menu");
  menu.innerHTML = "";

  menuDatos[categoria].forEach(platillo => {
    const item = document.createElement("div");
    item.className = "platillo";
    item.innerHTML = `
      <img src="${platillo.imagen}" alt="${platillo.nombre}" class="platillo-img">
      <strong>${platillo.nombre}</strong><br>
      <span>${platillo.precio}</span>
    `;
    menu.appendChild(item);
  });
}

