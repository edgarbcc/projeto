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

function botao_script() {

        edi.innerHTML = 
        `
        SOLICITANTE:
        DEMANDA IDENTIFICADA:
        CONTATO REINCIDENTE: NÃO () SIM ()
        INFORMAÇÕES DO EQUIPAMENTO:
        PROCEDIMENTO REALIZADO:
        RESOLUTA:
        
        ----
        B.O
        
        SOLICITANTE / TELEFONE COM DDD:
        DEMANDA IDENTIFICADA:
        CONTATO REINCIDENTE: NÃO () SIM ()
        INFORMAÇÕES DO EQUIPAMENTO:
        PROCEDIMENTO REALIZADO:
        RESOLUTA:
        CIENTE DO PRAZO PARA RETORNO: HORAS:
        
        ----
        VT
        
        SOLICITANTE E TELEFONE:
        ENDEREÇO / PONTO DE REFERÊNCIA:
        DEMANDA DIRECIONADA:
        INFORMAÇÕES DO EQUIPAMENTO:
        CTO / PORTA:
        LOGIN / SENHA:
        CIENTE DA IMPRODUTIVIDADE: NÃO ( ) SIM ( ) VALOR:
        PRAZO:
        
        ---
        @cope
        Nome:
        Contrato:
        Cidade:
        Serviço:
        Problema: `
        
         
}

function botao_blip() {

    edi.innerHTML =  ` 
    BLiP
    
    Boa tarde! Me chamo Edgar, atendente do suporte técnico e irei dar continuidade ao seu atendimento.
    
    Falo com o titular do contrato nesse momento?

    -----
    
    Obrigado pelas confirmações, foi gerado protocolo de número 20230294909361.
    
    Peço que aguarde um momento enquanto verifico.
    
    ---
    
    Tá bem, como já realizou o procedimento, irei abrir um chamado junto ao nosso suporte avançado, eles retornam o contato por meio de ligação telefônica, me informa um número, por favor.
    
    ---
    
    Tá bem, como já realizou o procedimento, irei abrir um chamado técnico , me informa um número para contato e ponto de referência, por favor.
    
    ---
    
    Obrigado pelo tempo de espera, verifiquei a falta de sinal no modem, no momento não há nenhuma ocorrência para região, irei abrir um chamado técnico , me informa um número para contato e ponto de referência, por favor.
    
    --
    
    Obrigado pelo tempo de espera. Verifiquei a falta de sinal, desliga o modem por 1 minuto e liga novamente por gentileza.
    
    ---
    
    
    Obrigado pelo tempo de espera. Verifiquei a instabilidade no sinal, desliga o modem por 1 minuto e liga novamente por gentileza.
    
    -----
    
    Pronto, abri o chamado. Tem um prazo de 24h corridas para os técnicos chegarem, é uma visita técnica gratuita, somente se for identificado dano por mal uso ao equipamento que seria cobrado custo por improdutividade. Ajudo com algo mais?
    
    ---
    
    Irei fazer atualizações para normalização do serviço, o acesso irá cair durante alguns segundos, só um instante.
    
    ---
    
    Pronto, abri um chamado junto ao suporte avançado, tem um prazo de 6 horas corridas para eles retornarem o contato a qualquer momento. Ajudo com algo mais?
    
    ---
    
    Finalizei os procedimentos, testa o acesso por gentileza e verifica se normalizou.
    
    ----
    
    Tá bem, um ótimo dia.
    
    ---
    
    Perfeito, ajudo com algo mais?
    
    ---
    
    Entendi, só um momento enquanto te transfiro ao setor responsável.
    
    ---
    
    Senhor, foi identificada uma falha geral no serviço de internet, que está ocasionando lentidão e intermitência, é necessário aguardar a falha ser tratada pelo setor responsável, infelizmente até o momento não há previsão, mas estamos trabalhando para que a normalização ocorra o mais breve possível. Ajudo com algo mais?
    
    ---
    
    Senhor, foi identificada uma falha geral no serviço de internet, que está ocasionando falta de acesso, é necessário aguardar a falha ser tratada pelo setor responsável, infelizmente até o momento não há previsão, mas estamos trabalhando para que a normalização ocorra o mais breve possível. Ajudo com algo mais?
    
    ----
    
    Para aferir o acesso total a velocidade é necessário está conectado por cabo de rede em um computador que tenha a placa de velocidade gigabit, por wifi não é possível devido as limitações por ser uma rede sem fio.
    
    ---
    
    Por wifi pode variar devido não ser uma rede cabeada, há momentos que o senhor irá aferir 300 megas, em outro momento aferir 80 megas por exemplo, não há uma estabilidade.
    E há variações de acordo com a tecnologia de cada dispositivo que o senhor usar.
    
    ---
    
    Verifiquei que o equipamento que a senhora tem no local está com o sinal dentro do padrão e é compatível com seu plano de 60 megas, caso migre para um plano superior a 100 megas que seria necessário a troca do modem.
    
    ---
    
    Cliente rádio
    
    Realize o procedimento que vou enviar abaixo com calma e atenção.
    
    
    
    Retire a fonte da tomada, aguarde cerca de 20 segundos e conecte novamente à energia. Após, verifique se a luz dessa fonte acendeu. E no roteador com antenas, faça o mesmo procedimento de retirá-lo da energia e reconectá-lo.
    
    
    
    E na fonte, verifique os cabos que conectam nela por favor. O que vem da antena deve estar conectado na entrada POE da fonte, e o que sai da fonte preta e vai para o seu roteador deve estar conectado na entrada LAN da fonte. Estando nas entradas certas, desconecte esses dois cabos que conectam na fonte e ao reconectar eles, certifique de que faça um barulho de um " clique ", indicando que esteja bem conectado.
    
    ---
    
    Vou precisar abrir uma solicitação para que seja realizada uma verificação de infraestrutura de fibra. Este atendimento analisa o aparelho fibra instalado em sua residência e o cabeamento da fibra na rua. O atendimento tem um prazo de até 24 horas úteis para que seja realizado. Já vou fazer seu agendamento.
    
    
    
    Qual nome de quem receberá o técnico ?
    Qual telefone preferencial para o contato e o DDD ?
    Qual melhor período para atender o nosso técnico ?
    Me Informe também seu endereço, número de sua casa e o bairro e se possível algum ponto de referencia de seu endereço.
    
    —--
    
    Para acessar é necessário selecionar a opção fazer login com o parceiro > outras operadoras > Alares.  O usuário e senha será o CPF.
    
    --------
    
    Sim, após ser concluída a manutenção será calculado o tempo da falta de acesso, é feito de forma automática o desconto em fatura, e para o senhor confirmar pode buscar informações sobre a eventualidade com a identificação da eventualidade que é  INC.2015.
    ` 

}
