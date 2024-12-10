
<template >

    <div class="m-4">
        <AccordeonView :items="accordionItems" >
            <template v-slot:content-0>
                <ApiTableComponent />
            </template>
            <template v-slot:content-1>
                <ApiChuckNorrisComponent />
            </template>
        </AccordeonView>
    </div>

</template>

<script >
import ApiTableComponent from '@/components/ApiTableComponent.vue';
import AccordeonView from './AccordeonView.vue';
import ApiChuckNorrisComponent from '@/components/ApiChuckNorrisComponent.vue';

export default {
  components: {
    AccordeonView, 
    ApiTableComponent,
    ApiChuckNorrisComponent
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