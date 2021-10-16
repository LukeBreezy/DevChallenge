const entrada_data = $('#input-data')
const botao_contar = $('button')


$(() => {
    checkCampoData()
    recebeDataFim()
})

// Recebe a data final do contador
function recebeDataFim(){
    botao_contar.click(() => {

        if(!checkCampoData()){
            const data_fim = new Date(entrada_data.val()).getTime()
    
            sessionStorage.setItem('data_fim', data_fim)
            
            location.href='./contador.html';
        }
    })
}

// Verifica se alguma data foi digitada e se é depois da data atual
function checkCampoData() {
    entrada_data.on('input', () => {

        let data_inserida = entrada_data.val().length > 0
        botao_contar.attr('disabled', !data_inserida)
    
        const data_valida = new Date(entrada_data.val()).getTime() > new Date().getTime()  
        if(!data_valida){
        
            alert('Data inválida!\nDIgite uma data a frente da atual.')
            entrada_data.val('')
            
            data_inserida = entrada_data.val().length > 0
            botao_contar.attr('disabled', !data_inserida)

            return !false
        }
    })
}





