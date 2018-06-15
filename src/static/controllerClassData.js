export const title = "Controller"
export const links = [
                    {title:"Retornar", link:"/gamid-pages/controller"}
                    ]

export const content = 
`
Controller é a classe abstrata que decora objetos instanciados. Para 
extendê-la, é necessário escrever os métodos OnKeyUp() e OnKeyDown(). 
Todas as outra funções não são necessárias para extensão, são apenas 
suportivas. Keyboard é uma classe que herda de controle, e serve como 
Classe base do Gamid para o controle. Além dessas extensões, o usuário deve 
definir eventos para onKeyUp e eventos para onKeyDown serem disparados.
`

export const attributeList = [
    {attr: "addKey(key, func)", description: "Adiciona uma tecla à lista de teclas"},
    {attr: "setOnKeyUp(key, func)", description: "Modifica a funcionalidade de uma tecla já instanciada ao levantá-la"},
    {attr: "setOnKeyDown(key, func)", description: "Modifica a funcionalidade de uma tecla já instanciada ao abaixá-la"},
    {attr: "onKeyUp()", description: "Checa a lista de teclas, e caso alguma tecla registrada seja levantada, executa a função correspondente"},
    {attr: "onKeyDown()", description: "Checa a lista de teclas, e caso alguma tecla registrada seja abaixada, executa a função correspondente"},
]