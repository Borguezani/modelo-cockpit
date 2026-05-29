<template>
    <Header />
    <v-app full-height>
        <v-main>
            <slot/>
        </v-main>
    </v-app>
</template>
<script setup lang="ts">
import Header from './Header.vue';

</script>
