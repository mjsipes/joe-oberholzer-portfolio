import { BlogPosts } from "app/components/posts";
import Image from "next/image";

export default function Page() {
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
        <BlogPosts />
      </div>
    </section>
  );
}