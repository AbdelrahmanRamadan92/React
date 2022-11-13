import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Loader from "../components/Loader";
const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pet, setPet] = useState({});
  const fetchPet = async () => {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    const json = await res.json();
    const currentPet = json.pets[0];
    // console.log(json.pets[0]);
    //[{}] array of object
    setPet(currentPet);
  };
  useEffect(() => {
    fetchPet();
  }, [id]);
  return (
    <div className="details">
      {!pet && (
        <div className="loader-container">
          <Loader />
        </div>
      )}
      <h1>{pet.name}</h1>
      <Carousel images={pet.images} />
      <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
      <button>Adopt {pet.name}</button>
      <p>{pet.description}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};
export default Details;
