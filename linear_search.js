let random_numbers=[6,29,18,2,72,19,18,10,37]
function linearSearch(num,array){
    var answer=array.indexOf(num)
    return answer
}
console.log(linearSearch(18,random_numbers))


let banana_arr="banana".split("")
function globalLinearSearch(input,array){
    var answer=[]
    for(var i=0; i<array.length; i++){
        if(input===array[i]){
            answer.push(i)
        }
    }
    return answer
}
console.log(globalLinearSearch("a",banana_arr))