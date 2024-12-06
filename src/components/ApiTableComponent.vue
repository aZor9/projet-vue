<template>
    <div class="mt-4 mx-5 px-5">
      <h1 class="text-center">Formater un retour API</h1>
  
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
      <form @submit.prevent="validationTableTest" class="text-center">
        <button type="submit" class="btn btn-success mt-4 px-4 shadow-sm">Transmettre</button>
      </form>
  
      <!-- Champ résultat -->
      <div class="my-5">
        <p class="form-label" v-if="rendu">Résultat :</p>
        <!-- <p class="form-control shadow-sm">{{ rendu }}</p> -->
        <!-- <div class="mb-5 border"></div> -->
      </div>

      <table id="tableau"></table>

    </div>
</template>
  
<script>
  export default {
    data() {
      return {
          inputJSON: "",
          rendu: ""
      };
    },
    methods: {

      validationTableTest() {
        let content;
        try {
          content = JSON.parse(this.inputJSON); // Convertir la chaîne JSON en objet/array
        } catch (e) {
          console.error("Invalid JSON input!", e);
          alert("Veuillez entrer un JSON valide.");
          return;
        }
  
        

    
        // Vérification pour s'assurer que le JSON est un tableau
        // if (!Array.isArray(content) || content.length === 0) {
        //     console.error("Invalid inputJSON: expected a non-empty array.");
        //     return;
        // }
    
        let body = document.getElementById("tableau");
    
        // Vérification pour s'assurer que l'élément existe
        if (!body) {
            console.error("Element with id 'tableau' not found!");
            return;
        }
    
        // Suppression de tout tableau existant pour éviter les doublons
        body.innerHTML = "";
    
        // Création de la table et de son corps
        let tbl = document.createElement("table");
        let tblBody = document.createElement("tbody");
    
        // Ajout d'une ligne d'en-tête avec les clés du premier objet
        let headerRow = document.createElement("tr");
        let keys = Object.keys(content[0]); // Suppose que tous les objets ont les mêmes clés
        keys.forEach((key) => {
            let headerCell = document.createElement("th");
            headerCell.textContent = key;
            headerRow.appendChild(headerCell);
        });
        tblBody.appendChild(headerRow);
    
        // Ajout des lignes avec les valeurs des objets
        content.forEach((item) => {
            let row = document.createElement("tr");
    
            keys.forEach((key) => {
                let cell = document.createElement("td");
                cell.textContent = item[key] !== undefined ? item[key] : ""; // Gestion des valeurs undefined
                row.appendChild(cell);
            });
    
            tblBody.appendChild(row);
        });
    
        tbl.appendChild(tblBody);
        body.appendChild(tbl);
    
        // Ajout de styles (par exemple : bordures)
        tbl.setAttribute("border", "2");
        tbl.style.width = "100%";
        tbl.style.borderCollapse = "collapse";
    },
    
    
    
      validationTable() {
      var tbl = document.getElementById("tableau");
      tbl.innerHTML = "";
      for (var r = 0; r < 3; r++) {
        var row = document.createElement("tr");
        for (var i = 0; i < 5; i++) {
          var cell = document.createElement("td");
          cell.className = "py-2 px-3";
          var cellText = document.createTextNode("Ligne " + (i + 1) + " | Colonne " + (r + 1));
          cell.appendChild(cellText);
          row.appendChild(cell);
          cell.style.border = "1px solid black";
          
        }
        tbl.appendChild(row);
        row.style.border = "1px solid black";
      }
      
      tbl.setAttribute("border", "2");
      // tbl.className = "border";
    }

    
    // https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON
  }
};
</script>