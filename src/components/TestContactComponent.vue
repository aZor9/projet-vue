<template>
  <div class="text-center mt-5">
    <button @click="fetchData" class="btn btn-info shadow">Click Me!</button>
  </div>
</template>

<script>
export default {
  name: 'TestContactComponent',
  data() {
    return {
      nom: "",
      mail: "",
      message: ""
    };
  },
  methods: {
    async fetchData() {
      const message = {
        content: `**VIDE**`
      };

      fetch("https://discord.com/api/webhooks/1309485318969495572/IHGFgyq3BCa0c4heSp4vTMNnAgrJFsqkomH3xjoG_WcZo7ip8MztNOPuHyljpna8nMsb", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            avatar_url: "https://www.fffuel.co/images/dddepth/dddepth-327.jpg",
            user_name: "Le receveur de message",
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