export const title = "BaseObject"
export const links = [
                    {title:"Retornar", link:"/gamid-pages/graphics"}
                    ]

export const content = 
`
BaseObject é a classe abstrata responsável por realizar a heranças
de classes concretas que podem ser instanciadas e inseridas em um Canvas.
 Também é possível criar uma classe concreta em cima de base Object. Para tal, 
 extenda de gamid.graphics.BaseObject, e defina as duas funções obrigatórias: 
 newPosition(dt) e update().
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