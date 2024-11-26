<template>
  <div id="contact-page">
    <h1 class="text-center">Contacte-Nous !!</h1>

  <div class="container mt-5">
    
    
    <div class="my-2">  
      <p class="form-label">Nom</p>
      <input v-model="nom" type="text" class="form-control shadow-sm" placeholder="Votre nom" />
    </div>
    
    <div class="my-2">  
      <p class="form-label">Adresse E-mail</p>
      <input v-model="mail" type="mail" class="form-control shadow-sm" placeholder="Votre E-mail" />
    </div>

    <div class="my-2">  
      <p class="form-label">Message</p>
      <textarea v-model="message" type="text" class="form-control shadow-sm" placeholder="Votre Message"></textarea>
    </div>

    <form @submit.prevent="envoyerDonnees">
        <button type="submit" class="btn btn-primary mt-4 px-4 shadow-sm">Envoyer</button>
    </form>
  </div>









  </div>
</template>


<script>
export default {
  name: 'ContactComponent',
  data() {
    return {
      nom: "",
      mail: "",
      message: ""
    };
  },
  methods: {
    async envoyerDonnees() {
      // Construire le contenu à envoyer au webhook Discord
      const payload = {
        content: `**Nouveau message reçu :**\n\n**Nom :** ${this.nom}\n**E-mail :** ${this.mail}\n**Message :**\n${this.message}`
      };

      try {
        // Remplacer par ton URL de webhook Discord
        const webhookUrl = "https://discord.com/api/webhooks/1309485318969495572/IHGFgyq3BCa0c4heSp4vTMNnAgrJFsqkomH3xjoG_WcZo7ip8MztNOPuHyljpna8nMsb";

        // Envoyer les données au webhook Discord
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload) // Convertir le payload en JSON
        });

        if (response.ok) {
          // Afficher un message de succès
          alert("Message envoyé avec succès sur Discord !");
          console.log("Webhook Discord réponse :", await response.json());

          // Réinitialiser les champs
          this.nom = "";
          this.mail = "";
          this.message = "";
        } else {
          // En cas d'erreur côté serveur Discord
          alert("Erreur lors de l'envoi du message à Discord.");
          console.error("Erreur serveur :", response.statusText);
        }
      } catch (error) {
        // Gestion des erreurs réseau
        alert("Impossible de contacter le serveur Discord.");
        console.error("Erreur réseau :", error);
      }
    }
  }
};
</script>




https://rapidapi.com/guides/fetch-api-with-vue
https://discord.com/api/webhooks/1309485318969495572/IHGFgyq3BCa0c4heSp4vTMNnAgrJFsqkomH3xjoG_WcZo7ip8MztNOPuHyljpna8nMsb