'use strict'

const displayPlayerTurn = (currPlayer) => {
  $('#player-turn').text(`It is ${currPlayer}s turn`)
}

module.exports = {
  displayPlayerTurn
}
