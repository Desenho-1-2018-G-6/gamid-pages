export const title = "Square"
export const links = [
                    {title:"Retornar", link:"/gamid-pages/graphics"}
                    ]

export const content = 
`
Square é o exemplo base da instanciação de um baseObject. Nele, pode-se 
utilizar de todos os decorators provindos para baseObject. Esses decorators
podem ser melhor entendidos nas bibliotecas de Controller e Physics. Além disso, 
por se tratar de uma classe concreta de baseObject, todos os atributos de baseObject
foram herdados.
`

export const attributeList = [
    {attr: "speedX", description: "Massa do objeto instanciado"},
    {attr: "speedY", description: "Altura do objeto instanciado"},
    {attr: "color", description: "Largura do objeto instanciado"}
     
]

export const example = 
`
//creates canvas
let canvasInstance = new gamid.graphics.Canvas(800, 800, 'purple'); 

//creates baseObject - square
let square = new gamid.graphics.Square(50, 50, 0, 0, 50, 'blue'); 
// inserts square on canvas
canvasInstance.addObject(square); 
`