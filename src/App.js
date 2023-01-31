import React from 'react';
import Book from './Book';
import './App.css';
import Preloader from './Preloader';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      count: 0
    };

    this.decrease = this.decrease.bind(this);
    this.addendum = this.addendum.bind(this);
  }
  

  decrease(){
    this.setState({ count: this.state.count - 1 });
  }

  addendum(){
    this.setState({count: this.state.count + 1});
  }

  // handleClick = () => {
  //   this.setState({ count: this.state.count + 1 });
  //   // this.setState((prevState) => ({count: prevState.count + 1}), () => {
  //   //   console.log('Setstate');
  //   // })
  //   //this.setState((prevState) => ({count: prevState.count + 1}))
  //   //this.setState((prevState) => ({count: prevState.count + 1}))
  //   //console.log('click');
  // }

  render() {
    return (
      <div className='App'>
        <button onClick={this.decrease}>-</button>
        <input type="text" value={this.state.count} onChange={this.addendum}></input>
        <button onClick={this.addendum}>+</button>
      </div>
    );
  }
}

// const App = (props) => {
//   return props.isLoading ? <Preloader/> : (
//   <div className='App'>
//   <h1 key='5' id='hello' className='class1'>Hello world</h1>
//   <Book key={6} name='JS' year={2018} price={1000}/>
//   <Book key={7} name='Java' year={2010} price={500}/>
//   <Book key={8} name='Python' year={2018} price={1000}/>
// </div>
// );
// };


export default App;
