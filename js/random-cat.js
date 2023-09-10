function setRandomCat() {
    let cat = getRandomCat();
    document.getElementsByClassName("random-cat-image")[0].src = cat;
}

function getRandomCat() {
    let cat = Math.floor(Math.random() * 30) + 1;
    return "images/random-cats/" + cat + ".jpg";
}