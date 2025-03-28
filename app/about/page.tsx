import Image from "next/image";
import ContactForm from "../components/ContactForm";

export default function Page() {
  return (
    <section>
      <div className="flex flex-col items-center mb-8">
        <div className="w-full max-w-2xl mb-8">
          <Image
            src="/joe1.JPG"
            alt="Joe Oberholzer"
            width={600}
            height={750}
            className="rounded-lg shadow-md mx-auto"
            priority
          />
        </div>

        <div className="w-full max-w-2xl space-y-4">
          <p>
            Growing up in Austin, TX and Southern California, Joe has spent most
            of his life immersed in the culture of live music, eventually
            inspiring him to pursue a career as a professional musician under
            the mentorship of Steve Becknell and Julie Landsman at the USC
            Thornton School of Music.
          </p>

          <p>
            In 2023, Joe won fellowships with the National Symphony Orchestra
            Summer Music Institute and the Lake George Music Festival, where he
            performed in concert series' around New York and the DC metropolitan
            area.
          </p>
        </div>
        
        {/* Contact Form Section */}
        <ContactForm />
      </div>
    </section>
  );
}