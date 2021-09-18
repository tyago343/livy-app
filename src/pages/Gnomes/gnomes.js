/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import { GnomeList } from "../../components/GnomeList/gnomelist";
import { FullPageSpinner } from "../../components/spinner";
import { useGnomes } from "../../context/gnomes.context";
import { selectStyles } from "../../styles/pages.styles";

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
    return <FullPageSpinner />;
  }
  return error ? (
    "Something goes wrong....maybe restart the app might help "
  ) : (
    <main
      css={{
        display: "grid",
        gridTemplateColumns: "200px auto",
        textAlign: "center",
        padding: "30px",
      }}
    >
      <aside>
        <p
          css={{
            color: "#1f7a7a",
            marginBottom: "10px",
          }}
        >
          Filter by profession
        </p>
        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          css={selectStyles}
        >
          <option value={""}>All workers</option>
          {professions?.map((profession, index) => {
            return (
              <option key={index} value={profession}>
                {profession}
              </option>
            );
          })}
        </select>
      </aside>
      <GnomeList gnomes={gnomes} filter={filter} />
    </main>
  );
}
export { GnomesPage };
