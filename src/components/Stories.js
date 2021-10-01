import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/ahmed1.jpg", name: "Rahul" },
    { id: 2, image: "/images/ahsan1.jpg", name: "_BraveKnight" },
    { id: 3, image: "/images/babar1.jpg", name: "Husky_Zone" },
    { id: 4, image: "/images/fawad1.jpg", name: "Simran" },
  ]);
  return (
    <div className="stories">
      {state.map((user) => (
        <div className="stories__info" key={user.id}>
          <div className="stories__img">
            <span>
              <img src={user.image} alt="user" />
            </span>
          </div>
          <div className="stories__name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
