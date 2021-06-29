const root = document.documentElement;
 
document.querySelector('h1').addEventListener('mousemove', evt => {
    let x = evt.offsetX;
    let y = evt.offsetY;
 
    root.style.setProperty('--mouse-x', `${x}px`);
    root.style.setProperty('--mouse-y', `${y}px`);
});