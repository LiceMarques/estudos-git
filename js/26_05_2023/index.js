const str1 = '         pai cade vc           '

console.log(str1.toUpperCase())
console.log(str1.replace("pai", "mae").toUpperCase())
console.log(str1.substring(2, 7))
console.log(str1.trim())
console.log(str1.includes("cade1"))

const str2 = "leo esta muito triste"
const a = str2.split(" ")
console.log(a[2])

const b = ['leo', 'canta', 'demais']
console.log(b.join(' '))