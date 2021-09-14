import { Link } from "react-router-dom";

const GnomeList = ({ gnomes }) => {
  return (
    <section>
      {gnomes.map((gnome, index) => (
        <Link to={`/gnome/${gnome.id}`} key={index}>
          <h2>{gnome.name}</h2>
          <img src={gnome.thumbnail} alt={gnome.name} srcset="" />
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
      ))}
    </section>
  );
};
export { GnomeList };
