import { InstitutionalFooter } from "@/app/components/InstitutionalFooter";
import logoImage from "@/assets/245b092ace25656ba9bb8b534f7c7d609d75f2ac.png";

interface PolitiqueCookiesPageProps {
  onBack: () => void;
  onNavigatePhilosophie?: () => void;
  onNavigateGouvernance?: () => void;
  onNavigateCarriere?: () => void;
  onNavigateMentions?: () => void;
  onNavigatePolitique?: () => void;
}

export function PolitiqueCookiesPage({ onBack, onNavigatePhilosophie, onNavigateGouvernance, onNavigateCarriere, onNavigateMentions, onNavigatePolitique }: PolitiqueCookiesPageProps) {
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
              Politique de cookies
            </h1>

            {/* Subtitle */}
            <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-semibold tracking-tight mb-12 md:mb-16 lg:mb-20 leading-relaxed">
              LLANORES
            </h2>

            {/* Divider */}
            <div className="h-[1px] bg-[#EDEDED] mb-12 md:mb-14 lg:mb-16" />

            {/* Body content */}
            <div className="space-y-8 md:space-y-10 lg:space-y-12 text-[#3A3A3A] text-sm md:text-base lg:text-lg font-medium leading-loose">
              <p>
                La présente politique de cookies explique comment LLANORES INVESTISSEMENTS SAS utilise des cookies et technologies similaires lors de la navigation sur le site.
              </p>

              {/* Section 1 */}
              <div>
                <h3 className="text-[#0A0A0A] text-xl font-bold mb-6">
                  1. Qu'est-ce qu'un cookie ?
                </h3>
                <p className="mb-4">
                  Un cookie est un petit fichier texte enregistré sur votre ordinateur, tablette ou smartphone lorsque vous consultez un site internet.
                </p>
                <p className="mb-3">
                  Les cookies permettent notamment :
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="relative before:content-['•'] before:absolute before:left-[-1.2rem]">
                    d'assurer le bon fonctionnement du site
                  </li>
                  <li className="relative before:content-['•'] before:absolute before:left-[-1.2rem]">
                    d'améliorer l'expérience de navigation
                  </li>
                  <li className="relative before:content-['•'] before:absolute before:left-[-1.2rem]">
                    de mesurer l'audience du site
                  </li>
                  <li className="relative before:content-['•'] before:absolute before:left-[-1.2rem]">
                    de mémoriser certaines préférences utilisateur
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h3 className="text-[#0A0A0A] text-xl font-bold mb-6">
                  2. Types de cookies utilisés
                </h3>
                <p className="mb-6">
                  Le site peut utiliser plusieurs catégories de cookies.
                </p>

                <h4 className="text-[#0A0A0A] text-lg font-semibold mb-3">
                  Cookies strictement nécessaires
                </h4>
                <p className="mb-3">
                  Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas être désactivés.
                </p>
                <p className="mb-3">
                  Ils permettent notamment :
                </p>
                <ul className="space-y-2 ml-6 mb-6">
                  <li className="relative before:content-['•'] before:absolute before:left-[-1.2rem]">
                    l'accès sécurisé au site
                  </li>
                  <li className="relative before:content-['•'] before:absolute before:left-[-1.2rem]">
                    la gestion technique du site
                  </li>
                  <li className="relative before:content-['•'] before:absolute before:left-[-1.2rem]">
                    la stabilité et la sécurité de la navigation
                  </li>
                </ul>

                <h4 className="text-[#0A0A0A] text-lg font-semibold mb-3">
                  Cookies de mesure d'audience
                </h4>
                <p className="mb-3">
                  Ces cookies permettent d'analyser l'utilisation du site afin d'en améliorer les performances.
                </p>
                <p className="mb-3">
                  Ils permettent par exemple de mesurer :
                </p>
                <ul className="space-y-2 ml-6 mb-6">
                  <li className="relative before:content-['•'] before:absolute before:left-[-1.2rem]">
                    le nombre de visiteurs
                  </li>
                  <li className="relative before:content-['•'] before:absolute before:left-[-1.2rem]">
                    les pages consultées
                  </li>
                  <li className="relative before:content-['•'] before:absolute before:left-[-1.2rem]">
                    le temps passé sur le site
                  </li>
                </ul>
                <p className="mb-6">
                  Les informations collectées sont utilisées uniquement à des fins statistiques.
                </p>

                <h4 className="text-[#0A0A0A] text-lg font-semibold mb-3">
                  Cookies fonctionnels
                </h4>
                <p>
                  Ces cookies permettent d'améliorer l'expérience utilisateur en mémorisant certaines préférences de navigation.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h3 className="text-[#0A0A0A] text-xl font-bold mb-6">
                  3. Gestion des cookies
                </h3>
                <p className="mb-4">
                  Lors de votre première visite sur le site, un bandeau d'information vous permet d'accepter ou de refuser l'utilisation de certains cookies.
                </p>
                <p className="mb-4">
                  Vous pouvez également configurer votre navigateur afin de bloquer ou supprimer les cookies.
                </p>
                <p className="mb-3">
                  La gestion des cookies peut être effectuée dans les paramètres de votre navigateur :
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="relative before:content-['•'] before:absolute before:left-[-1.2rem]">
                    Google Chrome
                  </li>
                  <li className="relative before:content-['•'] before:absolute before:left-[-1.2rem]">
                    Mozilla Firefox
                  </li>
                  <li className="relative before:content-['•'] before:absolute before:left-[-1.2rem]">
                    Apple Safari
                  </li>
                  <li className="relative before:content-['•'] before:absolute before:left-[-1.2rem]">
                    Microsoft Edge
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <div>
                <h3 className="text-[#0A0A0A] text-xl font-bold mb-6">
                  4. Durée de conservation
                </h3>
                <p>
                  Les cookies déposés sur votre terminal sont conservés pour une durée maximale de 13 mois, conformément à la réglementation en vigueur.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h3 className="text-[#0A0A0A] text-xl font-bold mb-6">
                  5. Données personnelles
                </h3>
                <p className="mb-4">
                  Certaines données collectées via les cookies peuvent être considérées comme des données personnelles.
                </p>
                <p className="mb-4">
                  Ces données sont traitées conformément au Règlement général sur la protection des données.
                </p>
                <p>
                  Pour en savoir plus, vous pouvez consulter la politique de confidentialité du site.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h3 className="text-[#0A0A0A] text-xl font-bold mb-6">
                  6. Contact
                </h3>
                <p className="mb-3">
                  Pour toute question relative à cette politique de cookies, vous pouvez contacter :
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-[#0A0A0A]">LLANORES INVESTISSEMENTS SAS</p>
                  <p>6 Rue Judes Turiaf</p>
                  <p>97221 Le Carbet</p>
                  <p>Martinique – France</p>
                  <p className="pt-2">Email : contact@llanores.com</p>
                  <p>Téléphone : 07 69 63 21 07</p>
                </div>
              </div>
            </div>

          </article>
        </main>

        <InstitutionalFooter 
          onNavigatePhilosophie={onNavigatePhilosophie}
          onNavigateGouvernance={onNavigateGouvernance}
          onNavigateCarriere={onNavigateCarriere}
          onNavigateMentions={onNavigateMentions}
          onNavigatePolitique={onNavigatePolitique}
        />
      </div>
    </div>
  );
}