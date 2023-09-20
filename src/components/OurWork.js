import Image from "next/image";
import { useState } from "react";

function OurWork() {
  const [showMore, setShowMore] = useState(false);

  const works = [
    {
      id: 1,
      artist: "Slab City",
      artwork: "https://d3g56pywmp84r0.cloudfront.net/video_Slab_City.mp4",
      objective: "Increase Spotify streams",
      strategy: "Social media ads",
      result: [
        "Added to 200 personal playlists",
        "Triggered algorithmic playlists",
      ],
      image: "https://d3g56pywmp84r0.cloudfront.net/Our_Work_Slab_City.png",
    },
    {
      id: 2,
      artist: "Robbie Hutton",
      artwork: "https://d3g56pywmp84r0.cloudfront.net/video_Robbie_Hutton.mp4",
      objective: "Increase Spotify streams",
      strategy: "Social media ads",
      result: [
        "Added to 120 personal playlists",
        "Triggered algorithmic playlists",
      ],
      image: "https://d3g56pywmp84r0.cloudfront.net/Our_Work_Robbie_Hutton.png",
    },
    {
      id: 3,
      artist: "Crooked Shepherd",
      artwork:
        "https://d3g56pywmp84r0.cloudfront.net/video_Crooked_Shepherd.mp4",
      objective: "PR Campaign",
      strategy: "Spotify and Youtube Placements",
      result: [
        "Achieved over 40000 views on Youtube",
        "Achieved over 30000 streams on Spotify",
      ],
      image:
        "https://d3g56pywmp84r0.cloudfront.net/Our_Work_Crooked_Shepherd.png",
    },
    {
      id: 4,
      artist: "Neela",
      artwork: "https://d3g56pywmp84r0.cloudfront.net/video_Neela.mp4",
      objective: "Increase Spotify streams",
      strategy: "Social media ads",
      result: [
        "Triggered algorithmic playlists",
        "Added to Spotify Editorial playlist",
      ],
      image: "https://d3g56pywmp84r0.cloudfront.net/Our_Work_Neela.png",
    },
    {
      id: 5,
      artist: "Arielle Eden",
      artwork: "https://d3g56pywmp84r0.cloudfront.net/video_Arielle_Eden.mp4",
      objective: "Growth Campaign",
      strategy: "Ads, PR and Spotify",
      result: [
        "Over 1400 followers gained on own artist Spotify playlist",
        "Triggered Algorithmic playlists",
        "Achieved over 120000 streams on Spotify",
      ],
      image: "https://d3g56pywmp84r0.cloudfront.net/Our_Work_Arielle_Eden.png",
    },
    {
      id: 6,
      artist: "Evil Sweet",
      artwork: "https://d3g56pywmp84r0.cloudfront.net/video_Evil_Sweet.mp4",
      objective: "Growth Campaign",
      strategy: "Ads, PR and Spotify",
      result: [
        "Over 3800 followers gained on Spotify",
        "Triggered Algorithmic playlists",
        "Triggered Spotify Discover mode",
        "Achieved over 200000 streams on Spotify",
      ],
      image: "https://d3g56pywmp84r0.cloudfront.net/Our_Work_Evil_Sweet.png",
    },
    {
      id: 7,
      artist: "Emily Gabriele",
      artwork: "https://d3g56pywmp84r0.cloudfront.net/video_Emily_Gabriele.mp4",
      objective: "Growth Campaign",
      strategy: "Ads, PR and Spotify",
      result: [
        "Gained over 300 subscribers to mailing",
        "Over 1900 followers gained on own artist Spotify playlist",
        "Triggered Algorithmic playlists",
        "Achieved over 450000 streams on Spotify",
        "Charted in the top 200 AAA charts",
      ],
      image:
        "https://d3g56pywmp84r0.cloudfront.net/Our_Work_Emily_Gabriele.png",
    },
    {
      id: 8,
      artist: "Josh Holmes",
      artwork: "https://d3g56pywmp84r0.cloudfront.net/video_Josh_Holmes.mp4",
      objective: "Release Campaign",
      strategy: "PR and Spotify strategies",
      result: [
        "Triggered Algorithmic playlists",
        "Triggered Spotify Discover mode",
        "Added to two Spotify Editorial playlists",
        "Achieved over 200000 streams on Spotify",
      ],
      image: "https://d3g56pywmp84r0.cloudfront.net/Our_Work_Josh_Holmes.png",
    },
    {
      id: 9,
      artist: "Ivy League",
      artwork: "https://d3g56pywmp84r0.cloudfront.net/video_Ivy_League.mp4",
      objective: "Growth Campaign",
      strategy: "Ads, PR",
      result: [
        "Gained over 1000 followers on Instagram and Spotify combined",
        "Triggered Algorithmic playlists",
        "Triggered Spotify Discover mode",
        "Achieved over 200000 streams on Spotify",
        "Received 8 reviews of their EP in publications including Ear Milk, Girl at the rock shows and Illustrative",
        "Worked in collaboration with Project Heal and Anxiety and Depression Association of America",
      ],
      image: "https://d3g56pywmp84r0.cloudfront.net/Our_Work_Ivy_League.png",
    },
    {
      id: 10,
      artist: "AESTHETIC",
      artwork: "https://d3g56pywmp84r0.cloudfront.net/video_AESTHETIC.mp4",
      objective: "Release Campaign",
      strategy: "Ads, PR",
      result: [
        "Gained over 1400 followers on TikTok and Instagram combined",
        "Triggered Algorithmic playlists",
        "Triggered Spotify Discover mode",
        "Achieved over 50000 streams on Spotify",
        "Received 8 reviews of their EP in publications including Illustrative",
        "Worked in collaboration with Anxiety ",
      ],
      image: "https://d3g56pywmp84r0.cloudfront.net/Our_Work_AESTHETIC.png",
    },
  ];

  const itemsToShow = showMore ? works.length : 2;

  const WorkCard = ({
    artist,
    artwork,
    objective,
    strategy,
    result,
    image,
  }) => {
    return (
      <div className="bg-custom-white text-custom-black rounded-xl shadow-lg flex overflow-hidden m-4">
        <div className="w-1/2">
          <video width="100%" controls className="h-full">
            <source src={artwork} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-1/2 p-4 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-2xl mb-2">{artist}</h3>
            <h4 className="font-medium text-lg mb-1">Objective:</h4>
            <p className="mb-2">{objective}</p>
            <h4 className="font-medium text-lg mb-1">Strategy:</h4>
            <p className="mb-2">{strategy}</p>
            <h4 className="font-medium text-lg mb-1">Results:</h4>
            <ul className="list-disc pl-5 mb-2">
              {result.map((res, i) => (
                <li key={i} className="mb-1">
                  {res}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-2">
            <Image
              src={image}
              alt="Campaign Results"
              layout="responsive"
              width={200}
              height={100}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="work">
      <h2 className="text-5xl pt-3 text-custom-white text-center pb-5">
        Our Work
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {works.slice(0, itemsToShow).map((work) => (
          <WorkCard
            key={work.id}
            artist={work.artist}
            artwork={work.artwork}
            objective={work.objective}
            strategy={work.strategy}
            result={work.result}
            image={work.image}
          />
        ))}
      </div>
      {!showMore && (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setShowMore(true)}
            className="bg-custom-white text-custom-black py-2 px-6 rounded-full hover:bg-gray-700 transition-colors duration-300"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default OurWork;
