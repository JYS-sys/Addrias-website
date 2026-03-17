import { InstitutionalFooter } from "@/app/components/InstitutionalFooter";
import { StartUpPage } from "@/app/components/StartUpPage";
import { ImmobilierPage } from "@/app/components/ImmobilierPage";
import { FinancesPage } from "@/app/components/FinancesPage";
import { NewsPage } from "@/app/components/NewsPage";
import { PhilosophiePage } from "@/app/components/PhilosophiePage";
import { GovernancePage } from "@/app/components/GovernancePage";
import { CarrierePage } from "@/app/components/CarrierePage";
import { MentionsLegalesPage } from "@/app/components/MentionsLegalesPage";
import { PolitiqueConfidentialitePage } from "@/app/components/PolitiqueConfidentialitePage";
import { PolitiqueCookiesPage } from "@/app/components/PolitiqueCookiesPage";
import { useState } from "react";
import logoImage from "@/assets/245b092ace25656ba9bb8b534f7c7d609d75f2ac.png";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "startup" | "immobilier" | "finances" | "news" | "philosophie" | "gouvernance" | "carriere" | "mentions" | "politique" | "cookies">("home");

  if (currentPage === "startup") {
    return <StartUpPage onBack={() => setCurrentPage("home")} onNavigatePhilosophie={() => setCurrentPage("philosophie")} onNavigateGouvernance={() => setCurrentPage("gouvernance")} onNavigateCarriere={() => setCurrentPage("carriere")} onNavigateMentions={() => setCurrentPage("mentions")} onNavigatePolitique={() => setCurrentPage("politique")} onNavigateCookies={() => setCurrentPage("cookies")} />;
  }

  if (currentPage === "immobilier") {
    return <ImmobilierPage onBack={() => setCurrentPage("home")} onNavigatePhilosophie={() => setCurrentPage("philosophie")} onNavigateGouvernance={() => setCurrentPage("gouvernance")} onNavigateCarriere={() => setCurrentPage("carriere")} onNavigateMentions={() => setCurrentPage("mentions")} onNavigatePolitique={() => setCurrentPage("politique")} onNavigateCookies={() => setCurrentPage("cookies")} />;
  }

  if (currentPage === "finances") {
    return <FinancesPage onBack={() => setCurrentPage("home")} onNavigatePhilosophie={() => setCurrentPage("philosophie")} onNavigateGouvernance={() => setCurrentPage("gouvernance")} onNavigateCarriere={() => setCurrentPage("carriere")} onNavigateMentions={() => setCurrentPage("mentions")} onNavigatePolitique={() => setCurrentPage("politique")} onNavigateCookies={() => setCurrentPage("cookies")} />;
  }

  if (currentPage === "news") {
    return <NewsPage onBack={() => setCurrentPage("home")} onNavigatePhilosophie={() => setCurrentPage("philosophie")} onNavigateGouvernance={() => setCurrentPage("gouvernance")} onNavigateCarriere={() => setCurrentPage("carriere")} onNavigateMentions={() => setCurrentPage("mentions")} onNavigatePolitique={() => setCurrentPage("politique")} onNavigateCookies={() => setCurrentPage("cookies")} />;
  }

  if (currentPage === "philosophie") {
    return <PhilosophiePage onBack={() => setCurrentPage("home")} onNavigateGouvernance={() => setCurrentPage("gouvernance")} />;
  }

  if (currentPage === "gouvernance") {
    return <GovernancePage onBack={() => setCurrentPage("home")} onNavigatePhilosophie={() => setCurrentPage("philosophie")} />;
  }

  if (currentPage === "carriere") {
    return <CarrierePage onBack={() => setCurrentPage("home")} onNavigatePhilosophie={() => setCurrentPage("philosophie")} onNavigateGouvernance={() => setCurrentPage("gouvernance")} onNavigateCookies={() => setCurrentPage("cookies")} />;
  }

  if (currentPage === "mentions") {
    return <MentionsLegalesPage onBack={() => setCurrentPage("home")} onNavigatePhilosophie={() => setCurrentPage("philosophie")} onNavigateGouvernance={() => setCurrentPage("gouvernance")} onNavigateCarriere={() => setCurrentPage("carriere")} onNavigatePolitique={() => setCurrentPage("politique")} onNavigateCookies={() => setCurrentPage("cookies")} />;
  }

  if (currentPage === "politique") {
    return <PolitiqueConfidentialitePage onBack={() => setCurrentPage("home")} onNavigatePhilosophie={() => setCurrentPage("philosophie")} onNavigateGouvernance={() => setCurrentPage("gouvernance")} onNavigateCarriere={() => setCurrentPage("carriere")} onNavigateMentions={() => setCurrentPage("mentions")} onNavigateCookies={() => setCurrentPage("cookies")} />;
  }

  if (currentPage === "cookies") {
    return <PolitiqueCookiesPage onBack={() => setCurrentPage("home")} onNavigatePhilosophie={() => setCurrentPage("philosophie")} onNavigateGouvernance={() => setCurrentPage("gouvernance")} onNavigateCarriere={() => setCurrentPage("carriere")} onNavigateMentions={() => setCurrentPage("mentions")} onNavigatePolitique={() => setCurrentPage("politique")} />;
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* Main container - responsive */}
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header - responsive logo */}
        <header className="pt-8 pb-4 md:pt-12 md:pb-6 lg:pt-4 lg:pb-4">
          <div>
            <img src={logoImage} alt="LLANORES" className="h-32 md:h-40 lg:h-56 opacity-90" />
          </div>
        </header>

        {/* Main content - centered */}
        <main className="flex items-center justify-center min-h-[calc(100vh-400px)] md:min-h-[calc(100vh-500px)] lg:min-h-[calc(100vh-600px)]">
          <div className="w-full max-w-[920px]">
            {/* Main card - responsive padding */}
            <div className="rounded-xl bg-white border border-[#EDEDED] px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-32">
              
              {/* Title */}
              <div className="text-center mb-12 md:mb-16 lg:mb-24">
                <h1 className="text-[#0A0A0A] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  Studios
                </h1>
                <p className="text-[#0A0A0A] text-xs md:text-sm font-normal tracking-wide mt-6">
                  Architecture d'entreprises et investissements stratégiques.
                </p>
              </div>

              {/* Four decision gateways - responsive grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mt-12 md:mt-16 lg:mt-20">
                {/* START UP */}
                <div className="text-center cursor-pointer active:opacity-70 transition-opacity" onClick={() => setCurrentPage("startup")}>
                  <h2 className="text-[#0A0A0A] text-sm md:text-base lg:text-lg font-semibold tracking-wide uppercase mb-3">
                    Start Up
                  </h2>
                  <div className="h-[3px] bg-[#0A0A0A] w-16 md:w-20 mx-auto" />
                </div>

                {/* IMMOBILIER */}
                <div className="text-center cursor-pointer active:opacity-70 transition-opacity" onClick={() => setCurrentPage("immobilier")}>
                  <h2 className="text-[#0A0A0A] text-sm md:text-base lg:text-lg font-semibold tracking-wide uppercase mb-3">
                    Immobilier
                  </h2>
                  <div className="h-[3px] bg-[#0A0A0A] w-16 md:w-20 mx-auto" />
                </div>

                {/* AI */}
                <div className="text-center cursor-pointer active:opacity-70 transition-opacity" onClick={() => setCurrentPage("finances")}>
                  <h2 className="text-[#0A0A0A] text-sm md:text-base lg:text-lg font-semibold tracking-wide uppercase mb-3">
                    AI
                  </h2>
                  <div className="h-[3px] bg-[#0A0A0A] w-16 md:w-20 mx-auto" />
                </div>

                {/* NEWS */}
                <div className="text-center cursor-pointer active:opacity-70 transition-opacity" onClick={() => setCurrentPage("news")}>
                  <h2 className="text-[#0A0A0A] text-sm md:text-base lg:text-lg font-semibold tracking-wide uppercase mb-3">
                    News
                  </h2>
                  <div className="h-[3px] bg-[#0A0A0A] w-16 md:w-20 mx-auto" />
                </div>
              </div>

            </div>
          </div>
        </main>

        <InstitutionalFooter 
          onNavigatePhilosophie={() => setCurrentPage("philosophie")}
          onNavigateGouvernance={() => setCurrentPage("gouvernance")}
          onNavigateCarriere={() => setCurrentPage("carriere")}
          onNavigateMentions={() => setCurrentPage("mentions")}
          onNavigatePolitique={() => setCurrentPage("politique")}
          onNavigateCookies={() => setCurrentPage("cookies")}
        />
      </div>
    </div>
  );
}