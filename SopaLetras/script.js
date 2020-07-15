/* Sopa de Letras en JS
* (c) 2020, Jon Tmarz, versión 1.0
* Juego de sopa de letras facil e intuitivo
* https://github.com/Jonedi/QUIZ-APP/tree/dev/SopaLetras
*/

var texto = [], txtPal, lstPal;

const init = () => {
  txtPal = document.getElementById('texto');
  lstPal = document.getElementById('lstPalabras');
  solve = document.getElementById('solve');
  txtPal.addEventListener("keypress", enter);
}

const capturar = () => {
    if (txtPal.value.length > 0) {
        texto.push(txtPal.value.replace(" ", "").toUpperCase());
        lista(txtPal.value.replace(" ", "").toUpperCase());
        txtPal.value = "";
    } else {
        alert('Ingresa una palabra')
    }
}

const lista = (x_str) => {
  var nuevo = document.createElement("option");
  nuevo.innerHTML = x_str;
  lstPal.appendChild(nuevo);
}

const iniciar = () => {
  var words = texto;
  var gamePuzzle = wordfindgame.create(words, '#juego', '#Palabras');

  var puzzle = wordfind.newPuzzle(words,{height: 18, width:18, fillBlanks: false});
  wordfind.print(puzzle);

  solve.onclick = function() {wordfindgame.solve(gamePuzzle, words);};
}

const reset = () => { location.reload()}

