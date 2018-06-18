export const title = "objects"
export const links = [
                    {title:"Retornar", link:"/gamid-pages/graphics"}
                    ]

export const content =
`
Os objects mantém uma lista de objetos cadastrados no Canvas. Essa lista de objetos é utilizada
pela biblioteca Time, para que os mesmos sejam locomovidos.
`

export const example =
`
let canvasInstance = new gamid.graphics.Canvas(800, 800, 'purple');
let canvas = canvasInstance.element; //get <canvas> html attribute

// Creates an object of the square type with is respectives attributes.
// Width, height, position on the x-axis, position on the y-axis, mass and color, respectively.
let square = new gamid.graphics.Square(100, 100, 50, 75, 10, 'black');

// Adds the created object in the list that will be used by the time class.
canvasInstance.addObject(square);

// Returns the log of the objects that were instantiated.
console.log(gamid.graphics.objects);

// The result of the log will show the quantity of the objects and your respectives attributes:
// v (1) [square]
// > 0: Square {width: 100, height: 100, x: 50, y: 75, mass: 10 ...}
`
