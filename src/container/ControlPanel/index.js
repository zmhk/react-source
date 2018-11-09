import React, { Component } from 'react';
import Counter from '../../components/Counter'
import SummaryStore from '../../flux/stores/SummaryStore'
import './style.css'

class ControlPanel extends Component {
    constructor() {
        super(...arguments);
        this.state={
            summary: SummaryStore.getSummmary()
        }
    }

    getCurrentSummary=()=>{
        this.setState({
            summary:SummaryStore.getSummmary()
        });
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
        SummaryStore.addChangeListener(this.getCurrentSummary)
    }
    componentWillUnmount(){
        SummaryStore.removeChangeListener(this.getCurrentSummary);
    }
}

export default ControlPanel;