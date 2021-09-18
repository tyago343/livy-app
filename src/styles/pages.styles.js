/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from "@emotion/react";

export const selectStyles = css`
  width: 100%;
  max-width: 200px;
  background-color: #0563af;
  color: white;
  padding: 12px;
  border: none;
  font-size: 20px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  appearance: button;
  outline: none;
`;
export const GnomePageWrapper = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 95%;
  max-width: 720px;
  margin: 50px auto 70px;
  background-color: #cccccc;
  padding: 25px 30px;
  text-align: center;
  @media screen and (max-width: 625px) {
    padding: 20px 15px;
    margin: 50px auto 0;
    box-sizing: content-box;
    width: 90%;
  }
  .img-container {
    max-width: 100%;
    text-align: center;
    margin-bottom: 30px;
    @media screen and (max-width: 625px) {
      margin: 0 auto 30px;
    }
  }
  .about {
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 625px) {
      flex-direction: column;
      align-items: center;
    }
    ul {
      text-align: left;
    }
  }
  h2, h3 {
    margin: 10px;
  }
`;
