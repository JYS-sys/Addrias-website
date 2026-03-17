import { InstitutionalFooter } from "@/app/components/InstitutionalFooter";
import logoImage from "@/assets/245b092ace25656ba9bb8b534f7c7d609d75f2ac.png";

interface GovernancePageProps {
  onBack: () => void;
  onNavigatePhilosophie?: () => void;
}

export function GovernancePage({ onBack, onNavigatePhilosophie }: GovernancePageProps) {
  return (
    <div className="min-h-screen bg-white relative font-inter">
      {/* Main container - responsive */}
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header - responsive logo */}
        <header className="pt-8 pb-4 md:pt-12 md:pb-6 lg:pt-4 lg:pb-4">
          <div>
            <button onClick={onBack} className="cursor-pointer active:opacity-70 transition-opacity">
              <img src={logoImage} alt="LLANORES" className="h-36 md:h-44 lg:h-64 opacity-90" />
            </button>
          </div>
        </header>

        {/* Main content - centered narrow column */}
        <main className="flex justify-center py-6 md:py-8 lg:py-10">
          <article className="w-full max-w-[720px]">
            
            {/* Title */}
            <h1 className="text-[#0A0A0A] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-8 md:mb-10 lg:mb-12">
              GOUVERNANCE
            </h1>

            {/* Divider */}
            <div className="h-[1px] bg-[#EDEDED] mb-12 md:mb-16 lg:mb-20" />

            {/* Contact Information */}
            <div className="space-y-3 md:space-y-4">
              <p className="text-[#0A0A0A] text-base md:text-lg font-semibold">
                Mr J. Yves Salleron
              </p>
              
              <div className="text-[#3A3A3A] text-sm md:text-base leading-relaxed space-y-1">
                <p>LLANORES</p>
                <p>6 Rue Judes Turiaf</p>
                <p>97221 CARBET</p>
                <p>MARTINIQUE</p>
                <p className="pt-2">+ 33 7 69 63 21 07</p>
                <p>
                  <a href="mailto:contact@llanores.com" className="text-[#0A0A0A] hover:underline min-h-[44px] inline-flex items-center">
                    contact@llanores.com
                  </a>
                </p>
              </div>
            </div>

            {/* Vision Intergénérationnelle */}
            <div className="mt-16 md:mt-20 lg:mt-24">
              <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-bold tracking-tight mb-4 md:mb-6">
                Vision Intergénérationnelle
              </h2>
              <p className="text-[#3A3A3A] text-sm md:text-base leading-relaxed">
                Nous construisons pour la prochaine décennie. Notre gouvernance privilégie la croissance organique et la solidité des fondamentaux.
              </p>
            </div>

            {/* Transparence & Discrétion */}
            <div className="mt-12 md:mt-16 lg:mt-20">
              <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-bold tracking-tight mb-4 md:mb-6">
                Transparence & Discrétion
              </h2>
              <p className="text-[#3A3A3A] text-sm md:text-base leading-relaxed">
                Nous opérons avec une confidentialité absolue pour nos partenaires et investisseurs. La structure Llanores garantit un cadre sécurisé pour le développement d'actifs stratégiques.
              </p>
            </div>

            {/* Notre Éthique */}
            <div className="mt-12 md:mt-16 lg:mt-20">
              <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-bold tracking-tight mb-4 md:mb-6">
                Notre Éthique
              </h2>
              <p className="text-[#3A3A3A] text-sm md:text-base leading-relaxed">
                "Chez Llanores l'éthique est une boussole stratégique. Elle se définit par notre capacité à regarder l'horizon : nous privilégions la vision long terme aux gains éphémères, car la durabilité est le seul véritable indicateur de succès. Cette ambition s'inscrit dans le respect absolu de son environnement, en veillant à ce que chaque projet apporte une valeur ajoutée concrète et responsable à l'écosystème qu'il intègre. Nous agissons avec l'enthousiasme de bâtisseurs, convaincus que l'énergie positive est le moteur de l'innovation. Notre modèle est celui du service : l'excellence de nos résultats n'a de sens que si elle sert les intérêts de nos partenaires et la réussite des structures que nous architecturons."
              </p>
            </div>
          </article>
        </main>

        <InstitutionalFooter onNavigatePhilosophie={onNavigatePhilosophie} />
      </div>
    </div>
  );
}
