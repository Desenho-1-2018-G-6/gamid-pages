export const title = "Canvas"
export const links = [
                    {title:"Retornar", link:"/gamid-pages/graphics"}
                    ]

export const content = 
`
Canvas é a classe responsável pela instanciação do canvas.
Dentro dele, temos uma série de atributos:
`

export const attributeList = [
    {attr: "element", description: "Retorna a referência ao elemento DOM html"},
    {attr: "element.id", description: "Id do elemento DOM"},
    {attr: "element.height", description: "Altura do elemento DOM"},
    {attr: "element.width", description: "Largura do elemento DOM"},
    {attr: "element.color", description: "Cor do elemento DOM"},
    {attr: "id", description: "Id do objeto instanciado"},
    {attr: "height", description: "Altura do objeto instanciado"},
    {attr: "width", description: "Largura do objeto instanciado"},
    {attr: "addObject(baseObject)", description: "Adiciona um objeto base ao canvas"},
    {attr: "setBackgroundColor(color)", description: "modifica a cor de fundo do canvas"} 
]