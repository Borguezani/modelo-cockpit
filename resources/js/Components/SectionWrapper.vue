<template>
    <div class="d-flex">
        <div class="vertical-accent rounded-pill mt-2"></div>

        <div class="content grow pl-4">

            <div class="section-header d-flex align-center mb-6">
                <span class="section-title text-uppercase font-weight-bold text-caption mr-4">
                    {{ title }}
                </span>
                <v-divider class="border-opacity-25" :color="color"></v-divider>
            </div>
           <slot />
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    color: String,
});
</script>

<style lang="scss" scoped>
.vertical-accent {
    width: 4px;
    background-color: v-bind(color);
    min-height: 100%;
}

.section-title {
    color: v-bind(color);
    letter-spacing: 1.5px;
}
</style>
