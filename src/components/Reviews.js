import { useState } from "react";

function Reviews() {
  const [showMore, setShowMore] = useState(false);

  const reviews = [
    {
      title: "Robbie Hutton",
      video:
        "https://d3g56pywmp84r0.cloudfront.net/Testimonial_Robbie_Hutton.mp4",
    },
    {
      title: "Farhana",
      video: "https://d3g56pywmp84r0.cloudfront.net/Testimonial_Farhana.mp4",
    },
    {
      title: "Crooked Shepherd",
      video:
        "https://d3g56pywmp84r0.cloudfront.net/Testimonial_Crooked_Shepherd.mp4",
    },
    {
      title: "Emily Gabriele",
      video:
        "https://d3g56pywmp84r0.cloudfront.net/Testimonial_Emily_Gabriele.mp4",
    },
    {
      title: "Ivy League",
      video: "https://d3g56pywmp84r0.cloudfront.net/Testimonial_Ivy_League.mp4",
    },
  ];

  const itemsToShow = showMore ? reviews.length : 2;

  const ReviewCard = ({ title, video }) => {
    return (
      <div className="flex flex-col justify-center items-center bg-custom-black text-custom-white p-5 rounded-xl md:w-2/3 mx-auto mb-5 shadow-lg">
        <h3 className="text-3xl font-bold mb-3">{title}</h3>
        <video
          width="250"
          controls
          className="rounded-xl border-4 border-gray-300"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };

  return (
    <div
      className="text-center md:text-left bg-custom-white py-10"
      id="reviews"
    >
      <h2 className="text-5xl pb-10 text-custom-black text-center">Reviews</h2>
      {reviews.slice(0, itemsToShow).map((review, index) => (
        <ReviewCard key={index} title={review.title} video={review.video} />
      ))}

      {!showMore && (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setShowMore(true)}
            className="bg-custom-black text-custom-white py-2 px-6 rounded-full hover:bg-gray-700 transition-colors duration-300"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default Reviews;
