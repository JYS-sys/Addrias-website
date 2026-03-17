import { InstitutionalFooter } from "@/app/components/InstitutionalFooter";
import logoImage from "@/assets/245b092ace25656ba9bb8b534f7c7d609d75f2ac.png";

interface MentionsLegalesPageProps {
  onBack: () => void;
  onNavigatePhilosophie?: () => void;
  onNavigateGouvernance?: () => void;
  onNavigateCarriere?: () => void;
  onNavigatePolitique?: () => void;
  onNavigateCookies?: () => void;
}

export function MentionsLegalesPage({ onBack, onNavigatePhilosophie, onNavigateGouvernance, onNavigateCarriere, onNavigatePolitique, onNavigateCookies }: MentionsLegalesPageProps) {
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

        {/* Main Content */}
        <main className="max-w-[920px] mx-auto pb-6 md:pb-8 lg:pb-10">
          {/* Page Title */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <h1 className="text-[#0A0A0A] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 md:mb-8">
              Mentions légales
            </h1>
            <div className="text-[#0A0A0A] text-lg md:text-xl font-semibold tracking-tight mb-6 md:mb-8">
              LLANORES
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 md:space-y-10 lg:space-y-12">
            {/* Section: Éditeur du site */}
            <section>
              <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-semibold tracking-tight mb-4 md:mb-6">
                Éditeur du site
              </h2>
              <div className="space-y-3 md:space-y-4 text-[#3A3A3A] text-sm md:text-base leading-relaxed">
                <p>Le présent site est édité par :</p>
                <div className="space-y-2 pl-4">
                  <p className="font-semibold">LLANORES INVESTISSEMENTS SAS</p>
                  <p>Société par Actions Simplifiée</p>
                  <p>Capital social : 1 000 000,00 euros</p>
                  <p>SIREN : 832 377 360</p>
                </div>
                
                <div className="pt-4">
                  <p className="font-semibold mb-2">Siège social :</p>
                  <div className="space-y-1 pl-4">
                    <p>6 Rue Judes Turiaf</p>
                    <p>97221 Le Carbet</p>
                    <p>Martinique – France</p>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="font-semibold mb-2">Contact :</p>
                  <div className="space-y-1 pl-4">
                    <p>Email : contact@llanores.com</p>
                    <p>Téléphone : 07 69 63 21 07</p>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="font-semibold mb-2">Directeur de la publication :</p>
                  <p className="pl-4">M. Jean-Yves Salleron</p>
                </div>
              </div>
            </section>

            {/* Section: Hébergement */}
            <section>
              <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-semibold tracking-tight mb-4 md:mb-6">
                Hébergement
              </h2>
              <div className="space-y-3 md:space-y-4 text-[#3A3A3A] text-sm md:text-base leading-relaxed">
                <p>Le site est hébergé par :</p>
                <div className="space-y-2 pl-4">
                  <p className="font-semibold">Vercel</p>
                  <p>Vercel Inc.</p>
                  <p>340 S Lemon Ave #4133</p>
                  <p>Walnut, CA 91789</p>
                  <p>États-Unis</p>
                  <p>Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#0A0A0A] hover:underline">https://vercel.com</a></p>
                </div>
              </div>
            </section>

            {/* Section: Accès au site */}
            <section>
              <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-semibold tracking-tight mb-4 md:mb-6">
                Accès au site
              </h2>
              <div className="text-[#3A3A3A] text-sm md:text-base leading-relaxed">
                <p>LLANORES INVESTISSEMENTS SAS se réserve le droit de modifier, suspendre ou interrompre, à tout moment et sans préavis, l'accès à tout ou partie du site.</p>
              </div>
            </section>

            {/* Section: Responsabilité */}
            <section>
              <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-semibold tracking-tight mb-4 md:mb-6">
                Responsabilité
              </h2>
              <div className="space-y-3 md:space-y-4 text-[#3A3A3A] text-sm md:text-base leading-relaxed">
                <p>Les informations diffusées sur ce site sont fournies à titre indicatif.</p>
                <p>LLANORES INVESTISSEMENTS SAS s'efforce d'en assurer l'exactitude mais ne peut garantir l'absence d'erreurs ou d'omissions.</p>
                <p>L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.</p>
                <p>Les informations présentes sur ce site ne constituent en aucun cas un conseil financier, juridique ou d'investissement.</p>
              </div>
            </section>

            {/* Section: Liens externes */}
            <section>
              <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-semibold tracking-tight mb-4 md:mb-6">
                Liens externes
              </h2>
              <div className="space-y-3 md:space-y-4 text-[#3A3A3A] text-sm md:text-base leading-relaxed">
                <p>Le site peut contenir des liens vers des sites externes.</p>
                <p>LLANORES INVESTISSEMENTS SAS ne peut être tenue responsable du contenu de ces sites.</p>
              </div>
            </section>

            {/* Section: Propriété intellectuelle */}
            <section>
              <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-semibold tracking-tight mb-4 md:mb-6">
                Propriété intellectuelle
              </h2>
              <div className="text-[#3A3A3A] text-sm md:text-base leading-relaxed">
                <p>L'ensemble des éléments présents sur ce site (textes, images, logos, graphismes, structure) est protégé par le droit de la propriété intellectuelle.</p>
                <p className="mt-4">Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation préalable écrite de LLANORES INVESTISSEMENTS SAS est strictement interdite.</p>
              </div>
            </section>

            {/* Section: Données personnelles */}
            <section>
              <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-semibold tracking-tight mb-4 md:mb-6">
                Données personnelles
              </h2>
              <div className="space-y-3 md:space-y-4 text-[#3A3A3A] text-sm md:text-base leading-relaxed">
                <p>Les informations éventuellement collectées sur ce site sont traitées conformément au Règlement général sur la protection des données.</p>
                <p>Pour plus d'informations, l'utilisateur peut consulter la politique de confidentialité du site.</p>
              </div>
            </section>

            {/* Section: Droit applicable */}
            <section>
              <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-semibold tracking-tight mb-4 md:mb-6">
                Droit applicable
              </h2>
              <div className="space-y-3 md:space-y-4 text-[#3A3A3A] text-sm md:text-base leading-relaxed">
                <p>Les présentes mentions légales sont régies par le droit français.</p>
                <p>Tout litige relatif à l'utilisation du site sera soumis aux juridictions compétentes.</p>
              </div>
            </section>
          </div>
        </main>

        <InstitutionalFooter 
          onNavigatePhilosophie={onNavigatePhilosophie}
          onNavigateGouvernance={onNavigateGouvernance}
          onNavigateCarriere={onNavigateCarriere}
          onNavigatePolitique={onNavigatePolitique}
          onNavigateCookies={onNavigateCookies}
        />
      </div>
    </div>
  );
}