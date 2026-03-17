export function InstitutionalFooter({ onNavigatePhilosophie, onNavigateGouvernance, onNavigateCarriere, onNavigateMentions, onNavigatePolitique, onNavigateCookies }: { onNavigatePhilosophie?: () => void; onNavigateGouvernance?: () => void; onNavigateCarriere?: () => void; onNavigateMentions?: () => void; onNavigatePolitique?: () => void; onNavigateCookies?: () => void }) {
  return (
    <footer className="bg-white border-t border-[#EDEDED] pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10 lg:pb-12 mt-16 md:mt-24 lg:mt-32" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Main footer content - responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-14 lg:mb-16">
          {/* Column 1 - Contact */}
          <div>
            <h3 className="text-[#0A0A0A] text-xs font-semibold tracking-wider uppercase mb-4 md:mb-6">
              Contact
            </h3>
            <div className="space-y-2 md:space-y-3">
              <a href="mailto:contact@llanores.com" className="text-[#3A3A3A] text-sm tracking-wide hover:text-[#0A0A0A] transition-colors block">
                contact@llanores.com
              </a>
              <p className="text-[#3A3A3A] text-xs tracking-wide">
                Échanges confidentiels
              </p>
            </div>
          </div>

          {/* Column 2 - Juridique */}
          <div>
            <h3 className="text-[#0A0A0A] text-xs font-semibold tracking-wider uppercase mb-4 md:mb-6">
              Juridique
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <button onClick={onNavigateMentions} className="text-[#3A3A3A] text-sm tracking-wide hover:text-[#0A0A0A] transition-colors text-left min-h-[44px] md:min-h-0 flex items-center">
                  Mentions légales
                </button>
              </li>
              <li>
                <button onClick={onNavigatePolitique} className="text-[#3A3A3A] text-sm tracking-wide hover:text-[#0A0A0A] transition-colors text-left min-h-[44px] md:min-h-0 flex items-center">
                  Confidentialité
                </button>
              </li>
              <li>
                <button onClick={onNavigateCookies} className="text-[#3A3A3A] text-sm tracking-wide hover:text-[#0A0A0A] transition-colors text-left min-h-[44px] md:min-h-0 flex items-center">
                  Cookies
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Structure */}
          <div>
            <h3 className="text-[#0A0A0A] text-xs font-semibold tracking-wider uppercase mb-4 md:mb-6">
              Structure
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <button onClick={onNavigatePhilosophie} className="text-[#3A3A3A] text-sm tracking-wide hover:text-[#0A0A0A] transition-colors text-left min-h-[44px] md:min-h-0 flex items-center">
                  Philosophie
                </button>
              </li>
              <li>
                <button onClick={onNavigateGouvernance} className="text-[#3A3A3A] text-sm tracking-wide hover:text-[#0A0A0A] transition-colors text-left min-h-[44px] md:min-h-0 flex items-center">
                  Gouvernance
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4 - Ressources */}
          <div>
            <h3 className="text-[#0A0A0A] text-xs font-semibold tracking-wider uppercase mb-4 md:mb-6">
              Ressources
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <button onClick={onNavigateCarriere} className="text-[#3A3A3A] text-sm tracking-wide hover:text-[#0A0A0A] transition-colors text-left min-h-[44px] md:min-h-0 flex items-center">
                  Carrière
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5 - Réseau */}
          <div>
            <h3 className="text-[#0A0A0A] text-xs font-semibold tracking-wider uppercase mb-4 md:mb-6">
              Réseau
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="https://www.linkedin.com/in/yves-salleron-5270ba199/" target="_blank" rel="noopener noreferrer" className="text-[#3A3A3A] text-sm tracking-wide hover:text-[#0A0A0A] transition-colors inline-flex items-center gap-1 min-h-[44px] md:min-h-0">
                  LinkedIn
                  <span className="text-xs">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-[#EDEDED] pt-6 md:pt-8">
          <div className="text-center">
            <p className="text-[#3A3A3A] text-xs tracking-wider">
              © 2026 LLANORES — Studio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}