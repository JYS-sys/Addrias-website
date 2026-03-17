import { InstitutionalFooter } from "@/app/components/InstitutionalFooter";
import logoImage from "@/assets/245b092ace25656ba9bb8b534f7c7d609d75f2ac.png";

interface FinancesPageProps {
  onBack: () => void;
  onNavigatePhilosophie?: () => void;
  onNavigateGouvernance?: () => void;
  onNavigateCarriere?: () => void;
  onNavigateMentions?: () => void;
  onNavigatePolitique?: () => void;
  onNavigateCookies?: () => void;
}

export function FinancesPage({ onBack, onNavigatePhilosophie, onNavigateGouvernance, onNavigateCarriere, onNavigateMentions, onNavigatePolitique, onNavigateCookies }: FinancesPageProps) {
  return (
    <div className="min-h-screen bg-white relative font-inter">
      {/* Main container - responsive */}
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header - responsive logo */}
        <header className="pt-8 pb-4 md:pt-12 md:pb-6 lg:pt-4 lg:pb-4">
          <div>
            <button onClick={onBack} className="cursor-pointer active:opacity-70 transition-opacity">
              <img src={logoImage} alt="LLANORES" className="h-24 md:h-32 lg:h-48 opacity-90" />
            </button>
          </div>
        </header>

        {/* Main content - centered narrow column */}
        <main className="flex justify-center py-6 md:py-8 lg:py-10">
          <article className="w-full max-w-[640px]">
            
            {/* Title */}
            <h1 className="text-[#0A0A0A] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-8 md:mb-10 lg:mb-12">
              AI
            </h1>

            {/* Divider */}
            <div className="h-[1px] bg-[#EDEDED] mb-12 md:mb-14 lg:mb-16" />

            {/* Subtitle */}
            <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-semibold tracking-tight mb-12 md:mb-16 lg:mb-20 leading-relaxed">
              Intelligence artificielle
            </h2>

            {/* Body content */}
            <div className="space-y-6 md:space-y-8 lg:space-y-10 text-[#3A3A3A] text-base md:text-lg font-medium leading-loose">
              <p>
                LLANORES considère l'intelligence artificielle comme l'une des évolutions majeures des systèmes informatiques contemporains.
              </p>

              <p>
                Les progrès récents dans les modèles d'apprentissage et les architectures de calcul transforment progressivement la manière dont les machines peuvent analyser l'information, assister la prise de décision et automatiser certaines tâches complexes.
              </p>

              <p>
                Notre approche est volontairement méthodique : comprendre les technologies, observer leurs usages, expérimenter à petite échelle, puis intégrer progressivement les solutions qui apportent une amélioration réelle.
              </p>

              <p>
                Nous considérons l'intelligence artificielle comme un ensemble d'outils capables d'augmenter certaines capacités humaines lorsqu'ils sont utilisés avec rigueur et discernement.
              </p>

              <p>
                Chez LLANORES, ces technologies sont introduites de manière progressive afin de concevoir des systèmes simples, efficaces et durables.
              </p>
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