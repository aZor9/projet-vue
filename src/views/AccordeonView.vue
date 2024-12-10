<template>
  <div class="accordion" id="accordionPrimary">
    <div class="accordion-item" v-for="(item, index) in items" :key="index">
      <h2 class="accordion-header">
        <button class="accordion-button"  :class="{ active: activeIndex === index }" type="button" @click="activeIndex = index" >
          {{ item.title }}
        </button>
      </h2>      
      <div class="accordion-body" v-show="activeIndex === index" >
        <div class="accordion-body">
          <slot :name="'content-' + index"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordeonView",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
};
</script>


<style>

.accordion-button.active {
  background-color: #007bff;
  color: white;
}

</style>