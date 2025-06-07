
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      title: "Limpieza Dental",
      description: "Limpieza profesional completa con ultrasonido y pulido",
      price: "$2,500",
      duration: "45 min",
      popular: false
    },
    {
      title: "Blanqueamiento Dental",
      description: "Blanqueamiento láser profesional para una sonrisa radiante",
      price: "$8,500",
      duration: "90 min",
      popular: true
    },
    {
      title: "Empastes Estéticos",
      description: "Restauraciones con resina del color de tus dientes",
      price: "$1,800",
      duration: "60 min",
      popular: false
    },
    {
      title: "Coronas de Porcelana",
      description: "Coronas estéticas de alta calidad y durabilidad",
      price: "$15,000",
      duration: "2 sesiones",
      popular: false
    },
    {
      title: "Implantes Dentales",
      description: "Implantes de titanio con corona incluida",
      price: "$25,000",
      duration: "3 meses",
      popular: true
    },
    {
      title: "Ortodoncia",
      description: "Brackets metálicos o estéticos para alinear tu sonrisa",
      price: "$35,000",
      duration: "18-24 meses",
      popular: false
    },
    {
      title: "Endodoncia",
      description: "Tratamiento de conductos para salvar tu diente",
      price: "$6,500",
      duration: "2 sesiones",
      popular: false
    },
    {
      title: "Extracción Simple",
      description: "Extracción dental con anestesia local",
      price: "$1,200",
      duration: "30 min",
      popular: false
    },
    {
      title: "Prótesis Dentales",
      description: "Prótesis completas o parciales hechas a medida",
      price: "$18,000",
      duration: "4 sesiones",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros <span className="text-primary">Tratamientos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios dentales con la más alta calidad 
            y tecnología de vanguardia para cuidar tu salud bucal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`hover-lift transition-all duration-300 ${
                service.popular ? 'ring-2 ring-accent shadow-lg' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="relative">
                {service.popular && (
                  <Badge className="absolute -top-3 -right-3 bg-accent text-white">
                    Popular
                  </Badge>
                )}
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {service.duration}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            * Los precios pueden variar según el caso específico. Consulta disponible sin costo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
