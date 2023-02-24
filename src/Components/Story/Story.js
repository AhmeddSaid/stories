import "./Story.css";
import Header from "../Header/Header";
import Stories from "stories-react";
import {
  storyOne,
  storyTwo,
  storyThree,
  storyFour,
  storyFive,
  storySix,
  storySeven,
  storyEight,
  storyNine,
  storyTen,
  storyEleven,
  storyTwelve,
  // adStory,
} from "../Stories/Stories";

function Story() {
  // see more page
  const seeMore = () => {
    return <div className="seemore">SeeMore</div>;
  };
  //test kdown
  document.addEventListener("keydown", function (e) {
    console.log(e);
    // e.key === "ArrowRight" ? "" : "";
  });
  //test kdown

  const storyHolder = [
    {
      type: "component",
      duration: 5000,
      component: storyOne,
    },
    {
      type: "component",
      duration: 5000,
      component: storyTwo,
      seeMore: true,
      seeMoreComponent: seeMore,
    },
    {
      type: "component",
      duration: 5000,
      component: storyThree,
      seeMore: true,
      seeMoreComponent: seeMore,
    },
    {
      type: "component",
      duration: 7000,
      component: storyFour,
    },
    {
      type: "component",
      duration: 5000,
      component: storyFive,
      seeMore: true,
      seeMoreComponent: seeMore,
    },
    {
      type: "component",
      duration: 5000,
      component: storySix,
      seeMore: true,
      seeMoreComponent: seeMore,
    } /* ,
    {
      type: "component",
      duration: 5000,
      component: adStory,
    } */,
    {
      type: "component",
      duration: 5000,
      component: storySeven,
      seeMore: true,
      seeMoreComponent: seeMore,
    },
    {
      type: "component",
      duration: 5000,
      component: storyEight,
      seeMore: true,
      seeMoreComponent: seeMore,
    },
    {
      type: "component",
      duration: 5000,
      component: storyNine,
      seeMore: true,
      seeMoreComponent: seeMore,
    },
    {
      type: "component",
      duration: 5000,
      component: storyTen,
      seeMore: true,
      seeMoreComponent: seeMore,
    },
    {
      type: "component",
      duration: 5000,
      component: storyEleven,
      seeMore: true,
      seeMoreComponent: seeMore,
    },
    {
      type: "component",
      duration: 5000,
      component: storyTwelve,
      seeMore: true,
      seeMoreComponent: seeMore,
    },
  ];

  return (
    <div className="story">
      <Header />
      <Stories
        width="100%"
        height="100vh"
        stories={storyHolder}
      />
    </div>
  );
}

export default Story;
