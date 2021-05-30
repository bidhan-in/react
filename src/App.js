import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Home from './component/Home';
import AddUser from './component/AddUser';
import Users from './component/Users';
import {Navbar,Nav} from 'react-bootstrap';
import {Route,link,BrowserRouter as Router,Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <>

          <Navbar bg="primary" variant="dark" sticky="bottom">
            <Navbar.Brand href="/">LOGO</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/users-nav">Users</Nav.Link>
            </Nav>

          </Navbar>


        </>
<div>
  <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Users">
            <Users />
          </Route>
          <Route path="/AddUser">
            <AddUser />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>

  </Router>
  
    </div>
  );
}

export default App;
