function moveButton() {
    const noButton = document.querySelector('.no-button');
    const maxX = window.innerWidth - noButton.clientWidth;
    const maxY = window.innerHeight - noButton.clientHeight;
  
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
  
    noButton.style.transition = 'transform 0.5s ease-in-out';
    noButton.style.transform = `translate(${newX}px, ${newY}px)`;
  
    // Reset transform after a delay to keep the button visible
    setTimeout(() => {
        noButton.style.transition = 'none';
        noButton.style.transform = 'translate(0, 0)';
    }, 1000);
}