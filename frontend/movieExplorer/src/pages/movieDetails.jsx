import { useEffect, useState } from "react";

const movieDetails = () => {
  const url = "https://www.omdbapi.com/?i=tt3896198&apikey=73e1cb19";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="movieDetials">
      <center>
        {data.map((dataObj) => {
          return (
            <div>
              <p> Name : {dataObj.Title}</p>
              <p>released Year : {dataObj.Year}</p>
              <p>Rated : {dataObj.Rated}</p>
              <p>Actors : {dataObj.Actors}</p>
            </div>
          );
        })}
      </center>
    </div>
  );
};
export default movieDetails;
