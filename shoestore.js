// Created by Roni Salman


class cart extends React.Component{
    message=event=>{
        console.log("hi");
    }

    render=()=>{
        return <button onClick={this.message}>cart</button>;
    }
}

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
  );
  
React.render(<cart />,document.getElementsByClassName('cartText'));