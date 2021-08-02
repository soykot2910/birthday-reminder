import React, { useState, useEffect } from "react";
import axios from "axios";
import CelebrationCard from "./CelebrationCard";
import data from "../data";
import BirthdayList from "./BirthdayList";

const AllBirthday = () => {
  const [allPerson, setAllPerson] = useState([]);
  let [month, date] = new Date().toLocaleDateString("en-US").split("/");

  useEffect(() => {
    async function fetchMyAPI() {
      let { data } = await axios.get("http://localhost:3003/data");
      setAllPerson(data);
    }
    fetchMyAPI();
  }, []);

  let filterMonth = allPerson.filter(
    (person) =>
      person.birthday.split("-")[1] === month &&
      person.birthday.split("-")[0] > date
  );

  let filterDate = allPerson.filter(
    (person) => person.birthday.split("-")[0] === date
  );

  const filterData = filterMonth.sort((a, b) =>
    a.birthday.split("-")[1] > b.birthday.split("-")[1] ? 1 : -1
  );

  return (
    <div className="card">
      <CelebrationCard info={filterDate} />
      <h1>Upcoming Birthday: {filterMonth.length} </h1>
      <div className="list-wrapper">
        {filterData.map((person) => (
          <BirthdayList {...person} />
        ))}
      </div>
    </div>
  );
};

export default AllBirthday;
