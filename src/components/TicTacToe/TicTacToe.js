import { Component } from "react";
import './TicTacToe.css'

class TicTacToe extends Component {

    state = {
        turn: 'x',
        cells: Array(9).fill(''),
        winner: null
    }

    checkForWinner = (squares) => {
        let combos = {
            across: [
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            down: [
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            diagonal: [
                [0,4,8],
                [2,4,6]
            ]
        }
        for(let combo in combos) {
            combos[combo].forEach(pattern => {
                if(squares[pattern[0]] === '' || squares[pattern[1]] === '' || squares[pattern[2]] === ''){
                    // do nothing
                }
                else if(squares[pattern[0]] === squares[pattern[1]] && squares[pattern[1]] === squares[pattern[2]] ){
                    this.setState({ winner: squares[pattern[0]]})
                }
            });
        }
    }

    handleClick = (num) => {
        if(this.state.cells[num] !== ''){
            alert('Already Clicked')
            return
        }

        if(this.state.winner){
            alert(`Winner is ${this.state.winner}`)
            return
        }

        let squares = [...this.state.cells]
        if(this.state.turn === 'x'){
            squares[num] = 'x'
            this.setState({ turn: 'o' })
        }else {
            squares[num] = 'o'
            this.setState({ turn: 'x' })
        }
        this.checkForWinner(squares)
        this.setState({ cells: squares })
    }

    handleRestart = () => {
        this.setState({ 
            turn: 'x',
            winner: null,
            cells: Array(9).fill('')
        })
    }

    cell = ({ num }) => {
        return <td onClick = {() => this.handleClick(num)}>{this.state.cells[num]}</td>
    }

    render(){
        return(
            <div className="container">
            <h1>Tic Tac Toe</h1>
            <table>
                <h3>Turn : {this.state.turn}</h3>
                <tbody>
                    <tr>
                        <this.cell num={0} />
                        <this.cell num={1} />
                        <this.cell num={2} />
                    </tr>
                    <tr>
                        <this.cell num={3} />
                        <this.cell num={4} />
                        <this.cell num={5} />
                    </tr>
                    <tr>
                        <this.cell num={6} />
                        <this.cell num={7} />
                        <this.cell num={8} />
                    </tr>
                </tbody>
            </table>
            {this.state.winner &&
                <>
                    <p>{this.state.winner} is the winner</p>
                    <button onClick={() => this.handleRestart()}>Play Again</button>
                </>
            }
        </div>
        )
    }
}

export default TicTacToe;