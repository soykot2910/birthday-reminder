import React from "react";

const BirthdayList = (person) => {
  let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
  function monthName(month) {
    switch (month) {
      case 1:
        return "Jan";
      case 2:
        return "Fab";
      case 3:
        return "Mar";
      case 4:
        return "Apr";
      case 5:
        return "May";
      case 6:
        return "Jun";
      case 7:
        return "Jul";
      case 8:
        return "Aug";
      case 9:
        return "Sep";
      case 10:
        return "Oct";
      case 11:
        return "Nov";
      case 12:
        return "Dec";
      default:
        break;
    }
  }

  return (
    <>
      <a href={`birthday/${person.id}`} className="list">
        <img src={person.image} alt="" />
        <div className="info">
          <h3 className="name">{person.name}</h3>
          <p className="birthdate">
            Turns {year - person.birthday.split("-")[2]} on{" "}
            {monthName(Number(person.birthday.split("-")[1]))}{" "}
            {person.birthday.split("-")[0]}
          </p>
        </div>
        <h4 style={{ marginLeft: "auto" }}>
          {person.birthday.split("-")[1] > month
            ? (person.birthday.split("-")[1] - month) * 30 - date
            : person.birthday.split("-")[0] - date}{" "}
          days
        </h4>
      </a>
    </>
  );
};

export default BirthdayList;
