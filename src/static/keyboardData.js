export const title = "Keyboard"
export const links = [
                    {title:"Retornar", link:"/gamid-pages/controller"}
                    ]

export const content =
`
Keyboard é o exemplo base do framework Gamid. Nele, é possível atribuir teclas e
funcionalidades para cada uma dessas teclas, utilizando das funções herdadas de Controller.
Repara-se que a única diferença entre Keyboard e Controller é que Keyboard já tem os eventos
definidos para um teclado.
`

export const attributeList = [
    {attr: "onKeyUp(event, functionList)", description: "Checa a lista de teclas, e caso alguma tecla registrada seja levantada, executa a função correspondente"},
    {attr: "onKeyDown(event, functionList)", description: "Checa a lista de teclas, e caso alguma tecla registrada seja abaixada, executa a função correspondente"}
]

export const example =
`
let canvasInstance = new gamid.graphics.Canvas(800, 800, 'purple');
let canvas = canvasInstance.element; // get <canvas> html attribute

// Cria um objeto do tipo Quadrado com seus respectivos atributos
let square = new gamid.graphics.Square(100, 100, 50, 75, 10, 'black');

// Adiciona um ou mais tipo de controles via Keyboard ao objeto instanciado (Square)
// Para reconhecer qual tecla irá ser utilizada, associa-se à sua keyCode:
// 87 = 'w' | 83 = 's'.
let keyboard = new gamid.controller.Keyboard(square, [87, 83]);

// Adiciona física de colisão de quadrado ao objeto criado.
let squareCollision = new gamid.physics.SquareCollision(square);

// Os métodos abaixo representam as ações que as teclas devem tomar
// quando pressionadas ou quando forem desacionadas.

// O evento setOnKeyDown é acionado quando a tecla é pressionada.
// Podemos passar quaisquer funções para serem executadas.
// Neste caso, está mudando a velocidade do eixo Y do objeto 'square'.
keyboard.setOnKeyDown(87, function(){
		square.speedY = -500;
});

// O evento setOnKeyUp é acionado quando a tecla é solta.
// Podemos passar quaisquer função para ser executada.
// Neste caso, está mudando a velocidade do eixo Y do objeto 'square', parando-o.
keyboard.setOnKeyUp(87, function(){
	square.speedY = 0;
});

keyboard.setOnKeyDown(83, function(){
		square.speedY = 500;
});

keyboard.setOnKeyUp(83, function(){
	square.speedY = 0;
});

// Adds the created object in the list that will be used by the time class.
canvasInstance.addObject(square);
`
