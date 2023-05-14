import Image from "next/image";
import reviewImage1 from "../../public/images/review1.svg";
import reviewImage2 from "../../public/images/review2.svg";
import reviewImage3 from "../../public/images/review3.svg";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function Reviews() {
  const [emblaRefReview] = useEmblaCarousel(
    { loop: true, containScroll: "trimSnaps" },
    [Autoplay()]
  );

  const EmptySlide = () => <div className="embla_slide w-10 max-w-sm" />;

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
    {
      title: "Crooked Shepherd",
      image: reviewImage3,
      description:
        "It was such an awesome experience working with you. It was super helpful and we’re definitely going to recommend you to anyone else who needs these services",
    },
    {
      title: "Crooked Shepherd",
      image: reviewImage3,
      description:
        "It was such an awesome experience working with you. It was super helpful and we’re definitely going to recommend you to anyone else who needs these services",
    },
    {
      title: "Crooked Shepherd",
      image: reviewImage3,
      description:
        "It was such an awesome experience working with you. It was super helpful and we’re definitely going to recommend you to anyone else who needs these services",
    },
    {
      title: "Crooked Shepherd",
      image: reviewImage3,
      description:
        "It was such an awesome experience working with you. It was super helpful and we’re definitely going to recommend you to anyone else who needs these services",
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
        className={`flex flex-col md:flex-row justify-center items-center bg-custom-black text-custom-white p-10 rounded-xl embla__slide w-full max-w-3xl ${
          isReverseOrder ? "md:flex-row-reverse" : ""
        } shadow-lg`}
      >
        <Image
          src={image}
          alt={title}
          height={400}
          width={400}
          className="rounded-xl border-4 border-gray-300 my-5 md:my-0"
        />
        <div
          className={`flex flex-col pt-3 ${
            isReverseOrder ? "md:pr-10" : "md:pl-10"
          }`}
        >
          <p className="text-lg">{description}</p>
          <h3 className="text-3xl pt-3 font-bold">{title}</h3>
        </div>
      </div>
    );
  };

  return (
    <div className="text-center md:text-left bg-custom-white" id="reviews">
      <h2 className="text-5xl pt-3 text-custom-black text-center">Reviews</h2>
      <section
        className="flex justify-between p-10 gap-10 flex-col items-center embla"
        ref={emblaRefReview}
      >
        <div className="embla__container flex gap-10">
          <EmptySlide />
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              title={review.title}
              image={review.image}
              description={review.description}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Reviews;
