import Image from "next/image";
import { useTranslations } from "next-intl";

import image from "@/assets/img/conference-speaker.jpg";

export default function Hero() {
  const t = useTranslations("home");
  return (
    <section id="hero" className="py-10">
      <div className="flex flex-col items-center gap-12 md:flex-row bg-blue-500">
        <div className="flex flex-col justify-center md:w-3/5 px-8">
          <h1 className="mb-8 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {t("hero.h1")}
          </h1>
          <div className="space-y-6">
            <p className="max-w-2xl text-lg leading-8 md:text-xl">
              {t("hero.textOne")}
            </p>
            <p className="max-w-2xl text-lg leading-8 md:text-xl">
              {t("hero.textTwo")}
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