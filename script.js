const noButton = document.getElementById('noButton');

noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// document.getElementById('yesButton').addEventListener('click', () => {
//     alert("You clicked Yes!");
// });

noButton.addEventListener('click', () => {
    alert("You caught the No button!");
});