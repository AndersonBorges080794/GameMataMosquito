/*ABAIXO COMEÇAMOS A NOSSA CODIFICAÇÃO EM JS:
PRIMEIRO CRIAMOS DUAS VARIÁVES altura = 0 e largura = 0;
DEPOIS CRIAMOS UMA FUNÇÃO ajustaTamanhoPalcoJogo(){};
DENTRO DESSA FUNÇÃO ATRIBUIMOS window.innerHeight PARA VARIÁVEL altura
E window.innerWidth PARA A VARIÁVEL largura ............*/

var altura = 0
var largura = 0

/*ESSA VARIÁVEL É USADA PARA A LÓGICA DE PERCA DE VIDAS */
var vidas = 1

//Essa variável vai ser usada para o cronometro
var tempo = 10


/* Variável responsavel por controlar o tempo de
criação dos mosquitos. */
var criaMosquitoTempo = 1500


/* Aqui estamos declarando a variável nivel e depois ela recebe
o window.location.search e esse parâmetro tem como objetivo de
recuperar tudo depois da interrogação incluindo a propria interrogação.*/
var nivel = window.location.search

/* Aqui abaixo estamos usando uma nova propriedade chamada de replace()
ela tem como objetivo de substituir um caracter por outro e nesse caso
fizemos a substituição do caracter ?(interrogação) por ''(vazio). */
nivel = nivel.replace('?', '')


/*Abaixo estamos realizando a lógica de nível do jogo.
Nessa condicional estamos realizando uma comparação de
idênticos da variável nível com as suas respectivas 
escolhas, e cada escolha vai ter seu tempo prédefinido. */
if(nivel === 'normal'){
     // tempo de 1500
     criaMosquitoTempo = 1500

}else if(nivel === 'dificil'){
     //tempo de 1000
     criaMosquitoTempo = 1000

}else if(nivel === 'chucknorris'){
     //tempo de 750
     criaMosquitoTempo = 750
}



/*Aqui estamos declarando a variável cronometro e ela está recendo a função
setInterval(function(){},1000). Observe que essa função setInterval() é responsável
de controlar ação e tempo ou seja ela recebe dois parâmetros e nessa situação um dos
parâmetros recebido foi outra função que executará o decremento da variável tempo,
lembrando que a variável tempo foi iniciado com 10.
O segundo parâmetro é o tempo que é medido por milisegundos e nesse caso usamos 1000.*/
var cronometro = setInterval(function(){
     
     tempo -= 1

     /* Aqui abaixo estamos utilizando uma condicional para controlar o tempo
     para não deixar ele exibir a contagem do cronometro negativo e se o jogador
     conseguir conseguir se manter durante esse tempo ele será vitorioso */
     if(tempo < 0){

          /*A função abaixo tem como objetivo de limpar a função setInterval() 
          e para conseguir relacionar as duas funções estamos apontando a variável
          cronometro dentro dela pois essa variável é que recebe toda a lógica da função
          setInterval*/
          clearInterval(cronometro)

          /* Aqui abaixo estamos executando também a função de limpar
          para não criar mais mosquito e não rodar o cronometro, mas 
          dessa vez é com a variável criaMosquito que foi criado
          lá no script dentro do arquivo app.html. */
          clearInterval(criaMosquito)
          
          /* Aqui estamos redirecionando para a o arquivo vitória.html */
          window.location.href = 'vitoria.html'

     }else{
     /* Abaixo estamos utilizando a recuperação do elemento através do ID
     e logo em seguida estamos utilizando a propriedade .innerhtml, essa 
     propriedade significa que está dentro das tags.
     E para finalizar vai atribuir isso tudo para a variável tempo*/
     document.getElementById('cronometro').innerHTML = tempo
     }
},1000)


function ajustaTamanhoPalcoJogo() {
     altura = window.innerHeight
     largura = window.innerWidth

     console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()


function posicaoRandomica() {/*Aqui estamos utilizando uma função para encapsular a logica do codigo
                             e corrigir o erro que estava apresentando dizendo que body é null*/ 


     /*REMOVENDO O MOSQUITO ANTERIOR (CASO EXISTA)
     Nesse trecho de codigo estamos aplicando uma lógica de
     remoção do mosquito por isso que estamos usando uma 
     condicional if() dentro dela estamos recuperando o
     elemento através do id('mosquito') e automaticamente
     o JavaScript tem a inteligência de dizer que esse elemento
     é verdadeiro e sendo assim ele executa o trecho de codigo
     que nesse caso é novamente a recuperação do elemento através
     do id e utilizamos o método remove() para remover o mosquito
     anterior.*/
     if(document.getElementById('mosquito') ){
          document.getElementById('mosquito').remove()

          /*Abaixo estamos aplicando a lógica de perder coração quando o 
          elemento mosquito não for clicado.
          Só para ficar organizado fizemos a seleção do elemento através
          do ID observe que criamos uma variável global chamada vidas e
          realizamos uma concatenação da string 'v' mais a variável vidas
          só para lembrar que a variável vidas foi iniciado com o numero 1
          na hora da sua declaração, e como usamos a concatenação o produto
          final disso foi v1 e para ficar mais interativo com as outros IDS
          depois da instrução colocamos um incremento na variável vidas sendo
          assim ele selecionará os outros IDS v2 e v3 e assim por diante., 
          Depois acessmos a propriedade src e passamos o diretório completo 
          da imagem coração vazio.
          Usamos também uma condicional if para dizer que se a variável vidas
          for maior que 3 vai executar um elemento do dom que nesse caso é
          window.location.href = '' que tem como função redirecionar para 
          uma página desejada, ou caso a variável vidas for menor que 3 
          vai cair no else e executarar a outra lógica dentro dele, que 
          nesse caso é a continuação do game. */
          if(vidas > 3){
               
               window.location.href = 'fim_de_jogo.html'

          }else{
          document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
           vidas++
          }
     }




     /*ABAIXO ESTAMOS UTILIZANDO UMA PROPRIEDADE(Math) COM DOIS MÉTODOS
     floor() e random().
     O floor() SERVE PARA TIRAR AS CASAS DECIMAIS;
     O random() SERVE PARA GERAR VALORES ALEATORIO;*/
     var posicaoX = Math.floor(Math.random() * largura) - 90//fizemos esse - 90 para não criar barra de rolagem
     var posicaoY = Math.floor(Math.random() * altura) - 90//fizemos esse - 90 para não criar barra de rolagem


     /*Aqui estamos utilizando operador ternário já aprendemos sobre
     isso nas aulas passadas*/
     posicaoX = posicaoX < 0 ? 0 : posicaoX
     posicaoY = posicaoY < 0 ? 0 : posicaoY

     console.log(posicaoX, posicaoY)


     //CRIANDO O ELEMENTO HTML

     var mosquito = document.createElement('img')


     /*Aqui abaixo estamos recuperando a variável mosquito e
     utilizando ponto(.) para acessar as propriedades html do
     elemento criado. A propriedade escolhida foi src que nada
     mais é a propriedade para passar o diretório da imagem */
     mosquito.src = 'imagens/mosca.png'


     
     /*Aqui abaixo estamos recuperando a variável mosquito e
     utilizando o ponto(.) para acessar as propriedades html do
     elemento criado. A propriedade escolhida foi className que
     é para selecionar uma classe através do nome dela.
     Lembrando que o script está ligado ao arquivo html. E o 
     arquivo css está ligando também ao arquivo html.
     Fizemos uma substituição da string 'mosquito1' para
     a função tamanhoAleatorio() pois essa função tem
     como objetivo criar tamanhos randomicos do mosquito.*/
     mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() 



     /*Aqui abaixo fizemos a recuperação da variável mosquito e
     chamamos o atributo style e nele chamamos as propriedades
     (left), (top) e (position) observe que aprendemos mais uma
     coisa que foi a chamada desses atributos e propriedades e
     atribuimos essas chamadas para variáveis que nesse caso foi
     posicaoX e posicaoY e concatenando elas com a unidade de medida
     'px'. O resultado dessa lógica vai ser o mosquito em posições diferente */
     mosquito.style.left = posicaoX + 'px'
     mosquito.style.top = posicaoY + 'px'
     mosquito.style.position = 'absolute'
     mosquito.id = 'mosquito'


     /*Aqui abaixo estamos recuperando o elemento mosquito logo em seguida
     acessando a propriedade .onclick e atribuindo tudo isso para uma função
     que dentro dela vai executar uma instrução de remover e para isso foi
     utilizado o this.remove() lembrando que this vamos aprender mais para frente. */
     mosquito.onclick = function(){
          this.remove()
     }

     
     
     /*Aqui estamos adicionando um filho para o body
     só para lembrar o DOM é uma arvore de elementos.
     Observe bem que a variável mosquito que foi criada
     e recebeu o elemento img está sendo passado como
     parametro para o nosso método .appendChild(mosquito)*/
     document.body.appendChild(mosquito)

    console.log(ladoAleatorio())

     
}


/*Abaixo criamos uma função chamada tamanhoAleatorio que tem
uma lógica de variar de tamanho o mosquito observe que fizemos
a criação de uma variável e atribuimos o Math.floor(Math.random() *3)
nela, logo em seguida utilizamos um switch para condicionar os tamanhos
do mosquito. Para essa situação podemos utilizar também um if else mas
fizemos com switch que dá o mesmo resultado.
outra coisa para observer foi que não utilizamos break pois quando chega no
return e executa a classe apresentada ele já entende que é para finalizar ali
mesmo sendo assim sem a necessidade de um break.*/
function tamanhoAleatorio(){
     var classe = Math.floor(Math.random() * 3)
     

     switch(classe){

          case 0:
               return 'mosquito1'
     
          case 1:
               return 'mosquito2'
          
          case 2:
               return 'mosquito3'
     }

}


function ladoAleatorio(){
     var classe = Math.floor(Math.random() *2)

     switch(classe){

          case 0:
               return 'ladoA'

          case 1:
               return 'ladoB'
     }

}