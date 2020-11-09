
var warrior = 'ninja'

const screamwarrior = () => {
    let warrior2 = 'samurai'
    return{
        shootwarrior: () => {
            return console.log(warrior, warrior2)
        }
    }
}
const newwarrior = screamwarrior();
newwarrior.shootwarrior()
