export const title = "BaseObject"
export const links = [
                    {title:"Retornar", link:"/gamid-pages/graphics"}
                    ]

export const content = 
`
BaseObject é a classe abstrata responsável por realizar a heranças
de classes concretas que podem ser instanciadas e inseridas em um Canvas.
`

export const attributeList = [
    {attr: "mass", description: "Massa do objeto instanciado"},
    {attr: "height", description: "Altura do objeto instanciado"},
    {attr: "width", description: "Largura do objeto instanciado"},
    {attr: "x", description: "Posição do objeto no canvas no eixo X"},
    {attr: "y", description: "Posição do objeto no canvas no eixo Y"},
    {attr: "newPosition(dt)", description: "Função que atualiza a posição do objeto no canvas"},
    {attr: "update()", description: "Função que atualiza a representação do objeto no canvas"},

]