<template>
    <div class="buyer-card-content">
        <BuyerMetricCard
            v-for="metric in metrics"
            :key="metric.title"
            :title="metric.title"
            :value="metric.value"
            :detail="metric.detail"
            :progress="metric.progress"
            :accent="metric.accent"
        />
    </div>
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

<style lang="scss" scoped>
.buyer-card-content {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
    padding: 0 1.15rem 1.1rem;
}

@media (max-width: 640px) {
    .buyer-card-content {
        grid-template-columns: 1fr;
    }
}
</style>
