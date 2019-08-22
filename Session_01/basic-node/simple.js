const Calculator = require('./calc')
let instance = new Calculator()

function main() {
    instance.crunch(10)
    console.log('Done!')
}

main()





















function mainPromise() {

    instance.crunch(10).then(() => {
        console.log('Done!')
    })

}

async function mainAsync() {
    await instance.crunch(10)
    console.log('Done!')
}
async function mainParallelAsync() {
    var promises = []
    
    promises.push(instance.crunch(10))
    promises.push(instance.crunch(10))
    promises.push(instance.crunch(10))
    promises.push(instance.crunch(10))
    promises.push(instance.crunch(10))

    await Promise.all(promises)

    console.log('Done!')
}
