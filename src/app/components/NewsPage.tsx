import { InstitutionalFooter } from "@/app/components/InstitutionalFooter";
import logoImage from "@/assets/245b092ace25656ba9bb8b534f7c7d609d75f2ac.png";

interface NewsPageProps {
  onBack: () => void;
  onNavigatePhilosophie?: () => void;
  onNavigateGouvernance?: () => void;
  onNavigateCarriere?: () => void;
  onNavigateMentions?: () => void;
  onNavigatePolitique?: () => void;
  onNavigateCookies?: () => void;
}

export function NewsPage({ onBack, onNavigatePhilosophie, onNavigateGouvernance, onNavigateCarriere, onNavigateMentions, onNavigatePolitique, onNavigateCookies }: NewsPageProps) {
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
              NEWS
            </h1>

            {/* Divider */}
            <div className="h-[1px] bg-[#EDEDED] mb-12 md:mb-14 lg:mb-16" />

            {/* Subtitle */}
            <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-semibold tracking-tight mb-12 md:mb-16 lg:mb-20 leading-relaxed">
              JYS&Co — Newsletter
            </h2>

            {/* Body content */}
            <div className="space-y-6 md:space-y-8 lg:space-y-10 text-[#3A3A3A] text-base md:text-lg font-medium leading-loose">
              <p>
                LLANORES s'exprime également à travers une newsletter : JYS&Co.
              </p>

              <p>
                Cette newsletter explore des sujets de fond autour du bon sens, de l'entrepreneuriat, de la musique et du sport.<br />
                Des disciplines différentes, un même fil conducteur.
              </p>

              <p>
                JYS&Co est un espace de réflexion libre.
              </p>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-[#EDEDED] my-12 md:my-16 lg:my-20" />

            {/* Link section */}
            <div className="space-y-3 md:space-y-4 text-center">
              <p className="text-[#0A0A0A] text-base md:text-lg font-semibold">
                Lire et abonnez vous à la newsletter sur Substack
              </p>
              <a 
                href="https://substack.com/@jysandco" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-[#3A3A3A] text-sm md:text-base font-medium underline underline-offset-4 hover:text-[#0A0A0A] transition-colors min-h-[44px] flex items-center justify-center break-all px-4"
              >
                https://substack.com/@jysandco
              </a>
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