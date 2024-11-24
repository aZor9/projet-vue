<template>
  <div id="contact-page">
    <!-- <NavigationComponent /> -->
    <TextImageComponent />
    <!-- <MonComposant /> -->
  </div>
</template>

<script>
// import MonComposant from './MonComposant.vue';
// import NavigationComponent from './NavigationComponent.vue';
import TextImageComponent from './TextImageComponent.vue';

export default {
  name: 'ContactComponent',
  components: {
    // MonComposant,
    // NavigationComponent,
    TextImageComponent,
  },
};
</script>

<style>
#contact-page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
