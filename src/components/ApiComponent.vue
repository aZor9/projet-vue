<template>
 <h1>texte </h1>
 <div id="api-page" class="mt-4">
    <h1 class="text-center">Contacter une API</h1>

    <div class="container mt-4">
      <!-- Champ URL -->
      <div class="my-2">
        <p class="form-label">URL</p>
        <input v-model="url" type="text" class="form-control shadow-sm" placeholder="Votre nom" />
        <!-- <div v-if="urlError" style="color: red; font-size: 12px;">L'URL ne peut pas être vide</div> -->
      </div>

      <!-- Champ Methode -->
      <div class="my-2">
        <p class="form-label">Adresse Methode</p>
        <input v-model="methode" type="text" class="form-control shadow-sm" placeholder="Votre E-mail" />
        <!-- <div v-if="methodeError" style="color: red; font-size: 12px;">La méthode ne peut pas être vide</div> -->
      </div>

      <!-- Champ parametre -->
      <div class="my-2">
        <p class="form-label">Paramètres</p>
        <textarea v-model="parametre" class="form-control shadow-sm" placeholder="Votre Parametre"></textarea>
        <!-- <div v-if="parametreError" style="color: red; font-size: 12px;">Le paramètre ne peut pas être vide</div> -->
      </div>

      <!-- Bouton envoyer -->
      <form @submit.prevent="envoyerDonnees">
        <button type="submit" class="btn btn-primary mt-4 px-4 shadow-sm">Transmettre</button>
      </form>
    </div>
  </div>

</template>

<script >
  
// let url_api = "https://api.themoviedb.org/3/movie/550?api_key=1f54bd990f1cdfb230adb312546d765d";

// async function afficherFilms() {
//     try {
//     const reponse = await fetch(url_api);
//     console.log("Téléchargement terminé", reponse);
//   } catch (error) {
//     console.error(`Erreur lors du téléchargement : ${error.message}`);
//   }

// }



// afficherFilms();








export default {
  name: 'ApiComponent',
  data() {
    return {
      url: "",
      methode: "",
      parametre: "",
    //   nomError: false,
    //   emailError: false,
    //   messageError: false,
    };
  },
  methods: {
    // validateForm() {
    //   if (this.nom.trim() === "" || /\d/.test(this.nom)) {
    //     this.nomError = true;
    //   } else {
    //     this.nomError = false;
    //   }

    //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //   if (!emailRegex.test(this.mail.trim())) {
    //     this.emailError = true;
    //   } else {
    //     this.emailError = false;
    //   }

    //   if (this.message.trim() === "") {
    //     this.messageError = true;
    //   } else {
    //     this.messageError = false;
    //   }

    //   return !this.nomError && !this.emailError && !this.messageError;
    // },
    
    
    async envoyerDonnees() {
        if (validateForm) {
            const message = {
                content: `**Nom :** ${this.nom}\n**E-mail :** ${this.mail}\n**Message :**\n${this.message}`
            };
            
            fetch("https://discord.com/api/webhooks/1309485318969495572/IHGFgyq3BCa0c4heSp4vTMNnAgrJFsqkomH3xjoG_WcZo7ip8MztNOPuHyljpna8nMsb", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    avatar_url: "https://www.fffuel.co/images/dddepth/dddepth-327.jpg",
                    username: "Le receveur de message",
                    embeds: [
                        {
                            title: "Nouveau message reçu",
                            description: message.content,
                            color: 16032781,
                        }
                    ]
                })
        }).then(response => {
            if (response.ok) {
                console.log("Message envoyé avec succès !");
            } else {
                console.error("Erreur lors de l'envoi :", response.statusText);
            }
        }).catch(error => {
            console.error("Erreur réseau :", error);
        });
        } else {
            console.log("Formulaire invalide");
        }
    },
},
};




let validateForm = true;










</script>