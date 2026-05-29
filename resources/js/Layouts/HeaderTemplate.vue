<template>
    <Teleport to="#dynamic-header">
        <div class="d-flex flex-column flex-md-row align-start align-md-center justify-space-between pa-4 border-b ga-4" style="background-color: #1A1F2C; min-height: 80px;">

            <div class="d-flex flex-row flex-wrap align-center ga-4 w-100 w-md-auto">

                <div v-if="hasBackButton" class="d-flex align-center ga-4">
                    <div @click="$emit('handleBackButton')" class="handle-back-button text-body-2 text-medium-emphasis transition-colors">
                        <v-icon size="small" class="mr-1">{{ backButton.icon }}</v-icon>
                        <span class="d-none d-sm-inline">{{ backButton.label }}</span>
                    </div>
                    <div style="height: 24px; border-left: 1px solid rgba(255,255,255,0.1);"></div>
                </div>

                <div v-if="startIcon.value"
                     class="d-flex align-center justify-center rounded-lg flex-shrink-0"
                     style="width: 48px; height: 48px; background-color: rgba(255,255,255,0.05);">
                    <v-icon :color="startIcon.color">{{ startIcon.value }}</v-icon>
                </div>

                <div class="d-flex flex-column justify-center" style="min-width: 0;"> <h2 class="text-h6 font-weight-bold text-white ma-0 text-truncate" style="line-height: 1.2;">
                        {{ title }}
                    </h2>
                    <div class="text-body-2 text-medium-emphasis ma-0 mt-1 text-truncate" style="line-height: 1.2;">
                        {{ subtitle }}
                    </div>
                </div>
            </div>

            <div class="d-flex flex-wrap align-center ga-4 w-100 w-md-auto justify-start justify-md-end mt-2 mt-md-0">

                <v-btn
                    v-if="hasActionButton"
                    variant="tonal"
                    :color="actionButton.color"
                    @click="$emit('handleActionButton')"
                    class="text-none font-weight-medium rounded-lg"
                >
                    <template v-slot:prepend>
                        <v-icon>{{ actionButton.icon }}</v-icon>
                    </template>
                    {{ actionButton.label }}
                </v-btn>

                <slot name="extraActions"></slot>

                <div v-if="$slots.trailingInfo" class="d-flex align-center ga-4 text-body-2 text-medium-emphasis">
                    <div v-if="$slots.actions || hasActionButton" class="d-none d-sm-block" style="height: 24px; border-left: 1px solid rgba(255,255,255,0.1);"></div>
                    <slot name="trailingInfo"></slot>
                </div>

                <slot name="avatar"></slot>

            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { useSlots } from 'vue';

const slots = useSlots();
const emit = defineEmits(['handleBackButton', 'handleActionButton']);

defineProps({
    title: { type: String, required: false, default: '' },
    subtitle: { type: String, required: false, default: '' },
    startIcon: { type: Object, required: false, default: () => ({value: null, color: '#ffffff'}) },
    hasBackButton: { type: Boolean, required: false, default: false },
    backButton: {
        type: Object,
        required: false,
        default: () => ({ label: 'Voltar', icon: 'mdi-arrow-left' }),
    },
    hasActionButton: { type: Boolean, required: false, default: false },
    actionButton: {
        type: Object,
        required: false,
        default: () => ({ label: 'Ação', icon: 'mdi-dots-vertical', color: 'primary' }),
    },
});
</script>

<style lang="scss" scoped>
.handle-back-button {
    cursor: pointer;
    display: flex;
    align-items: center;
}
.handle-back-button:hover {
    color: #ffffff !important;
}
.transition-colors {
    transition: color 0.2s ease-in-out;
}
</style>
