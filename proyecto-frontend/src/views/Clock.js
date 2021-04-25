import '../App.css';
import React from 'react';

class Clock extends React.Component {
    
    //el estado se agrega por medio del constructor
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
  
    //se ejecuta despues de que el componente se ha pintado en la pag.
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000 );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
  
    tick() {
        this.setState({
            date: new Date()
        });
    }
  
    render() {
        return (
        <div>
            <span className="clock">{this.state.date.toLocaleTimeString().toLowerCase()}</span>
        </div>
      );
    }
  }

  export default Clock;