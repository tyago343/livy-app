import { useEffect, useState } from "react";
import { useGnomes } from "../../context/gnomes.context";

const GnomeList = ({ gnomes }) => {
  return (
    <section>
      {gnomes.map((gnome, index) => (
        <article key={index}>
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
        </article>
      ))}
    </section>
  );
};

function GnomesPage(props) {
  const { data, error, isLoading, filter } = useGnomes();
  const [gnomes, setGnomes] = useState([]);

  useEffect(() => {
    const gnomesToSet = data?.Brastlewark.filter((gnome, index) => {
      if (index < 50) {
        if (!filter) return gnome;
        if (gnome.professions.contains(filter)) return gnome;
      }
      return {};
    });

    setGnomes(gnomesToSet);
  }, [filter, data?.Brastlewark]);

  if (isLoading) {
    return "isLoading";
  }
  return error ? (
    "Something goes wrong....maybe restart the app might help "
  ) : (
    <GnomeList gnomes={gnomes} />
  );
}
export { GnomesPage };
