document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid')
    const scoredisplay = document.getElementById('score')
    const resultdisplay = document.getElementById('result')
    const newGame = document.getElementById('reload')
    const width = 4
    let squares = []
    var score = 0
    var square

    function Createboard() {
        for(let i = 0; i < width*width; i++){
            square = document.createElement('div')
            square.innerHTML = 0
            gridDisplay.appendChild(square)
            squares.push(square)
        }
        generate()
        generate()
    }
    Createboard()

    function generate() {
        randomNumber = Math.floor(Math.random() * squares.length)
        if (squares[randomNumber].innerHTML == 0) {
            squares[randomNumber].innerHTML = 2
            checklose()
        } else generate()
    }

    function swipeRight() {
        for(let i=0; i < 16; i++) {
            if(i % 4 == 0) {
                var Tone = squares[i].innerHTML
                var Ttwo = squares[i+1].innerHTML
                var Tthree = squares[i+2].innerHTML
                var Tfour = squares[i+3].innerHTML
                var row = [parseInt(Tone), parseInt(Ttwo), parseInt(Tthree), parseInt(Tfour)]

                let filter_row = row.filter(num => num)
                let missing = 4 - filter_row.length
                let zeros = Array(missing).fill(0)
                let newRow = zeros.concat(filter_row)
                squares[i].innerHTML = newRow[0]
                squares[i+1].innerHTML = newRow[1]
                squares[i+2].innerHTML = newRow[2]
                squares[i+3].innerHTML = newRow[3]
            }
        }
    }

    function swipeLeft() {
        for(let i=0; i < 16; i++) {
            if(i % 4 == 0) {
                var Tone = squares[i].innerHTML
                var Ttwo = squares[i+1].innerHTML
                var Tthree = squares[i+2].innerHTML
                var Tfour = squares[i+3].innerHTML
                var row = [parseInt(Tone), parseInt(Ttwo), parseInt(Tthree), parseInt(Tfour)]

                let filter_row = row.filter(num => num)
                let missing = 4 - filter_row.length
                let zeros = Array(missing).fill(0)
                let newRow = filter_row.concat(zeros)
                squares[i].innerHTML = newRow[0]
                squares[i+1].innerHTML = newRow[1]
                squares[i+2].innerHTML = newRow[2]
                squares[i+3].innerHTML = newRow[3]
            }
        }
    }

    function swipeDown() {
        for(let i = 0; i < 4; i++) {
            var Tone = squares[i].innerHTML
            var Ttwo = squares[i + width].innerHTML
            var Tthree = squares[i + width*2].innerHTML
            var Tfour = squares[i + width*3].innerHTML
            var col = [parseInt(Tone), parseInt(Ttwo), parseInt(Tthree), parseInt(Tfour)]
            let filter_col = col.filter(num => num)
            let missing = 4 - filter_col.length
            let zeros = Array(missing).fill(0)
            let newCol = zeros.concat(filter_col)

            squares[i].innerHTML = newCol[0]
            squares[i + width].innerHTML = newCol[1]
            squares[i + width*2].innerHTML = newCol[2]
            squares[i + width*3].innerHTML = newCol[3]
        }
    }

    function swipeUp() {
        for(let i = 0; i < 4; i++) {
            var Tone = squares[i].innerHTML
            var Ttwo = squares[i + width].innerHTML
            var Tthree = squares[i + width*2].innerHTML
            var Tfour = squares[i + width*3].innerHTML
            var col = [parseInt(Tone), parseInt(Ttwo), parseInt(Tthree), parseInt(Tfour)]
            let filter_col = col.filter(num => num)
            let missing = 4 - filter_col.length
            let zeros = Array(missing).fill(0)
            let newCol = filter_col.concat(zeros)

            squares[i].innerHTML = newCol[0]
            squares[i + width].innerHTML = newCol[1]
            squares[i + width*2].innerHTML = newCol[2]
            squares[i + width*3].innerHTML = newCol[3]
        }
    }


    function combineRow() {
        for(let i=0; i<15; i++)
        {
            if (squares[i].innerHTML === squares[i+1].innerHTML) {
                let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+1].innerHTML)
                squares[i].innerHTML = combinedTotal
                squares[i+1].innerHTML = 0
                score += combinedTotal
                scoredisplay.innerHTML = score
            }
        }
        checkWin()
    }

    function combineCol() {
        for(let i=0; i<12; i++)
        {
            if (squares[i].innerHTML === squares[i+width].innerHTML) {
                let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+width].innerHTML)
                squares[i].innerHTML = combinedTotal
                squares[i+width].innerHTML = 0
                score += combinedTotal
                scoredisplay.innerHTML = score
            }
        }
        checkWin()
    }

    function Control(e) {
        if(e.keyCode === 39) {
            keyRight()
        }
        else if (e.keyCode === 37) {
            keyLeft()
        }
        else if (e.keyCode === 38) {
            keyUp()
        }
        else if (e.keyCode === 40) {
            keyDown()
        }
    }
    document.addEventListener('keyup', Control)

    function keyRight() {
        swipeRight()
        combineRow()
        swipeRight()
        generate()
    }

    function keyLeft() {
        swipeLeft()
        combineRow()
        swipeLeft()
        generate()
    }

    function keyDown() {
        swipeDown()
        combineCol()
        swipeDown()
        generate()
    }

    function keyUp() {
        swipeUp()
        combineCol()
        swipeUp()
        generate()
    }

    function checkWin() {
        for(let i = 0; i < squares.length; i++) {
            if  (squares[i].innerHTML == 2048) {
                resultdisplay.innerHTML = 'You Win!! ✌️'
                document.removeEventListener('keyup', Control)
            }
        }
    }

    function checklose () {
        let zeros = 0
        for(let i =0; i < squares.length; i++) {
            if(squares[i].innerHTML == 0) {
                zeros++
            }
        }
        if (zeros === 0) {
            resultdisplay.innerHTML = 'Game Over!'
            document.removeEventListener('keyup', Control)
        }
    }

    function new_game () {
        newGame.addEventListener('click', function(){
            location.reload()
        })
    }
    new_game()

})