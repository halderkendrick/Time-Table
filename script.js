let heading = document.querySelector("h1")
let input = document.querySelector("#namtanumber")
let button = document.querySelector("#button")
button.addEventListener('click', function(){
  heading.innerHTML = ''

  for( let i=1; i < 11; i++){
    heading.innerHTML += `${input.value} x ${i} = ${input.value*i} <br>`
  }
})