import React, {Component} from 'react'
import i1 from "../image/1.jpg"
import i2 from "../image/2.jpg"
import i3 from "../image/3.jpg"
import i4 from "../image/4.jpg"
import i5 from "../image/5.jpg"
import i6 from "../image/6.jpg"


class Images extends Component{
    constructor() {
        super();
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler(event) {
        event.stopPropagation();
    }

    show(event) {
        var modal = document.getElementById("modal");
        var img = document.getElementById("modal-content");
        
        img.src = event.target.src;
        modal.style.display = "block";
    }

    hide() {
        var modal = document.getElementById("modal");
        modal.style.display = "none";
    }

    render(){  

        return (
        <div>
            <div className="row">
                <div class="column">
                    <img src={i1} alt="photograph" onClick={this.show}/>
                    <img src={i2} alt="photograph" onClick={this.show}/>
                    <img src={i3} alt="photograph" onClick={this.show}/>
                    <img src={i1} alt="photograph" onClick={this.show}/>
                    <img src={i2} alt="photograph" onClick={this.show}/>
                    <img src={i3} alt="photograph" onClick={this.show}/>
                </div>
                <div class="column">
                    <img src={i4} alt="photograph" onClick={this.show}/>
                    <img src={i5} alt="photograph" onClick={this.show}/>
                    <img src={i6} alt="photograph" onClick={this.show}/>
                    <img src={i4} alt="photograph" onClick={this.show}/>
                    <img src={i5} alt="photograph" onClick={this.show}/>
                    <img src={i6} alt="photograph" onClick={this.show}/>
                </div>
                <div class="column">
                    <img src={i1} alt="photograph" onClick={this.show}/>
                    <img src={i2} alt="photograph" onClick={this.show}/>
                    <img src={i3} alt="photograph" onClick={this.show}/>
                    <img src={i1} alt="photograph" onClick={this.show}/>
                    <img src={i2} alt="photograph" onClick={this.show}/>
                    <img src={i3} alt="photograph" onClick={this.show}/>
                </div>
                <div class="column">
                    <img src={i4} alt="photograph" onClick={this.show}/>
                    <img src={i5} alt="photograph" onClick={this.show}/>
                    <img src={i6} alt="photograph" onClick={this.show}/>
                    <img src={i4} alt="photograph" onClick={this.show}/>
                    <img src={i5} alt="photograph" onClick={this.show}/>
                    <img src={i6} alt="photograph" onClick={this.show}/>
                </div>
            </div>
            <div id="modal" className="modal" onClick={this.hide}>
                    <img id="modal-content" className="modal-content" onClick={this.onClickHandler}/>
            </div>
        </div>

        )
    }
}
export default Images;