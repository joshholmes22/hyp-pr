import Image from "next/image";
import socialLogo from "../../public/images/SocialIcons.svg";
import mentoringLogo from "../../public/images/MentoringIcon.svg";
import playlistLogo from "../../public/images/PlaylistIcon.svg";

function Services() {
  const services = [
    {
      title: "ADS CAMPAIGNS",
      image: socialLogo,
      description:
        "We run a wide range of ad campaigns to fit the needs and budget of our clients. With everything we do, our focus with ads are based on building awareness, audience growth, gaining traction on our clients music",
    },
    {
      title: "MENTORING",
      image: mentoringLogo,
      description:
        "Our mentoring packages range from all levels of needs from complete beginners looking to gain knowledge and an understanding of strategies to help them attract and grow an audience, to artists needing support refining and developing their content, growth strategies and funnel systems",
    },
    {
      title: "PR CAMPAIGNS",
      image: playlistLogo,
      description:
        "Our PR campaigns focus on building traction for our clients releases through using a range of strategies, including ads, utilising the artists existing audience, organic outreach, playlists, YouTube premiers, blog and music publication placements",
    },
  ];

  const ServiceCard = ({ title, image, description }) => {
    return (
      <div className="bg-gray-100 text-gray-900 text-center rounded-xl w-full max-w-sm shadow-lg transition-transform transform hover:scale-105">
        <div className="font-bold text-xl pt-5">{title}</div>
        <div className="flex justify-center">
          <Image
            src={image}
            alt="Social Logo"
            width={200}
            height={100}
            className="my-5"
          />
        </div>
        <div className="px-5 py-8">{description}</div>
      </div>
    );
  };

  return (
    <div className="text-center md:text-left" id="services">
      <h2 className="text-5xl pt-3 text-white text-center">Services</h2>
      {/* Ads Campaigns Card */}
      <section className="flex justify-between p-10 gap-10 flex-col md:flex-row">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            image={service.image}
            description={service.description}
          />
        ))}
      </section>
    </div>
  );
}

export default Services;
