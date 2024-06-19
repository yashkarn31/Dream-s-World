async function getData(){
    const result= await fetch("https://makemytrip-backend-w2d2.onrender.com/cities")
    const data = await result.json();
    console.log(data);
    renderUI(data);
}

getData();
const container_card= document.getElementById("container")

function renderUI(data){
    console.log(data)
    const cities=data;
    container_card.innerHTML="";

cities.forEach(city => {
    const card= document.createElement('div')
    card.className='card2';
    card.innerHTML= `
    <img src =${city.image}>
    <h3>${city.city}</h3>
    <p>${city.description}</p>`;
    
    container_card.appendChild(card);
});
}