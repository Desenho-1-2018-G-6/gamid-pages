export const title = "afterCollision()"
export const links = [
                    {title:"Retornar", link:"/gamid-pages/physics"}
                    ]

export const content =
`
Essa função é ativada após um dado objeto colidir com outro objeto colidível,
 ou seja, outro objeto com físicas atribuídas. É ativado apenas quando hasCollision
está setado como true.
`

export const example =
`
let canvasInstance = new gamid.graphics.Canvas(800, 800, 'purple');
let canvas = canvasInstance.element;

// Cria um objeto do tipo quadrado com seus respectivos atributos.
// Width, height, posição no eixo X, posição no eixo Y, massa e cor, respectivamente.
let square = new gamid.graphics.Square(50, 50, 0, 0, 50, 'blue');

// Adiciona a física de colisão de quadrado para o objeto criado anteriormente.
let squarecollision = new gamid.physics.SquareCollision(square);
squarecollision.hasCollision = true; // já é true como padrão!

// Como parâmetro padrão, essa função recebe o próprio objeto
// atribuido à squarecollision, além do objeto em que ele colidiu.
squarecollision.afterCollision = function(mainObject, collidedObject){
    // Torna o objeto rosa ao encostar em outro objeto.
    mainObject.color = "pink";
}

`
