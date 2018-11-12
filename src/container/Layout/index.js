import React,{Component} from 'react'
import './style.css'

class Layout extends Component{
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