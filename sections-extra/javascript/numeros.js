const peso1 = 1.0
const peso2 = Number('2.2')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2)) // 

const avaliacao1 = 9.582
const avaliacao2 = 6.991

const total = avaliacao1 * peso1 + avaliacao2 * peso2

const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // aredonda o valor
console.log(media.toString(2)) // retorna em forma binaria
console.log(typeof media)
console.log(typeof Number)