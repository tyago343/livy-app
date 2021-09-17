/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";
import { gnomeLinkStyles } from "./gnomecard.styles";

function GnomeCard({ gnome, index }) {
  return (
    <Link
      key={index}
      to={`/gnome/${gnome.id}`}
      css={gnomeLinkStyles}
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
