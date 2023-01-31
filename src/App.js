import React from 'react';
import Book from './Book';
import './App.css';
import Preloader from './Preloader';

class App extends React.Component {
  state = {
      posts: [],
      loading: true,
      comments: []
    };
  
  componentDidMount(){
    console.log("componentDidMount");
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({posts: data, loading: false}));

      this.timerId - setInterval(() => {
        fetch('http://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => this.setState({comments: data, loading: false}));
      }, 3000);
    //чаще всего используется для fetch
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
    clearInterval(this.timerId);
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
    //console.log('render', this.state.count);
    return (
      <div className='App'>
       {this.state.loading ? <h3>Loading</h3> : <h3>{this.state.posts.length}</h3>}
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
