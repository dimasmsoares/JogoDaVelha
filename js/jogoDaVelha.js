/* Variáveis Globais */
let tabuleiro // Será uma array multidimensional (matriz) 3 x 3
let board
let aviso
let jogador
let linha // Armazenará o valor que vem de um input number
let coluna // Armazenará o valor que vem de um input number

function iniciar(){
    tabuleiro = []
    board = document.getElementById("board") //div onde está o tabuleiro (tabela)
    aviso = document.getElementById("aviso") //div onde está o aviso
    jogador = true
    if (jogador){
        aviso.innerHTML = "Vez do Jogador 1"
    }
    else{
        aviso.innerHTML = "Vez do Jogador 2"
    }

    /* Criando dinamicamente os valores iniciais do tabuleiro 3 x 3 */
    for (let i=0; i<3; i++){
        tabuleiro[i] = []
        for(let j=0; j<3; j++)
            tabuleiro[i][j] = 0
    }

    console.table(tabuleiro)
    exibir()

}


function exibir(){
    /* Criando uma tabela dinamicamente */
    const n_row = 3
    const n_col = 3
    let tabelaHTML = '<table cellpadding = "10" border ="1">'
    for (let i = 0; i < n_row; i++){
        tabelaHTML += '<tr>'
        for(let j = 0; j < n_col; j++){
            switch (tabuleiro[i][j]){
                case 1: tabelaHTML += '<td>X</td>'; break;
                case -1: tabelaHTML += '<td>O</td>'; break;
                default: tabelaHTML += '<td>_</td>'
            }
            
        } 
        tabelaHTML += '</tr>'
    }
    tabelaHTML += '</table>'

    board.innerHTML = tabelaHTML
}


function jogar(){
    console.log(jogador)
    if (jogador){
        aviso.innerHTML = "Vez do Jogador 2"
    }
    else{
        aviso.innerHTML = "Vez do Jogador 1"
    }
    
    /* Obtendo a linha e a coluna */
    linha = document.getElementById("linha").value - 1
    coluna = document.getElementById("coluna").value - 1

    if(tabuleiro[linha][coluna] == 0){
        tabuleiro[linha][coluna] = jogador == true ? 1 : -1
        console.table(tabuleiro)
        jogador = !jogador
    }
    else{
        if (jogador){
            aviso.innerHTML = "Campo já marcado. Tente outra posição, jogador 1"
        }
        else{
            aviso.innerHTML = "Campo já marcado. Tente outra posição, jogador 2"
        }
        
    }
    exibir()
    checar()
}

function checar(){
    /*Linhas*/
    for(let i = 0; i<3; i++){
        if((tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i])  == 3 || (tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2]) == 3 || (tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2]) == 3 || (tabuleiro[0][3] + tabuleiro[1][1] + tabuleiro[2][0]) == 3){
            aviso.innerHTML = "Parabéns jogador 1! Você ganhou!"
            
        }
        if((tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i])  == -3 || (tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2]) == -3 || (tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2]) == -3 || (tabuleiro[0][3] + tabuleiro[1][1] + tabuleiro[2][0]) == -3){
            aviso.innerHTML = "Parabéns jogador 2! Você ganhou!"
        }
    }
}
