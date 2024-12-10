<template>
    <div>
        
        <div>
            <TextComponent />
        </div>

        <div>
            <TextImageComponent />
        </div>
  
    </div>
</template>
  
<script>
import TextComponent from '@/components/TextComponent.vue';
import TextImageComponent from '@/components/TextImageComponent.vue';
  
  export default {
      name: 'App',
        components: {
            TextComponent,
            TextImageComponent
        }
  };

</script>
  
  