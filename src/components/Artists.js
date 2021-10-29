import React, { useState, useEffect } from "react";
import "./Artists.css";
import Artist from "./Artist";
import { useSelector } from "react-redux";
import { selectSearchTerm } from "../features/artistsSlice";

function Artists() {
  const [artists, setArtists] = useState([]);
  const searchTerm = useSelector(selectSearchTerm);

  const getArtists = () => {
    fetch("http://localhost:3000/artists")
      .then((res) => res.json())
      .then((result) => {
        setArtists([...result]);
      })
      .catch(console.log);
  };

  useEffect(() => {
    getArtists();
  }, []);

  return (
    <div className="artists">
      {!searchTerm
        ? artists?.map((artistObj, index) => {
            return <Artist name={artistObj.name} key={index} />;
          })
        : artists
            .filter((artistObj) => {
              if (searchTerm == "") {
                return artistObj;
              } else if (
                artistObj.name.toLowerCase().includes(searchTerm?.toLowerCase())
              ) {
                return artistObj;
              }
            })
            .map((artistObj, index) => {
              return <Artist name={artistObj.name} key={index} />;
            })}
    </div>
  );
}

export default Artists;

{
}

{
  /* {artists.songs
        .filter((songObj) => {
          if (searchTerm == "") {
            return songObj;
          } else if (
            songObj.artist.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return songObj;
          }
        })
        .map((songObj, key) => { */
}
{
  /* })} */
}
