const nbYear = (popubf, perc, add, popuaf) => {
    let result = 0
    let percent = perc / 100
    while(popubf <= popuaf) {
        popubf = popubf * (1 + percent) + add
        result++
    }
    return result
}

console.log(nbYear(500, 10, 20, 1000)) //6

console.log(nbYear(1500000, 2.5, 10000, 2000000)) //10