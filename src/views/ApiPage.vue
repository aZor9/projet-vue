
<template>
    <div>

        <div class="container">
            <TestApiComponent />
        </div>
        
        <div class="container">
            <ApiComponent />
        </div>
    </div>
</template>

<script setup >
    import TestApiComponent from '@/components/TestApiComponent.vue';

    import ApiComponent from '@/components/ApiComponent.vue';
</script>