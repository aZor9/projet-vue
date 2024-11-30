<template>
    <div class="mt-4 mx-5 px-5">
      <h1 class="text-center">Contacter une API</h1>
  
      <!-- Champ Paramètre -->
      <div class="my-2">
        <p class="form-label">Paramètres</p>
        <textarea 
          v-model="inputJSON" 
          class="form-control shadow-sm" 
          placeholder="Votre JSON">
        </textarea>
      </div>
  
      <!-- Bouton envoyer -->
      <form @submit.prevent="validationTable">
        <button type="submit" class="btn btn-success mt-4 px-4 shadow-sm">Transmettre</button>
      </form>
  
      <!-- Champ résultat -->
      <div class="my-5">
        <p class="form-label">Résultat :</p>
        <p class="form-control shadow-sm">{{ rendu }}</p>
      </div>



      <div id="test" class="mb-5"></div>


    </div>
</template>
  
<script>
  export default {
    data() {
      return {
          inputJSON: "",
          rendu: ".."
      };
    },
    methods: {
      validationTable() {
        let content = this.inputJSON;
        let ParentheseOuverte = 0;
        for (let i = 0; i < content.length; i++) {
          if (content[i] === ",") {
            // content = content.replace(",", "<br>");
            if (ParentheseOuverte != 0) {
              for (let j = 0; j < ParentheseOuverte; j++) {
                content = content.replace(",", "<br>&nbsp;");
              }
            } else {
              content = content.replace(",", "<br>");
            }
          } else if (content[i] === "{") {
            ParentheseOuverte++;
            // content = content.replace("{", "<br>&nbsp;--");
          } else if (content[i] === "}") {
            ParentheseOuverte--;
            // content = content.replace("}", "<br>&nbsp;--");
          } else if (content[i] === '"') {
            content = content.replace('"', " ");
          }
        }
        // content = content.replace("{", "\n\n");
        this.rendu = content;
        let test = document.getElementById("test");
        test.innerHTML = content;



        // https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON

      }
    }
  };
</script>