import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useGnomes } from "../../context/gnomes.context";

function GnomePage() {
  const { data } = useGnomes();
  const { id } = useParams();
  const [gnome, setGnome] = useState(null);
  useEffect(() => {
      
    const result = data?.Brastlewark.find((gnome) => gnome.id === +id);
    setGnome(result);
  }, [data, id]);
  
  return !gnome ? (
    "isloading"
  ) : (
    <section key={gnome.id}>
      <div>
        <h2>{gnome.name}</h2>
        <div>
          <img src={gnome.thumbnail} alt={gnome.name} />
        </div>
        <div>
          <div>
            <h3>Professions:</h3>
            {gnome.professions && gnome.professions.length ? (
              <ul>
                {gnome.professions.map((elem, index) => (
                  <li key={index}>{elem}</li>
                ))}
              </ul>
            ) : (
              "This one have no profession"
            )}
          </div>
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
          <div>
            <h3>Friends:</h3>
            <ul>
              {gnome.friends
                ? gnome.friends.map((friend) => <li key={friend}>{friend}</li>)
                : "This gnome likes to be alone"}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export { GnomePage };
