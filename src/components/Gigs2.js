import { Button } from "@mui/material";
import { useEffect, useMemo } from "react";
import { BsPlusLg, BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteSweep, MdEditNote } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { geAllGigs } from "../redux/slices/allGigsSlice";
import { GigDelete } from "../redux/slices/gigsSlice";
import { getPersonalGigs } from "../redux/slices/offersSlice";
import { useDispatch, useSelector } from "../redux/store/store";
import { titleToSlug } from "../utils/helpers";
import Dashboardright from "./Dashboardright";
import Freelancer from "./Freelancer";
import Navbar from "./Navbar";

// Helper: Calculate average rating
// Universal Rating Helper - Handles ALL possible data structures
const getAverageRating = (ratingsData) => {
  // Handle null, undefined, empty string
  if (ratingsData === null || ratingsData === undefined || ratingsData === '') {
    return 0;
  }
  
  // Handle direct number (pre-calculated average)
  if (typeof ratingsData === 'number') {
    return isNaN(ratingsData) ? 0 : Math.round(Math.max(0, Math.min(5, ratingsData)));
  }
  
  // Handle string numbers
  if (typeof ratingsData === 'string') {
    const parsed = parseFloat(ratingsData.trim());
    return isNaN(parsed) ? 0 : Math.round(Math.max(0, Math.min(5, parsed)));
  }
  
  // Handle boolean (edge case)
  if (typeof ratingsData === 'boolean') {
    return ratingsData ? 1 : 0;
  }
  
  // Handle arrays
  if (Array.isArray(ratingsData)) {
    if (ratingsData.length === 0) return 0;
    
    const extractedRatings = ratingsData.map(item => extractRatingValue(item)).filter(r => r !== null);
    
    if (extractedRatings.length === 0) return 0;
    
    const sum = extractedRatings.reduce((acc, rating) => acc + rating, 0);
    const average = sum / extractedRatings.length;
    return Math.round(Math.max(0, Math.min(5, average)));
  }
  
  // Handle objects
  if (typeof ratingsData === 'object') {
    // Try to find ratings in various object structures
    const possibleRatings = [
      ratingsData.ratings,
      ratingsData.rating,
      ratingsData.rate,
      ratingsData.score,
      ratingsData.stars,
      ratingsData.value,
      ratingsData.average,
      ratingsData.avg,
      ratingsData.mean,
      ratingsData.data,
      ratingsData.items,
      ratingsData.list
    ];
    
    for (const possibleRating of possibleRatings) {
      if (possibleRating !== undefined && possibleRating !== null) {
        const result = getAverageRating(possibleRating); // Recursive call
        if (result > 0) return result;
      }
    }
    
    // If object has numeric properties, try to extract them
    const numericValues = Object.values(ratingsData)
      .map(val => extractRatingValue(val))
      .filter(val => val !== null);
    
    if (numericValues.length > 0) {
      const average = numericValues.reduce((sum, val) => sum + val, 0) / numericValues.length;
      return Math.round(Math.max(0, Math.min(5, average)));
    }
  }
  
  // If nothing works, return 0
  return 0;
};

// Helper function to extract rating value from any item
const extractRatingValue = (item) => {
  if (item === null || item === undefined) return null;
  
  // Direct number
  if (typeof item === 'number') {
    return isNaN(item) ? null : Math.max(0, Math.min(5, item));
  }
  
  // String number
  if (typeof item === 'string') {
    const trimmed = item.trim();
    if (trimmed === '') return null;
    const parsed = parseFloat(trimmed);
    return isNaN(parsed) ? null : Math.max(0, Math.min(5, parsed));
  }
  
  // Object with rating properties
  if (typeof item === 'object') {
    const ratingFields = [
      'rating', 'ratings', 'rate', 'score', 'stars', 
      'value', 'star', 'point', 'points', 'grade'
    ];
    
    for (const field of ratingFields) {
      if (item[field] !== undefined && item[field] !== null) {
        const extracted = extractRatingValue(item[field]);
        if (extracted !== null) return extracted;
      }
    }
  }
  
  return null;
};

// Alternative: Even more robust version with logging
const getAverageRatingWithLogging = (ratingsData, debugMode = false) => {
  if (debugMode) {
    console.log('Rating input:', ratingsData, 'Type:', typeof ratingsData);
  }
  
  try {
    const result = getAverageRating(ratingsData);
    if (debugMode) {
      console.log('Rating result:', result);
    }
    return result;
  } catch (error) {
    if (debugMode) {
      console.error('Rating calculation error:', error, 'Input was:', ratingsData);
    }
    return 0;
  }
};



// Helper: Select the first available image
const getGigImage = (media) => {
  if (!media) return null;
  return media.image1 || media.image2 || media.image3 || null;
};

// Helper: Get seller name consistently
const getSellerName = (seller) => {
  if (Array.isArray(seller)) {
    return seller[0]?.fname || 'seller';
  }
  return seller?.fname || 'seller';
};

const Gigs2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux states
  const { personalGigs } = useSelector((state) => state.offers);
  const { gigsDetail } = useSelector((state) => state.allGigs);

  // Get user data safely
  const UserData = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("UserData"));
    } catch {
      return null;
    }
  }, []);

  // Slider settings
  const sliderSettings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  // Fetch gigs
  useEffect(() => {
    if (UserData?.id) {
      dispatch(getPersonalGigs({ user_id: UserData.id }));
    }
    dispatch(geAllGigs());
  }, [dispatch, UserData?.id]);

  // Flatten gigs safely
  const Real_Freelancer = gigsDetail?.flatMap((obj) => obj.gigs) || [];

  // Delete handler with confirmation
  const handleGigDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this gig?")) {
      dispatch(GigDelete(id));
    }
  };

  // Unified gig navigation handler
  const handleGigNavigate = (gig) => {
    const slug = titleToSlug(gig.title);
    const sellerName = getSellerName(gig.seller);
    navigate(`/g/${slug}/${sellerName}/${gig.id}`);
  };

  // Dropdown click handler (prevents event bubbling)
  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <Navbar FirstNav="none" />
      <div className="container-fluid pt-5 pb-5">
        <div className="row mx-lg-4 mx-md-3 mx-0">
          {/* Sidebar */}
          <div className="col-lg-4 col-12">
            <Dashboardright />
          </div>

          {/* Main Content */}
          <div className="col-lg-8 col-12 mt-lg-0 mt-4">
            {/* Personal Gigs Section */}
            {(UserData?.role === "expert/freelancer" || 
              UserData?.role === "bidder/company representative/middleman") && (
              <>
                <div className="d-flex flex-wrap justify-content-between">
                  <h6 className="font-22 byerLine font-500 cocon">Gigs</h6>
                  <Button
                    onClick={() => navigate("/multiSteps")}
                    className="btn-stepper poppins px-3 font-16"
                  >
                    <BsPlusLg className="me-2" /> Create new gig
                  </Button>
                </div>

                <div className="row">
                  {personalGigs.length > 0 ? (
                    personalGigs.map((gig, index) => {
                      const avgRating = getAverageRating(gig.rating);
                      const stars = Array.from({ length: 5 }, (_, i) =>
                        avgRating > i ? "#F16336" : "#D4D4D4"
                      );

                      return (
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 mt-4" key={index}>
                          <Freelancer
                            handleNavigate={() => handleGigNavigate(gig)}
                            imges={getGigImage(gig.media)}
                            heading={gig?.title}
                            price={gig.package?.[0]?.total}
                            star1={stars[0]}
                            star2={stars[1]}
                            star3={stars[2]}
                            star4={stars[3]}
                            star5={stars[4]}
                            arrow={
                              <div 
                                className="dropdown gig-editable"
                                onClick={handleDropdownClick}
                              >
                                <span
                                  className="dropdown-toggle"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  style={{ cursor: 'pointer' }}
                                >
                                  <BsThreeDotsVertical />
                                </span>
                                <ul className="dropdown-menu poppins">
                                  <li>
                                    <a
                                      className="dropdown-item textgray font-12 fw-semibold"
                                      style={{ cursor: 'pointer' }}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        navigate("/multiSteps", { state: { gigData: gig } });
                                      }}
                                    >
                                      <MdEditNote size={20} className="textgray" /> Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item textgray font-12 fw-semibold"
                                      style={{ cursor: 'pointer' }}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleGigDelete(gig.id);
                                      }}
                                    >
                                      <MdDeleteSweep size={20} className="textgray" /> Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            }
                          />
                        </div>
                      );
                    })
                  ) : (
                    <h3 className="cocon mt-3 text-muted">No gigs found</h3>
                  )}
                </div>
              </>
            )}

            {/* Most Popular Gigs Section */}
            <h4 className="font-22 byerLine font-500 cocon mt-4">
              Most Popular Gigs
            </h4>

            <div className="container position-relative mb-5 gigs-slider mt-4">
              <div className="gigs-slider-bg" style={{ height: "100%" }}></div>
              <Slider {...sliderSettings}>
                {Real_Freelancer.slice(0, 8).map((gig, index) => (
                  <div className="col-lg-3 col-md-6 col-12" key={index}>
                    <Freelancer
                      handleNavigate={() => handleGigNavigate(gig)}
                      imges={getGigImage(gig.media)}
                      heading={gig?.title}
                      price={gig.package?.[0]?.total}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Animation Banner */}
            <div className="mt-5">
              {/* <img src={animation} className="w-100 mt-3" alt="Banner" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gigs2;
