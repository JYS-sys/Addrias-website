import { InstitutionalFooter } from "./InstitutionalFooter";
import logoImage from "@/assets/245b092ace25656ba9bb8b534f7c7d609d75f2ac.png";

interface PolitiqueConfidentialitePageProps {
  onBack: () => void;
  onNavigatePhilosophie?: () => void;
  onNavigateGouvernance?: () => void;
  onNavigateCarriere?: () => void;
  onNavigateMentions?: () => void;
  onNavigateCookies?: () => void;
}

export function PolitiqueConfidentialitePage({ onBack, onNavigatePhilosophie, onNavigateGouvernance, onNavigateCarriere, onNavigateMentions, onNavigateCookies }: PolitiqueConfidentialitePageProps) {
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
            {/* Page Title */}
            <div className="mb-12 md:mb-16 lg:mb-20">
              <h1 className="text-[#0A0A0A] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 md:mb-8">
                Politique de confidentialité
              </h1>
              <div className="text-[#0A0A0A] text-lg md:text-xl font-semibold tracking-tight mb-6 md:mb-8">
                LLANORES
              </div>
              <p className="text-[#3A3A3A] text-sm md:text-base leading-relaxed">
                La présente politique de confidentialité a pour objectif d'informer les utilisateurs du site LLANORES sur la manière dont leurs données personnelles sont collectées, utilisées et protégées conformément au Règlement général sur la protection des données.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-8 md:space-y-10 lg:space-y-12">
              {/* Section 1 */}
              <section>
                <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-semibold tracking-tight mb-4 md:mb-6">
                  1. Responsable du traitement
                </h2>
                <div className="space-y-3 md:space-y-4 text-[#3A3A3A] text-sm md:text-base leading-relaxed">
                  <p>Les données personnelles collectées sur le site sont traitées par :</p>
                  <div className="space-y-2 pl-4">
                    <p>LLANORES INVESTISSEMENTS SAS</p>
                    <p>6 Rue Judes Turiaf</p>
                    <p>97221 CARBET</p>
                    <p>MARTINIQUE</p>
                    <p>Contact : contact@llanores.com</p>
                  </div>
                  <p>Le responsable du traitement est chargé de déterminer les finalités et les moyens du traitement des données personnelles.</p>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-semibold tracking-tight mb-4 md:mb-6">
                  2. Données collectées
                </h2>
                <div className="space-y-3 md:space-y-4 text-[#3A3A3A] text-sm md:text-base leading-relaxed">
                  <p>LLANORES peut être amenée à collecter les catégories de données suivantes :</p>
                  <ul className="space-y-2 pl-8 list-disc">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Informations transmises via les formulaires de contact</li>
                    <li>Données techniques de navigation (adresse IP, type de navigateur, pages consultées)</li>
                  </ul>
                  <p>Ces données sont collectées uniquement lorsque l'utilisateur les transmet volontairement ou lors de la navigation sur le site.</p>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-semibold tracking-tight mb-4 md:mb-6">
                  3. Finalité de la collecte
                </h2>
                <div className="space-y-3 md:space-y-4 text-[#3A3A3A] text-sm md:text-base leading-relaxed">
                  <p>Les données collectées peuvent être utilisées pour :</p>
                  <ul className="space-y-2 pl-8 list-disc">
                    <li>répondre aux demandes envoyées via le site</li>
                    <li>améliorer l'expérience utilisateur</li>
                    <li>assurer le bon fonctionnement et la sécurité du site</li>
                    <li>réaliser des analyses statistiques anonymes de fréquentation</li>
                  </ul>
                  <p>LLANORES s'engage à ne pas vendre ni céder les données personnelles à des tiers.</p>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-semibold tracking-tight mb-4 md:mb-6">
                  4. Durée de conservation
                </h2>
                <div className="text-[#3A3A3A] text-sm md:text-base leading-relaxed">
                  <p>Les données personnelles sont conservées uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, sauf obligation légale contraire.</p>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-semibold tracking-tight mb-4 md:mb-6">
                  5. Sécurité des données
                </h2>
                <div className="text-[#3A3A3A] text-sm md:text-base leading-relaxed">
                  <p>LLANORES met en œuvre des mesures techniques et organisationnelles appropriées afin de protéger les données personnelles contre toute perte, altération, accès non autorisé ou divulgation.</p>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-semibold tracking-tight mb-4 md:mb-6">
                  6. Droits des utilisateurs
                </h2>
                <div className="space-y-3 md:space-y-4 text-[#3A3A3A] text-sm md:text-base leading-relaxed">
                  <p>Conformément au Règlement général sur la protection des données, les utilisateurs disposent des droits suivants :</p>
                  <ul className="space-y-2 pl-8 list-disc">
                    <li>droit d'accès à leurs données</li>
                    <li>droit de rectification</li>
                    <li>droit à l'effacement</li>
                    <li>droit à la limitation du traitement</li>
                    <li>droit d'opposition</li>
                    <li>droit à la portabilité des données</li>
                  </ul>
                  <p>Ces droits peuvent être exercés à tout moment en contactant :</p>
                  <p className="pl-4">contact@llanores.com</p>
                </div>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-semibold tracking-tight mb-4 md:mb-6">
                  7. Cookies
                </h2>
                <div className="space-y-3 md:space-y-4 text-[#3A3A3A] text-sm md:text-base leading-relaxed">
                  <p>Le site peut utiliser des cookies afin d'améliorer la navigation et d'analyser l'utilisation du site.</p>
                  <p>L'utilisateur peut à tout moment configurer son navigateur pour refuser ou supprimer les cookies.</p>
                </div>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-semibold tracking-tight mb-4 md:mb-6">
                  8. Modification de la politique de confidentialité
                </h2>
                <div className="text-[#3A3A3A] text-sm md:text-base leading-relaxed">
                  <p>LLANORES se réserve le droit de modifier la présente politique de confidentialité à tout moment afin de garantir sa conformité avec la législation en vigueur.</p>
                </div>
              </section>
            </div>
          </article>
        </main>

        <InstitutionalFooter 
          onNavigatePhilosophie={onNavigatePhilosophie}
          onNavigateGouvernance={onNavigateGouvernance}
          onNavigateCarriere={onNavigateCarriere}
          onNavigateMentions={onNavigateMentions}
          onNavigateCookies={onNavigateCookies}
        />
      </div>
    </div>
  );
}