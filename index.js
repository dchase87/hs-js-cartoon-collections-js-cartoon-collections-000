function dwarfRollCall(dwarves) {
  var arr = []

  for (let i = 0, l = dwarves.length; i < l; i++) {
    arr.push(`${i + 1}. ${dwarves[i]} `)
  }

  return arr.join('')
}

function summonCaptainPlanet(planeteerCalls){
  var arr = []

  for (let i = 0, l = planeteerCalls.length; i < l; i++) {
    arr.push(`${planeteerCalls[i].toUpperCase}!`)
  }
  return arr
}

function longPlaneteerCalls(words) {
  for (let i = 0, l = words.length; i < l; i++) {
    if (words[i].length > 4) {
      return true
    }
    else {
      return false
    }
  }
}

function findTheCheese (foods) {
  const cheeses = ['cheddar', 'gouda', 'camembert']

  for (let i = 0, l = cheeses.length; i < l; i++) {
    for (let j = 0, m = foods.length; j < m; j++) {
      if (cheeses[i] === foods[j]) {
        return foods[j]
      }
    }
  }
  return 'no cheese!'
}
