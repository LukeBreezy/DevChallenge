const campo_dia = $('#dia')
const campo_hora = $('#hora')
const campo_minuto = $('#minuto')
const campo_segundo = $('#segundo')


$(() => {
    rodaContador()
})

function rodaContador(){
    
    setInterval(() => {
        
        // Tempo Restante a ser exibido
        const tempo_restante = calculaTempoRestante()
        
        campo_dia.text(tempo_restante.dias)
        campo_hora.text(tempo_restante.horas)
        campo_minuto.text(tempo_restante.minutos)
        campo_segundo.text(tempo_restante.segundos)
        
        console.log('\n\n')
        console.log(`dia: ${tempo_restante.dias}`)
        console.log(`hora: ${tempo_restante.horas}`)
        console.log(`minuto: ${tempo_restante.minutos}`)
        console.log(`segundo: ${tempo_restante.segundos}`)
    }, 1000)
}


function calculaTempoRestante(){
    
    const data_fim = sessionStorage.getItem('data_fim')
    const data_atual = new Date().getTime()
    const tempo_restante_ms = data_fim - data_atual
    
    // Conversores
    const ms_dia = 1000 * 60 * 60 * 24
    const ms_hora = 1000 * 60 * 60
    const ms_minuto = 1000 * 60
    const ms_segundo = 1000
    
    // Tempo restante arredondado
    let aux_dia = ~~(tempo_restante_ms / ms_dia)
    let aux_hora = ~~(tempo_restante_ms / ms_hora)
    let aux_minuto = ~~(tempo_restante_ms / ms_minuto)
    let aux_segundo = ~~(tempo_restante_ms / ms_segundo)

    // Tempo restante a ser exibido
    return {
        'dias': aux_dia,
        'horas': aux_hora - aux_dia * 24,
        'minutos': aux_minuto - aux_hora * 60,
        'segundos': aux_segundo - aux_minuto * 60
    }

}
