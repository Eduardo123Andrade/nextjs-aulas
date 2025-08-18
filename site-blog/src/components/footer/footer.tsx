import Image from "next/image";
import Link from "next/link";
import { ActiveLink } from "../active-link";

export const Footer = () => {
  return (
    <footer className="border-top border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:flex-row gap-8 py-8">
          <Link href="">
            <Image src="/Logo.svg" alt="Logo site" width={116} height={32} />
          </Link>
          <nav className="flex flex-col md:flex-row itens-centar gap-4 text-sm text-muted-foreground">
            <Link className="hover:text-primary" href="/termos-de-uso">
              Termos de uso
            </Link>
            <Link
              className="hover:text-primary"
              href="/politica-de-privacidade"
            >
              Política de privacidade
            </Link>
            <Link className="hover:text-primary" href="/enviar-feedback">
              Enviar feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
