export const title = "Time"
export const links = []

export const content = 
`
Time é a única biblioteca imutável: Nada nela deve ser modificado, 
uma vez que ela é responsável pelo funcionamento principal do framework.
Nela, objetos são atualizados e colisões são verificadas. Nenhuma função é modificável.
`

export const attributeList = [
    {attr: "setTime()", description: "Função que define a diferença de tempo entre um frame e outro"},
    {attr: "loop()", description: "Função que capta a real diferença entre um frame e outro"},
    {attr: "updateGame(dt)", description: "Função que recebe a real diferença entre dois frames, e realiza as atualizações necessárias para o funcionamento da aplicação"}
     
]