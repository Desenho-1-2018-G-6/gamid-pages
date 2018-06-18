export const title = "hasCollision"
export const links = [
                    {title:"Retornar", link:"/gamid-pages/physics"}
                    ]

export const content = 
`
hasCollision é um dos atributos que controla as físicas do Objeto. Ao ser setado como true,
o objeto recebe física e o evento de afterCollision, podendo colidir com outros objetos. 
Caso false, o objeto se torna "fantasma" para outros objetos, 
mas ainda recebe eventos de beforeCollision.
`

export const example = 
`
let canvasInstance = new gamid.graphics.Canvas(800, 800, 'purple');
let canvas = canvasInstance.element;
let square = new gamid.graphics.Square(50, 50, 0, 0, 50, 'blue');
let squarecollision = new gamid.physics.SquareCollision(square);
//Objeto fantasma!
squarecollision.hasCollision = false; // É true como padrão!
`