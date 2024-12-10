<template>
    <div class="shadow rounded w-75 container d-flex flex-column align-items-center my-4 py-4">
        <h1>{{ texte }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            texte: 'Composant Texte'
        };
    }
};
</script>