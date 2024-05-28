import Logo from '../assets/logoidw.png';



export function Header() {
    return (
        <header className="bg-[#F6FDC3] shadow-md flex items-center justify-between p-4 px-12 h-24">
        {/* Logotipo a la izquierda */}
        <div className="flex-shrink-0">
          <a href="/"><img src={Logo} alt="Logotipo" className="w-28" /></a>
        </div>
  
        {/* Navegación a la derecha */}
        <nav className="hidden md:block">
          <ul className="flex items-center">
            <li className="mr-4">
              <a href="/institucional" className="text-gray-700 font-medium hover:text-[#FF8080]">Institucional</a>
            </li>
            <li>
              <a href="/contacto" className="text-gray-700 font-medium hover:text-[#FF8080]">Contacto</a>
            </li>
          </ul>
        </nav>
  
        {/* Menú hamburguesa para dispositivos móviles */}
        <button className="block md:hidden p-2">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>
    )
}