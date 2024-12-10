<template>
  <div class="accordion" id="accordionPrimary">
    <div class="accordion-item" v-for="(item, index) in items" :key="index">
      <h2 class="accordion-header">
        <button class="accordion-button" :class="{ collapsed: index !== 0 }" type="button" data-bs-toggle="collapse"
          :data-bs-target="'#collapse' + index" aria-expanded="index === 0 ? 'true' : 'false'" :aria-controls="'collapse' + index" >
          {{ item.title }}
        </button>
      </h2>
      <div
        :id="'collapse' + index" class="accordion-collapse collapse" :class="{ show: index === 0 }"
        :aria-labelledby="'heading' + index" data-bs-parent="#accordionPrimary" >
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
};
</script>
