const marvel_heros = ["swatantra","kumar","rajak"]
const dc_heros = ["badal","deepak","vikash"]
marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);