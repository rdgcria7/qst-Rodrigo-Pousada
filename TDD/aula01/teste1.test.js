let a = 'vai se fude kkkk'
let b = 'olá'

Deno.test("Teste do oi (NO API)",  () => {
    if (a != "oi") {
            throw new Error('${a} comi sua mamae fdp kkk');
    }
})

Deno.test("Não pode ser oi (NO API)",  () => {
    if (b == "oi") {
            throw new Error('${a} é oi');
    }
})
