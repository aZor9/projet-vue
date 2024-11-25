<template>
  <div id="app">
    <!-- <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p> -->

    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item shadow-sm">
                        <router-link to="/"  class="nav-link" aria-current="page">{{ Texte1 }}</router-link>
                    </li>
                    <li class="nav-item shadow-sm">
                        <router-link to="/contact"  class="nav-link" aria-current="page">{{ Texte2 }}</router-link>
                    </li>
                    <li class="nav-item shadow-sm">
                        <a class="nav-link" aria-current="page" href="#">{{ Texte3 }}</a>
                    </li>
                    <li class="nav-item shadow-sm">
                        <a class="nav-link" aria-current="page" href="#">{{ Texte4 }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <!-- <div>
      <TextImageComponent />
    </div> -->
  </div>
</template>


<script>
// import TextImageComponent from './components/TextImageComponent.vue';
export default {
    data() {
        return {
            Texte1: 'Accueil',
            Texte2: 'Contact',
            Texte3: 'API',
            Teste4: '  '
        };
    },
    
    // name: 'App',
    //   components: {
    //     TextImageComponent
    //   }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
