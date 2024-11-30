<template>
      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-2 shadow-sm">
          <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                      <li class="nav-item border rounded mx-2 my-2 px-2">
                          <router-link to="/"  class="nav-link" aria-current="page">{{ Texte1 }}</router-link>
                      </li>
                      <li class="nav-item border rounded mx-2 my-2 px-2">
                          <router-link to="/contact"  class="nav-link" aria-current="page">{{ Texte2 }}</router-link>
                      </li>
                      <li class="nav-item border rounded mx-2 my-2 px-2">
                          <router-link to="/api"  class="nav-link" aria-current="page">{{ Texte3 }}</router-link>
                      </li>
                      <li class="nav-item border rounded mx-2 my-2 px-2">
                          <router-link to="/other"  class="nav-link" aria-current="page">{{ Texte4 }}</router-link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
</template>
 

<script>
  export default {
      data() {
          return {
              Texte1: 'Accueil',
              Texte2: 'Contact',
              Texte3: 'API',
              Texte4: 'Autre'
          };
      }
  };
</script>


