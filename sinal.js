

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
---

@cope
Nome:
Contrato:
Cidade:
Serviço:
Problema: 

----

Para consultar cliente CONEXÃO 10.255.255.54
Para consultar cliente OUTCENTER 192.168.255.174
Para consultar cliente TECNET 172.31.255.62
Para consultar cliente NOWTECH 10.200.201.23
Para consultar cliente STARWEB 192.168.131.62
Para consultar cliente IDEIA 172.31.255.62
Para consultar cliente ANM DA IP3 187.108.64.145
Para consultar cliente RESENDENET 187.109.176.114
Para consultar cliente SAPUCAINET 177.66.64.249

 

Acessos:

Conexão UNM

Acessos individuais.

ou

IP: 10.255.255.54
user: unmconexao
senha: @Conexao2022

Conexão AMS

amsclient (5520-AMS)
user: amsconexao
senha: @Conexao2022

Outcenter

IP: 192.168.255.174
user: unmoutcenter
senha: @Conexao2022

NowTech

IP: 10.200.201.23
user: grupocnx
senha: cnx@2022

StarWEB:

IP: 192.168.131.62
user: unmstarweb
senha: @Conexao2022

TecNET:

IP: 172.31.255.62
user: unmtecnet
senha: @Conexao2022

SapucaiNET:

IP: 177.66.64.249
user: unmsapucainet
senha: @Conexao2022
Obs.: – Outra versão do UNM, atual heim: UNM2000 V2.0R4SP8

ANM da IP3:

IP: 187.108.64.145
user: anmip3
senha: @Conexao2022
Obs.: – ANM, atual heim: ANM2000 V3.0R2

ResendeNET:

IP: 187.109.176.114
user: unmresendenet
senha: @Conexao2022

Easy Parks NetVGA

172.20.0.252:9090
user: easyparksnetvga
senha: @Conexao2022

Modelos Equipamentos

https://alares.workplace.com/work/knowledge/1517803365420514

`
        
         
}

function botao_blip() {

    edi.innerHTML =  ` 


    BLIP

    SAUDAÇÃO INICIAL:
    
    Olá, bom dia! Meu nome é Edgar, e darei continuidade ao seu atendimento. O protocolo é: 20230317630683. Peço que se mantenha ativo na conversa, para darmos tratamento a sua solicitação. Com quem falo no momento?
    
    Confirmação de dados:
    Se for o titular:
    
    Por gentileza confirmar os seguintes dados:
    Nome completo:
    Telefone:
    E-mail:
    
    Se for Terceiro em linha:
    
    Por gentileza confirmar os seguintes dados do titular do contrato:
    Nome completo:
    Telefone:
    
    Finalização:
    
    Disponha! Peço que avalie meu atendimento, pois assim, me ajudará a melhorar ainda mais. A pesquisa é de 1 a 5.
    
    ----
    
    Obrigado pelo tempo de espera. Verifiquei a falta de sinal, desligue o modem por 1 minuto e ligue novamente por gentileza.
    
    ---
    
    Obrigado pelo tempo de espera. Verifiquei a instabilidade no sinal, desligue o modem por 1 minuto, verifique se os cabos não tem dano ou dobra e liga novamente por gentileza.
    
    ----- 
    
    Irei abrir um chamado técnico, tem um prazo de 24h corridas para os técnicos chegarem. Esse prazo é contabilizado dentro do horário que os técnicos trabalham que é das 08h às 18h. Ajudo com algo mais?
    
    ---
    
    Irei abrir um chamado junto ao nosso suporte avançado, eles retornam o contato por meio de ligação telefônica, tem um prazo de 12 horas corridas para eles retornarem o contato a qualquer momento.  Esse prazo é contabilizado dentro do horário que os técnicos trabalham que é das 08h às 22h.  Ajudo com algo mais?
    
    --
    
    Irei fazer atualizações para normalização do serviço, o acesso irá cair durante alguns segundos, só um instante.
    
    ---
    
    Irei fazer atualizações para normalização do serviço, só um instante.
    
    ---
    
    Finalizei os procedimentos, testa o acesso por gentileza e verifica se normalizou.
    
    ----  
    
    Perfeito, ajudo com algo mais?
    
    ---
    
    Entendi, só um momento enquanto te transfiro ao setor responsável.
    
    ---
    
    Senhor, foi identificada uma falha geral no serviço de internet, que está ocasionando lentidão e intermitência, é necessário aguardar a falha ser tratada pelo setor responsável, infelizmente até o momento não há previsão, mas estamos trabalhando para que a normalização ocorra o mais breve possível. Ajudo com algo mais?
    
    ---
    
    Senhor, foi identificada uma falha geral no serviço de internet, que está ocasionando falta de acesso, é necessário aguardar a falha ser tratada pelo setor responsável, infelizmente até o momento não há previsão, mas estamos trabalhando para que a normalização ocorra o mais breve possível. Ajudo com algo mais?
    
    ----
    
    Para aferir o acesso total a velocidade é necessário estar conectado por cabo de rede em um computador que tenha a placa de velocidade gigabit, por wifi não é possível devido às limitações por ser uma rede sem fio.
    
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
    
    Verifiquei que já foi solicitado um desbloqueio de confiança esse mês e o sistema somente aceita um desbloqueio dentro de 30 dias, dessa forma, será necessário aguardar a compensação do pagamento da fatura que ocorre dentro do prazo de até 3 dias úteis.
    
    ---
    
    Certo senhora Virgínia, realmente o serviço de telefonia ainda encontra-se com a instabilidade. A troca para fibra óptica é vista com o nosso setor administrativo, aonde é acordado um plano novo e um dia para os técnicos irem ao local fazer a substituição, se tiver disponibilidade no momento te transfiro ao setor responsável.
    
    -----
    
    Obrigado pelo tempo de espera, o contrato estava suspenso devido a fatura com vencimento 15/03 está em aberto, gerei um desbloqueio de confiança, mas caso não seja compensado a fatura em até 72h o serviço será suspenso novamente.
    
    Tem até 2 dias úteis para o pagamento chegar ao nosso sistema e liberar o acesso.
    
    ---
    
    Verifiquei que o equipamento ainda está sem comunicação e não consigo realizar mais nenhum procedimento no contrato devido a suspensão, será necessário aguardar baixa bancária da fatura em sistema para poder normalizar o serviço. Ajudo com algo mais?
    —
    
    Obrigado pelo tempo de espera, o equipamento encontra-se com o sinal dentro do padrão, vejo dois dispositivos conectados ao wifi e navegando normalmente. Para uma melhor estabilidade no seu jogo online sugiro que conecte seu console ou PC por um cabo de rede ao modem e se a falha persistir entre em contato com suporte do jogo. 
    
    ----
    
    Fixei os ajustes no equipamento de internet. Acredito que a eventualidade no acesso não ocorrerá novamente, mas oriento a monitorar, caso volte a ocorrer falhas no acesso peço que nos informe para verificarmos novamente.
    
    ----
    
    Obrigado pelo tempo de espera. A mudança para o modo bridge é feita junto ao nosso setor corporativo, pois será necessário mudar de plano, eles te retornam por ligação o mais rápido possível, peço que me informe um número para contato e o motivo da mudança
    
    ---
    
    A falha seria apenas no seu IPTV, onde não consegue rodar nenhum canal em nossa rede. 3G/4G normal. Ciente que o serviço não é homologado pela anatel, impossibilitando traçar o caminho até a lista/servidor. Cliente entende. Ficou de verificar a possibilidade de usar cabo de rede e entrar em contato com a pessoa que hospeda a lista de canais.
    
    ----
    
    Se pegarmos do princípio, aonde se estava aferindo 6 megas, já nota-se uma diferença fazendo o teste de forma correta aonde passou a aferir 93 megas, então, é necessário fazer o teste de modo que seja compatível com a tecnologia, ou seja, por cabo de rede em um PC e esse PC tendo placa de velocidade gigabit.
    
    ----
    
    Por whatsapp funciona das 08h às 20h, já por ligação, das 05h às 00h.
    
    ---
    
    Agora o seu atendimento passa a ser feito através do 10600, para ligações. Para o WhatsApp, você pode usar:
    
    Minas Gerais: (35) 2080-0600
    São Paulo: (19) 2080-0600
    Ceará: (85) 2080-0600
    Rio Grande do Norte e Paraíba: (84)2080-0600
    
    ----
    
    Obrigado pelo tempo de espera. Identifiquei que os técnicos não foram ao local porque identificaram que mesmo fazendo a manutenção, o serviço não iria voltar a funcionar, e deixaram sinalizado que será necessário trocar os equipamentos para fibra óptica para voltar a funcionar. O procedimento de migração para fibra é visto com o setor administrativo e é feito uma troca de plano e agendado um dia para irem ao seu local fazer a troca da cabeação e dos equipamentos.
    
    
    ----
    
    Irei abrir um chamado junto ao nosso suporte avançado para alterar a senha do wifi, me informa um número para contato.
    
    ---
    
    Desliga os equipamentos de TV e internet, após, liga somente o de internet, e depois de 3 minutos liga o de TV.
    
    ---
    
    Sinal normal. Otimizado wifi, fixado dns e reboot.
    Sinal normal. Otimizado wifi, e reboot.
    Sinal normal. Uptime: , otimizado wifi.
    
    ---
    
    Certo, monitora o acesso e nos retorna caso a eventualidade volte a ocorrer. Ajudo com algo mais?


    =-=-=-=-=-=-=-=-=-=-=-=-=-=

    ADM


Obrigado pelo tempo de espera, o contrato está suspenso devido a fatura com vencimento 15/03 está em aberto. 

----    

Verifiquei que já foi solicitado um desbloqueio de confiança dentro de 30 dias  e o sistema somente aceita um desbloqueio dentro de 30 dias, dessa forma, será necessário aguardar a compensação do pagamento da fatura que ocorre dentro do prazo de até 2 dias úteis após o pagamento ser feito.

---


Realizei a habilitação, caso o pagamento não seja compesado em até 3 dias, será bloqueado novamente. Reinicia o modem, por gentileza.

---

Paramount

Faz o seguinte caminho. Site ou app paramount > login com parceiro > outras operadoras > alares.

---

Confirma por gentileza o Novo Endereço na sequência informada para verificarmos se o novo endereço tem cobertura*

---

Obrigado pelo tempo de espera, o custo para mudança de endereço é de R$ 150,00 podendo ser parcelado em 3 vezes ou a senhora pode migrar para um novo plano aonde ficará isenta do custo e irá renovar a fidelidade de 12 meses.

---

Temos as opções :

Internet Fibra 250 Mega R$ 89,99 Serviços Digitais II
Internet Fibra 500 Mega R$ 99,99 McAfee e Serviços Digitais III
Internet Fibra 700 Mega + Super Wi-Fi 6 R$ 119,99 Paramount+, Deezer, McAfee e Serviços Digitais II
Internet Fibra 900 Mega + Super Wi-Fi 6 R$ 139,99 Paramount+, Deezer, McAfee e Serviços Digitais IV
Internet Fibra 700 Mega + DGO + Super Wi-Fi 6 R$ 179,89 DGO e Serviços Digitais II


Observaçao :

Todos os preços que te informei. são exibidos com desconto de 5,00 para os clientes que estao com suas faturas cadastradas para envio mensal por e-mail;
Caso esteja o envio pelos Correios, aumenta R$5,00 o valor da velocidade


Vou te passar as condições para adesão :

*Instalação grátis mediante permanência mínima de 12 meses. Em caso de cancelamento antes do fim da fidelidade, será cobrada uma multa proporcional ao tempo de permanência no valor de R$ 600,00*

*A taxa fica suspensa sob a condição da sua permanência pelo período mínimo de 12 meses*

- O plano pode sofrer reajuste do IGPM (Índice Geral de Preços do Mercado) com base na data inicial de instalação;
- A Velocidade de Download e Upload podem variar dependendo do equipamento utilizado, além de outros fatores externos.
- O serviço a ser prestado será exclusivamente no endereço de instalação, caso venha a mudar de endereço ver se há disponibilidade de fibra.
- Condições gerais para prestação de serviço de internet banda larga através do site :


https://alaresinternet.com.br/contratos-e-regulamentos/
---

DETALHAMENTO DOS SERVIÇOS INCLUSOS


PARAMOUNT+
Uma das maiores plataformas de entretenimento do mundo, com milhares de filmes e séries para toda a família para assistir onde e quando quiser.

MCAFEE
Um dos aplicativos de antivírus mais completos com diversas funcionalidades de segurança para computador ou celular.

BIT TRAINERS
Aplicativo de exercícios físicos personalizados, dicas de nutrição e profissionais dos segmentos fitness, saúde e estética.

SKEELO (AUDIOBOOK E EBOOK)
O maior aplicativo de leitura do Brasil com versões de Audiobook e Ebook para usar onde e quando quiser.

MINI CONTA OUTRA VEZ
Aplicativo de leitura infantil com diversos livros e conteúdos pedagógicos.

REVISTAS JÁ
Acesso a uma banca digital que oferece centenas de revistas para ler ilimitadamente pelo celular, tablets e até no computador.

LEVEDUCA
"Plataforma de aprendizagem com mais de 150 cursos para desenvolvimento pessoal e profissional. Conteúdo 100% online e com certificado de conclusão "

HBO
Serviço de streaming com filmes campeões em bilheteria e séries incríveis para maratonar.
Assista o melhor da HBO, MAX ORIGINALS, UNIVERSO DC , WARNER BROS , CARTOON NETWORK E CHAMPIONS LEAGUE

DEEZER
Maior streaming de áudio com 90 milhões de músicas, playlists, podcasts e canais de rádio

DGO
Serviço com +70 canais de TV ao vivo e +12 mil filmes e séries para assistir quando quiser
✓ Acesso pelo navegador, celular, tablet, SmartTv e dispositivos como Rok


Pacote Serviços Digitais I: Skeelo Audio Book e Mini Conta Outra Vez
Pacote Serviços Digitais II: Skeelo Audio Book, Mini Conta Outra Vez e Revistas Já
Pacote Serviços Digitais III: Skeelo Audio Book, Mini Conta Outra Vez, Revistas Já e Leveduca
Pacote Serviços Digitais IV: Skeelo Audio Book, Mini Conta Outra Vez, Revistas Já e Bit Trainers
Pacote Serviços Digitais V: Skeelo Audio Book, Mini Conta Outra Vez, Revistas Já, Bit Trainers e Skeelo E-book.


Qualquer dúvida estamos a disposição !
Alares agradece o contato. Um ótimo dia

---- 

Informações sobre cancelamento é somente por ligação no n° 10600.

----  

Entendi, para diminuir terá de entrar em contato com o setor de relacionamento por ligação no n° 10600.

---

Notei que não está podendo falar agora! Mas não tem problema, assim que estiver disponível fale comigo novamente que irei te ajudar!

----

A mudança de titularidade não tem custo e funciona da seguinte forma:

O titular (cedente) entra em contato para autorizar e fornecer alguns dados do adquirente.
O adquirente entra em contato posteriormente para finalizar solicitação informando o protocolo da autorização e cpf do cedente.

---

Para melhor atendê-lo, seu plano foi atualizado para o novo portfólio. Agora terá mais benefícios e maior velocidade.

----  

Certo, ao fazer a alteração, a fidelidade será renovada em 12 meses, para confirmar preciso que me envie uma selfie segurando documento com foto.

---   

Contatos do setor de negociação e cobrança:

Link para o site : https://alaresinternet.digital/negocie

Número WhatsApp: 55 11 3181-1964

----   

https://alaresinternet.com.br/conteudos/

---

Esses são serviços adicionais inclusos ao  plano, a senhora não paga por eles, mas vem demonstrando na fatura devido questões de nota fiscal.

---

Você conhece o APP da Alares?

Agora temos um aplicativo que contém diversas funcionalidades para facilitar seu dia-a-dia, como:
2. via de fatura
Pagamento de boletos com cartão de crédito / Desbloqueio em confiança entre outros...
O aplicativo está disponível para baixar nas plataformas Apple Store (IOS) e Play Store (Android).

Disponha! Peço que avalie meu atendimento, pois assim, me ajudará a melhorar ainda mais. A pesquisa é de 1 a 5. 

---

Não consigo escutar áudios.




    ` 

}



//innerHTML: Escreve a saída em algum elemento HTML;
//document.write(): Escreve diretamente no documento HTML;
//alert(); Função que mostra uma caixa tipo popup de alerta;
//console.log(); Escreve no console do navegador ou no terminal se você estiver usando nodejs
