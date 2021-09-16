// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//   Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


const app = new Vue(
  {
    el: '#root',
    data: {
      title: 'Hello Vue!!',
      image: 'img/vue.jpg',
      vueBind: 'img/vue.jpg',
      vueShort: 'img/vue-shorthand.jpg'
    },
    methods: {
      changeImg: function () {
        this.image = (this.image != this.vueBind) ? this.image = this.vueBind : this.image = this.vueShort;
      }
    }
  }
);