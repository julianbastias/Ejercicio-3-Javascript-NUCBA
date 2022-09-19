// Utilizando el querido array de objetos "Pizzas🍕", realizar el siguiente desafío: 

// 👉 A cada Pizza, agregarle una imagen. 
// 👉 Guardar el array en el local storage. 
// 👉 Crear un archivo HTML que contenga un card en donde se renderice el nombre, imagen, ingredientes y precio de una pizza (Estilizarlo con CSS 🎨). 
// 👉 Debajo del card tiene que haber un input y un botón. 

// Deberemos colocar un numero en el input y, al apretar el botón, deberá renderizar en el card la pizza cuyo id coincida con el numero ingresado en el input.

// 🚨 Si no coincide con ningún id, renderizar un mensaje de error.

// 🆙 En Eduflow, colocar el repositorio de Github, en el cual debe figurar el vercel deployado.


const d = document;
const $form = d.querySelector('.form'),
  $inputText = d.querySelector('.input'),
  $contenedorCards = d.querySelector('.cards'),
  $mensajeError = d.querySelector('.mensaje');

let pizzas = [
  {
      id: 1,
      nombre:'Muzzarella',
      ing: ['Salsa ', 'Muzzarella ', 'Aceitunas '],
      src:'Assets/Muzza.png',
      precio: 700,
  },
  {
      id: 2,
      nombre: 'Calabrese',
      ing: ['Salsa ', 'Muzzarella ', 'Salamin ', 'Aceitunas '],
      src:'Assets/Calabresa.png',
      precio: 800,
  },
  {
      id: 3,
      nombre: '4 Quesos',
      ing: ['Salsa ', 'Muzzarella ', 'Brie ', 'Gruyere ', 'Roquefort '],
      src:'Assets/4quesos.png',
      precio: 850,
  },
  {
      id: 4,
      nombre: 'Del Mal',
      ing: ['Salsa ', 'Muzzarella ', 'Anana ', 'Jamón Cocido '],
      src:'Assets/Delmal.png',
      precio: 870,
  },
  {
      id: 5,
      nombre: 'Fugazza',
      ing: ['Salsa ', 'Muzzarella ', 'Cebolla, Mucha Cebolla ', 'Aceitunas Negras '],
      src:'Assets/Fugazzeta.png',
      precio: 870,
  },
  {
      id: 6,
      nombre: 'Pizzalomo',
      ing: ['Salsa', 'Muzzarella', 'Lomo Veteado', 'Mayo Casera', 'Lechuga', 'Tomate'],
      src:'Assets/lomopizza.png',
      precio: 1400,
  },
];


window.addEventListener('load', e=>{
  const getPizza = JSON.parse(localStorage.getItem("myPizza"))
  if(getPizza === null){
    return;
  } else {
    $contenedorCards.innerHTML = getPizza;
    renderPizza(getPizza)
  }

})


 $form.addEventListener('submit', e => {
    e.preventDefault();
    const datoUser = $inputText.value.trim();
    if(Number(datoUser) > pizzas.length){
      $mensajeError.classList.add("showMensaje");
      $contenedorCards.innerHTML = "";
      $form.reset();
      return;
    } else {
      $mensajeError.classList.remove("showMensaje")
    }
    buscarPizza(pizzas)
    $form.reset();
 })


 function buscarPizza(arreglo){
  const pizzaEncontrada  = pizzas.find(pizza => pizza.id === Number($inputText.value));
  localStorage.setItem("myPizza",JSON.stringify(pizzaEncontrada))
  renderPizza(pizzaEncontrada)
 }

 function renderPizza(pizza){
    const {nombre,src,precio,ing} = pizza
    $contenedorCards.innerHTML = `<article class="card">
    <img src=${src} class="cardimg">
    <div class="cardinfo">
      <h2 class="card__title">${nombre}</h2>
      <p class="card__ingredientes">${ing}</p>
      <p class="card__precio">$${precio}</p>
    </div>
  </article>`
 }