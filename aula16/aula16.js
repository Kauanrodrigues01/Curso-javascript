let num = [10,20,30,40,50]

for(let i = 0; i < num.length; i++){
    console.log(num[i])
}

console.log('   ')

for(i in num){
    console.log(num[i])
}

console.log('    ')

for(i in num){
    console.log(num[i])
}
for(i of num){
    console.log(i)
}