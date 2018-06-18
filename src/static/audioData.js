export const title = "Audio"
export const links = []

export const content =
`
Audio é a biblioteca responsável por atribuir som à objetos. Ela é encarregada
de realizar todos os métodos descritos posteriormente, do ínicio ao fim da construção
de um áudio.
`

export const attributeList = [
    {attr: "play(path_do_som)", description: "String : Inicializa o áudio requerido."},
    {attr: "pause(path_do_som)", description: "String : Pausa o áudio requerido e quando der o play() novamente, volta aonde tinha pausado."},
    {attr: "loop(path_do_som)", description: "String : Faz com que o áudio funcione em loop. Quando acabar o áudio, inicia novamente."},
    {attr: "stop(path_do_som)", description: "String : Finaliza a música."}
]

export const example =
`
let canvasInstance = new gamid.graphics.Canvas(800, 800, 'cyan');
let canvas = canvasInstance.element;

// Cria um objeto do tipo Quadrado com seus respectivos atributos
let base = new gamid.graphics.Square(100, 100, 350, 350, 1, 'black');

// Adiciona um ou mais tipo de controles via Keyboard ao objeto instanciado (base)
let baseController = new gamid.controller.Keyboard(base, [87, 83]);

// Adiciona uma ação à tecla 'w'.
keyboard.setOnKeyDown(87, function(){
		square.speedY = -500;
});

// Adiciona uma ação à tecla 's'.
keyboard.setOnKeyDown(83, function(){
		square.speedY = 500;
});

// Cria a lista de áudios que deseja inserir no seu jogo.
// Pode estar em qualquer formato de áudio suportado pelo navegador (wav, mp3 ...).
let audioList = [
    "caminho_da_musica_1",
]

// Chama o construtor do áudio que deseja, passando o objeto e a lista de audios.
// O construtor irá adicionar e criar os áudios dentro do seu jogo.
let audio = new gamid.audio.Audio(base, audioList);

canvasInstance.addObject(base);

// Utiliza da método play() para iniciar o áudio.
// Este método não reproduz novamente o áudio quando esgotado seu tempo.
audio.play("caminho_da_musica_1");

// Caso queira usar o áudio em loop pode utilizar do método loop().
// Este método só irá parar de reproduzir o áudio quando chamada o
// método de pause("caminho_da_musica_1") ou então de stop("caminho_da_musica_1").
audio.loop("caminho_da_musica_1");

document.body.appendChild(canvas);

`
