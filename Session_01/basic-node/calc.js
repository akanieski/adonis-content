class Calculator {

    add (v1, v2) {
        return v1 + v2
    }
    subtract (v1, v2) {
        return v1 - v2
    }
    multiply (v1, v2) {
        return v1 * v2
    }
    divide (v1, v2) {
        return v1 / v2
    }

    crunch(v1) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Crunched')
                resolve()
            }, 2000)
        })
    }
}

module.exports = Calculator