<template>
            <v-container fluid class="fill-height d-flex flex-col align-center justify-center">
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
            </v-container>
            <v-container fluid class="fill-height d-flex flex-col align-center justify-center">
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
            </v-container>
</template>

<script setup>
import DefaultCard from '../Components/Cards/DefaultCard.vue';
import BuyerCardHeader from '../Components/BuyerCardHeader.vue';
import BuyerCardContent from '../Components/BuyerCardContent.vue';
import SectionWrapper from '../Components/SectionWrapper.vue';

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
</script>

<style scoped></style>
