const button=document.getElementById('but');
const parent1=document.getElementById('main');
const disp=document.getElementById('text1');
button.addEventListener('click',addImage);
function addImage(){
    let image=document.createElement('img');
    image.setAttribute('id','photo');
    image.src="logo.png";
    disp.innerText='Image Element Added';
    parent1.appendChild(image);
}