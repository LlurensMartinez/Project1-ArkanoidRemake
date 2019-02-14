# NOMBRE POR DEFENIR

## DESCRIPCIÓN

En mi proyercto voy a intentar recrear un clasico de los 80 que todos conocéis llamado Arcanoid. Todo un reto para un desarrollador noob ;).

## MVP - Tecnología (DOM - CANVAS)

Para este proyecto voy a utilizar tecnología Canvas.


## BACKLOG

- Añadir imagenes

- Añadir name

- Añadir time

- Añadir poderes

- Separar pantalla YOU WIN de YOU LOSE





## ESTRUCTURAS DE DATOS

MAIN:
     main.js:
        
        - build()
        - build splash()
        - build gameover screen()
        

GAME:
     game.js:
     
        - startloopfuntcion()
        - this.player
        - onGameOver()
        - loop ()
        - update ()
        - draw ()
        - this.ball
        - clear ()
        
     
     player.js:
        
        - vidas()
        - this.x
        - this.y
        - this.size
        - this.velocity
        - speed()
        - checkColision()
        - draw()
        - update()
        - clear()
      
      
     ball.js:
        - this.velocity
        - speed()
        - colision()
        - this.x
        - this.y
        - this.size
        - draw ()
        - update ()
        - clear ()
        
        
     bloque.js:
        - colsion()
        - this.x
        - this.y
        - this.size
        - draw ()
        - update()
        - clear ()
       
       
## STATES Y STATES TRANSITION


splashScreen => gameScreen => gameOverScreen => gameScreen


FUNCIONES DE TRANSICION

## Task

- Crear Archivos main.js, game.js, player.js, ball.js, bloque.js    

- Crear las transiciones entre pantallas (Splash, Game y Game Over)   

- Crear el loop para las transiciones. (build(), buildSplashScreen(), buildGameOverScreen())  

- Crear Class game.js y declarar todas sus funciones
      
      - Funcion para empezar loop
      
      - This.player
      
      - Dibujar escenario
      
      - Update and clear
      
      - Desclara funcion OnGameOver()
      
      

- Crear Class Player (player.js)

      -  Dibujar rectangulo

      -  Añadir Velocidad
      
      -  Añadir posicion
      
      -  Añadir colision
      
      -  Update and  clear
      

- Crear Class Ball (ball.js)

     -  Dibujar esfera

     -  Añadir Velocidad esfera
      
     -  Añadir posicion esfera
      
     -  Añadir colision esfera
      
     -  Update and clear


- Crear Class bloque (bloque.js)

     - Dibujar bloque
     
     - Añadir posicion
     
     - Añadir colision
     
     - Update and clear
     





## LINKS

### Trello

[Link url](https://trello.com)



### Git

Especificar las url del proyecto y del deploy

[Link Repositorio](http://github.com)

[Link Deploy](http://github.com)



### Slides.com

Especificar la url de la presentacion

[Link Slides.com](http://slides.com)




## Instrucciones del juego 

Al finalizar el juego generar las instrucciones
