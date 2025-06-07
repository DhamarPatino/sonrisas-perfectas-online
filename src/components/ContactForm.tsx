
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa al menos tu nombre, teléfono y el tratamiento de interés.",
        variant: "destructive"
      });
      return;
    }

    const message = `¡Hola! Me gustaría agendar una cita.

*Datos del paciente:*
• Nombre: ${formData.name}
• Teléfono: ${formData.phone}
• Email: ${formData.email || 'No proporcionado'}

*Detalles de la cita:*
• Tratamiento: ${formData.service}
• Fecha preferida: ${formData.date || 'Por definir'}
• Hora preferida: ${formData.time || 'Por definir'}

*Mensaje adicional:*
${formData.message || 'Ninguno'}

¡Quedo a la espera de su respuesta!`;

    const whatsappNumber = "5218123456789"; // Cambiar por el número real
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "¡Perfecto!",
      description: "Te hemos redirigido a WhatsApp para completar tu cita.",
    });
  };

  return (
    <section id="contact" className="py-20 dental-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Agenda tu <span className="text-accent">Cita</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            ¿Listo para transformar tu sonrisa? Agenda una cita con nosotros y 
            descubre cómo podemos ayudarte a lucir tu mejor sonrisa.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-0 animate-slide-up">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-foreground">
                Solicitar Cita
              </CardTitle>
              <p className="text-muted-foreground">
                Completa el formulario y te contactaremos vía WhatsApp
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo *</Label>
                    <Input
                      id="name"
                      placeholder="Tu nombre completo"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Tu número de teléfono"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Tratamiento de interés *</Label>
                  <Select onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un tratamiento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="limpieza">Limpieza Dental</SelectItem>
                      <SelectItem value="blanqueamiento">Blanqueamiento Dental</SelectItem>
                      <SelectItem value="empastes">Empastes Estéticos</SelectItem>
                      <SelectItem value="coronas">Coronas de Porcelana</SelectItem>
                      <SelectItem value="implantes">Implantes Dentales</SelectItem>
                      <SelectItem value="ortodoncia">Ortodoncia</SelectItem>
                      <SelectItem value="endodoncia">Endodoncia</SelectItem>
                      <SelectItem value="extraccion">Extracción Simple</SelectItem>
                      <SelectItem value="protesis">Prótesis Dentales</SelectItem>
                      <SelectItem value="consulta">Consulta General</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date">Fecha preferida</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Hora preferida</Label>
                    <Select onValueChange={(value) => handleInputChange('time', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una hora" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9:00">9:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="14:00">2:00 PM</SelectItem>
                        <SelectItem value="15:00">3:00 PM</SelectItem>
                        <SelectItem value="16:00">4:00 PM</SelectItem>
                        <SelectItem value="17:00">5:00 PM</SelectItem>
                        <SelectItem value="18:00">6:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje adicional</Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu caso o alguna pregunta específica..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-6 font-semibold rounded-full shadow-xl hover-lift"
                >
                  Continuar en WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
