import React from "react";

type SquareProps = {
    value: string | null,
    onClick: () => void,
}

class Square extends React.Component<SquareProps>{
    render() {
        return <button className={`${this.props.value === 'X' ? 'isX' : 'isO'} square`} onClick={this.props.onClick}>
            {this.props.value}
        </button>
    }
}

export default Square;