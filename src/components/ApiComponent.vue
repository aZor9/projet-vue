  <template>
  <!-- <h1>texte </h1> -->
  <div id="api-page" class="mt-4">
      <h1 class="text-center">Contacter une API</h1>

      <div class="container mt-4">
        <!-- Champ URL -->
        <div class="my-2">
          <p class="form-label">URL</p>
          <p>https://world.openfoodfacts.org/api/v2/product/737628064502.xml</p>
          <input v-model="url" type="text" class="form-control shadow-sm" placeholder="Votre nom" />
          <div v-if="urlError" style="color: red; font-size: 12px;">L'URL ne peut pas être vide</div>
        </div>

        <!-- Champ Methode -->
        <div class="my-2">
          <p class="form-label">Adresse Methode</p>
          <input v-model="methode" type="text" class="form-control shadow-sm" placeholder="Votre E-mail" />
          <div v-if="methodeError" style="color: red; font-size: 12px;">La méthode ne peut pas être vide</div>
        </div>

        <!-- Champ parametre -->
        <div class="my-2">
          <p class="form-label">Paramètres</p>
          <textarea v-model="parametre" class="form-control shadow-sm" placeholder="Votre Parametre"></textarea>
          <div v-if="parametreError" style="color: red; font-size: 12px;">Le paramètre ne peut pas être vide</div>
        </div>

        <!-- Bouton envoyer -->
        <form @submit.prevent="envoyerDonnees">
          <button type="submit" class="btn btn-primary mt-4 px-4 shadow-sm">Transmettre</button>
        </form>
      </div>

      <!-- Champ resultat -->
      <div class="m-2">
        <p class="form-label">Resultat : </p>
        <p class="form-control shadow-sm"> {{ resultat }}</p>
      </div>


    </div>

  </template>

  <script >


  export default {
    data() {
      return {
        url: "https://world.openfoodfacts.org/api/v2/product/737628064502.xml",
        methode: "",
        parametre: "",
        resultat: "..",
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
      // const validMethods = ["GET", "POST", "PUT", "DELETE", "PATCH"];
      // if (this.methode.trim() === "" || !validMethods.includes(this.methode.toUpperCase())) {
        // this.methodeError = true;
      // } else {
      //   this.methodeError = false;
      // }

      // Vérification du champ Paramètres
      // try {
      //   if (this.parametre.trim() === "") {
      //     this.parametreError = true;
      //   } else {
      //     JSON.parse(this.parametre); // Teste si c'est un JSON valide
      //     this.parametreError = false;
      //   }
      // } catch {
      //   this.parametreError = true;
      // }

      // Retourne true si tous les champs sont valides
      return !this.urlError && !this.methodeError && !this.parametreError;
    },











      // console.log("Le composant est prêt");
      async envoyerDonnees(){
        if (this.validateForm()) {
          try {
            const reponse = await fetch(this.url, {
              // method: this.methode,
              // headers: {
              //   "Content-Type": "application/json"
              // },
              // body: this.parametre
            });
            if (reponse.status == 200) {
              console.log("Message envoyé avec succès !", reponse);
              this.resultat = await reponse;
            } else {
              console.log("Erreur lors de l'envoi !");
            }
            console.log("Téléchargement terminé");
          } catch (error) {
            console.log("Erreur réseau !");
            console.error(`Erreur lors du téléchargement : ${error.message}`);
          }
        } else {
          console.log("Erreur dans le formulaire");
        }
        
      }
    },
  }

  // let url_api = "https://api.themoviedb.org/3/movie/550?api_key=1f54bd990f1cdfb230adb312546d765d";


  /*
  export default {
    data() {
      return {
        url: "",
        methode: "",
        parametre: ""
      //   urlError: false,
      //   methodeError: false,
      //   parametreError: false,
      };
    },
    methods: {
      
      async afficherFilms(){
        try {
          const reponse = await fetch(url_api);
          console.log("Téléchargement terminé", reponse);
        } catch (error) {
          console.error(`Erreur lors du téléchargement : ${error.message}`);
        }
        
      }
    
    
      
    },
    mounted: {
      let url_api = "https://api.themoviedb.org/3/movie/550?api_key=1f54bd990f1cdfb230adb312546d765d";
      afficherFilms();
      // console.log("Le composant est prêt");
    }
    
    





  */



  </script>