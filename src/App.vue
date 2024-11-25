<template>
  <div>
    <!-- <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p> -->
      
    <div>
      <NavigationComponent />
     </div>
  
    <div>
      <main>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>



  </div>
</template>


<script>
import NavigationComponent from './components/NavigationComponent.vue';

export default {
    data() {
        return {
            Texte1: 'Accueil',
            Texte2: 'Contact',
            Texte3: 'API',
            Teste4: '  '
        };
    },
    
    name: 'App',
      components: {
        NavigationComponent
      }
};
</script>

