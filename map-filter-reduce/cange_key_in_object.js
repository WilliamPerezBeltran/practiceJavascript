let input = [{
        code_id: 4,
        dateTime: "1/9/2021 11:06:08 AM",
        id: 533,
        movementType: "entrada",
        quantity: 1,
        tags: "E280689400004002BD11A468"
    },
    {
        code_id: 2,
        dateTime: "1/9/2021 11:06:08 AM",
        id: 534,
        movementType: "entrada",
        quantity: 2,
        tags: "E280689400005002BD11A466,E280689400005002BD11A469"
    },
    {
        code_id: 1,
        dateTime: "1/9/2021 11:06:08 AM",
        id: 535,
        movementType: "entrada",
        quantity: 2,
        tags: "E280689400005002BD11A46A,E280689400005002BD11A465"
    }
]


let output = [{
        code_id: 4,
        dateTime: "1/9/2021 11:06:08 AM",
        id: 533,
        movementType: "entrada",
        quantity: 1,
    },
    {
        code_id: 2,
        dateTime: "1/9/2021 11:06:08 AM",
        id: 534,
        movementType: "entrada",
        quantity: 2,
    },
    {
        code_id: 1,
        dateTime: "1/9/2021 11:06:08 AM",
        id: 535,
        movementType: "entrada",
        quantity: 2,
    }
]



// let output = []



let uniqueCodesInput = input.map((item) => item.code_id).filter((currentValue, index, array) => array.indexOf(currentValue) === index)
let sumInput = uniqueCodesInput.map((uniqueCode) => {
    let count = 0
    let date = null
    let movement = null
    for (var i = 0; i < input.length; i++) {
        date = input[i].dateTime
        movement = input[i].movementType
        if (input[i].code_id === uniqueCode) {
            count += input[i].quantity
        }
    }
    return {
        code_id: uniqueCode,
        dateTime: date,
        movementType: movement,
        input: count,
    }
})


let uniqueCodesOutput = output.map((item) => item.code_id).filter((currentValue, index, array) => array.indexOf(currentValue) === index)
let sumOutput = uniqueCodesOutput.map((uniqueCode) => {
    let count = 0
    let date = null
    let movement = null
    for (var i = 0; i < input.length; i++) {
        date = input[i].dateTime
        movement = input[i].movementType
        if (input[i].code_id === uniqueCode) {
            count += input[i].quantity
        }
    }
    return {
        code_id: uniqueCode,
        dateTime: date,
        movementType: movement,
        output: count,
    }
})

let map = new Map
let mergeSum = sumInput.concat(sumOutput).reduce(function(r, o) {
    var temp;
    if (map.has(o.code_id)) {
        Object.assign(map.get(o.code_id), o);
    } else {
        temp = Object.assign({}, o);
        map.set(temp.code_id, temp);
        r.push(temp);
    }
    return r;
}, [])

let resultBalance = mergeSum.map((item) => {
    // return Object.assign(item,{balance:item.input-item.output})
    if (Object.keys(item).includes("output")) {
        return Object.assign(item, {
            balance: item.input - item.output
        })
    } else {
        return Object.assign(item, {
            balance: item.input,
            output: 0
        })

    }
}).map(item => {
    return {
        code_id: item.code_id,
        input: item.input,
        balance: item.balance,
        output: item.output,
    }

})
console.log('resultBalance')
console.log(resultBalance)