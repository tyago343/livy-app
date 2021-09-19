import { css } from "@emotion/react";

export const gnomeLinkStyles = css`
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
    padding: 15px 10px;
    margin: 0 auto 1em;
  }
`;
