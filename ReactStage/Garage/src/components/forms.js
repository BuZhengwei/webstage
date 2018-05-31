import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
import { connect } from 'react-redux';
import { Button } from 'antd';

//action  
const changeTextAction = {
    type: 'TEXT_CLICK'
}
const buttonClickAction = {
    type: 'BUTTON_CLICK'
}

//映射Redux state到组件的属性  
function mapStateToProps(state) {
    console.log(state)
    return {
        text: state.reducer1.text,
        count: 1
    }
} 

//映射Redux actions到组件的属性  
function mapDispatchToProps(dispatch) {
    return {
        onButtonClick: () => dispatch(buttonClickAction),
        onChangeText: () => dispatch(changeTextAction)
    }
}  


class HelloWorld2 extends React.Component {
    constructor(props){
        super(props)
    }


    render(){
        return (
            <div>
                <DatePicker />
                <Button type="primary" onClick={this.props.onButtonClick}>Click Me</Button>
                <br/>
                {this.props.text}
            </div>
        )
    }
}


//连接组件  
HelloWorld2 = connect(mapStateToProps, mapDispatchToProps)(HelloWorld2) 

export default HelloWorld2;