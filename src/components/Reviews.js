import { useState } from "react";

function Reviews() {
  const [showMore, setShowMore] = useState(false);

  const reviews = [
    {
      title: "Farhana",
      quote:
        "What stood out to me with Ryan, is he has an eagle eye for detail, a great knowledge of marketing with in the industry and how to build a fanbase",
      video: "https://d3g56pywmp84r0.cloudfront.net/Testimonial_Farhana.mp4",
    },
    {
      title: "Crooked Shepherd",
      quote:
        "It was such an awesome experience working with you. It was super helpful and we're definitely going to recommend you to anyone else who needs these services",
      video:
        "https://d3g56pywmp84r0.cloudfront.net/Testimonial_Crooked_Shepherd.mp4",
    },
    {
      title: "Emily Gabriele",
      quote:
        "I worked with Ryan for about a year and it was one of the best decisions that I ever made.",
      video:
        "https://d3g56pywmp84r0.cloudfront.net/Testimonial_Emily_Gabriele.mp4",
    },
    {
      title: "Ivy League",
      quote:
        "I know I wouldn't be anywhere close to where I am now, if it wasn't for Ryan",
      video: "https://d3g56pywmp84r0.cloudfront.net/Testimonial_Ivy_League.mp4",
    },
    {
      title: "Aesthetic",
      quote:
        "Since I've been working with Ryan, my followers across social media have doubled, my Spotify streams have been skyrocketing and we break personal bests with every release.",
      video: "https://d3g56pywmp84r0.cloudfront.net/Testimonial_Aesthetic.mp4",
    },
    {
      title: "Robbie Hutton",
      quote:
        "Working with Ryan our song got an 80% save to listener rate, was added to 120 personal playlists and gained me over 250 new followers on Instagram",
      video:
        "https://d3g56pywmp84r0.cloudfront.net/Testimonial_Robbie_Hutton.mp4",
    },
  ];

  const itemsToShow = showMore ? reviews.length : 2;

  const ReviewCard = ({ title, video, quote }) => {
    return (
      <div className="flex flex-col justify-center items-center bg-custom-black text-custom-white p-5 rounded-xl md:w-2/3 mx-auto mb-5 shadow-lg">
        <h3 className="text-3xl font-bold mb-3">{title}</h3>
        <p className="text-xl mb-3 text-center">&quot;{quote}&quot;</p>
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
      <h2 className="text-5xl pb-10 text-custom-black text-center">
        Testimonials
      </h2>
      {reviews.slice(0, itemsToShow).map((review, index) => (
        <ReviewCard
          key={index}
          title={review.title}
          video={review.video}
          quote={review.quote}
        />
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
