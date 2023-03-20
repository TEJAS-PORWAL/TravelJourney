import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Tejas Porwal",
      image:
        "https://raw.githubusercontent.com/TEJAS-PORWAL/TravelJourney/resources/jk%20temple.jpg",
      places: 1,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
