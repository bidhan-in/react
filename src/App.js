import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Home from './component/Home';
import AddUser from './component/AddUser';
import Users from './component/Users';
import {Navbar,Nav} from 'react-bootstrap';
import {Route,link,BrowserRouter as Router,Switch} from 'react-router-dom';
import Images from './component/Images';


function App() {
  return (
    <div className="App">
      <Router>
      <>

          <Navbar bg="primary" variant="dark" sticky="bottom">
            <Navbar.Brand href="/">LOGO</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Users">Users</Nav.Link>
              <Nav.Link href="/AddUser">Users</Nav.Link>
              <Nav.Link href="/Images">Github.com/users</Nav.Link>
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
          <Route path="/Images">
            <Images />
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
