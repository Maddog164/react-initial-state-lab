// your ImageSlider code here!
import React, {Component} from 'react';

export default class ImageSlider extends Component {

    constructor() {
        super()
        this.state = {
            currentSlideIndex:0
        }
    }

    // increment = ()=>{
    //     const CURRENT_SLIDE = this.state.currentSlideIndex + 1
    //         this.setState({
    //             currentSlideIndex:CURRENT_SLIDE
    //         })
    // }

    render() {
        return (
            <h1>I am on slide {this.state.currentSlideIndex}</h1>
        )

    }

}