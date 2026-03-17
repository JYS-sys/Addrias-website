import { InstitutionalFooter } from "@/app/components/InstitutionalFooter";
import logoImage from "@/assets/245b092ace25656ba9bb8b534f7c7d609d75f2ac.png";

interface CarrierePageProps {
  onBack: () => void;
  onNavigatePhilosophie?: () => void;
  onNavigateGouvernance?: () => void;
  onNavigateCookies?: () => void;
}

export function CarrierePage({ 
  onBack, 
  onNavigatePhilosophie, 
  onNavigateGouvernance,
  onNavigateCookies
}: CarrierePageProps) {
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
          <article className="w-full max-w-[720px]">
            
            {/* Title */}
            <h1 className="text-[#0A0A0A] text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-8 md:mb-10 lg:mb-12">
              CARRIÈRE
            </h1>

            {/* Divider */}
            <div className="h-[1px] bg-[#EDEDED] mb-12 md:mb-16 lg:mb-20" />

            {/* Job Title - Développeur Junior */}
            <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-semibold tracking-tight mb-8 md:mb-10">
              LLANORES recrute — Développeur Junior (IA & Automatisation)
            </h2>

            {/* Intro */}
            <div className="space-y-4 md:space-y-6 text-[#3A3A3A] text-sm md:text-base leading-relaxed mb-12 md:mb-16">
              <p>
                LLANORES recherche un développeur junior motivé pour participer à la construction de ses outils numériques et de ses systèmes d'automatisation.
              </p>
              <p>
                Nous recherchons une personne curieuse, rapide et capable d'apprendre vite dans un environnement où la technologie est utilisée avec pragmatisme.
              </p>
              <p>
                Le rôle consiste à développer, tester et améliorer des outils simples et efficaces permettant d'automatiser certaines tâches, structurer des flux d'information et accompagner le développement des projets numériques.
              </p>
            </div>

            {/* La mission */}
            <h3 className="text-[#0A0A0A] text-base md:text-lg font-semibold mb-4 md:mb-6">
              La mission
            </h3>
            <ul className="space-y-2 md:space-y-3 mb-12 md:mb-16 text-[#3A3A3A] text-sm md:text-base leading-relaxed pl-6">
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Développer et maintenir des outils simples et efficaces
              </li>
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Participer à la mise en place de systèmes d'automatisation
              </li>
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Utiliser l'intelligence artificielle pour améliorer certains processus
              </li>
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Contribuer à l'amélioration des outils numériques internes
              </li>
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Participer à la gestion technique de certains projets web
              </li>
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Accompagner le développement des réseaux sociaux et des outils de diffusion
              </li>
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Tester rapidement des idées et prototypes (vibe coding)
              </li>
            </ul>

            {/* Profil recherché */}
            <h3 className="text-[#0A0A0A] text-base md:text-lg font-semibold mb-4 md:mb-6">
              Profil recherché
            </h3>
            <ul className="space-y-2 md:space-y-3 mb-12 md:mb-16 text-[#3A3A3A] text-sm md:text-base leading-relaxed pl-6">
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Connaissance du développement (JavaScript, Python ou équivalent)
              </li>
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Intérêt réel pour l'intelligence artificielle et les outils d'automatisation
              </li>
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                À l'aise avec les outils no-code / low-code et les API
              </li>
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Curiosité pour le growth, les outils web et les réseaux sociaux
              </li>
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Capacité à apprendre vite et à tester rapidement de nouvelles solutions
              </li>
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Bon sens technique et autonomie
              </li>
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Motivation forte et goût pour l'exécution rapide
              </li>
            </ul>

            {/* Ce que nous recherchons */}
            <h3 className="text-[#0A0A0A] text-base md:text-lg font-semibold mb-4 md:mb-6">
              Ce que nous recherchons avant tout
            </h3>
            <div className="space-y-3 md:space-y-4 text-[#3A3A3A] text-sm md:text-base leading-relaxed mb-12 md:mb-16 lg:mb-20">
              <p>
                Une personne curieuse, rapide et fiable, capable de tester, construire et améliorer en continu.
              </p>
              <p>
                Chez LLANORES, la technologie doit rester simple et utile.
              </p>
              <p>
                Nous privilégions l'efficacité et la capacité à exécuter.
              </p>
            </div>

            {/* Divider between jobs */}
            <div className="h-[1px] bg-[#EDEDED] mb-12 md:mb-16 lg:mb-20" />

            {/* Job Title */}
            <h2 className="text-[#0A0A0A] text-xl md:text-2xl font-semibold tracking-tight mb-8 md:mb-10">
              LLANORES recrute — Responsable Newsletter & Contenus (jysandco)
            </h2>

            {/* Intro */}
            <div className="space-y-4 md:space-y-6 text-[#3A3A3A] text-sm md:text-base leading-relaxed mb-12 md:mb-16">
              <p>
                LLANORES recherche une personne de confiance pour piloter et développer sa newsletter jysandco.
              </p>
              <p>
                jysandco est un espace éditorial exigeant, centré sur le bon sens entrepreneurial, la culture, la musique et le sport.
              </p>
            </div>

            {/* La mission */}
            <h3 className="text-[#0A0A0A] text-base md:text-lg font-semibold mb-4 md:mb-6">
              La mission
            </h3>
            <ul className="space-y-2 md:space-y-3 mb-12 md:mb-16 text-[#3A3A3A] text-sm md:text-base leading-relaxed pl-6">
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Assurer la gestion éditoriale de la newsletter jysandco
              </li>
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Structurer, rédiger ou éditer des contenus simples, clairs et lisibles
              </li>
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Maintenir une régularité et une qualité constantes
              </li>
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Déployer les contenus sur les réseaux sociaux de manière cohérente et élégante
              </li>
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Respecter et incarner la ligne éditoriale : clarté, bon sens
              </li>
            </ul>

            {/* Profil recherché */}
            <h3 className="text-[#0A0A0A] text-base md:text-lg font-semibold mb-4 md:mb-6">
              Profil recherché
            </h3>
            <ul className="space-y-2 md:space-y-3 text-[#3A3A3A] text-sm md:text-base leading-relaxed pl-6">
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Excellente qualité d'écriture, en français
              </li>
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                À l'aise avec les réseaux sociaux (LinkedIn, X, Substack)
              </li>
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Sens du rythme éditorial et de la hiérarchisation de l'information
              </li>
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Capacité à simplifier
              </li>
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Culture générale solide, curiosité intellectuelle
              </li>
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Discrétion, fiabilité et sens des responsabilités
              </li>
              <li className="relative before:content-['-'] before:absolute before:left-[-1.5rem]">
                Autonomie réelle
              </li>
            </ul>

          </article>
        </main>

        <InstitutionalFooter 
          onNavigatePhilosophie={onNavigatePhilosophie}
          onNavigateGouvernance={onNavigateGouvernance}
          onNavigateCookies={onNavigateCookies}
        />
      </div>
    </div>
  );
}