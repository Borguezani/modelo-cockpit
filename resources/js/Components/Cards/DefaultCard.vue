<template>
    <VCard
        elevation="2"
        class="default-card"
        :class="[background, { 'cursor-pointer': clickable }]"
        @click="handleClick"
    >
        <slot />
    </VCard>
</template>

<script setup>
const emit = defineEmits(['handleClick']);

const props = defineProps({
    background: {
        type: String,
        default: 'bg-surface',
    },
    clickable: {
        type: Boolean,
        default: false,
    },
});

function handleClick() {
    if (!props.clickable) {
        return;
    }

    emit('handleClick');
}
</script>

<style lang="scss" scoped>

.default-card {
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 22px 50px rgba(11, 20, 35, 0.28);
    color: #f7f9fd;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &.cursor-pointer:hover {
        transform: translateY(-4px);
        box-shadow: 0 18px 28px rgba(13, 71, 161, 0.12) !important;

        :deep(.icon-button-active) {
            color: #ffffff !important;
        }
    }
}
</style>
