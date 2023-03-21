
function botaocm() {


    
}

function botaoont() {

    let ont = document.querySelector('input#ONT')
    let olt = document.querySelector('input#OLT')
    let edi = document.querySelector('textarea#ed')
    let ont_1 = (ont.value)
    let olt_1 = (olt.value)

    if ( ont_1 <= -8 && ont_1 >= -27 && olt_1 <= -8 && olt_1 >= -27 ) {

        edi.innerHTML = ` ONT UP. Sinal normal. ONT ${ont_1} OLT ${olt_1} `

    } else {
        edi.innerHTML = ` ONT UP. Sinal alterado. ONT ${ont_1} OLT ${olt_1} `
    }
    
}