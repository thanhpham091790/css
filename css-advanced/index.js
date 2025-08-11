// Select thumbnail image
const myImg = document.querySelector("#myImg");

// Select thumbnail image src
const thumbnailImgSrc = myImg.src;

// Select thumbnail image alt
const thumbnailImgAlt = myImg.alt;

// Select modal box
const myModal = document.querySelector("#myModal");


// Listen event when click on thumbnail image
myImg.addEventListener('click', () => {
    // Create close button element
    const closeEl = document.createElement('span');
    closeEl.setAttribute('class', 'close');
    closeEl.innerHTML = '&times;';

    // Listen event when click on close button
    closeEl.addEventListener('click', () => {
        myModal.style.display = 'none';
    });

    // Create modal content image
    const imgEl = document.createElement('img');
    imgEl.setAttribute('class', 'modal-content');
    imgEl.setAttribute('id', 'img01');
    imgEl.setAttribute('src', thumbnailImgSrc);
    imgEl.setAttribute('alt', thumbnailImgAlt);

    // Create modal caption text
    const divEl = document.createElement('div');
    divEl.setAttribute('id', 'caption');
    divEl.textContent = thumbnailImgAlt;

    // Append children elements to myModal element
    myModal.appendChild(closeEl);
    myModal.appendChild(imgEl);
    myModal.appendChild(divEl);

    // Display modal box
    myModal.style.display = 'block';
});