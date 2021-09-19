import { css } from "@emotion/react";
import * as mq from "../../styles/mediaqueries";
export const paginatorStyles = css({
  height: "25px",
  margin: "0 20px",
  borderRadius: "999px",
  background: "#397",
  cursor: "pointer",
  boxShadow: `0 5px 5px -5px rgba(80, 255, 129, 0.15),
              0 10px 10px -5px rgba(80, 255, 129, 0.15),
              0 15px 15px -5px rgba(80, 255, 129, 0.15),
              0 20px 20px -5px rgba(80, 255, 129, 0.15)`,
  transition: "0.25s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  padding: "10px",
  width: "120px",
});
export const gnomesGrid = css({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "50px 2%",
  padding: "25px 5%",
  [mq.large] : {
  gridTemplateColumns: "repeat(4, 1fr)",

  },
  [mq.medium]: {
    gridTemplateColumns: "1fr 1fr",
    padding: "25px 2%",
  },
  [mq.mobile]: {
    gridTemplateColumns: "1fr",
    padding: "25px",
  },
});
