// .
const main = document.getElementById('main');

const url='https://www.themealdb.com/api/json/v1/1/list.php?i=list';

fetch(url)
    .then(resp => resp.json())
    .then(data => comidas(data.meals))
    .catch(err => console.log(err))


const comidas = (arr) => {
  let str = '';
  for(let i = 0; i < arr.length; i++) {
    const ingredient = arr[i].strIngredient;
    const description = arr[i].strDescription;
    const type = arr[i].strType;
    str = str +  
    `<div class="tarjetita">
      <figure class="imagen">
          <img alt="foto-comida" src="https://www.mamirecetas.com/wp-content/uploads/2018/11/clases-gastronomia.jpg" width=130" height="100">
      </figure>
      <div class="info-tarjeta">
          <p>${ingredient}</p>
          <p>${description}</p>
          <p>${type}</p>
      </div>
    </div>
    `
       // <p>${ingredient}</p>
      //  <p>${description}</p>
       // <p>${type}</p>
     }

  main.innerHTML = str;
}