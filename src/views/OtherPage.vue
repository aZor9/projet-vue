
<template>
    <div>

        <div>
            <VideComponent />
        </div>
        
        <div>
            <TestContactComponent />
        </div>

        <div>
            <ApiTableComponent />
        </div>

    </div>
</template>

<script setup >
import TestContactComponent from '@/components/TestContactComponent.vue';
import VideComponent from '@/components/VideComponent.vue';
import ApiTableComponent from '@/components/ApiTableComponent.vue';
</script>