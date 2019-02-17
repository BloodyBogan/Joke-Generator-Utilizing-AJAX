let button = document.querySelector('.btn');
let box = document.querySelector('.jokeBox');
let jokeOutput = document.querySelector('.joke');

button.addEventListener('click', getJoke);

function getJoke() {

  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://api.icndb.com/jokes/random');

  xhr.onload = function() {
    if (this.status == 200) {
      var data = xhr.responseText;
      var jsonResponse = JSON.parse(data);

      box.style.opacity = 1;
      jokeOutput.innerHTML = jsonResponse.value.joke;

    } else {
      alert('Something went wrong...');
    }
  }

  xhr.send();
}
