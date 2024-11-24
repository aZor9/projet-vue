<template>
    <div>
        <h1>{{ texte }}</h1>
        <img :src="image_src" :alt="image_alt">
    </div>
</template>


<script>
export default {
    data() {
        return {
            texte: 'Hello World',
            image_src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
            image_alt: 'Google Logo'
        };
    }
};
</script>