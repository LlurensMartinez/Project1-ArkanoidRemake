'use strict'

// creamos la funcion main
const main = () => {



    const buildDom = (html) => {
        // document.querySelector para seleccionar main
        const main = document.querySelector('main');
        //  escribir dentro del main un documento HTML con main.innerHTML
        main.innerHTML = html;
        return main;
    };


    // Creamos SPLASH y escribimos el contenido en el main
    const buildSplashScreen = () => {
        const spalshScreen = buildDom(`
   <section class="splash-screen"></section>
   <h1>Bienvenido al Juego</h1>
   <button>Start</button>
   </section>
   `);

        // Seleccionamos el TAG button con querySelector y añadimos evento addEventListener
        // para que al hacer click ejecute la funcion buildGamesScreen
        const startButton = document.querySelector('button');
        startButton.addEventListener('click', buildGameScreen);
    };


    // Creamos GameScreen  y escribios contenido dentro del main
    const buildGameScreen = () => {
        const gameScreen = buildDom(`
      <h1>Game Screen<h1>
   <section class="game-screen">
     <canvas></canvas>
   </section>
   `);


        const width = document.querySelector('.game-screen').offsetWidth;
        const height = document.querySelector('.game-screen').offsetHeight;

        const canvasElement = document.querySelector('canvas');
        canvasElement.setAttribute('width', width);
        canvasElement.setAttribute('height', height);


        //setTimeout(buildGameOver, 3000);

        //const game = new Game(canvasElement);
        //game.gameOverCallBack(buildGameOver);


        game.startLoop();


    };

    const buildGameOver = () => {
        const gameOverScreen = buildDom(`
       <section class="game-over">
         <h1>Game Over Screen</h1>
         <button>Restart</button>
         </section>
     `);

        const restartButton = document.querySelector('button');
        restartButton.addEventListener('click', buildGameScreen);
    }

    buildSplashScreen();
};

// Al cargar el navegador se ejecuta  el juego en main ('load', main);
window.addEventListener('load', main);