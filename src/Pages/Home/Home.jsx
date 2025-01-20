import { Helmet } from "react-helmet-async";

import Headline from "./Headline";
import NewsSectionTwo from "./NewsSectionTwo";
import NewsSectionFour from "./NewsSectionFour";
import EntertainmentFinal from "./EntertainmentFinal";
import ElakarNews from "./ElakarNews";
import SaraDeshFinal from "./SaraDeshFinal";
import AmaderNews from "./AmaderNews";
import InterNationalFinal from "./InterNationalFinal";
import JonoDorvog from "./JonoDorvog";
import ICT from "./ICT";
import VideoGallary from "./VideoGallary";

const Home = () => {
  return (
    <div className="bg-gray-200 min-h-screen mt-1">
      <Helmet>
        <title>SundorbanNews | Home</title>
        <link rel="canonical" href="https://www.example.com/" />
      </Helmet>

      <Headline></Headline>
      <NewsSectionTwo></NewsSectionTwo>
      <NewsSectionFour></NewsSectionFour>
      <EntertainmentFinal></EntertainmentFinal>
      <ElakarNews></ElakarNews>
      <SaraDeshFinal></SaraDeshFinal>
      <AmaderNews></AmaderNews>
      <VideoGallary></VideoGallary>
      <InterNationalFinal></InterNationalFinal>
      {/* <Sports></Sports> */}
      <JonoDorvog></JonoDorvog>
      <ICT></ICT>
    </div>
  );
};

export default Home;
