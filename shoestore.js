// Created by Roni Salman


'use strict';
  
const ele=React.createElement;

class cart extends React.Component{
    constructor(props){
        super(props);
        this.state={clicked:false};
    }

    render(){
        if(this.state.clicked){
            console.log("Clicked!");
        }

        return ele(
            'button',
            {onClick: () => this.setState({clicked: true}) },
            'Click'
        );
    }
}

const domContainer=document.querySelectorAll('.btn.btn-info');
ReactDOM.render(ele(cart),domContainer);
