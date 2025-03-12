const exponenciacao=require('./exponenciacao')

test('exponenciação de dois numeros positivos', ()=> {
    expect(exponenciacao(2,3)).toBe(8);
});