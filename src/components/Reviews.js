import Image from "next/image";
import reviewImage1 from "../../public/images/review1.svg";
import reviewImage2 from "../../public/images/review2.svg";
import reviewImage3 from "../../public/images/review3.svg";

function Reviews() {
  const reviews = [
    {
      title: "Robbie Hutton",
      image: reviewImage1,
      description:
        "Working with Ryan our song got an 80% save to listener rate, was added to 120 personal playlists and gained me over 250 new followers on Instagram",
    },
    {
      title: "Farhana",
      image: reviewImage2,
      description:
        "What stood out to me with Ryan, is he has an eagle eye for detail, a great knowledge of marketing with in the industry and how to build a fanbase",
    },
    {
      title: "Crooked Shepherd",
      image: reviewImage3,
      description:
        "It was such an awesome experience working with you. It was super helpful and we’re definitely going to recommend you to anyone else who needs these services",
    },
  ];

  const ReviewCard = ({ title, image, description, index }) => {
    const isReverseOrder = index % 2 !== 0;

    return (
      <div
        className={`flex flex-col md:flex-row justify-center items-center bg-black p-10 rounded-xl w-full max-w-3xl ${
          isReverseOrder ? "md:flex-row-reverse" : ""
        } shadow-lg`}
      >
        <Image
          src={image}
          alt={title}
          height={400}
          width={400}
          className="rounded-xl border-2 border-white"
        />
        <div
          className={`flex flex-col pt-3 ${
            isReverseOrder ? "md:pr-10" : "md:pl-10"
          }`}
        >
          <p className="text-lg">"{description}"</p>
          <h3 className="text-3xl pt-3">{title}</h3>
        </div>
      </div>
    );
  };

  return (
    <div className="text-center md:text-left bg-white">
      <h2 className="text-4xl md:pl-8 pt-3 text-black">Reviews</h2>
      <section className="flex justify-between p-10 gap-10 flex-col items-center">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            title={review.title}
            image={review.image}
            description={review.description}
            index={index}
          />
        ))}
      </section>
    </div>
  );
}

export default Reviews;
