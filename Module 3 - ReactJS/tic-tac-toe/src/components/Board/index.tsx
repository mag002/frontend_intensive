import React from "react";
import Square from "../Square";

type BoardState = {
    squares: (string | null)[];
    xIsNext: boolean;
    history: Omit<BoardState, 'history'>[]
}

function calculateWinner(squares: (string | null)[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

const defaultState: BoardState = {
    xIsNext: true,
    squares: Array(9).fill(null),
    history: []
}

class Board extends React.Component<{}, BoardState>{
    constructor(props: {}) {
        super(props);
        this.state = defaultState

    }

    // update color for X and O 17:50
    handleRestart() {
        this.setState({
            ...defaultState
        })
    }

    handleUndo() {
        const squares = [...this.state.squares];
        if (!this.state.history.length || calculateWinner(squares)) {
            return
        }
        const currentState: BoardState = { ...this.state.history[this.state.history.length - 1], history: [] };
        this.state.history.pop();
        console.log('this.state.history', this.state.history)
        const newHistory = this.state.history;
        currentState.history = newHistory;
        this.setState(currentState)
        // console.log('currentState', currentState)
    }

    handleClick(i: number) {
        // 17:20
        const squares = [...this.state.squares];//
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        const history = [...this.state.history];
        const currentState: any = { ... this.state };
        delete currentState.history;
        history.push(currentState);
        this.setState({
            squares,
            xIsNext: !this.state.xIsNext,
            history
        })
    }

    // return
    render() {
        console.log('hisotry', this.state.history)
        const winner = calculateWinner(this.state.squares);
        let status: string;
        if (winner) {
            status = 'Winner is ' + winner;
        } else {
            status = 'Next player is ' + (this.state.xIsNext ? 'X' : 'O')
        }
        return <div className='board'>
            <div className='status'>
                {/* {} */}
                {status}
            </div>
            <div className="squareContainer">
                {
                    this.state.squares.map((item, index) => {
                        return <Square key={`square_${index}`} onClick={() => { this.handleClick(index) }} value={item} />
                    })
                }
            </div>
            <div className='actions'>
                <button onClick={() => this.handleRestart()}>
                    Restart
                </button>

                <button onClick={() => this.handleUndo()}>
                    Undo
                </button>
            </div>
        </div>
    }

}

export default Board;