

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
  TA CONSTANDO PAE
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

`
        
         
}

function botao_blip() {

    edi.innerHTML =  ` 
	
	
	
A instabilidade acontece via wifi ou cabo de rede e em quais dispositivos: celular, TV, computador?
Em quais sites?
Em quais aplicativos?
----
Qualquer interferência na antena, como vento e chuva, causa uma grande instabilidade no acesso.
----
Para solicitar um plano com menor valor, terá de entrar em contato por ligação com o setor de relacionamento no número 10600.
----
Posição de OS, dentro do prazo, orientei aguardar.
----
Me informa o novo endereço completo.
----
atendimento@alaresinternet.com.br

		

BLIP

SAUDAÇÃO INICIAL:
    
Olá, bom dia! Meu nome é Edgar, e darei continuidade ao seu atendimento. O protocolo é: 20230317630683. Peço que se mantenha ativo na conversa, para darmos tratamento a sua solicitação. Com quem falo no momento?
    
Confirmação de dados:
Se for o titular:
    
Por gentileza confirmar os seguintes dados:
Nome completo:
Telefone:
E-mail:
CPF:
    
Se for Terceiro em linha:
    
Por gentileza confirmar os seguintes dados do titular do contrato:
Nome completo:
Telefone:
CPF:
Parentesco com o titular:

Se for empresa:

Por gentileza confirmar os dados do contrato:
Nome completo da razão social:
Telefone:
CNPJ:
Endereço:
    
----
    
Obrigado pelo tempo de espera. Verifiquei a instabilidade no sinal, desligue o modem por 1 minuto, verifique se os cabos não tem dano ou dobra e liga novamente por gentileza.
    
----- 
    
Irei abrir um chamado técnico, tem um prazo de 24h corridas para os técnicos chegarem. Esse prazo é contabilizado dentro do horário que os técnicos trabalham que é das 08h às 18h. Ajudo com algo mais?
    
---
    
Irei abrir um chamado junto ao nosso suporte avançado, eles retornam o contato por meio de ligação telefônica, tem um prazo de 12 horas corridas para eles retornarem o contato a qualquer momento.  Esse prazo é contabilizado dentro do horário que os técnicos trabalham que é das 08h às 22h.  Ajudo com algo mais?
    
----
    
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
    
Cliente rádio
    
Realize o procedimento que vou enviar abaixo com calma e atenção.
    
Retire a fonte da tomada, aguarde cerca de 20 segundos e conecte novamente à energia. Após, verifique se a luz dessa fonte acendeu. E no roteador com antenas, faça o mesmo procedimento de retirá-lo da energia e reconectá-lo.
    
E na fonte, verifique os cabos que conectam nela por favor. O que vem da antena deve estar conectado na entrada POE da fonte, e o que sai da fonte preta e vai para o seu roteador deve estar conectado na entrada LAN da fonte. Estando nas entradas certas, desconecte esses dois cabos que conectam na fonte e ao reconectar eles, certifique de que faça um barulho de um " clique ", indicando que esteja bem conectado.
    
    ---
    
Verifiquei que já foi solicitado um desbloqueio de confiança esse mês e o sistema somente aceita um desbloqueio dentro de 30 dias, dessa forma, será necessário aguardar a compensação do pagamento da fatura que ocorre dentro do prazo de até 3 dias úteis.
    
---
    
Tem até 2 dias úteis para o pagamento chegar ao nosso sistema e liberar o acesso.  
---

Fixei os ajustes no equipamento de internet. Acredito que a eventualidade no acesso não ocorrerá novamente, mas oriento a monitorar, caso volte a ocorrer falhas no acesso peço que nos informe para verificarmos novamente.
    
----
    
Obrigado pelo tempo de espera. A mudança para o modo bridge é feita junto ao nosso setor corporativo, pois será necessário mudar de plano, eles te retornam por ligação o mais rápido possível, peço que me informe um número para contato e o motivo da mudança
    
---
    
A falha seria apenas no seu IPTV, onde não consegue rodar nenhum canal em nossa rede. 3G/4G normal. Ciente que o serviço não é homologado pela anatel, impossibilitando traçar o caminho até a lista/servidor. Cliente entende. Ficou de verificar a possibilidade de usar cabo de rede e entrar em contato com a pessoa que hospeda a lista de canais.
    
----
    
Por whatsapp funciona das 08h às 20h, já por ligação, das 05h às 00h.
    
---
    
Agora o seu atendimento passa a ser feito através do 10600, para ligações. Para o WhatsApp, você pode usar:
    
Minas Gerais: (35) 2080-0600
São Paulo: (19) 2080-0600
Ceará: (85) 2080-0600
Rio Grande do Norte e Paraíba: (84)2080-0600
    
----
        
Não obtive acesso ao equipamento. Irei abrir um chamado junto ao nosso suporte avançado para alterar a senha do wifi, retornam em até 12h corridas.
    

=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    ADM


Verifiquei que já foi solicitado um desbloqueio de confiança dentro de 30 dias  e o sistema somente aceita um desbloqueio dentro de 30 dias, dessa forma, será necessário aguardar a compensação do pagamento da fatura que ocorre dentro do prazo de até 2 dias úteis após o pagamento ser feito.

---

Realizei a habilitação, caso o pagamento não seja compesado em até 2 dias, será bloqueado novamente. Reinicia o modem, por gentileza.

---

Paramount

Faz o seguinte caminho. Site ou app paramount > login com parceiro > outras operadoras > alares.

---

Observaçao :

Todos os preços que te informei. são exibidos com desconto de 5,00 para os clientes que estao com suas faturas cadastradas para envio mensal por e-mail;
Caso esteja o envio pelos Correios, aumenta R$5,00 o valor da velocidade


Vou te passar as condições para adesão :

*Instalação grátis mediante permanência mínima de 12 meses. Em caso de cancelamento antes do fim da fidelidade, será cobrada uma multa proporcional ao tempo de permanência no valor de R$ 600,00*

*A taxa fica suspensa sob a condição da sua permanência pelo período mínimo de 12 meses*

- O plano pode sofrer reajuste do IPCA com base na data inicial de instalação;
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

Qualquer dúvida estamos a disposição !
Alares agradece o contato. Um ótimo dia

---- 

Informações sobre cancelamento é somente por ligação no n° 10600, junto ao setor de relacionamento.

----  

Certo, se desejar uma visita técnica posso abrir a ordem, 
já informações sobre cancelamento é somente por ligação no n° 10600, junto ao setor de relacionamento.

----

A mudança de titularidade não tem custo e funciona da seguinte forma:

O titular (cedente) entra em contato para autorizar e fornecer alguns dados do adquirente.
O adquirente entra em contato posteriormente para finalizar solicitação informando o protocolo da autorização e cpf do cedente.

---

Para melhor atendê-lo, seu plano foi atualizado para o novo portfólio. Agora terá mais benefícios e maior velocidade.

----  

Para confirmar preciso que me envie uma selfie segurando documento com foto.

---   

Contatos do setor de negociação e cobrança:

Link para o site : https://alaresinternet.digital/negocie

Número WhatsApp: 55 11 3181-1964

----   

https://alaresinternet.com.br/conteudos/

---

Esses são serviços adicionais inclusos ao  plano, a senhora não paga por eles, mas vem demonstrando na fatura devido questões de nota fiscal.

---


Não consigo escutar áudios.

----

O aumento que ocorreu na fatura foi um reajuste baseado no IPCA, que é o (Índice Nacional de Preços ao Consumidor Amplo).
O reajuste é previsto em contrato e ocorre a cada 12 meses, de acordo com a data base de instalação. Não visa nenhum tipo de lucro, apenas adequação aos preços de comércio. Ocorreu um erro no reajuste e foi mais do que o devido, mas já foi feito o desconto de R$ 4,95 na fatura que a senhora irá ver ao tentar fazer o pagamento.

Peço gentilmente que considere responder a nossa pesquisa de satisfação sobre o meu atendimento no final e se possível deixe uma *nota 5* para que possa ajudar no meu desempenho na empresa 🤝😁

---

WIFI 6

Para acessar a interface dos equipamentos vai ser preciso inserir as seguintes portas:
RN: 8089 ou 8099 (ZTE)

SE: Não precisa de porta

Roteador ZTE e Huawei – Usuário: support Senha: C4b0)!G3r Porta ZTE: 443 e Huawei – 8888

Senha Wifi 6 (RN e CE): c4b0t3l3c0m c4b0@t3l3c0m

Alares@10600

Huawei WiFI 6

Para acessar a interface https:// + IP + porta 8888 Senha: @4L4r3s_FlY

---

Faça esse caminho:
Painel de Controle > Rede e Internet > Central de Rede e Compartilhamento
Localize a seção “Internet” e clica em “Ethernet”,
procure pelo valor “Velocidade“. Esse valor representa a velocidade atual da sua placa de rede.


    ` 

}



//innerHTML: Escreve a saída em algum elemento HTML;
//document.write(): Escreve diretamente no documento HTML;
//alert(); Função que mostra uma caixa tipo popup de alerta;
//console.log(); Escreve no console do navegador ou no terminal se você estiver usando nodejs
