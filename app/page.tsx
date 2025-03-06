import Image from "next/image";

export default function Page() {
  // Audio track data with titles and descriptions
  const audioTracks = [
    {
      id: "poulenc1",
      title: "Poulenc: Sonata for Flute and Piano (Part 1)",
      file: "/poulenc1.mp3",
      description: "Performed at the Kennedy Center, Washington DC"
    },
    {
      id: "poulenc2",
      title: "Poulenc: Sonata for Flute and Piano (Part 2)",
      file: "/poulenc2.mp3",
      description: "Performed at the Kennedy Center, Washington DC"
    },
    {
      id: "summer-music",
      title: "Summer Music for Wind Quintet",
      file: "/summer-music-epic.mp3",
      description: "Lake George Music Festival chamber concert series"
    },
    {
      id: "glory-denied",
      title: "Glory Denied",
      file: "/glory-denied.mp3",
      description: "In collaboration with the USC Thornton Opera"
    }
  ];

  return (
    <section>
      <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <Image
            src="/joe1.JPG"
            alt="Joe Oberholzer"
            width={400}
            height={500}
            className="rounded-lg shadow-md"
            priority
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="mb-4 text-3xl font-semibold tracking-tighter">
            Joe Oberholzer
          </h1>
          <p className="mb-4">
            {`Joe is a rising artist in the world of classical chamber music in addition to his solo and orchestral playing. 
            The recordings below contain excerpts from performances at the Kennedy Center in Washington DC, 
            The National Children's Hospital, and the Lake George Music Festival chamber concert series.`}
          </p>
        </div>
      </div>
      
      <div className="my-8">
        <h2 className="text-2xl font-medium mb-6">Featured Performances</h2>
        <div className="space-y-6">
          {audioTracks.map((track, index) => (
            <div 
              key={track.id} 
              className={`${index % 2 === 0 ? 'bg-red-800' : 'bg-yellow-600'} rounded-lg p-6 shadow-md`}
            >
              <h3 className="text-xl font-medium mb-2 text-white">{track.title}</h3>
              <p className={`${index % 2 === 0 ? 'text-red-200' : 'text-yellow-200'} mb-3`}>{track.description}</p>
              <div className="w-full">
                <audio 
                  controls 
                  className="w-full" 
                  preload="metadata"
                >
                  <source src={track.file} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}