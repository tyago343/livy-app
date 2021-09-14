import { createContext, useEffect, useState, useContext } from "react";
const GnomesContext = createContext();
function GnomesProvider(props) {
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState(false)
  useEffect(() => {
    fetch(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
      )
      .then(async (response) => {
        if (response.status === 401) {
          return;
        }
        const data = await response;
        if (response.ok) {
          const result = await data.json();
          setData(result);
          setIsloading(false);
        } else {
          setError(true);
          setIsloading(false);
        }
      });
  }, []);
  return (
    <GnomesContext.Provider value={{ data, isLoading, error, filter, setFilter }} {...props} />
  );
}
function useGnomes() {
  const context = useContext(GnomesContext);
  if (context === undefined) {
    throw new Error("UseGnomes cannot be used without GnomesProvider");
  }
  return context;
}
export { useGnomes, GnomesProvider };
