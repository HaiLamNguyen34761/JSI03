const players = [
    { id: 11, name: 'Messi', age: 33 },         
    { id: 12, name: 'Ronaldo', age: 34 },      
    { id: 13, name: 'Young', age: 35 },        
    { id: 14, name: 'Mane', age: 21 },          
    { id: 15, name: 'Salah', age: 24 },
]
const playersmoditified = players.map((id) => players.id !== 16)
console.log(playersmoditified)
