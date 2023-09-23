import { useEffect, useState } from "react";
import GameItem from "../../moleculs/GameItem";
import axios from "axios";

export default function FeaturedGame() {
  const [gameList, setGameList] = useState([]);
  useEffect(async () => {
    const respone = await axios.get("http://localhost:4000/api/v1/players/landingpage");
    setGameList(respone.data.data);
    console.log("data", respone.data);
  }, []);
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4" data-aos="fade-up">
          {gameList.map((item) => {
            return <GameItem key={item._id} title={item.name} category={item.category.name} thumbnail={`http://localhost:4000/uploads/${item.thumbnail}`} />;
          })}
        </div>
      </div>
    </section>
  );
}
