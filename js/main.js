/*//introdução ao javascript
alert("1º meu primeiro js");
var nome= "Rafaela";
alert("2º Bem vindo " + nome);
var idade = 31;
alert(nome + " tem "+ idade + " anos ");
var idade = 31;
var idade2 = 15;
alert (idade + idade2);
var idade = "31";
var idade2 = "15";
alert (idade + idade2);
var idade = 31;
var idade2 = 15;
var frase = "melhor time do mundo";
console.log(nome);
console.log(idade + idade2);
console.log(frase);
console.log(frase.replace("time", "Grupo"));
alert (frase.replace("time","grupo"));
console.log(frase.toLowerCase());//MINUSCULA
console.log(frase.toUpperCase());//MAIUSCULA
var i = 15;
var d = 20;
console.log(i * d);

array
var lista = ["maça", "pera", "laranja"];
//console.log(lista);
//console.log(lista[1]);
//alert(lista[1]);
lista.push("melão");//por item
//lista.pop();//tirar item
//console.log(lista);
console.log(lista.length);//mostra quantidade de itens
console.log(lista.reverse());//trazer a lista ao contrario
console.log(lista.toString());//mostra como string
console.log(lista.join("."));//coloca ponto, virgula ou que quiser

//dicionario
var fruta = {nome:"maçã", cor:"verde"}
//console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);

//lista de dicionario
var fruta = [{nome:"maçã", cor:"verde"}, {nome:"banana", cor:"amarela"}]
console.log(fruta);
alert(fruta[1].nome);

//condicionais, laçõs de repertição e date
var idade = 18;
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};

var idade = prompt("Qual sua idade? ");//perguntar ao usuario
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};

var count = 0;
while(count < 5){
    console.log(count);
    alert(count);
    count++;
};

var count;
for(count = 0; count <= 5; count ++){
    alert(count);
};

var d = new Date();//data atual
//alert(d);
//(d.getMonth()+1); //mes
//alert(d.getMinutes()); //minutos
alert(d.getDay());
alert(d.getHours());//horas

//paginas web
function soma(n1, n2){
    return n1 + n2;
}
alert (soma (5,10));

function steReplace(frase, nome, novo_nome){
   return frase.replace(nome, novo_nome);
}
alert (setReplace ("Vai mais", "oi","Bom dia"));

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade? ");
console.log(validaIdade(idade));

function botao(){
    alert("Obrigado por clicar");
}

function botao(){
    document.getElementById("agradecimento");
    console.log(document.getElementById("agradecimento"));
}*/

function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigado";
    
}

function redirecionar(){
    //window.open("https://www.google.com.br/");//redirecionando para outra janela ao clicar no botão
    window.location.href="https://www.google.com.br/"; //vai abrir na mesma janela
}

function trocar(elemento){
    //document.getElementById("move").innerHTML = "bem vindo";//substituindo texto
    elemento.innerHTML = "Obrigado";
    //alert("trocar texto");//onmouseover onde abre a caixa de texto quando passar o mouse no texto mostrando outro texto .
}

function voltar(elemento){
    //document.getElementById("move").innerHTML = "passe aqui";// Ao tirar o mouse onmouseout volta para texto anterior
    elemento.innerHTML = "bem vindo";
}

function load(){
    alert("pagiana carregada");//onload mostrar a pagina sendo carregada
}
function funcaoChange(elemento){
    console.log(elemento.value);//onchange mostra qual o valor que foi selecinado
}