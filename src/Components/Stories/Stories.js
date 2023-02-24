import "./Stories.css";
import AdSense from "react-adsense-ads";

export const storyOne = () => {
  return (
    <div className="story story-one">
      <p>
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim
        elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Mollis elit sodales taciti
        duis praesent id. Consequat urna vitae morbi nunc congue."
      </p>
      {/* <div className="swipe-handle">TAP</div> */}
    </div>
  );
};
export const storyTwo = () => {
  return (
    <div className="story story-two">
      <p className="text">
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim
        elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Mollis elit sodales taciti
        duis praesent id. Consequat urna vitae morbi nunc congue."
      </p>
      <img
        src="assets/imgs/img-2.jpg"
        alt=""
        className="image"
      />
    </div>
  );
};

export const adStory = () => {
  return (
    <div className="ads-holder">
      {/* // ads with no set-up */}
      <AdSense.Google
        client="Your Publisher Id"
        slot="Ad slot Id"
      />

      {/* // ads with custom format */}
      <AdSense.Google
        client="Your Publisher Id"
        slot="Ad slot Id"
        style={{ width: 500, height: 300, float: "left" }}
        format=""
      />

      {/* // responsive and native ads */}
      <AdSense.Google
        client="Your Publisher Id"
        slot="Ad slot Id"
        style={{ display: "block" }}
        layout="in-article"
        format="fluid"
      />

      {/* interstatial ad */}
      {/* // auto full width responsive ads */}
      <AdSense.Google
        client="Your Publisher Id"
        slot="Ad slot Id"
        style={{ display: "block" }}
        format="auto"
        responsive="true"
      />
    </div>
  );
};

export const storyThree = () => {
  return (
    <div className="story story-three">
      <img
        src="assets/imgs/img-3.jpg"
        alt=""
        className="image"
      />
      <p className="text">
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim
        elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Mollis elit sodales taciti
        duis praesent id. Consequat urna vitae morbi nunc congue."
      </p>
    </div>
  );
};
export const storyFour = () => {
  return (
    <div className="story story-four video-story">
      <video
        autoPlay
        muted
        loop
      >
        <source
          className="video-src"
          src="assets/vids/video-1.mp4"
          type="video/mp4"
        />
      </video>
      <p className="video-text">
        "Lorem ipsum consectetuer odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
        dignissim consectetuer elementum."
      </p>
    </div>
  );
};
export const storyFive = () => {
  return (
    <div className="story story-five">
      <img
        src="assets/imgs/img-5.jpg"
        alt=""
        className="image"
      />
      <p className="text">
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim
        elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Mollis elit sodales taciti
        duis praesent id. Consequat urna vitae morbi nunc congue."
      </p>
    </div>
  );
};
export const storySix = () => {
  return (
    <div className="story story-six">
      <p className="text">
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim
        elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Mollis elit sodales taciti
        duis praesent id. Consequat urna vitae morbi nunc congue."
      </p>
      <img
        src="assets/imgs/img-6.jpg"
        alt=""
        className="image"
      />
    </div>
  );
};
export const storySeven = () => {
  return (
    <div className="story story-seven">
      <img
        src="assets/imgs/img-7.jpg"
        alt=""
        className="image"
      />
      <p className="text">
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim
        elementum."
      </p>
    </div>
  );
};
export const storyEight = () => {
  return (
    <div className="story story-eight">
      <img
        src="assets/imgs/img-8.jpg"
        alt=""
        className="image"
      />
      <p className="text">
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim
        elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Mollis elit sodales taciti
        duis praesent id. Consequat urna vitae morbi nunc congue."
      </p>
    </div>
  );
};
export const storyNine = () => {
  return (
    <div className="story story-nine">
      <img
        src="assets/imgs/img-9.jpg"
        alt=""
        className="image"
      />
      <p className="text">
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim
        elementum."
      </p>
    </div>
  );
};
export const storyTen = () => {
  return (
    <div className="story story-ten">
      <p className="text">
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim
        elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Mollis elit sodales taciti
        duis praesent id. Consequat urna vitae morbi nunc congue."
      </p>
      <img
        src="assets/imgs/img-10.jpg"
        alt=""
        className="image"
      />
    </div>
  );
};
export const storyEleven = () => {
  return (
    <div className="story story-eleven">
      <img
        src="assets/imgs/img-11.jpg"
        alt=""
        className="image"
      />
      <p className="text">
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim
        elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Mollis elit sodales taciti
        duis praesent id. Consequat urna vitae morbi nunc congue."
      </p>
    </div>
  );
};
export const storyTwelve = () => {
  return (
    <div className="story story-twelve">
      <img
        src="assets/imgs/img-4.jpg"
        alt=""
        className="image"
      />
      <p className="text">
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim
        elementum."
      </p>
    </div>
  );
};
