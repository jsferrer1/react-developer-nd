/* Popular Ice Cream Totals Quiz
 *
 * Using the data array and .reduce():
 *   - Return an object where each property is the name of an ice cream flavor
 *     and each value is an integer that's the total count of that flavor
 *   - Store the returned data in a new iceCreamTotals variable
 *
 * Notes:
 *   - Do not delete the data variable
 *   - Do not alter any of the data content
 */

const data = [
  { name: 'Tyler', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream'] },
  { name: 'Richard', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla'] },
  { name: 'Amanda', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana'] },
  { name: 'Andrew', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'] },
  { name: 'David', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry'] },
  { name: 'Karl', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip'] }
];

let iceCreamTotals = data.reduce((accumulator, currentValue) => {
  currentValue.favoriteIceCreams.map((icecream)=>{
      if(accumulator.hasOwnProperty(icecream))
         accumulator[icecream] += 1
      else
         accumulator[icecream] = 1
  })
  return accumulator
}, {});

console.log(iceCreamTotals)