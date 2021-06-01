import React from "react";
import './TicTacToe.css';
export default class TicTacToe extends React.Component {
    constructor(props) {
        super(props)
        this.state = { a: ['', '', '', '', '', '', '', '', ''], userflag: true, winner1: false, winner2: false,prevTarget:!false }
    }


    handleClick = (index) => {

        var arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
     if(this.state.a[index] !='' || this.state.winner1 || this.state.winner2){
         return null
     }
        this.setState({ a: [...this.state.a.slice(0, index), this.state.userflag ? 'X' : "O", ...this.state.a.slice(index + 1)], userflag: !this.state.userflag },
        
        () => {
            arr.forEach((item, index) => {

                if (this.state.a[item[1]] != '' && this.state.a[item[0]] == this.state.a[item[1]] && this.state.a[item[1]] == this.state.a[item[2]]) {
                    if (this.state.a[item[0]] == "X") {
                        this.setState({ winner1: true })

                    }
                    else if (this.state.a[item[0]] == "O") {
                        this.setState({ winner2: true })
                    }

                }
            })
        })
    }

    render() {
        return (

            <div >
                <table >
                    <tr>
                        <td onClick={() => this.handleClick(0)}> {this.state.a[0]} </td>
                        <td onClick={() => this.handleClick(1)}> {this.state.a[1]} </td>
                        <td onClick={() => this.handleClick(2)}> {this.state.a[2]} </td>
                    </tr>

                    <tr>
                        <td onClick={() => this.handleClick(3)}> {this.state.a[3]} </td>
                        <td onClick={() => this.handleClick(4)}> {this.state.a[4]} </td>
                        <td onClick={() => this.handleClick(5)}> {this.state.a[5]} </td>
                    </tr>

                    <tr>
                        <td onClick={() => this.handleClick(6)}> {this.state.a[6]} </td>
                        <td onClick={() => this.handleClick(7)}> {this.state.a[7]} </td>
                        <td onClick={() => this.handleClick(8)}> {this.state.a[8]} </td>
                    </tr>
                </table>



                {this.state.winner1 ? <div> <h1>User 1 win</h1> </div> : <></>}
                {this.state.winner2 ? <div> <h1>User 2 win</h1></div> : <></>}



            </div>
        )
    }
}