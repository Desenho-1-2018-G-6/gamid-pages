export const title = "beforeCollision()"
export const links = [
                    {title:"Retornar", link:"/gamid-pages/physics"}
                    ]

export const content = 
`
Essa função é ativada após um dado objeto colidir com outro objeto colidível,
 ou seja, outro objeto com físicas atribuídas. É ativado apenas quando hasCollision
está setado como false.
`

export const example = 
`
let canvasInstance = new gamid.graphics.Canvas(800, 800, 'purple');
let canvas = canvasInstance.element;
let square = new gamid.graphics.Square(50, 50, 0, 0, 50, 'blue');
let squarecollision = new gamid.physics.SquareCollision(square);
squarecollision.hasCollision = false; // É true como padrão!
// como parâmetro padrão, essa função recebe o próprio objeto
// atribuido à squarecollision, além do objeto em que ele colidiu
squarecollision.afterCollision = function(mainObject, collidedObject){
    //torna o objeto rosa ao encostar em outro objeto
    mainObject.color = "pink"; 
    //deleta o objeto colidido
    canvasInstance.deleteObject(collidedObject);
}

`