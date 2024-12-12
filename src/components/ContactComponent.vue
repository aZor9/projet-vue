<template>
  <div id="contact-page" class="mt-4">
    <h1 class="text-center">Contacte-Nous !!</h1>

    <div class="container mt-4">
      <div class="my-2">
        <p class="form-label">Nom</p>
        <input v-model="nom" type="text" class="form-control shadow-sm" placeholder="Votre nom" />
        <div v-if="nomError" style="color: red; font-size: 12px;">Nom invalide (ne doit pas contenir de chiffres)</div>
      </div>

      <div class="my-2">
        <p class="form-label">Adresse E-mail</p>
        <input v-model="mail" type="email" class="form-control shadow-sm" placeholder="Votre E-mail" />
        <div v-if="emailError" style="color: red; font-size: 12px;">E-mail invalide (doit être au format example@domain.com)</div>
      </div>

      <div class="my-2">
        <p class="form-label">Message</p>
        <textarea v-model="message" class="form-control shadow-sm" placeholder="Votre Message"></textarea>
        <div v-if="messageError" style="color: red; font-size: 12px;">Le message ne peut pas être vide</div>
      </div>

      <form @submit.prevent="envoyerDonneesContact" class="text-center">
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
      message: "",
      avatar_url: "https://www.fffuel.co/images/dddepth/dddepth-327.jpg", // Avatar de du bot discord
      username: "Le receveur de message", // Nom du bot discord
      nomError: false,
      emailError: false,
      messageError: false,
    };
  },
  methods: {
    // Validation du formulaire de contact
    validateFormContact() {
      if (this.nom.trim() === "" || /\d/.test(this.nom)) {
        this.nomError = true;
      } else {
        this.nomError = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.mail.trim())) {
        this.emailError = true;
      } else {
        this.emailError = false;
      }

      if (this.message.trim() === "") {
        this.messageError = true;
      } else {
        this.messageError = false;
      }

      return !this.nomError && !this.emailError && !this.messageError;
    },

    // Envoi des données du formulaire de contact
    async envoyerDonneesContact() {
      if (this.validateFormContact()) {
        const message = {
          content: `**Nom :** ${this.nom}\n**E-mail :** ${this.mail}\n**Message :**\n${this.message}`
        };

        fetch("https://discord.com/api/webhooks/1309485318969495572/IHGFgyq3BCa0c4heSp4vTMNnAgrJFsqkomH3xjoG_WcZo7ip8MztNOPuHyljpna8nMsb", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            avatar_url: this.avatar_url,
            username: this.username,
            embeds: [
              {
                title: "Nouveau message reçu ",
                description: message.content,
                color: 16032781,
              }
            ]
          })
        }).then(response => {
          if (response.ok) {
            console.log("Message envoyé avec succès !");
            alert("Message envoyé");
            this.nom = "";
            this.mail = "";
            this.message = ""; 
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
</script>
