/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useState } from "react";
import { GnomeCard } from "../GnomeCard/gnomecard";
import { gnomesGrid, paginatorStyles } from "./gnomelist.styles";

const GnomeList = ({ gnomes, filter }) => {
  var [page, setPage] = useState(1);
  var [qtyPerPage] = useState(50);
  const handleClick = (evt) => {
    setPage(Number(evt.target.id));
  };
  const indexOfLastGnome = page * qtyPerPage;
  const indexOfFirstGnome = indexOfLastGnome - qtyPerPage;
  const currentGnomes = gnomes?.slice(indexOfFirstGnome, indexOfLastGnome);
  const renderGnomes = currentGnomes?.map((gnome) => {
    return <GnomeCard gnome={gnome} key={gnome.id} />;
  });

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(gnomes?.length / qtyPerPage); i++) {
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
          css={paginatorStyles}
        >
          {number}
        </li>
      );
    }
    return false;
  });
  return (
    <div>
      <h2>{`You're selected all the ${filter ? filter + "'s" : "workers"}`}</h2>
      <section
        css={gnomesGrid}
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