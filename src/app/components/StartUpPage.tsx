import { InstitutionalFooter } from "@/app/components/InstitutionalFooter";
import logoImage from "@/assets/245b092ace25656ba9bb8b534f7c7d609d75f2ac.png";
import logoAddrais from "@/assets/0efd2d40f21db0d1a6749edd4cd1292585bd7827.png";

interface StartUpPageProps {
  onBack: () => void;
  onNavigatePhilosophie?: () => void;
  onNavigateGouvernance?: () => void;
  onNavigateCarriere?: () => void;
  onNavigateMentions?: () => void;
  onNavigatePolitique?: () => void;
  onNavigateCookies?: () => void;
}

export function StartUpPage({ onBack, onNavigatePhilosophie, onNavigateGouvernance, onNavigateCarriere, onNavigateMentions, onNavigatePolitique, onNavigateCookies }: StartUpPageProps) {
  return (
    <div className="min-h-screen bg-white relative font-inter">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      
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

        {/* Main content - centered */}
        <main className="flex justify-center items-center py-6 md:py-8 lg:py-10 min-h-[calc(100vh-500px)] md:min-h-[calc(100vh-700px)] lg:min-h-[calc(100vh-800px)]">
          <article className="w-full max-w-[720px] text-center px-4">
            
            {/* Floating Logo */}
            <div className="mb-12 md:mb-16 flex justify-center float-animation">
              <img src={logoAddrais} alt="addrais.ai" className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain" />
            </div>

            {/* Title */}
            <h1 className="text-[#0A0A0A] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8">
              addrais.ai
            </h1>

            {/* Tagline */}
            <p className="text-[#3A3A3A] text-lg md:text-xl lg:text-2xl font-light italic leading-relaxed mb-12 md:mb-16">
              "Your intelligent memory for the people you meet."
            </p>

            {/* Coming Soon */}
            <p className="text-[#0A0A0A] text-sm md:text-base font-medium tracking-wide mb-12 md:mb-16">
              Prochainement sur iOS App Store
            </p>

            {/* Divider */}
            <div className="h-[1px] bg-[#EDEDED] my-8 md:my-12 max-w-[240px] md:max-w-[320px] mx-auto" />

            {/* Contact */}
            <div className="text-[#3A3A3A] text-base md:text-lg">
              <a 
                href="mailto:tech@addrais.ai" 
                className="text-[#0A0A0A] hover:underline font-medium min-h-[44px] inline-flex items-center"
              >
                tech@addrais.ai
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