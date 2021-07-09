let btn = document.getElementById('getData');

btn.addEventListener('click', hello)

function hello(){
    fetch('data.json')
    .then(x => x.json())
    .then(y => console.log(y));
}


