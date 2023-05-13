import Image from "next/image";
import TempArtwork1 from "../../public/images/TempArtwork1.svg";
import TempArtwork2 from "../../public/images/TempArtwork2.svg";
import TempArtwork3 from "../../public/images/TempArtwork3.svg";
import TempArtwork4 from "../../public/images/TempArtwork4.svg";
import TempResults from "../../public/images/TempResults1.svg";

function OurWork() {
  const works = [
    {
      id: 1,
      artist: "Slab City",
      artwork: TempArtwork1,
      objective: "Increase Spotify streams",
      strategy: "Social media ads",
      result: [
        "Added to 200 personal playlists",
        "Triggered algorithmic playlists",
      ],
      image: TempResults,
    },
    {
      id: 2,
      artist: "Robbie Hutton",
      artwork: TempArtwork2,
      objective: "Increase Spotify streams",
      strategy: "Social media ads",
      result: [
        "Added to 120 personal playlists",
        "Triggered algorithmic playlists",
      ],
      image: TempResults,
    },
    {
      id: 3,
      artist: "Crooked Shepherd",
      artwork: TempArtwork3,
      objective: "PR Campaign",
      strategy: "Spotify and Youtube Placements",
      result: [
        "Achieved over 40000 views on Youtube",
        "Achieved over 30000 streams on Spotify",
        "Reviews in 4 music publications",
      ],
      image: TempResults,
    },
    {
      id: 4,
      artist: "Neela",
      artwork: TempArtwork4,
      objective: "Increase Spotify streams",
      strategy: "Social media ads",
      result: [
        "Triggered algorithmic playlists",
        "Added to Spotify Editorial playlist",
      ],
      image: TempResults,
    },
  ];

  const WorkCard = ({
    artist,
    artwork,
    objective,
    strategy,
    result,
    image,
  }) => {
    return (
      <div className="bg-custom-white text-custom-black text-center rounded-xl w-full max-w-sm shadow-lg transition-transform transform hover:scale-105 ease-in-out duration-500">
        <div className="flex justify-center">
          <Image
            src={artwork}
            alt={`${artist} artwork`}
            width={200}
            height={100}
            className="my-5"
          />
        </div>
        <div className="text-left px-10">
          <h3 className="font-bold text-xl pt-5">Artist: </h3>
          <div className="pb-8">{artist}</div>
          <h3 className="font-bold text-xl pt-5">Objective: </h3>
          <div className="pb-8">{objective}</div>
          <h3 className="font-bold text-xl pt-5">Strategy: </h3>
          <div className="pb-8">{strategy}</div>
          <h3 className="font-bold text-xl pt-5">Results:</h3>
          <ul className="list-disc pl-5 pb-8">
            {result.map((res, i) => (
              <li key={i}>{res}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center">
          <Image
            src={image}
            alt="Campaign Results"
            width={200}
            height={100}
            className="my-5"
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2 className="text-5xl pt-3 text-custom-white text-center">Our Work</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-10">
        {works.map((work) => (
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
      </section>
    </div>
  );
}

export default OurWork;
