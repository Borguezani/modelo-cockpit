<template>
    <HeaderTemplate
        hasBackButton
        :backButton="{ icon: 'mdi-arrow-left', label: 'Voltar' }"
        :startIcon="{ value: 'mdi-chart-bar', color: '#8367F4' }"
        title="Dashboard"
        subtitle="Visão geral de compradores e vendedores"
        hasActionButton
        :actionButton="{ icon: 'mdi-domain', label: 'Portal Nestle', color: '#8367F4' }"
        @handleActionButton="handleActionButton"
        >
        <template #trailingInfo>
            <div class="d-flex align-center ga-2">
                <div class="rounded-circle bg-green" style="width: 8px; height: 8px;"></div>
                <span>Atualizado</span>
            </div>
            <div style="height: 16px; border-left: 1px solid rgba(255,255,255,0.1);"></div>
            <span>29/05/2026</span>
        </template>
        <template #extraActions>
             <v-btn
                        variant="tonal"
                        color="#8367F4"
                        class="text-none font-weight-medium rounded-lg"
                    >
                        teste
                    </v-btn>
        </template>
    </HeaderTemplate>
    <div class="px-4 py-6">
        <SectionWrapper title="Compradores" color="#8367F4">
            <v-row>
                <v-col v-for="n in 4" :key="n" cols="12" md="6" lg="3">
                    <DefaultCard clickable background="bg-surface" @handleClick="handleCardClick">
                        <BuyerCardHeader :clickable="metrics.length > 0" initials="MS" label="Comprador 002"
                            name="Maria" leading-icon="mdi-eye-outline" trailing-icon="mdi-chevron-right"
                            leading-action-aria-label="Visualizar desempenho"
                            trailing-action-aria-label="Abrir comprador" />

                        <BuyerCardContent :metrics="n === 4 ? [] : metrics" />
                    </DefaultCard>
                </v-col>
            </v-row>
        </SectionWrapper>
    </div>
    <div class="px-4 py-6">
        <SectionWrapper title="Vendedores" color="#22d3a6">
            <v-row>
                <v-col v-for="n in 4" :key="n" cols="12" md="6" lg="3">
                    <DefaultCard clickable background="bg-surface" @handleClick="handleCardClick">
                        <BuyerCardHeader :clickable="metrics.length > 0" initials="JS" label="Vendedor 001"
                            name="João Silva" leading-icon="mdi-eye-outline" trailing-icon="mdi-chevron-right"
                            leading-action-aria-label="Visualizar desempenho"
                            trailing-action-aria-label="Abrir vendedor" />

                        <BuyerCardContent :metrics="n === 4 ? [] : metrics" />
                    </DefaultCard>
                </v-col>
            </v-row>
        </SectionWrapper>
    </div>
</template>

<script setup>
import DefaultCard from '../Components/Cards/DefaultCard.vue';
import BuyerCardHeader from '../Components/BuyerCardHeader.vue';
import BuyerCardContent from '../Components/BuyerCardContent.vue';
import SectionWrapper from '../Components/SectionWrapper.vue';
import HeaderTemplate from '../Layouts/HeaderTemplate.vue';

const metrics = [
    {
        title: 'Venda R$ vs Meta',
        value: 'R$ 45k',
        detail: '/ R$ 100k',
        progress: 45,
        accent: '#ffb300',
    },
    {
        title: 'Venda % vs Meta %',
        value: '45%',
        detail: '/ 100%',
        progress: 45,
        accent: '#ffb300',
    },
    {
        title: 'Valor Compras',
        value: 'R$ 52.000',
        detail: null,
        progress: null,
        accent: '#ffb300',
    },
    {
        title: '% Ruptura',
        value: '3%',
        detail: null,
        progress: 12,
        accent: '#22d3a6',
    },
];

defineProps({
    mensagem: String
});

const handleCardClick = () => {
    alert('Card clicado!');
};

const handleActionButton = () => {
    window.open('https://www.nestle.com.br/', '_blank');
};
</script>

<style scoped></style>
