const houseBuilder = (story) => {
  console.log('build a house...')
  return (color) => {
    return `building a ${story}-story, ${color} house`
  }
}


const hb = houseBuilder(5);
console.log('do somethings...')
const res = hb('blue')

console.log(res)