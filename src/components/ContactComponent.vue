

<template>
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"> -->
  
    <div id="app">
      
      <NavigationComponent />
      <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <TextImageComponent/>
      <MonComposant />
    </div>
  </template>
  
  <script>
  // import HelloWorld from './components/HelloWorld.vue'
  import MonComposant from './components/MonComposant.vue'
  import NavigationComponent from './components/NavigationComponent.vue';
  import TextImageComponent from './components/TextImageComponent.vue';
  
  // export default {
  //   name: 'App',
  //   components: {
  //     HelloWorld
  //   }
  // }
  
  export default {
    components: {
      MonComposant,
      NavigationComponent,
      TextImageComponent 
    },
  }
  
  
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
  