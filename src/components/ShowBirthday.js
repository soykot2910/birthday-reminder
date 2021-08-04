import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowBirthday = () => {
  const [allPerson, setAllPerson] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let { data } = await axios.get("http://localhost:3003/data");
      setAllPerson(data);
    }
    fetchMyAPI();
  }, []);
  return (
    <div className="card card-show">
      <div className="controller-btn">
        <Link to="/" style={{ color: "black" }}>
          Back
        </Link>
      </div>
      <table cellPadding="20px">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Birthday</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {allPerson.map((person) => (
            <tr>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.birthdate}</td>
              <td>
                <img
                  src={person.image}
                  width="60"
                  height="60"
                  alt={person.name}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowBirthday;
