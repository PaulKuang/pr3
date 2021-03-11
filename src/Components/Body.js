import React, { Component} from 'react';

import Images from './Images.js'
import Videos from './Videos.js'
import Table from './Table.js'
import Email from './Email.js'

import Text from './Text.js'
import Zoom from './Zoom.js';

export class Body extends Component {
    displayContent = () => {
        var activeTab = this.props.activeTab
        if(activeTab === 1)
            return <Text/>
        else if(activeTab === 2){
            return <Images/>
        }
        else if(activeTab === 3){
            return <Videos/>
        }
        else if(activeTab === 4){
            return <Table/>
        }else if(activeTab === 5){
            return <Email/>
        }else if(activeTab === 6){
            return <Zoom/>
        }
 

    }

    render() {
        return (
            this.displayContent(this.props.activeTab)
        )
    }
}
export default Body;