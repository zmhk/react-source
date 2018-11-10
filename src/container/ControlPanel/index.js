import React, { Component } from 'react';
import Counter from '../../components/Counter'
import store from '../../redux/store'
import './style.css'

class ControlPanel extends Component {
    constructor() {
        super(...arguments);
        this.state={
            summary: this.getCurrentSummary(),
            unsubscribe:f=>f
        }
    }

    onChange=()=>{
        let summary=this.getCurrentSummary();
        this.setState({
            summary: summary
        })
    }

    getCurrentSummary=()=>{
        const values=store.getState();
        let summary=0;
        for(let key in values){
          if(values.hasOwnProperty(key)){
            summary+=values[key];
          }
        }
        return summary;
    }
    render() {
        return (
            <div className="controlpanel">
                <Counter caption="First"/>
                <Counter caption="Second"/>
                <Counter caption="Third"/>
                <div>总数：{this.state.summary}</div>
            </div>
        )
    }

    componentDidMount(){
        this.state.unsubscribe=store.subscribe(this.onChange);
    }

    componentWillMount(){
        this.state.unsubscribe(this.onChange);
    }
}

export default ControlPanel;