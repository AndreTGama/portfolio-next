import Image from "next/image";

import image from "@/assets/img/conference-speaker.jpg";

export default function Hero() {
  return (
    <section id="hero" className="py-10">
      <div className="flex flex-col items-center gap-12 md:flex-row bg-blue-500">
        <div className="flex flex-col justify-center md:w-3/5 px-8">
          <h1 className="mb-8 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Building scalable solutions for real problems.
          </h1>
          <div className="space-y-6">
            <p className="max-w-2xl text-lg leading-8 md:text-xl">
              Based in Brazil, I build scalable web applications using PHP,
              Laravel, AWS and modern web technologies.
            </p>
            <p className="max-w-2xl text-lg leading-8 md:text-xl">
              Passionate about clean architecture, scalable systems and
              continuous learning, I strive to create software that is
              reliable, maintainable and built to last.
            </p>
          </div>
        </div>

        <div className="hidden md:flex md:w-2/5 justify-end">
          <Image
            src={image}
            alt="Conference speaker"
            className="w-full max-w-md object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}