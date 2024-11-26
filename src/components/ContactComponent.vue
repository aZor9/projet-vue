<template>
  <div id="contact-page" class="mt-4">
    <h1 class="text-center">Contacte-Nous !!</h1>

    <div class="container mt-4">
      
      
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
      const message = {
        content: `**Nom :** ${this.nom}\n**E-mail :** ${this.mail}\n**Message :**\n${this.message}`
      };

      fetch("https://discord.com/api/webhooks/1309485318969495572/IHGFgyq3BCa0c4heSp4vTMNnAgrJFsqkomH3xjoG_WcZo7ip8MztNOPuHyljpna8nMsb", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            embeds: [
            {
              title: "Nouveau message reçu",
              description: message.content,
              color: 16032781, 
            }]
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
    },
  },
};
</script>




https://rapidapi.com/guides/fetch-api-with-vue
https://discord.com/api/webhooks/1309485318969495572/IHGFgyq3BCa0c4heSp4vTMNnAgrJFsqkomH3xjoG_WcZo7ip8MztNOPuHyljpna8nMsb