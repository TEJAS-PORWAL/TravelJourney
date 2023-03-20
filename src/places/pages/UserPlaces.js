import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "JK Temple",
    description:
      "Among the five shrines, the central one is dedicated to the main deity of the temple - Shri Radhakrishna. Other shrines are adorned with idols of Shri Laxminarayan, Shri Ardhanarishwar, Shri Narmadeshwar and Shri Hanuman. There are several parks and a lake - Moti Jheel - located near the temple campus as well",
    imageUrl:
      "https://raw.githubusercontent.com/TEJAS-PORWAL/TravelJourney/resources/jk%20temple.jpg",
    address: "P, GT Rd, Khyora, Kanpur, Uttar Pradesh 208024",
    location: {
      lat: 26.4736,
      lng: 80.3052,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Emp. State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
