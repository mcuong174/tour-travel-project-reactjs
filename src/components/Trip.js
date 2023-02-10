import "./TripStyles.css";
import TripData from "./TripData";
import TripImg1 from "../assets/images/1.jpg";
import TripImg2 from "../assets/images/9.jpg";
import TripImg3 from "../assets/images/7.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={TripImg1}
          heading="Trip in Indonesia "
          text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"
        />

        <TripData
          image={TripImg2}
          heading="Trip in Indonesia "
          text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"
        />

        <TripData
          image={TripImg3}
          heading="Trip in Indonesia "
          text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"
        />
      </div>
    </div>
  );
}

export default Trip;
