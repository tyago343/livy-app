/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";

function GnomeCard({ gnome, index }) {
  return (
    <Link
      key={index}
      to={`/gnome/${gnome.id}`}
      css={css`
        display: block;
        padding: 0.7em 1em;
        border-radius: 0.2em;
        font-weight: 400;
        background-color: #cccccc;
        text-align: center;
        text-decoration: none;
        color: #000;
        @media screen and (max-width: 625px) {
          max-width: 320px;
          height: 250px;
          padding: 15px 10px;
          margin: 0 auto 1em;
        }
      `}
    >
      <h2
        css={css`
          font-size: 22px;
          font-weight: 700;
          margin: 10px 50px;
          @media screen and (max-width: 768px) {
            margin: 5px 15px;
          }
          @media screen and (max-width: 625px) {
            float: unset;
            margin-top: 35px;
          }
        `}
      >
        {gnome.name}
      </h2>
      <img
        loading="lazy"
        src={gnome.thumbnail}
        alt={gnome.name}
        css={css`
          width: 250px;
          height: auto;
          max-height: 250px;
        `}
      />
      <div>
        <h3>Characteristics:</h3>
        <ul>
          <li>
            Hair color:{" "}
            <span style={{ color: gnome.hair_color }}>{gnome.hair_color}</span>
          </li>
          <li>
            Weight: <span>{parseFloat(gnome.weight).toFixed(2)}</span>
          </li>
          <li>
            Height: <span>{parseFloat(gnome.height).toFixed(2)}</span>
          </li>
          <li>
            Age: <span>{gnome.age}</span>
          </li>
        </ul>
      </div>
    </Link>
  );
}
export { GnomeCard };
