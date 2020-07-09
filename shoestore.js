// Created by Roni Salman

const cartButton=document.querySelector('#cartTest');

class OpenCart extends React.Component {
    render() {
      return /*#__PURE__*/React.createElement("p", null, "Hello world!");
    }
  
  }
  
  ReactDOM.render( /*#__PURE__*/
    React.createElement(OpenCart, null), 
    document.getElementById('root')
  );


// Before compiling:
//   class OpenCart extends React.Component{
//     render(){
//         return(
//             <p>Hello world!</p>
//         )
//     }
// }



// ReactDOM.render(
//     <OpenCart />,
//     document.getElementById('root')
// );