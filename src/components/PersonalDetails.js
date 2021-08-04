import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const PersonalDetails = () => {
  const params = useParams();
  const [allPerson, setAllPerson] = useState([]);
  let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
  const filterPerson = allPerson.filter(
    (person) => person.id === Number(params.id)
  );

  useEffect(() => {
    async function fetchMyAPI() {
      let { data } = await axios.get("http://localhost:3003/data");
      setAllPerson(data);
    }
    fetchMyAPI();
  }, []);

  return (
    <div className="card details-card">
      <div className="details-img-wrap">
        <img src={filterPerson[0].image} className="details-img" alt="" />
        <h3>Name: {filterPerson[0].name}</h3>
        <p>Birthday: {filterPerson[0].birthday}</p>
        <p>Age:{year - filterPerson[0].birthday.split("-")[2]}</p>
      </div>
      <div className="greating-list-wrapper">
        <h3 className="greating-list">
          <i class="far fa-comment-alt icon-left"></i> Send a birthday message
          <i class="fas fa-chevron-right icon-right"></i>
        </h3>
        <h3 className="greating-list">
          <i class="fab fa-facebook-square icon-left"></i> Post on Facebook
          <i class="fas fa-chevron-right icon-right"></i>
        </h3>
        <h3 className="greating-list">
          <i class="fas fa-video icon-left"></i> Send a fun video
          <i class="fas fa-chevron-right icon-right"></i>
        </h3>
        <h3 className="greating-list">
          <i class="fas fa-gift icon-left"></i> Send gift
          <i class="fas fa-chevron-right icon-right"></i>
        </h3>
      </div>
    </div>
  );
};

export default PersonalDetails;
