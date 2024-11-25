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

    <form>
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
      nom : "",
      mail : "",
      message : ""
    }
  }
};
</script>