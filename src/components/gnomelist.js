import { useState } from "react";
import { Link } from "react-router-dom";

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
    return (
      <Link to={`/gnome/${gnome.id}`} key={index}>
        <h2>{gnome.name}</h2>
        <img loading="lazy" src={gnome.thumbnail} alt={gnome.name} />
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
        >
          {number}
        </li>
      );
    }
  });
  return (
    <section>
      {renderGnomes}
      <ol>{renderPageNumbers}</ol>
    </section>
  );

};
export { GnomeList };
