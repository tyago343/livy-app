import { useEffect, useState } from "react";
import { GnomeList } from "../../components/gnomelist";
import { useGnomes } from "../../context/gnomes.context";

function GnomesPage(props) {
  const { data, error, isLoading, filter, professions, setFilter } =
    useGnomes();
  const [gnomes, setGnomes] = useState(null);

  useEffect(() => {
    const gnomesToSet = data?.Brastlewark.filter((gnome) => {
      if (!filter) return gnome;
      if (gnome.professions.includes(filter)) return gnome;
      return false;
    });
    setGnomes(gnomesToSet);
  }, [filter, data?.Brastlewark]);

  if (isLoading) {
    return "isLoading";
  }
  return error ? (
    "Something goes wrong....maybe restart the app might help "
  ) : (
    <main>
      <header>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value={""}>All workers</option>
          {professions.map((profession, index) => {
            return (
              <option key={index} value={profession}>
                {profession}
              </option>
            );
          })}
        </select>
      </header>
      <GnomeList gnomes={gnomes} filter={filter} />
    </main>
  );
}
export { GnomesPage };
