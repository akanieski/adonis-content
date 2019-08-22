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

    async crunch() {
        var result = await this.callDb(1)

        return result
    }


    callDb(v1) {
        return new Promise((done, throwError) => {
            setTimeout(() => {
                throwError('BOOM')
            }, 2000)
        })
    }
}

module.exports = Calculator