/* eslint-disable no-unused-vars */
import Notifications from "../components/Notifications";
import Trending from "../components/Trending";
import Feed from "../components/Feed";
import React from "react";


function Home() {
  return (
    <div>
      <Feed />
      <Notifications />
      <Trending />
    </div>
  );
}
