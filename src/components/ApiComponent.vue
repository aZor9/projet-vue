<template>
  <!-- <h1>texte </h1> -->
  <div id="api-page" class="mt-4">
    <h1 class="text-center">Contacter une API</h1>

    <div class="container mt-4">
      <!-- Champ URL -->
      <div class="my-2">
        <p class="form-label">URL</p>
        <input v-model="url" type="text" class="form-control shadow-sm" placeholder="Votre url" />
        <div v-if="urlError" style="color: red; font-size: 12px;">L'URL ne peut pas être vide</div>
      </div>

      <!-- Champ Methode -->
      <div class="my-2">
        <p class="form-label">Methode (A choisir)</p>
        <select name="pets" v-model="methode" id="pet-select" class="form-select shadow-sm">
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PULL">PULL</option>
          <option value="DELETE">DELETE</option>
        </select>
        <div v-if="methodeError" style="color: red; font-size: 12px;">La méthode doit être "GET", "POST", "PUT" ou "DELETE"</div>
      </div>

      <p class="d-none">
        https://jsonplaceholder.typicode.com/posts
        
        {
          "title" : "Test Title",
          "body" : "This a test body",
          "userId" : 123
        }
      </p>

      <!-- Champ Parametre -->
      <div class="my-2">
        <p class="form-label">Paramètres</p>
        <textarea v-model="parametre" class="form-control shadow-sm" placeholder="Votre Parametre"></textarea>
        <div v-if="parametreError" style="color: red; font-size: 12px;">Le paramètre ne peut pas être vide</div>
      </div>

      <!-- Bouton envoyer -->
      <form @submit.prevent="envoyerDonnees" class="text-center">
        <button type="submit" class="btn btn-primary mt-4 px-4 shadow-sm">Transmettre</button>
      </form>
    </div>

    <div class="container" v-if="resultat">
      <!-- Champ resultat -->
      <div class="mt-5">
        <p class="form-label">Resultat : </p>
        <p class="form-control shadow-sm"> {{ resultat }}</p>
      </div>
    </div>
  </div>
</template>

<script >
  export default {
    data() {
      return {
        url: "https://www.data.gouv.fr/api/1/datasets/",
        methode: "GET",
        parametre: "",
        resultat: "",
        urlError: false,
        methodeError: false,
        parametreError: false
      };
    },
    methods: {
      validateForm() {
        // Vérification du champ URL
        if (this.url.trim() === "" || !/^https?:\/\/.+\..+/.test(this.url)) {
          this.urlError = true;
        } else {
          this.urlError = false;
        }

        // Vérification du champ Méthode
        const validMethods = ["GET", "POST", "PUT", "DELETE"];
        if (this.methode.trim() === "" || !validMethods.includes(this.methode.toUpperCase())) {
          this.methodeError = true;
        } else {
          this.methodeError = false;
        }

        // Vérification du champ Paramètres (ne fonctionne pas)
        // try {
        //   if (this.parametre.trim() === "") {
        //     this.parametreError = true;
        //   } else {
        //     JSON.parse(this.parametre);
        //     this.parametreError = false;
        //   }
        // } catch {
        //   this.parametreError = true;
        // }

        // Retourne true si tous les champs sont valides
        return !this.urlError && !this.methodeError && !this.parametreError;
      },

      async envoyerDonnees() {
        if (this.validateForm()) {
          try {
            const options = {
              method: this.methode,
            };

            // Ajouter le body et les headers pour les requêtes POST et PUT
            if (this.methode === "POST" || this.methode === "PUT") {
              options.headers = {
                "Content-Type": "application/json",
              };
              options.body = this.parametre;
            }

            const reponse = await fetch(this.url, options);

            // Affichage de la reponse et/ou des erreurs
            if (reponse.status == 200) {
              console.log("Status : ", reponse.status);
            } else {
              console.error("Status : ", reponse.status);
            }
            this.resultat = await reponse.json()
            this.resultat = JSON.stringify(this.resultat, null, 2);
            console.log(typeof this.resultat);
          } catch (error) {
            console.error(`Erreur lors du téléchargement : ${error.message}`);
          }
        } else {
          console.log("Erreur dans le formulaire");
        }
      }
    },
  }

</script>