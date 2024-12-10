<template >
  <div id="api-page" class="my-4">
    <h1 class="text-center">Message de Chuck Norris</h1>
    
      <div class="container my-4" v-if="resultat">
          <p class="form-control shadow-sm"> {{ resultat }}</p>
      </div>

      <div class="container">
        <form @submit.prevent="envoyerDonnees" class="text-center">
          <button type="submit" class="btn btn-info px-4 shadow-sm">Actualiser</button>
        </form>
      </div>

  </div>

</template>

<script >
  export default {
    data() {
      return {
        url: "https://api.chucknorris.io/jokes/random",
        resultat: "Retour de L'API"
      };
    },
    methods: {
      async envoyerDonnees() {
        try {
          const options = {
            method: "GET",
          };
          const reponse = await fetch(this.url, options);

          // Affichage de la reponse et/ou des erreurs
          if (reponse.status != 200) {
            console.error("Status : ", reponse.status);
          }
          this.resultat = await reponse.json()
          this.resultat = JSON.stringify(this.resultat.value, null, 2);
          console.log(typeof this.resultat);
        } catch (error) {
          console.error(`Erreur lors de l'appel GET : ${error.message}`);
        }
      }
    },
  }

</script>