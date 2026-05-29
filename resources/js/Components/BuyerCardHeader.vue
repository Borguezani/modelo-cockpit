<template>
    <div
        class="buyer-card-header d-flex align-center justify-space-between pa-4"
        :class="{ 'cursor-pointer': clickable }"
        @click="handleClick"
    >
        <div class="d-flex align-center ga-4 min-w-0">
            <v-avatar
                size="40"
                class="font-weight-bold text-white border"
                style="
                    background: linear-gradient(180deg, rgba(55, 68, 94, 0.98), rgba(35, 47, 70, 0.98));
                    border-color: rgba(129, 148, 177, 0.65) !important;
                    letter-spacing: 0.05em;
                "
            >
                {{ initials }}
            </v-avatar>

            <labeled-title :label="label" :name="name" />

        </div>

        <div class="actions d-flex align-center ga-1">
            <v-icon size="x-small" class="icon-button icon-button-active" :icon="leadingIcon" :size="iconSize" />
            <v-icon size="x-small" class="icon-button icon-button-active" :icon="trailingIcon" :size="iconSize" />
        </div>
    </div>
</template>

<script setup>
import LabeledTitle from './LabeledTitle.vue';

const emit = defineEmits(['handleClick']);

const props = defineProps({
    clickable: {
        type: Boolean,
        default: false,
    },
    initials: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    leadingIcon: {
        type: String,
        default: 'mdi-eye-outline',
    },
    trailingIcon: {
        type: String,
        default: 'mdi-chevron-right',
    },
    iconSize: {
        type: [Number, String],
        default: 22,
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
.actions {
    color: rgba(236, 242, 251, 0.72);
    transition: color 0.2s ease;
}

.icon-button {
    color: rgba(236, 242, 251, 0.72);
}
</style>
