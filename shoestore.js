// Created by Roni Salman

class OpenCart extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("p", null, "Hello world!");
  }

}

clickedCart=()=>{
  ReactDOM.render( /*#__PURE__*/React.createElement(OpenCart, null), document.getElementById('slidingCart'));
}

// Before compiling:
// class OpenCart extends React.Component{
//     render(){
//       return(
//         <p>Hello world!</p>
//       )
//     } 
// }



// ReactDOM.render(
//     <OpenCart />,
//     document.getElementById('slidingCart')
// );