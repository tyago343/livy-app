/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import { GnomeCard } from "../GnomeCard/gnomecard";
import { gnomesGrid, paginatorStyles } from "./gnomelist.styles";

const GnomeList = ({ gnomes, filter }) => {
  var [page, setPage] = useState(1);
  var [qtyPerPage] = useState(50);
  useEffect(() => {
    setPage(1);
  }, [filter]);
  const handleClick = (evt) => {
    setPage(Number(evt.target.id));
  };
  const indexOfLastGnome = page * qtyPerPage;
  const indexOfFirstGnome = indexOfLastGnome - qtyPerPage;
  const currentGnomes = gnomes?.slice(indexOfFirstGnome, indexOfLastGnome);
  const renderGnomes = currentGnomes?.map((gnome, index) => {
    return <GnomeCard gnome={gnome} key={index} />;
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
    <div data-testid="gnomelist">
      <h2>{`You're selected all the ${filter ? filter + "'s" : "workers"}`}</h2>
      <section css={gnomesGrid}>{renderGnomes}</section>
      <ol
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: "100%";
        `}
        data-testid="paginator"
      >
        {renderPageNumbers}
      </ol>
    </div>
  );
};
export { GnomeList };
