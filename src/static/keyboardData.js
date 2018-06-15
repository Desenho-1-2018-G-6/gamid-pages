export const title = "Keyboard"
export const links = [
                    {title:"Retornar", link:"/gamid-pages/controller"}
                    ]

export const content = 
`
Keyboard é o exemplo base do framework Gamid. Nele, é possível atribuir teclas e 
funcionalidades para cada uma dessas teclas, utilizando das funções herdadas de Controller. 
Repara-se que a única diferença entre Keyboard e Controller é que Keyboard já tem os eventos 
definidos para um teclado.
`

export const attributeList = [
    {attr: "onKeyUp(event, functionList)", description: "Checa a lista de teclas, e caso alguma tecla registrada seja levantada, executa a função correspondente"},
    {attr: "onKeyDown(event, functionList)", description: "Checa a lista de teclas, e caso alguma tecla registrada seja abaixada, executa a função correspondente"}
]