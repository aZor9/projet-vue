<template>
    <div class="mt-4 mx-5 px-5">
      <h1 class="text-center mb-4">Formater un retour API</h1>
  
      <div class="my-2">
        <textarea 
          v-model="inputJSON" 
          class="form-control shadow-sm" 
          placeholder="Votre JSON">
        </textarea>
      </div>
  
      <form @submit.prevent="validationTable" class="text-center">
        <button type="submit" class="btn btn-success mt-4 px-4 shadow-sm">Transmettre</button>
      </form>
  
      <div class="my-5">
        <p class="form-label" v-if="rendu">Résultat :</p>
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

      validationTable() {
        let content;
        try {
          content = JSON.parse(this.inputJSON); 
        } catch (e) {
          console.error("Invalid JSON input!", e);
          alert("Veuillez entrer un JSON valide.");
          return;
        }
    
        let body = document.getElementById("tableau");
    
        body.innerHTML = "";
    
        let tbl = document.createElement("table");
        tbl.classList.add("table", "table-bordered", "table-striped", "table-hover");
        let tblBody = document.createElement("tbody");
    
        let headerRow = document.createElement("tr");
        let keys = Object.keys(content[0]); 
        keys.forEach((key) => {
            let headerCell = document.createElement("th");
            headerCell.textContent = key;
            headerCell.className = "text-center p-2";
            headerRow.appendChild(headerCell);
        });
        tblBody.appendChild(headerRow);
    
        content.forEach((item) => {
            let row = document.createElement("tr");
    
            keys.forEach((key) => {
                let cell = document.createElement("td");
                cell.textContent = item[key] !== undefined ? item[key] : ""; 
                cell.className = "text-center p-1"; 
                if (key == "title") {
                  cell.textContent = cell.textContent.toUpperCase();
                  row.appendChild(cell);
                } else {
                  row.appendChild(cell);
                }
            });
    
            tblBody.appendChild(row);
        });
    
        tbl.appendChild(tblBody);
        body.appendChild(tbl);
    
        tbl.setAttribute("border", "2");
        tbl.style.width = "100%";
        tbl.style.borderCollapse = "collapse";
    }

    
    // https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON
  }
};
</script>




<!-- 
[
{
    "title" : "Test Title",
    "body" : "This a test body",
    "userId" : 123
},
{
    "title" : "Test Title 2",
    "body" : "This a test body 2",
    "userId" : 456
},
{
    "title" : "Test Title 3",
    "body" : "This a test body 3",
    "userId" : 789
},
{
    "title" : "Test Title 4",
    "body" : "This a test body 4",
    "userId" : 101112
}
] 
-->