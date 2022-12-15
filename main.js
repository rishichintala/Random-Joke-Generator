const jokeContainer = document.getElementById('jokeText');
const button = document.getElementById('btnRandom');
const jokeApi = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

button.addEventListener('click',getJoke);

function getJoke(){
    jokeContainer.classList.remove('fade');
    fetch(jokeApi)
    .then(data=>data.json())
    .then(res=>{
        jokeContainer.textContent=`${res.joke}`;
        jokeContainer.classList.add('fade');
    });
}