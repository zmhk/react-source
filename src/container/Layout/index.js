import React,{Component} from 'react'
import './style.css'

class Layout extends Component{
    selectedChange=()=>{
        console.log(1);
    }
    render(){
        return(
            <div className="layout">
              <div className="left">left</div>
              <div className="right">right</div>
              <div className="middle">middle</div>
            </div>
        )
    }
}

export default Layout;