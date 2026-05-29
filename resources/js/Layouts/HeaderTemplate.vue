<template>
    <Teleport to="#dynamic-header">
        <div class="d-flex flex-row align-center justify-space-between bg-header-background pa-6">
            <div class="d-flex flex-row align-center ga-4">
                <div class="d-flex align-center ga-4">
                    <div v-if="hasBackButton" @click="$emit('handleBackButton')" class="handle-back-button text-body-small text-medium-emphasis">
                            <v-icon left>{{ backButton.icon }}</v-icon>
                            {{ backButton.label }}
                    </div>
                </div>

                <div class="min-w-0">
                    <h2 class="text-body-medium font-weight-bold text-white ma-0" style="line-height: 1.1;">
                        {{ title }}
                    </h2>
                    <p class="text-body-small text-medium-emphasis ma-0" style="line-height: 1.2;">
                        {{ subtitle }}
                    </p>
                </div>
            </div>
            <div>
                <v-btn v-if="hasActionButton" variant="text" :color="actionButton.color" @click="$emit('handleActionButton')">
                    <v-icon class="mr-2">{{ actionButton.icon }}</v-icon>
                    {{ actionButton.label }}
                </v-btn>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { Teleport } from 'vue';

const emit = defineEmits(['handleBackButton', 'handleActionButton']);

defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: false,
        default: '',
    },
    hasBackButton: {
        type: Boolean,
        required: false,
        default: false,
    },
    backButton: {
        type: Object,
        required: false,
        default: () => ({
            label: 'Voltar',
            icon: 'mdi-arrow-left',
        }),
    },
    hasActionButton: {
        type: Boolean,
        required: false,
        default: false,
    },
    actionButton: {
        type: Object,
        required: false,
        default: () => ({
            label: 'Ação',
            icon: 'mdi-dots-vertical',
            color: '#ffffff',
         }),
    },
});


</script>

<style lang="scss" scoped>

    .handle-back-button {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 4px;

    }
    .handle-back-button:hover {
        color: #ffffff !important;
    }
</style>
