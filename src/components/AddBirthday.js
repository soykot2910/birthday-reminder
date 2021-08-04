import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const AddBirthday = () => {
  const history = useHistory();
  const [allPerson, setAllPerson] = useState([]);
  const did = allPerson.length;
  const [birthday, setBirthday] = useState({
    id: "",
    name: "",
    birthdate: "",
    image: "",
  });

  const { id, name, birthdate, image } = birthday;

  useEffect(() => {
    async function fetchMyAPI() {
      let { data } = await axios.get("http://localhost:3003/data");
      setAllPerson(data);
    }
    fetchMyAPI();
  }, [id]);

  const onInputChange = (e) => {
    setBirthday({ ...birthday, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    birthday.id = did + 1;
    await axios.post("http://localhost:3003/data", birthday);
    history.push("/");
  };

  return (
    <div className="card add-card">
      <div className="controller-btn">
        <Link to="/" style={{ color: "black" }}>
          Back
        </Link>
      </div>
      <h2>Add New Birthday</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your birthdate (23-3-1999)"
            name="birthdate"
            value={birthdate}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Img Url"
            name="image"
            value={image}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <button className="btn-add">Add Birthday</button>
      </form>
    </div>
  );
};

export default AddBirthday;
