
export const GAME_STATES = {
    SETTINGS: "settings",
    IN_PROGRESS: "in_progress",
    WIN: "win",
    LOSE: "lose"
}
export const MOVING_DIRECTIONS = {
    UP: "up",
    DOWN: "down",
    LEFT: "left",
    RIGHT: "right",
}

const _data = {
    gameState: GAME_STATES.SETTINGS,
    settings: {
        gridSize:{
          x:4,
          y:4
        },
        pointsToWin:25,
        pointsToLose:25,
        googleJumpInterval: 4000
    },
    catch: {
        player1: 0,
        player2: 0,
    },
    miss: 0,
    time: new Date(),
    heroes: {
        google: {
            x: 0,
            y: 0
        },
        player1: {x:1 , y:1},
        player2: {x:2 , y:2},
    }
}

let _observer = () => {}
export function addEventListener(subscriber) {
    _observer = subscriber
}
let jumpIntervalID
function _runGoogleJump() {
     jumpIntervalID = setInterval(() =>{
            _changeGoogleCoords();
                _data.miss++;
                if(_data.miss ===_data.settings.pointsToLose){
                    _stopGoogleJump()
                    _data.gameState = GAME_STATES.LOSE
                }
                _observer()}
        ,_data.settings.googleJumpInterval)
}
function _stopGoogleJump() {
    clearInterval(jumpIntervalID)
}
function _changeGoogleCoords() {
    //регенирация новых координат гугла, до тех пор , пока координаты гугла совпадают с коорд игроков
    let newX=_data.heroes.google.x
    let newY=_data.heroes.google.y
    do {
        newX = getRandomInt(_data.settings.gridSize.x -1)
        newY = getRandomInt(_data.settings.gridSize.y -1)
        var newCoordsMatchWithPlayer1Coords = newX === _data.heroes.player1.x && newY === _data.heroes.player1.y
        var newCoordsMatchWithPlayer2Coords = newY === _data.heroes.player2.x && newY === _data.heroes.player2.y
    } while (newCoordsMatchWithPlayer1Coords ||  newCoordsMatchWithPlayer2Coords)//true

    //todo: using do while prevent generating the same coordinates
    _data.heroes.google.x = newX
    _data.heroes.google.y = newY

}
function _checkIsCoordsInValidRange(coords) {
    const xIsCorrect  = coords.x >= 0 && coords.x < _data.settings.gridSize.x
    const yIsCorrect  = coords.y >= 0 && coords.y < _data.settings.gridSize.y
    return xIsCorrect && yIsCorrect
}
function _coordsMatchWithOtherPlayer(coords) {
    const player1IsInThisCell  = coords.x === _data.heroes.player1.x && coords.y === _data.heroes.player1.y
    const player2IsInThisCell  = coords.x === _data.heroes.player2.x && coords.y === _data.heroes.player2.y
    return player1IsInThisCell || player2IsInThisCell
}
function _coordsMatchWithOtherGoogle(coords) {
    const googleIsInThisCell  = coords.x === _data.heroes.google.x && coords.y === _data.heroes.google.y
    return googleIsInThisCell
}
export function start() {
    if (_data.gameState !== GAME_STATES.SETTINGS) {
        throw new Error ("Game can`t be started:" + _data.gameState)
    }
    _data.gameState = GAME_STATES.IN_PROGRESS
    _runGoogleJump()
    _observer()

}
/**
 * любое целое положит число, генер от 0 до этого целого числа
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * (max+1))
}
function _catchGoogle(playerNumber) {
    _stopGoogleJump()

    _data.catch[`player${playerNumber}`]++
    if (_data.catch[`player${playerNumber}`] === _data.settings.pointsToWin){
        _data.gameState = GAME_STATES.WIN
    } else{
        _changeGoogleCoords()
        _runGoogleJump()
    }
    _observer()
}
/**
 * количество баллов заработанных пользователем
 * @returns {number}
 */
export function getCatchCount() {
    return _data.catch
}
export function getMissCount() {
    return _data.miss
}
export function playAgain() {
    _data.miss = 0
    _data.catch = 0
    _data.gameState = GAME_STATES.SETTINGS
    _observer()
}
export function getGoogleCoords() {
    return {..._data.heroes.google}
}
export function getPlayer1Coords() {
    return {..._data.heroes.player1}
}
export function getPlayer2Coords() {
    return {..._data.heroes.player2}
} 
export function getGridSizeSettings() {
    return {..._data.settings.gridSize}
}
export function getGameState() {
    return _data.gameState
}
export function setGridSize(x,y) {
    if (x<1) throw new Error("Incorrect X grid size settings")
    if (y<1) throw new Error("Incorrect Y grid size settings")
    _data.settings.gridSize.x = x
    _data.settings.gridSize.y = y

}
export function movePlayers(playerNumber, direction) {

    validatePlayerNumbersOrThrow(playerNumber)
    if (_data.gameState !== GAME_STATES.IN_PROGRESS){
        return;
    }
    const newCoords = {..._data.heroes[`player${playerNumber}`]}
    switch (direction){
        case MOVING_DIRECTIONS.LEFT: {
            newCoords.x--
            break
        }
        case MOVING_DIRECTIONS.RIGHT: {
            newCoords.x++
            break
        }
        case MOVING_DIRECTIONS.UP: {
            newCoords.y--
            break
        }
        case MOVING_DIRECTIONS.DOWN: {
            newCoords.y++
            break
        }
    }
    const isValid = _checkIsCoordsInValidRange(newCoords)
    if (!isValid) return

    const isMatchWithOtherPlayer = _coordsMatchWithOtherPlayer(newCoords)
    if (isMatchWithOtherPlayer) return;

    const isMatchWithOtherGoogle = _coordsMatchWithOtherGoogle(newCoords)
    if (isMatchWithOtherGoogle) {
        _catchGoogle(playerNumber)
    }
    _data.heroes[`player${playerNumber}`] = newCoords
    _observer()
}
export function validatePlayerNumbersOrThrow(playerNumber){
    if (![1,2].some(number => number === playerNumber)){
        throw new Error("Incorrect player number")
    }
}