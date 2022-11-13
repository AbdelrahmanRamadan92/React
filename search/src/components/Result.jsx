import Pet from "./Pet";
const Result = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((ele) => {
          return (
            <Pet
              key={ele.id}
              name={ele.name}
              animal={ele.animal}
              breed={ele.breed}
              images={ele.images}
              location={`${ele.city} , ${ele.state}`}
              id={ele.id}
            />
          );
        })
      )}
    </div>
  );
};
export default Result;
