<template>
  <div id="app">
    <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
    <nav>
      <!-- Utilisation correcte des balises pour Vue 2 -->
      <router-link to="/">Go to Home</router-link>
      <router-link to="/contact">Go to About</router-link>
    </nav>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MonComposant from './components/MonComposant.vue'
// import NavigationComponent from './components/NavigationComponent.vue';
// import TextImageComponent from './components/TextImageComponent.vue';

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }

// export default {
//   components: {
//     MonComposant,
//     NavigationComponent,
//     TextImageComponent 
//   },
// }


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
