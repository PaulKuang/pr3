import React, {Component} from 'react';

export class Tab extends Component{
    chooseActive = () => {
        if(this.props.tab.id === this.props.activeTab){
            return "nav-item nav-item-active"
        }
        else{
            return "nav-item"
        }
    }
    render(){
        return (
            <div
                className={this.chooseActive()}
                onClick={this.props.changeTab.bind(this, this.props.tab.id)}
            >
                {this.props.tab.title}
            </div>
        );
    }
}

export default Tab