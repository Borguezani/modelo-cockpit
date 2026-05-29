<template>
    <div class="min-w-0">
        <p class="text-body-small text-medium-emphasis ma-0" style="line-height: 1.2;">
            {{ label }}
        </p>
        <h2 class="text-body-medium font-weight-bold text-white ma-0" style="line-height: 1.1;">
            {{ name }}
        </h2>
    </div>
</template>
<script setup>
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});
</script>
