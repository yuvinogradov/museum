function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

a = Array(15).fill(0, 0, 15).map((a, i) => `assets/img/gallery/galery${i + 1}.jpg`)
console.log(a)
shuffle(a)
console.log(a)


let pictureInnerContainer = document.querySelector('.picture-inner-container');

pictureInnerContainer.innerHTML = ''
a.map(i => {
    const img = document.createElement('img');
    img.classList.add('gallery-picture')
    img.src = i;
    img.alt = `galery1`;
    pictureInnerContainer.append(img);

})
