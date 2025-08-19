import Image from "next/image";
import { CardItem } from "./card-item";
import { FeatureButton } from "./feature-button";
import { FeatureCard } from "./feature-card";

export const FeatureSection = () => {
  return (
    <section className="container bg-gray-700 grid gap-6 md:grid-cols-2 pb-8 pt-8 md:py-10">
      <FeatureCard
        label="Simples"
        title="Crie um catálogo de produtos online em poucos minutos"
      />

      <FeatureCard
        label="Prático"
        title="Venda para seu público através de uma plataforma única"
      />

      <div className="col-span-full flex flex-col gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 rounded-lg bg-gray-500 p-6">
          <div className="flex flex-col gap-4">
            <CardItem
              label="Personálizavel"
              title="Tenha uma loja online personalizada com a cara da sua marca"
            />

            <FeatureButton className="md:flex w-fit hidden" />
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-md overflow-hidden">
              <Image
                src="/feature-section.svg"
                alt="Features"
                width={440}
                height={330}
                className="object-cover w-full"
              />
            </div>

            <FeatureButton className="md:hidden w-full gap-2" />
          </div>
        </div>
      </div>
    </section>
  );
};
