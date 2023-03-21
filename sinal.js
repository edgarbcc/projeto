

let edi = document.querySelector('textarea#ed')

function botaocm() {
    let uspwr = document.querySelector('input#USPwr')
    let usmer = document.querySelector('input#USMER')
    let dspwr = document.querySelector('input#DSPwr')
    let dsmer = document.querySelector('input#DSMER')
    let u = (uspwr.value)
    let u1 = (usmer.value)
    let d = (dspwr.value)
    let d1 = (dsmer.value)

    if ( u >= 40 && u <= 51 && u1 >= 30 && d >= -12 && d <= 15 && d1 >= 36) {
        edi.innerHTML = ` CM ON. Sinal normal. USPWR ${u}  USMER ${u1} DSPWR ${d} DSMER ${d1}`
    } else {
        edi.innerHTML = ` CM ON. Sinal alterado. USPWR ${u}  USMER ${u1} DSPWR ${d} DSMER ${d1}`
    }

    
}

function botaoont() {

    let ont = document.querySelector('input#ONT')
    let olt = document.querySelector('input#OLT')
    
    let ont_1 = (ont.value)
    let olt_1 = (olt.value)

    if ( ont_1 <= -8 && ont_1 >= -27 && olt_1 <= -8 && olt_1 >= -27 ) {

        edi.innerHTML = ` ONT UP. Sinal normal. ONT ${ont_1} OLT ${olt_1} `

    } else {
        edi.innerHTML = ` ONT UP. Sinal alterado. ONT ${ont_1} OLT ${olt_1} `
    }
    
}
