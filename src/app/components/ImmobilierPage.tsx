import { InstitutionalFooter } from "@/app/components/InstitutionalFooter";
import logoImage from "@/assets/2.png";

interface ImmobilierPageProps {
  onBack: () => void;
  onNavigatePhilosophie?: () => void;
  onNavigateGouvernance?: () => void;
  onNavigateCarriere?: () => void;
  onNavigateMentions?: () => void;
  onNavigatePolitique?: () => void;
  onNavigateCookies?: () => void;
}

export function ImmobilierPage({ onBack, onNavigatePhilosophie, onNavigateGouvernance, onNavigateCarriere, onNavigateMentions, onNavigatePolitique, onNavigateCookies }: ImmobilierPageProps) {
  return (
    <div className="min-h-screen bg-white relative font-inter">
      {/* Main container - responsive */}
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header - responsive logo */}
        <header className="pt-8 pb-4 md:pt-12 md:pb-6 lg:pt-4 lg:pb-4">
          <div>
            <button onClick={onBack} className="cursor-pointer active:opacity-70 transition-opacity">
              <img src={logoImage} alt="LLANORES" className="h-32 md:h-40 lg:h-56 opacity-90" />
            </button>
          </div>
        </header>

        {/* Main content - centered narrow column */}
        <main className="flex justify-center py-6 md:py-8 lg:py-10">
          <article className="w-full max-w-[640px]">
            
            {/* Title */}
            <h1 className="text-[#0A0A0A] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-8 md:mb-10 lg:mb-12">
              IMMOBILIER
            </h1>

            {/* Divider */}
            <div className="h-[1px] bg-[#EDEDED] mb-12 md:mb-14 lg:mb-16" />

            {/* Subtitle */}
            <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-semibold tracking-tight mb-12 md:mb-16 lg:mb-20 leading-relaxed">
              Structuration & accompagnement des opérations immobilières
            </h2>

            {/* Body content */}
            <div className="space-y-6 md:space-y-8 lg:space-y-10 text-[#3A3A3A] text-base md:text-lg font-medium leading-loose">
              <p>
                LLANORES accompagne les bâtisseurs et promoteurs immobiliers dans la structuration et le pilotage de leurs projets.
              </p>

              <p>
                Nous intervenons sur des opérations où la maîtrise des décisions est déterminante, de la conception à la réalisation.
              </p>

              <div>
                <p className="mb-4 md:mb-6">Notre mission couvre :</p>
                <ul className="space-y-2 md:space-y-3 pl-6">
                  <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                    la maîtrise d'ouvrage
                  </li>
                  <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                    le conseil technique
                  </li>
                  <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                    l'accompagnement opérationnel
                  </li>
                  <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                    la structuration financière
                  </li>
                </ul>
              </div>

              <p>
                Nous agissons comme un partenaire de confiance, garant de la cohérence globale du projet.
              </p>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-[#EDEDED] my-12 md:my-16 lg:my-20" />

            {/* Closing lines */}
            <div className="space-y-4 md:space-y-6 text-[#0A0A0A] text-base md:text-lg font-semibold leading-relaxed">
              <p>Des opérations maîtrisées.</p>
              <p>Des décisions structurantes.</p>
              <p>Une vision long terme.</p>
            </div>

          </article>
        </main>

        <InstitutionalFooter 
          onNavigatePhilosophie={onNavigatePhilosophie}
          onNavigateGouvernance={onNavigateGouvernance}
          onNavigateCarriere={onNavigateCarriere}
          onNavigateMentions={onNavigateMentions}
          onNavigatePolitique={onNavigatePolitique}
          onNavigateCookies={onNavigateCookies}
        />
      </div>
    </div>
  );
}