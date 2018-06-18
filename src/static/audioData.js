export const title = "Audio"
export const links = []

export const content =
`
Audio é a biblioteca responsável por atribuir som à objetos. Ela é encarregada
de realizar todos os métodos descritos posteriormente, do ínicio ao fim da construção
de um áudio.
`

export const attributeList = [
    {attr: "play(path_do_som)", description: "String : Inicializa o áudio requerido."},
    {attr: "pause(path_do_som)", description: "String : Pausa o áudio requerido e quando der o play() novamente, volta aonde tinha pausado."},
    {attr: "loop(path_do_som)", description: "String : Faz com que o áudio funcione em loop. Quando acabar o áudio, inicia novamente."},
    {attr: "stop(path_do_som)", description: "String : Finaliza a música."}
]

export const example =
`
console.log("exemplo de instanciação aqui!");

`
