/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { GnomesPage } from "./pages/Gnomes/gnomes";
import { Switch, Route, Link } from "react-router-dom";
import { GnomePage } from "./pages/Gnome/gnome";
import { useGnomes } from "./context/gnomes.context";
function App() {
  const { data } = useGnomes();
  return (
    <main>
      <header
        css={css`
          margin: 0;
          padding: 10px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: row;
          background: linear-gradient(to bottom, #44c767 5%, #5cbf2a 100%);
          text-decoration: none;
          text-shadow: 0px 1px 0px #2f6627;
          @media (max-width: 650px) {
            flex-direction: column;
          }
          a {
            text-decoration: none;
            color: #000;
          }
          h1 {
            margin: 0;
            font-size: 40px;
            font-weight: 900;
            @media screen and (max-width: 725px) {
              font-size: 25px;
            }
          }
          p {
            margin: 0;
            font-size: 35px;
            font-weight: 700;
            @media screen and (max-width: 725px) {
              font-size: 20px;
              margin-top: 10px
            }
          }
        `}
      >
        <Link to="/">
          <h1>Brastlewark</h1>
        </Link>
        <p>{`Population: ${data?.Brastlewark.length}`}</p>
      </header>
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
