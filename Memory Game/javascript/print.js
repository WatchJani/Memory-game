//random array

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


const Render =()=>{
    data = shuffleArray(data);

    //get element from html
    const slikeDiv = document.getElementById("img");
    
    //object array 
    const htmlString = data.map(obj => {
        return `<img src="../../assets/background-card.webp" alt="Slika ${obj.id}" id="${obj.id}" onClick="Read(${obj.id})">`;
    }).join("");
    
    //print data from array
    slikeDiv.innerHTML = htmlString;
}
