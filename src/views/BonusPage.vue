
<template >

    <div class="m-4">
        <AccordeonView :items="accordionItems" >
            <template v-slot:content-0>
                <ApiTableComponent />
            </template>
            <template v-slot:content-1>
                <TextComponent />
            </template>
        </AccordeonView>
    </div>


</template>

<script >
import ApiTableComponent from '@/components/ApiTableComponent.vue';
import TextComponent from '@/components/TextComponent.vue';
import AccordeonView from './AccordeonView.vue';

export default {
  components: {
    AccordeonView, 
    TextComponent,
    ApiTableComponent
  },
  data() {
    return {
      accordionItems: [
        { title: "Tableau API" },
        { title: "Chuck Norris" },
      ],
    };
  },
};
</script>