import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './Book';
//import './index.css';
//import App from './App';

const numbers = [1,2,3,4,5]



const App = () => {
  return (
    <div>
      <h1 key='5' id='hello' className='class1'>Hello world</h1>
      <Book key={6} name='JS' year={2018} price={1000}/>
      <Book key={7} name='Java' year={2010} price={500}/>
      <Book key={8} name='Python' year={2018} price={1000}/>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
