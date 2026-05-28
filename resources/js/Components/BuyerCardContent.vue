<template>
    <v-row class="pb-3 px-3" dense>
        <div v-if="metrics.length <= 0" class="text-body-small px-4">Sem métricas para exibir</div>
        <v-col v-else v-for="metric in metrics" :key="metric.title" cols="12" sm="6">
            <BuyerMetricCard
                :title="metric.title"
                :value="metric.value"
                :detail="metric.detail"
                :progress="metric.progress"
                :accent="metric.accent"
            />
        </v-col>
    </v-row>
</template>

<script setup>
import BuyerMetricCard from './BuyerMetricCard.vue';

defineProps({
    metrics: {
        type: Array,
        required: true,
        default: () => [],
    },
});
</script>
