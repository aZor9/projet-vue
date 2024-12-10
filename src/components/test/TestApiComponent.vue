<template>
  <h1>Texte API Test</h1>
</template>

<script>

let url_api = "https://api.themoviedb.org/3/movie/550?api_key=1f54bd990f1cdfb230adb312546d765d";
afficherFilms();

function afficherFilms(){
  try {
    const reponse = fetch(url_api);
    console.log("Téléchargement terminé", reponse);
  } catch (error) {
    console.error(`Erreur lors du téléchargement : ${error.message}`);
  }
  
}

</script>