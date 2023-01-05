import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';

//const root = ReactDOM.createRoot(document.getElementById("root"));
const numbers = [1,2,3,4,5]

const Book = (props) => {
  console.log(props);
  return <div>
    <h2 key={0}>{props.name}</h2>
    <p key={1}>{props.year}</p>
    <p key={2}>{props.price}</p>
  </div>
}
// const Book = (props) => {
//   console.log(props);
//   return React.createElement('div', {}, [
//     React.createElement('h2', {key:0}, props.name),
//     React.createElement('p', {key:1}, props.year),
//     React.createElement('p', {key:2}, props.price),
//   ]);
// }

//TO DO jsx
const App = () => {
  return <div>
    <h1 key='5' id='hello' className='class1'>Hello world</h1>
    <Book key={6} name='JS' year={2018} price={1000}/>
    <Book key={7} name='Java' year={2010} price={500}/>
    <Book key={8} name='Python' year={2018} price={1000}/>
  </div>
}

// const App = () => {
//   return React.createElement('div', {}, [
//     React.createElement('h1', {key:5,id: 'hello', className: 'class1'}, 'Hello world!'),
//     React.createElement(Book, {key:6, name: 'JS', year: 2018, price: 1000}), 
//     React.createElement(Book, {key:7, name: 'Java', year: 2010, price: 500}),
//     React.createElement(Book, {key:8, name: 'Python', year: 2018, price: 1000})
//   ]);
// }

//root.render(React.createElement(App));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
