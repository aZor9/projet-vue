<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <div class="container-fluid">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" :href="Lien1">{{ Texte1 }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" :href="Lien2">{{ Texte2 }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" :href="Lien3">{{ Texte3 }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            Texte1: 'Accueil',
            Lien1: <RouterLink to="/"></RouterLink>,
            Texte2: 'Contact',
            Lien2: <RouterLink to="/contact"></RouterLink>,
            Texte3: 'API',
            Lien3: '#'
        };
    }
};
</script>