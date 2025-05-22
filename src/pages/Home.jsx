import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Home.css";
// import arrowImage from "../assets/hero/fast-forward.png";
import backgroundVideo from "../assets/hero/custom-rad-hero-bg-video.mp4";
import animationGif from "../assets/hero/animation.gif";
import Insights from "../pages/Insights"; // ✅ Use the component path, not from pages!
import ValueSection from "../pages/ValueSection";
import ImageCrousal from "../pages/imageCrousal";
import AwardsSection from "../pages/AwardsSection";
import AiAnswerEngine from "../pages/AiAnswerEngine.css";

const Home = () => {
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    // Show gif on reload
    const isReload =
      window.performance?.navigation?.type === 1 ||
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      setShowGif(true);
    }

    // 🔒 Disable Right Click
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // 🔒 Disable DevTools Shortcuts
    // const handleKeyDown = (e) => {
    //   if (
    //     e.key === "F12" ||
    //     (e.ctrlKey && e.shiftKey && e.key === "I") ||
    //     (e.ctrlKey && e.shiftKey && e.key === "J") ||
    //     (e.ctrlKey && e.key === "U") ||
    //     (e.ctrlKey && e.shiftKey && e.key === "C") ||
    //     (e.ctrlKey && e.shiftKey && e.key === "i") ||
    //     (e.ctrlKey && e.shiftKey && e.key === "j") ||
    //     (e.ctrlKey && e.key === "u") ||
    //     (e.ctrlKey && e.shiftKey && e.key === "c")
    //   ) {
    //     e.preventDefault();
    //   }
    // };
    // document.addEventListener("keydown", handleKeyDown);

    // ✅ Clean up listeners on component unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      // document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  //icon js bot chat bot
  const [showChatIcon, setShowChatIcon] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Show chat icon after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatIcon(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      {/* chat bot html */}
      {showChatIcon && (
        <div>
          <button
            className="chatbot-icon"
            onClick={() => setIsChatOpen(!isChatOpen)}
          >
            🤖
          </button>

          {/* Chat Window */}
          {isChatOpen && (
            <div className="chatbot-window">
              <div className="chatbot-header">
                <span>Need Help?</span>
                <button
                  className="close-btn"
                  onClick={() => setIsChatOpen(false)}
                >
                  ×
                </button>
              </div>
              <div className="chatbot-body">
                <p>Hi! How can I assist you today?</p>
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Type your message..."
                />
              </div>
            </div>
          )}
        </div>
      )}
      {/* chat bot end html */}

      <section className=" text-white py-5 main_section">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold display-5">
              Have tech questions? <br />
              <span className="text-gradient bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                Our AI answer engine
              </span>{" "}
              can help.
            </h2>
          </div>

          {/* Search Bar */}
          <div className="mx-auto mb-5" style={{ maxWidth: "600px" }}>
            <div className="input-group shadow-sm rounded">
              <span className="input-group-text bg-secondary border-end-0">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
                  alt="AI"
                  style={{ width: "20px" }}
                />
              </span>
              <input
                type="text"
                className="form-control border-start-0 bg-dark text-white"
                placeholder="Please ask a question or initiate a search."
              />
              <button className="btn btn-primary">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>

          {/* Suggestions */}
          <div className="mb-3 text-primary fw-semibold">Suggestions</div>
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm bg-secondary text-white">
                <div className="card-body">
                  <h6 className="text-info d-flex align-items-center mb-2">
                    <i className="bi bi-cloud-arrow-up me-2"></i> Cloud
                    Migration
                  </h6>
                  <p className="card-text">
                    What services does HCLTech offer in Cloud Migration?
                  </p>
                  <a href="#" className="text-info fw-medium">
                    →
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm bg-secondary text-white">
                <div className="card-body">
                  <h6 className="text-danger d-flex align-items-center mb-2">
                    <i className="bi bi-shield-lock me-2"></i> Cybersecurity
                  </h6>
                  <p className="card-text">
                    What services does HCLTech offer in Cybersecurity?
                  </p>
                  <a href="#" className="text-danger fw-medium">
                    →
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm bg-secondary text-white">
                <div className="card-body">
                  <h6 className="text-warning d-flex align-items-center mb-2">
                    <i className="bi bi-stars me-2"></i> Generative AI
                  </h6>
                  <p className="card-text">Generative AI trends for 2025</p>
                  <a href="#" className="text-warning fw-medium">
                    →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-section d-flex align-items-center ">
        <div className="video-background">
          <video
            className="background-video"
            src={backgroundVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className="container">
          <div className="row text-white align-items-center">
            <div className="col-md-6">
              <div className="animated-heading d-flex align-items-center">
                <h1 className="slide-right me-4">BUILDING</h1>
                {showGif && (
                  <div className="hero-animation-overlay">
                    <img
                      className="gif-overlay"
                      src={animationGif}
                      alt="animation"
                    />
                  </div>
                )}
              </div>
              <h1 className="slide-left shift-right">FOR BETTER</h1>
            </div>

            <div className="col-md-6 content-right">
              <div className="purple-line"></div>
              <p className="subheading">
                The supply chains we need, the special effects that wow, the
                stadiums we fill, the food we eat, the clothes we wear, the cars
                we drive, the homes where we live, the holidays we take, the
                trees we grow—together, we can reinvent anything.
              </p>
              <p className="cta">
                See what we do <span className="cta-arrow">&gt;</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Add Insights below Hero section */}

      <Insights />
      <ValueSection />
      <ImageCrousal />
      <AwardsSection />
    </>
  );
};

export default Home;

// import React from "react";
// import "./Home.css";
// import arrowImage from "../assets/hero/fast-forward.png";
// import backgroundVideo from "../assets/hero/custom-rad-hero-bg-video.mp4";
// import animationVideo from "../assets/hero/Untitled-video-Made-with-Clipc-unscreen.gif";

// const Home = () => {
//   return (
//     <section className="hero-section d-flex align-items-center">
//       {/* Background Video */}
//       <div className="video-background">
//         <video
//           className="background-video"
//           src={backgroundVideo}
//           type="video/mp4"
//           autoPlay
//           loop
//           muted
//         />
//       </div>
//       <div className="container">
//         <div className="row text-white align-items-center">
//           {/* LEFT */}
//           <div className="col-md-6">
//             <div className="animated-heading d-flex align-items-center">
//               <h1 className="slide-right me-3">BUILDING</h1>

//               {/* <div className="arrow-inline">
//                 {[...Array(6)].map((_, i) => (
//                   <img
//                     key={i}
//                     src={arrowImage}
//                     alt="arrow"
//                     className="arrow-loop-img"
//                   />
//                 ))}
//               </div> */}

//               {/* <div className="marquee-wrapper">
//                 <div className="marquee-track">
//                   {[...Array(20)].map((_, i) => (
//                     <img
//                       key={i}
//                       src={arrowImage}
//                       alt="arrow"
//                       className="marquee-arrow"
//                     />
//                   ))}
//                   {[...Array(20)].map((_, i) => (
//                     <img
//                       key={`clone-${i}`}
//                       src={arrowImage}
//                       alt="arrow"
//                       className="marquee-arrow"
//                     />
//                   ))}
//                 </div>
//               </div> */}
//               <div className="hero-animation-overlay">
//                 <video
//                   className="gif-overlay"
//                   src={animationVideo}
//                 />
//               </div>
//             </div>
//             <h1 className="slide-left shift-right">FOR BETTER</h1>
//           </div>

//           {/* RIGHT */}
//           <div className="col-md-6 content-right">
//             <div className="purple-line"></div>
//             <p className="subheading">
//               The supply chains we need, the special effects that wow, the
//               stadiums we fill, the food we eat, the clothes we wear, the cars
//               we drive, the homes where we live, the holidays we take, the trees
//               we grow—together, we can reinvent anything.
//             </p>
//             <p className="cta">
//               See what we do <span className="cta-arrow">&gt;</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;
