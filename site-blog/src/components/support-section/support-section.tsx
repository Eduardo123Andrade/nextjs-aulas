import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";
import { PT_Sans_Caption } from "next/font/google";
import { SupportCard } from "./support-card";

const ptSansCaption = PT_Sans_Caption({ subsets: ["latin"], weight: "700" });

export const SupportSection = () => {
  return (
    <section className="container mt-8 pb-8 md:py-10 bg-gray-700">
      <div className="flex flex-col items-center gap-12">
        <h2
          className={`${ptSansCaption.className} text-balance text-center text-heading-xl text-gray-100`}
        >
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/** Card 1 */}
          <SupportCard
            title="Personalize seu site"
            description="Adicione sua logo, favicon, cores no seu catalago e tenha tudo com a sua cara."
            Illustration={PaintbrushVertical}
          />

          {/** Card 2 */}
          <SupportCard
            title="Venda de qualquer loja"
            description="Não importa a loja, o Site.Set permite que você insera qualquer link de afiliado."
            Illustration={Store}
            backgroundColor="bg-cyan-300"
            iconBackgroundColor="bg-cyan-200 mb-4"
          />

          {/** Card 3 */}
          <SupportCard
            title="Receba suporte amigável"
            description="Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso"
            Illustration={HeartHandshake}
          />
        </div>
      </div>
    </section>
  );
};
