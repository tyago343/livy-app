import { useEffect, useState } from "react";
import { GnomeList } from "../../components/gnomelist";
import { useGnomes } from "../../context/gnomes.context";

function GnomesPage(props) {
  const { data, error, isLoading, filter } = useGnomes();
  const [gnomes, setGnomes] = useState([]);

  useEffect(() => {
    const gnomesToSet = data?.Brastlewark.filter((gnome) => {
      if (!filter) return gnome;
      if (gnome.professions.contains(filter)) return gnome;
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
