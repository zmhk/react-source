import React, { Component } from 'react';
import {connect} from 'react-redux'
import Counter from '../../components/Counter'
import propTypes from 'prop-types'
import './style.css'

class ControlPanel extends Component {
    constructor(props) {
        super(...arguments);
    }

    render() {
        return (
            <div className="controlpanel">
                <Counter caption="First"/>
                <Counter caption="Second"/>
                <Counter caption="Third"/>
                <div>总数：{this.props.values}</div>
            </div>
        )
    }
}

const getCurrentSummary=(values)=>{
    let summary=0;
    for(let key in values){
      if(values.hasOwnProperty(key)){
        summary+=values[key];
      }
    }
    return summary;
}

const mapStateToProps=(state,ownProps)=>{
    console.log(state);
    return {
        values:getCurrentSummary(state)
    }
}

export default connect(mapStateToProps)(ControlPanel);