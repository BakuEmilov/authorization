import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" Component={HomePage} />
      <Route exact path="/login" Component={LoginPage} />
      <Route exact path="/register" Component={RegisterPage} />
    </Switch>
  );
}

export default App;
