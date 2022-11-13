import { useEffect, useState } from "react";
import useBreedList from "../hooks/useBreedList";
import Pet from "../components/Pet";
import Result from "../components/Result";
const SearhPararms = () => {
  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

  //useState return array and take initial state ''
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const breeds = useBreedList(animal);
  const fetchPets = async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
    //console.log(json.pets);
  };
  useEffect(() => {
    fetchPets();
  }, []);

  // controlled Form
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            placeholder="location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => {
              return (
                <option value={animal} key={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            disabled={!breeds.length}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((breed) => {
              return (
                <option value={breed} key={breed}>
                  {breed}
                </option>
              );
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
      < Result pets={pets}/>
    </div>
  );
};
export default SearhPararms;
