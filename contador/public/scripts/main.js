const entrada_data = $('#input-data')
const botao_contar = $('button')


$(() => {
    checkCampoData()
    recebeDataFim()
})

function recebeDataFim(){
    botao_contar.click(() => {
        const data_fim = new Date(entrada_data.val()).getTime()

        sessionStorage.setItem('data_fim', data_fim)

        location.href='./contador.html';
    })
}


function checkCampoData() {
    entrada_data.on('input', () => {
        const sem_data = entrada_data.val().length == 0
        botao_contar.attr('disabled', sem_data)
    })
}





