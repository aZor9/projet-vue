<template>
    <div class="shadow rounded w-75 container d-flex flex-column align-items-center my-4 py-4">
        <div class=" rounded w-75 container d-flex flex-column  justify-content-center align-items-center my-2 py-2 form-group">
            <h1>{{ texte }}</h1>
        </div>
        <div class=" rounded w-75 container d-flex flex-column  justify-content-center my-2 py-2 form-group align-items-center">
            <img :src="image_src" :alt="image_alt"  style="text-align: center; width: 255px;">
        </div>
    </div>
</template>



<script>
export default {
    data() {
        return {
            texte: 'Composant Texte et Image',
            image_src: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
            image_alt: 'Google Logo'
        };
    }
};
</script>