/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";
import { gnomeLinkStyles } from "./gnomecard.styles";

function GnomeCard({ gnome, index }) {
  if (gnome) {
    return (
      <Link
        key={index}
        to={`/gnome/${gnome.id}`}
        css={gnomeLinkStyles}
        data-testid="gnome-card"
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
        <div
          css={css`
            width: 100%;
          `}
        >
          <img
            loading="lazy"
            src={gnome.thumbnail}
            alt={gnome.name}
            css={css`
              width: 100%;
              height: auto;
              max-width:250px;
              max-height: 250px;
            `}
          />
        </div>
        <div>
          <h3>Characteristics:</h3>
          <ul>
            <li>
              Hair color:{" "}
              <span style={{ color: gnome.hair_color }}>
                {gnome.hair_color}
              </span>
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
  return "Something it's wrong with this one :(";
}
export { GnomeCard };
