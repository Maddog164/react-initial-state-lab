// your Bomb code here!
import React, {Component} from 'react';

export default class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft:props.initialCount
        }
    }

    // increment = ()=>{
    //     const SECONDS_LEFT = this.state.secondsLeft - 1
    //         this.setState({
    //             secondsLeft:SECONDS_LEFT
    //         })
    // }

    render() {
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!` ;

        return (
            <div>{message}</div>
        )
    }

}