import React, {Component} from 'react'
import v1 from "../video/v1.mp4"
import v3 from "../video/v3.mp4"

class Videos extends Component{
    constructor() {
        super();
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(event) {
        event.stopPropagation();
    }

    //credit: w3schools
    show(event) {
        var modal = document.getElementById("modal");
        var video = document.getElementById("modal-content");
        
        video.src = event.target.src;
        video.type = event.target.type;
        modal.style.display = "block";
        video.play();
    }

    hide() {
        var modal = document.getElementById("modal");
        var video = document.getElementById("modal-content");
        
        modal.style.display = "none";
        video.pause();
    }

    render(){
        return (
        <div>

            <div class="row">
                <div class="column">
                    <video className="video" src={v1} style={{
                        width: '100%',
                        cursor: 'pointer'
                    }} onClick={this.show} />
                </div>
                <div class="column">
                    <video className="video" src={v3} style={{
                        width: '100%',
                        cursor: 'pointer'
                    }} onClick={this.show} />
                </div>
                <div class="column">
                    <video className="video" src={v1} style={{
                        width: '100%',
                        cursor: 'pointer'
                    }} onClick={this.show} />
                </div>
                <div class="column">
                    <video className="video" src={v3} style={{
                        width: '100%',
                        cursor: 'pointer'
                    }} onClick={this.show} />
                </div>
            </div>
            <div id="modal" className="modal" onClick={this.hide}>
                    <video id="modal-content" className="modal-content" onClick={this.onClickHandler} controls></video>
            </div>
        </div>
        )
    }
}
export default Videos;