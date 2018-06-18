export const title = "collidableObjects"
export const links = [
                    {title:"Retornar", link:"/gamid-pages/graphics"}
                    ]

export const content =
`
collidableObjects mantém uma lista de objetos que foram decorados com física por alguma
herança da classe Physics, encontrada na biblioteca da mesma. A biblioteca Time também
utiliza dessa lista, para verificar colisões e afins.
`

export const example =
`
// Creates an object with some physics

let canvasInstance = new gamid.graphics.Canvas(800, 800, 'purple');
let canvas = canvasInstance.element; //get <canvas> html attribute

// Creates an object of the square type with is respectives attributes.
// Width, height, position on the x-axis, position on the y-axis, mass and color, respectively.
let square = new gamid.graphics.Square(100, 100, 50, 75, 10, 'black');

// Adds square collision physics to the created object.
// This class (SquareCollision) call the method that adds the object
// to the collidableObjects (graphics.collidableObjects.push()).
let squareCollision = new gamid.physics.SquareCollision(square);

// Adds the created object in the list that will be used by the time class.
canvasInstance.addObject(square);

// The time call some methods of the collidableObjects
// For example: this.graphics.collidableObjects[0].resolveBorderCollision()
// this method adds the border collision physics to the object.

// More interactions that you can make with the collidableObjects
// are described on the physics page.
`
