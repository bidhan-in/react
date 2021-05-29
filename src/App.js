import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Home from './component/Home';
import AddUser from './component/AddUser';
//import List from './component/List';

function App() {
  return (
    <div className="App">
            <About></About>
            <Home></Home>
            <AddUser></AddUser>
            {/* <List></List> */}
    </div>
  );
}

export default App;
