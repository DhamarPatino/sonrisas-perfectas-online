
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center dental-hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/20"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/15 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Tu <span className="text-accent">Sonrisa Perfecta</span> 
            <br />
            Nos Espera
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Odontología general de calidad con atención personalizada. 
            <br />
            Agenda tu cita para fines de semana con horarios especiales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover-lift"
              onClick={scrollToContact}
            >
              Agendar Cita
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/20 border-white/30 text-white hover:bg-white/30 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Tratamientos
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-up">
          <div className="bg-white/25 backdrop-blur-md rounded-xl p-6 hover-lift border border-white/20 shadow-lg">
            <div className="text-3xl font-bold text-white mb-2">+500</div>
            <div className="text-white/90 font-medium">Pacientes Satisfechos</div>
          </div>
          <div className="bg-white/25 backdrop-blur-md rounded-xl p-6 hover-lift border border-white/20 shadow-lg">
            <div className="text-3xl font-bold text-white mb-2">Sáb/Dom</div>
            <div className="text-white/90 font-medium">Citas Disponibles</div>
          </div>
          <div className="bg-white/25 backdrop-blur-md rounded-xl p-6 hover-lift border border-white/20 shadow-lg">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-white/90 font-medium">Garantía de Calidad</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
