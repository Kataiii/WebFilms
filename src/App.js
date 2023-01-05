import Book from './Book';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <h1 key='5' id='hello' className='class1'>Hello world</h1>
      <Book key={6} name='JS' year={2018} price={1000}/>
      <Book key={7} name='Java' year={2010} price={500}/>
      <Book key={8} name='Python' year={2018} price={1000}/>
    </div>
  );
};

//function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

export default App;
