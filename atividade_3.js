// Função para calcular o menor e o maior valor de faturamento e o número de dias acima da média
function calcularFaturamento(faturamento) {
    let totalFaturamento = 0;
    let diasComFaturamento = 0;
    let menorFaturamento = Infinity;
    let maiorFaturamento = -Infinity;

    // Itera sobre os dados de faturamento
    for (let i = 0; i < faturamento.length; i++) {
        let valor = faturamento[i].valor;
        if (valor > 0) { // Considera apenas dias com faturamento
            totalFaturamento += valor;
            diasComFaturamento++;
            if (valor < menorFaturamento) {
                menorFaturamento = valor;
            }
            if (valor > maiorFaturamento) {
                maiorFaturamento = valor;
            }
        }
    }

    // Calcula a média
    let mediaFaturamento = totalFaturamento / diasComFaturamento;

    // Conta o número de dias com faturamento acima da média
    let diasAcimaDaMedia = faturamento.filter(dia => dia.valor > mediaFaturamento).length;

    // Retorna os resultados
    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };

    
}

// Função para carregar e processar o arquivo JSON
async function carregarEProcessarFaturamento() {
    try {
        const response = await fetch('faturamento.json');
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo JSON');
        }

        const faturamento = await response.json();
        const resultados = calcularFaturamento(faturamento);

        // Exibe os resultados
        document.getElementById('menorFaturamento').textContent = `Menor valor de faturamento: R$${resultados.menorFaturamento.toFixed(2)}`;
        document.getElementById('maiorFaturamento').textContent = `Maior valor de faturamento: R$${resultados.maiorFaturamento.toFixed(2)}`;
        document.getElementById('diasAcimaDaMedia').textContent = `Número de dias com faturamento acima da média: ${resultados.diasAcimaDaMedia}`;
    } catch (error) {
        console.error('Erro:', error);
    }
}

