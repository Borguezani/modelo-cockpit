<template>
    <v-chip
        :color="color"
        variant="tonal"
        class="font-weight-medium px-4 border-0"
        size="large"
    >
        <v-icon v-if="icon" start size="small">
            {{ icon }}
        </v-icon>

        <span v-if="count !== undefined" class="mr-1">
            {{ count }}
        </span>

        <span>{{ label }}</span>
    </v-chip>
</template>

<script setup>
    defineProps({
    label: {
        type: String,
        required: true,
    },
    count: {
        type: [Number, String],
        required: false,
        default: undefined,
    },
    icon: {
        type: String,
        required: false,
        default: undefined,
    },
    color: {
        type: String,
        required: false,
        default: 'primary',
    }
});
</script>

<style lang="scss" scoped>

</style>
