import React from "react";
import { ContextProvider } from "../Global/Context";
const Sidebar = () => {
  const { loader, user } = React.useContext(ContextProvider);
  const username = !loader && user && user.displayName ? user.displayName : "";
  const [state] = React.useState([
    { id: 1, image: "/images/imrankhan3.jpg", name: "Yamraj" },
    { id: 2, image: "/images/imrankhan1.jpg", name: "Marvel Studios" },
    { id: 1, image: "/images/shahid1.jpg", name: "Manas Khare" },
  ]);
  return (
    <div className="sidebar">
      {!loader && user ? (
        <div className="sidebar__user">
          <div className="sidebar__user-avator"></div>
          <div className="sidebar__user-name">{username}</div>
        </div>
      ) : (
        ""
      )}
      <div className="sidebar__list">
        <h3>Suggestions for you</h3>
        {state.map((user) => (
          <div className="sidebar__list-user" key={user.id}>
            <div className="sidebar__list-a">
              <div className="sidebar__list-a-img">
                <img src={user.image} alt={user.image} />
              </div>
              <div className="sidebar__list-a-name">{user.name}</div>
            </div>
            <div className="sidebar__list-b">
              <a href="">Follow</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
