<template>
    <v-card
        class="d-flex flex-column justify-space-between pa-4"
        variant="outlined"
        color="rgba(255, 255, 255, 0.03)"
        style="background: rgba(255, 255, 255, 0.08); min-height: 100px;"
    >
        <div class="d-flex flex-column ga-1">
            <span class="text-body-small text-medium-emphasis">
                {{ title }}
            </span>

            <div class="d-flex align-baseline ga-2">
                <span class="text-body-small font-weight-bold text-white">
                    {{ value }}
                </span>
                <span v-if="detail" class="text-body-small text-medium-emphasis">
                    {{ detail }}
                </span>
            </div>
        </div>

        <v-progress-linear
            v-if="hasProgress"
            :model-value="progress"
            :color="accent"
            height="8"
            rounded
            bg-opacity="0.18"
        />
    </v-card>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
    detail: {
        type: String,
        default: '',
    },
    progress: {
        type: Number,
        default: null,
    },
    accent: {
        type: String,
        default: 'warning', // Pode receber hex ('#ffb300') ou cores do tema ('warning', 'success')
    },
});

const hasProgress = computed(() => props.progress !== null);
</script>
