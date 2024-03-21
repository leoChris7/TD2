<script>
import { onMounted, ref } from 'vue';
const data = ref();
const actualPok = ref(); 

const { onMounted } = require('vue');



async function fetchList(){
    const response = await fetch ('https://pvz-2-api.vercel.app/api/plants');
    data.value = await response.json();
}

onMounted(fetchList);
</script>

<template>
    <ul v-if="data && data.results">
        <li v-for="(pok, index) of data.results" :key="pok.url">
            <RouterLink :to="{name:'index'}">Index</RouterLink>
        </li>
    </ul>
    
    <a href="/login">Login</a>
</template>