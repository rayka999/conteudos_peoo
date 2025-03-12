const multiplicacao=require('./multiplicacao')
test ('multiplicação de 5 e 4 deve ser 20', ()=>{
    expect(multiplicacao(5,4)).toBe(20);
})

test ('multiplicação de positivo por negativo',() =>{
    expect(multiplicacao(2,-3)).toBe(-6);
})
