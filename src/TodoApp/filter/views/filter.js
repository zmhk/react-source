import React ,{PureComponent} from 'react'
import Link from './link'
import {FilterTypes} from '../../../constants'
import './style.css'

class Filter extends PureComponent{
    constructor(){
        super(...arguments)
    }

    render(){
        return(
            <div>
               <Link type={FilterTypes.ALL}>{FilterTypes.ALL}</Link>
               <Link type={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>
               <Link type={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>
            </div>
        )
    }
}

export default Filter;