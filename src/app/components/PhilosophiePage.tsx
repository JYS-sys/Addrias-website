import { InstitutionalFooter } from "@/app/components/InstitutionalFooter";
import logoImage from "@/assets/245b092ace25656ba9bb8b534f7c7d609d75f2ac.png";

interface PhilosophiePageProps {
  onBack: () => void;
  onNavigateGouvernance?: () => void;
}

export function PhilosophiePage({ onBack, onNavigateGouvernance }: PhilosophiePageProps) {
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
          <article className="w-full max-w-[720px]">
            
            {/* Title */}
            <h1 className="text-[#0A0A0A] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-8 md:mb-10 lg:mb-12">
              PHILOSOPHIE
            </h1>

            {/* Divider */}
            <div className="h-[1px] bg-[#EDEDED] mb-12 md:mb-16 lg:mb-20" />

            {/* Quote */}
            <div className="pt-8 md:pt-12">
              <p className="text-[#3A3A3A] text-sm md:text-base italic font-normal">
                "La simplicité est la sophistication extrême"
              </p>
            </div>

          </article>
        </main>

        <InstitutionalFooter onNavigateGouvernance={onNavigateGouvernance} />
      </div>
    </div>
  );
}