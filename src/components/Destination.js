import DestinationData from "./DestinationData";
import "./DestinationStyle.css";
import Mountain1 from "../assets/images/11.jpg";
import Mountain2 from "../assets/images/12.jpg";
import Mountain3 from "../assets/images/13.jpg";
import Mountain4 from "../assets/images/14.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tour give you the opportunity to see a lot, within a time frame.</p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="One of the most iconic views in Luzon, Mt.Taal boasts a volcano
            inside a lake inside an island. If you fancy a closer jook, the hike
            up to the crater is a mere 45 minutes, and is easy enough for
            beginners. Guides will assist you most of the way, and you'll see
            the peculiar environment found on an active volcano, including
            volcanic rocks and steam vents. The hike can be dusty and hot, so
            plan for an earty morning trip, and then unwind with som bulalo
            before heading back home!"
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Taal Volcano, Batangas"
        text="One of the most iconic views in Luzon, Mt.Taal boasts a volcano
            inside a lake inside an island. If you fancy a closer jook, the hike
            up to the crater is a mere 45 minutes, and is easy enough for
            beginners. Guides will assist you most of the way, and you'll see
            the peculiar environment found on an active volcano, including
            volcanic rocks and steam vents. The hike can be dusty and hot, so
            plan for an earty morning trip, and then unwind with som bulalo
            before heading back home!"
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
