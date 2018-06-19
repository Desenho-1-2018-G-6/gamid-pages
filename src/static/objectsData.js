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
let canvas = canvasInstance.element;

// Cria um objeto do tipo quadrado com seus respectivos atributos.
// Width, height, posição no eixo X, posição no eixo Y, massa e cor, respectivamente.
let square = new gamid.graphics.Square(100, 100, 50, 75, 10, 'black');

// Adiciona o objeto criado na lista que será utilizada pela classe Time.
canvasInstance.addObject(square);

// Retorna o log dos objetos anteriormente instanciados.
console.log(gamid.graphics.objects);

// O resultado do log mostrará a quantidade de objetos criados e seus respectivos atributos.
// v (1) [square]
// > 0: Square {width: 100, height: 100, x: 50, y: 75, mass: 10 ...}
`
