// Função para calcular o percentual de representação de cada estado
function calcularPercentuais(faturamentoEstados) {
    // Calcula o total de faturamento
    let totalFaturamento = 0;
    for (const estado in faturamentoEstados) {
        totalFaturamento += faturamentoEstados[estado];
    }

    // Calcula o percentual de cada estado
    let percentuais = {};
    for (const estado in faturamentoEstados) {
        percentuais[estado] = ((faturamentoEstados[estado] / totalFaturamento) * 100).toFixed(2);
    }

    return percentuais;
}

// Dados de faturamento por estado
const faturamentoEstados = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};

// Calcula os percentuais
const percentuais = calcularPercentuais(faturamentoEstados);

// Exibe os resultados no console
console.log('Percentual de Representação por Estado:');
for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
}
