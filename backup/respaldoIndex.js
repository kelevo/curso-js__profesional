const video = document.querySelector("video")
      const button = document.querySelector("button")

      //funcion que nos servira como prototipo, le pasamos una configuracion
      //Esta configuracion tendra al elemento video original.
      function MediaPlayer(config) {
        //this guarda un valor en la instancia donde se encuentre
        //Le asignamos a this.media el elemento video
        this.media = config.el
      }
      //Funcion extendida
      //Le asignamos play() a this.media para que se ejecute cuando
      //precionemos el boton
      MediaPlayer.prototype.play = function() {
        //Para agregarle la funcionalidad de pausa y play con el mismo boton
        //debemos condicionar la funcion play de MediaPlayer de la siguiente manera
        if(this.media.paused) {
          this.media.play();
        } else {
          this.media.pause()
        }
      }
      //Instancia de la funcion
      //Le asignaremos el valor de video para que lo reciba de
      //configuracion. Esto lo hacemos con destructuracion de objetos
      const player = new MediaPlayer({ el: video });

      //Aqui no podemos usar arrow functions por el valor de this que es global.

      //Uso del prototype para hacer play al video
      button.onclick = () => player.play();