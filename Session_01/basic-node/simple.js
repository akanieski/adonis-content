const Calculator = require('./calc')
let instance = new Calculator()

try {
    setTimeout(doWork, 2000)
}catch (err) {
    console.log("CAUGHT")
    console.log(err)
}
console.log("timeout queued")

function doWork() {
    throw new Error('Boom')
}

async function mainParallelAsync() {
    try {
        var promises = []

        promises.push(instance.crunch(10))
        promises.push(instance.crunch(10))
        promises.push(instance.crunch(10))
        promises.push(instance.crunch(10))
        promises.push(instance.crunch(10))

        console.log("Waiting for " + promises.length + " promises to resolve")

        await Promise.all(promises)
    } catch (err) {
        console.log("CAUGHT")
        console.log(err)
    }

    console.log('Done!')
}

//mainParallelAsync()





















function mainPromise() {

    instance.crunch(10).then(() => {
        console.log('Done!')
    })

}

async function mainAsync() {
    await instance.crunch(10)
    console.log('Done!')
}
/*
async function mainParallelAsync() {
    var promises = []
    
    promises.push(instance.crunch(10))
    promises.push(instance.crunch(10))
    promises.push(instance.crunch(10))
    promises.push(instance.crunch(10))
    promises.push(instance.crunch(10))

    await Promise.all(promises)

    console.log('Done!')
}*/
