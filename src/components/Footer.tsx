
const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Clínica Dental</h3>
            <p className="text-white/80 leading-relaxed">
              Transformando sonrisas con tratamientos de calidad, 
              tecnología de vanguardia y el mejor equipo de especialistas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <span className="text-white">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <span className="text-white">📷</span>
              </a>
              <a href="https://wa.me/5218123456789" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors">
                <span className="text-white">💬</span>
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Nuestros Servicios</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#services" className="hover:text-white transition-colors">Limpieza Dental</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Blanqueamiento</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Implantes</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Ortodoncia</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Endodoncia</a></li>
            </ul>
          </div>

          {/* Contacto rápido */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contacto Rápido</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center space-x-3">
                <span>📍</span>
                <span>Av. Revolución 1234, CDMX</span>
              </div>
              <div className="flex items-center space-x-3">
                <span>📞</span>
                <a href="tel:+525512345678" className="hover:text-white transition-colors">
                  (55) 1234-5678
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span>💬</span>
                <a href="https://wa.me/5218123456789" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Clínica Dental. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
