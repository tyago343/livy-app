import { GnomesPage } from "./pages/Gnomes/gnomes";
import { Switch, Route } from "react-router-dom";
import { GnomePage } from "./pages/Gnome/gnome";
function App() {
  return (
    <main>
      <header></header>
      {
        <Switch>
          <Route path="/gnome/:id">
            <GnomePage />
          </Route>
          <Route path="/">
            <GnomesPage />
          </Route>
        </Switch>
      }
    </main>
  );
}

export default App;
