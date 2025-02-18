import React from "react";
import assist from "../assets/Whygraptask-hero-img.webp";
import whyimg from "../assets/why-grap-img2.webp";
import proposl from "../assets/proposl.webp";
import togwork from "../assets/togwork.webp";
import thnks from "../assets/thanks.webp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import lines from "../assets/line.webp";
import CommonHelmet from './CommonHelmet';
import { Link } from "react-router-dom";
import { SiFuturelearn } from "react-icons/si";
import { FaChevronRight, FaCode, FaProjectDiagram } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import Flexibility from "../assets/flexible.webp";
import Independence from "../assets/Independence.webp";
const WhyGrapeTask = () => {
  return (
    <>
    <CommonHelmet />
             <Helmet>
               <title></title>
               <meta name="description" content="" />
               <meta name="keywords" content=" " />
               <link rel="canonical" href="https://www.grapetask.co/whygrapetask" />
             </Helmet>

      <Navbar SecondNav="none" />
      <div className="container-fluid pt-2 px-3 why-grape-herosection">
        <div className="row h-100">
          <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center justify-content-center px-lg-4 px-3">
            <h1 className="font-40 fw-medium cocon">
              How GrapeTask Can<span className="colororing">Help You Succeed</span>  
              <br className="d-xl-block d-none" />in Freelancing?
            </h1>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <img src={assist} className="w-100 h-100 " alt="hire freelancers" />
          </div>
        </div>
      </div>
      <div
        className="container-fluid position-relative p-lg-5 p-md-5 p-sm-4 p-3  "
        style={{ backgroundColor: "#F6F6F6" }}
      >
        <h2 className="text-center font-40 fw-medium cocon">Why Work with Grapetask?</h2>
        <div className="d-flex justify-content-center">
          <img src={lines} className="text-center" alt="website for freelancers" />
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12 d-flex align-items-center">
            <img src={whyimg} alt="Online freelacing platform" className="w-100" />
          </div>
          <div className="col-lg-6 col-12">
            <div className="whyGrap_cards container-fluid mt-3 ">
              <div className="row align-items-center px-3 p-4">
                <div className="col-lg-2 col-md-2 col-sm-3 col-4">
                  <div className=" why-icon  w-100">
                    <SiFuturelearn size={20} />
                  </div>
                </div>
                <div className="col-lg-10 col-12 poppins mt-lg-0 mt-3">
                  <h5 className="font-20">Earning Potential </h5>
                  <p className="font-14 mb-0">
                  Maximize your income with our freelance marketplace. Tap into global outsourcing opportunities and achieve financial freedom by working on high-paying projects that match your skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="whyGrap_cards container-fluid mt-3 ">
              <div className="row align-items-center px-3 p-4">
                <div className="col-lg-2 col-md-2 col-sm-3 col-4">
                  <div className=" why-icon  w-100">
                    <img src={Flexibility} width={20} height={20} alt="freelance talent " />
                  </div>
                </div>
                <div className="col-lg-10 col-12 poppins mt-lg-0 mt-3">
                  <h5 className="font-20">Flexibility </h5>
                  <p className="font-14 mb-0">
                  Enjoy unmatched flexibility with our freelance marketplace. Choose projects that fit your schedule. Experience outsourcing at its best while maintaining financial freedom and a balanced lifestyle.
                  </p>
                </div>
              </div>
            </div>
            <div className="whyGrap_cards container-fluid mt-3 ">
              <div className="row align-items-center px-3 p-4">
                <div className="col-lg-2 col-md-2 col-sm-3 col-4">
                  <div className=" why-icon  w-100">
                    <img src={Independence} width={20} height={20} alt="project managment " />
                  </div>
                </div>
                <div className="col-lg-10 col-12 poppins mt-lg-0 mt-3">
                  <h5 className="font-20">Independence </h5>
                  <p className="font-14 mb-0">
                  Take control of your career with our freelance marketplace. Outsourcing allows you to work independently, set your rates, and achieve financial freedom on your own terms.
                  </p>
                </div>
              </div>
            </div>
            <div className="whyGrap_cards container-fluid mt-3 ">
              <div className="row align-items-center px-3 p-4">
                <div className="col-lg-2 col-md-2 col-sm-3 col-4">
                  <div className=" why-icon  w-100">
                    <MdOutlineAccountBalanceWallet size={20} />
                  </div>
                </div>
                <div className="col-lg-10 col-12 poppins mt-lg-0 mt-3">
                  <h5 className="font-20">Work-Life Balance </h5>
                  <p className="font-14 mb-0">
                  Achieve work-life balance with our freelance marketplace. Outsourcing gives you the power to work from anywhere, ensuring financial freedom without sacrificing personal time.
                  {" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="whyGrap_cards container-fluid mt-3 ">
              <div className="row align-items-center px-3 p-4">
                <div className="col-lg-2 col-md-2 col-sm-3 col-4">
                  <div className=" why-icon  w-100">
                    <FaCode size={20} />
                  </div>
                </div>
                <div className="col-lg-10 col-12 poppins mt-lg-0 mt-3">
                  <h5 className="font-20">Skill Development </h5>
                  <p className="font-14 mb-0">
                  Enhance your skills through diverse projects on our freelance marketplace. Outsourcing exposes you to new challenges, helping you grow while working towards financial freedom.
                  </p>
                </div>
              </div>
            </div>
            <div className="whyGrap_cards container-fluid mt-3 ">
              <div className="row align-items-center px-3 p-4">
                <div className="col-lg-2 col-md-2 col-sm-3 col-4">
                  <div className=" why-icon  w-100">
                    <FaProjectDiagram size={20} />
                  </div>
                </div>
                <div className="col-lg-10 col-12 poppins mt-lg-0 mt-3">
                  <h5 className="font-20">Variety of Projects</h5>
                  <p className="font-14 mb-0">
                   Explore a variety of projects on our freelance marketplace. Outsourcing offers endless opportunities, ensuring financial freedom and the chance to work on what truly interests you.
                  {" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-lg-5 mt-md-4 mt-3 px-lg-5 px-md-3 poppins  ">
        <div className="container-lg container-fluid">
          <div className="row justify-content-between">
            <h3 className="text-center font-40 fw-medium cocon">
              Grow Your Business at Every Step-{" "}
              <br className="d-lg-block d-none" /> From Pitch to Payment
            </h3>
            <div className="d-flex justify-content-center">
              <img src={lines} className="text-center" alt="Perfect Proposals" />
            </div>
            <div className="col-lg-5 col-12 align-self-center mt-3">
              <h4 className="font-30 font-500 blackcolor poppins">
               Perfect Proposals That Win Clients
              </h4>
              <p className="font-16 poppins textcolorgray">
              Create winning proposals on our freelance marketplace. Impress clients, secure projects, and move closer to financial freedom with effective outsource solutions.
              </p>
              <Link className="colororing font-14 poppins">
                Take a Closer Look <FaChevronRight />
              </Link>
            </div>
            <div className="col-lg-5 col-12 mt-5  ">
              <div className="mt-5 togather p-lg-5 p-md-4 p-3 pt-5 position-relative">
                <img
                  src={togwork}
                  className="position-absolute ms-4"
                  style={{ top: "-18%", left: "2%" }}
                  alt=""
                />
                <p className="font-20 poppins textgray">Proposal</p>
                <h5 className="font-28 blackcolor poppins ">
                 Send Winning Proposals
                </h5>
                <p className="font-18 poppins textgray">Hi, John!</p>
                <p className="font-18 poppins textgray">
                Thank you for sharing your project! I'm excited to present this proposal to help you achieve your goals.
                </p>
                <img src={proposl} className="w-100" alt="Perfect Proposals" />
              </div>
            </div>
          </div>
          <div className="row justify-content-between flex-lg-row flex-column-reverse ">
            <div className="col-lg-5 col-12 mt-lg-5 mt-4">
              <div className="togather h-75 p-2">
                <div className="p-lg-5 p-md-4 p-3">
                  <p className="font-18 poppins textcolorgray">
                    Thanks for telling me about your project. I’m delighted to
                    share this proposal with you!
                  </p>
                  <img src={thnks} className="mt-2 w-100" alt="Work with Grapetask" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12 align-self-center mt-lg-0 mt-4">
              <h4 className="font-30 font-500 blackcolor poppins">
              Instant Contract Approval
              </h4>
              <p className="font-16 poppins textcolorgray">
              Get contracts signed in minutes. Our freelance marketplace streamlines outsourcing, letting you focus on projects and financial freedom instead of paperwork.
              </p>
              <Link className="colororing font-14 poppins">
                Take a Closer Look <FaChevronRight />
              </Link>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-5 col-12 align-self-center mt-lg-0 mt-4">
              <h4 className="font-30  font-500 blackcolor poppins">
               Easy Invoicing & Secure Payments
              </h4>
              <p className="font-16  poppins textcolorgray">
              Create and automate invoices with ease. Accept secure payments fast in any currency—bank transfer, credit card, or PayPal.
              </p>
              <Link className="colororing font-14 poppins">
                Take a Closer Look <FaChevronRight />
              </Link>
            </div>

            <div className="col-lg-5 col-12  mt-lg-5 mt-4">
              <div className="mt-lg-5 togather p-lg-5 p-md-4 p-3">
                <h5 className="font-28 font-500 blackcolor poppins">Easy Invoicing
                </h5>
                <p className="font-18 poppins textgray ">
                Send invoices effortlessly. Our freelance marketplace simplifies payments and boosts cash flow.
                </p>
                <img src={proposl} className="w-100" alt="w8" />
                <h5 className="mt-lg-4 mt-md-2 mt-2 font-20 poppins textgray">
                  Terms & Condition
                </h5>
                <h5 className="mt-lg-4 mt-md-2 mt-2 font-20 poppins blackcolor">
                  Contrary to popular belief,
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style>{`
                .why-grape-herosection{
                    min-height:calc(100vh - 98px);
                }
                @media (max-width:768px){
                    .why-grape-herosection{
                        min-height:auto;
                    }
                }
                `}</style>
    </>
  );
};

export default WhyGrapeTask;
