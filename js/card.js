/*
const card = [
    {
        img: "img/card/Card camiseta.png",
        title: "Camiseta Conforto",
        description:
            "Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex."
    },

    {
        img: "img/card/Card calça.png",
        title: "Calça Alfaiataria",
        description:
            "Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!",
    },

    {
        img: "img/card/Card tenis.png",
        title: "Tênis Chunky",
        description:
            "Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.",
    },

    {
        img: "img/card/Card jaqueta jeans.png",
        title: "Jaqueta Jeans",
        description:
            "Modelo unissex oversized com gola de camurça. Atemporal e autêntica!",
    },

    {
        img: "img/card/Cards óculos.png",
        title: "Óculos Redondo",
        description:
            "Armação metálica em grafite com lentes arredondadas. Sem erro!",
    },

    {
        img: "img/card/Card bolsa.png",
        title: "Bolsa coringa",
        description:
            "Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!",
    },

];

const list = document.querySelector(".card__list");


function addCard(card) {
    for (let i = 0; i < card.length; i++) {
        
        renderCard(card[i]);
    }
}


addCard(card);

function renderCard(card) {
    const listItem = document.createElement("li");
    listItem.classList.add("card");

    listItem.innerHTML = `
    <img 
    src=${card.img} 
    alt=${card.title}
/>
<div class="card__texto">
    <h4>${card.title}</h4>
    <p>
    ${card.description}
    </p>
</div>
    
    `;

    list.appendChild(listItem);
}

*/