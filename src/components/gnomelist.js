/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import * as mq from "../styles/mediaqueries";
import { useState } from "react";
import { GnomeCard } from "./gnomecard";

const GnomeList = ({ gnomes }) => {
  var [page, setPage] = useState(1);
  var [qtyPerPage] = useState(50);
  const handleClick = (evt) => {
    setPage(Number(evt.target.id));
  };
  const indexOfLastGnome = page * qtyPerPage;
  const indexOfFirstGnome = indexOfLastGnome - qtyPerPage;
  const currentGnomes = gnomes.slice(indexOfFirstGnome, indexOfLastGnome);
  const renderGnomes = currentGnomes.map((gnome, index) => {
    return <GnomeCard gnome={gnome} />;
  });

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(gnomes.length / qtyPerPage); i++) {
    pageNumbers.push(i);
  }
  const renderPageNumbers = pageNumbers.map((number) => {
    if (number + 1 === page || number - 1 === page || number === page) {
      return (
        <li
          key={number}
          id={number}
          selected={number === page}
          onClick={handleClick}
          css={{
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
          }}
        >
          {number}
        </li>
      );
    }
  });
  return (
    <div>
      <section
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "50px 2%",
          padding: "25px 15%",
          [mq.medium]: { gridTemplateColumns: "repeat(3, 1fr)" },
          [mq.small]: {
            gridTemplateColumns: "1fr 1fr",
            padding: "25px 7%",
          },
          [mq.mobile]: {
            gridTemplateColumns: "1fr",
            padding: "25px",
          },
        }}
      >
        {renderGnomes}
      </section>
      <ol
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: "100%";
        `}
      >
        {renderPageNumbers}
      </ol>
    </div>
  );
};
export { GnomeList };
