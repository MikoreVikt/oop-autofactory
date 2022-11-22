export default function generateVIN(symbols, numbers){
    let VIN = ''
    for(let i = 1; i<=17;i++){
        let randomizer = Math.random()
        let getSymbol = Math.floor(Math.random() * symbols.length)
        let getNumber = Math.floor(Math.random() * numbers.length)
        if(randomizer >= 0.5){
            VIN += symbols[getSymbol]
        }else{
            VIN += numbers[getNumber]
        }
    }
    return VIN
}