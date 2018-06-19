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
let canvasInstance = new gamid.graphics.Canvas(800, 800, 'purple');
let canvas = canvasInstance.element; //get <canvas> html attribute

// Cria um obejto do tipo quadrado com seus respectivos atributos.
// Width, height, posição no eixo X, posição no eixo Y, massa e cor, respectivamente.
let square = new gamid.graphics.Square(100, 100, 50, 75, 10, 'black');

// Adiciona a física de colisão de quadrado para o objeto criado anteriormente.
// Essa classe (SquareCollision) chama o método que adiciona o objeto
// na lista collidableObjects (Como: graphics.collidableObjects.push(objeto)).
let squareCollision = new gamid.physics.SquareCollision(square);

// Adiciona o objeto criado na lista que será utilizada pela classe Time,
// na qual o renderizará no canvas.
canvasInstance.addObject(square);

// A classe time chama alguns métodos do collidableObjects
// Por exemplo: this.graphics.collidableObjects[0].resolveBorderCollision()
// Este método em específico adiciona a colisão de borda (Canvas)
// com os objetos que possuem física.

// Mais interações que você pode fazer com os collidableObjects
// estão descritos na página da física.
`
