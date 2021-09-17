import { GnomesPage } from "./pages/Gnomes/gnomes";
import { Switch, Route } from "react-router-dom";
import { GnomePage } from "./pages/Gnome/gnome";
function App() {
  return (
    <Switch>
      <Route path="/gnome/:id">
        <GnomePage />
      </Route>
      <Route path="/">
        <GnomesPage />
      </Route>
    </Switch>
  );
}

export default App;
