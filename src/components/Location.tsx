
import { Card, CardContent } from "@/components/ui/card";

const Location = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Encuéntranos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visítanos en nuestra clínica dental moderna, equipada con la última tecnología 
            para brindarte el mejor servicio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info de contacto */}
          <div className="space-y-8 animate-slide-up">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Dirección</h4>
                      <p className="text-muted-foreground">
                        Av. Revolución 1234, Col. Centro<br />
                        Ciudad de México, CDMX 06000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Teléfono</h4>
                      <p className="text-muted-foreground">
                        <a href="tel:+525512345678" className="hover:text-primary transition-colors">
                          (55) 1234-5678
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent text-xl">💬</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                      <p className="text-muted-foreground">
                        <a 
                          href="https://wa.me/5218123456789" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors"
                        >
                          (81) 2345-6789
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">
                        <a href="mailto:contacto@clinicadental.com" className="hover:text-primary transition-colors">
                          contacto@clinicadental.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Horarios de Atención</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Lunes - Viernes</span>
                    <span className="text-muted-foreground">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Sábado</span>
                    <span className="text-muted-foreground">9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Domingo</span>
                    <span className="text-muted-foreground">Cerrado</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-accent">Emergencias:</strong> Disponibles 24/7 para urgencias dentales
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mapa */}
          <div className="animate-slide-up">
            <Card className="overflow-hidden hover-lift">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8217142842944!2d-99.17026308501425!3d19.43251908686574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92d2fe1073f%3A0xd6c7c5e4e5b6e8f7!2sAv.%20Revoluci%C3%B3n%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
