export const title = "beforeBorderCollision()"
export const links = [
                    {title:"Retornar", link:"/gamid-pages/physics"}
                    ]

export const content = 
`
Essa função é ativada após um dado objeto colidir com a borda. É ativado apenas quando hasBorderCollision
está setado como false.
`

export const example = 
`
let canvasInstance = new gamid.graphics.Canvas(800, 800, 'purple');
let canvas = canvasInstance.element;
let square = new gamid.graphics.Square(50, 50, 0, 0, 50, 'blue');
let squarecollision = new gamid.physics.SquareCollision(square);
squarecollision.hasBorderCollision = false; //É true como padrão!
// como parâmetro padrão, essa função recebe o próprio objeto
// atribuido à squarecollision
squarecollision.afterBorderCollision = function(object){
    //deleta o objeto ao colidir com a borda!
    canvasInstance.deleteObject(object); 
}

`