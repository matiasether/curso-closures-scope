function greeting() {
    let userName = 'Matias'
    return function () {
        return 'Hola ' + userName
    }
}

const g = greeting()
console.log(g())