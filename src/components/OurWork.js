function OurWork() {
  const ourWorks = [
    {
      title: "Project 1",
      image: reviewImage1,
      description: "This is a description of project 1",
    },
    {
      title: "Project 2",
      image: reviewImage2,
      description: "This is a description of project 2",
    },
    {
      title: "Project 3",
      image: reviewImage3,
      description: "This is a description of project 3",
    },
    {
      title: "Project 4",
      image: reviewImage4,
      description: "This is a description of project 4",
    },
  ];

  return (
    <div className="text-center md:text-left bg-white">
      <h2 className="text-4xl md:pl-8 pt-3 text-black">Reviews</h2>
      <section className="flex justify-between p-10 gap-10 flex-col items-center">
        {ourWorks.map((review, index) => (
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

export default OurWork;
