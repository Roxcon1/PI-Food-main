
import { Main, Form, Detail, Landing } from "./Views/Index";
import { Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";



function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar />}
      
      <Route exact path="/home" render={() => <Main></Main>}/>
      <Route exact path="/create"  render={() => <Form></Form>}/>
      <Route exact path="/detail"  render={() => <Detail></Detail>}/>
      <Route exact path="/"  render={() => <Landing></Landing>}/>
    </div>
  );
}

export default App;
