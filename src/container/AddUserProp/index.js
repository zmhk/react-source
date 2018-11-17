import Reacrt ,{PureComponent} from 'react'

const user="hk"

class AddUserProp extends PureComponent{
    constructor(){
        super(...arguments)
    }
    render(){
       return this.props.children(user)
    }
}

export default AddUserProp;