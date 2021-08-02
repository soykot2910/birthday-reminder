import React, { useState, useEffect } from "react";
import CelebrationCard from "./CelebrationCard";
import data from "../data";
import BirthdayList from "./BirthdayList";

const AllBirthday = () => {
  const [info, setInfo] = useState([""]);
  let [month, date] = new Date().toLocaleDateString("en-US").split("/");

  let filterMonth = data.filter(
    (person) => person.birthday.split("-")[1] === month
  );

  let filterDate = filterMonth.filter(
    (person) => person.birthday.split("-")[0] === date
  );
  const filterData = filterDate.sort((a, b) =>
    a.birthday.split("-")[1] > b.birthday.split("-")[1] ? 1 : -1
  );

  useEffect(() => {
    setInfo(filterData);
  }, [setInfo]);

  return (
    <div className="card">
      <CelebrationCard info={info} />
      <h1>Upcoming Birthday: {filterMonth.length} </h1>
      {filterMonth.map((person) => (
        <BirthdayList {...person} />
      ))}
    </div>
  );
};

export default AllBirthday;
