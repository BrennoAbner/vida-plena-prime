import { Stethoscope, FlaskConical, Heart, UserCheck } from 'lucide-react';
import laboratoryImage from '@/assets/laboratory-service.jpg';
import nutritionImage from '@/assets/nutrition-consultation.jpg';

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="w-12 h-12 text-primary" />,
      title: "Consultas Médicas",
      description: "Atendimento médico personalizado com profissionais experientes e dedicados ao seu bem-estar."
    },
    {
      icon: <FlaskConical className="w-12 h-12 text-primary" />,
      title: "Exames Laboratoriais",
      description: "Laboratório moderno com equipamentos de última geração para diagnósticos precisos e rápidos."
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Cardiologia",
      description: "Cuidados especializados para o coração com tecnologia avançada e acompanhamento contínuo."
    },
    {
      icon: <UserCheck className="w-12 h-12 text-primary" />,
      title: "Consulta Nutricional",
      description: "Orientação nutricional personalizada para uma vida mais saudável e equilibrada."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-secondary mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lato">
            Oferecemos uma ampla gama de serviços médicos com tecnologia de ponta 
            e atendimento humanizado para cuidar da sua saúde integral.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="medical-card text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-poppins font-semibold text-secondary mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-lato leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Service Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative group overflow-hidden rounded-2xl shadow-card">
            <img
              src={laboratoryImage}
              alt="Laboratório moderno da Clínica Vida Plena"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h4 className="text-2xl font-poppins font-semibold mb-2">
                  Laboratório de Análises
                </h4>
                <p className="text-white/90 font-lato">
                  Equipamentos modernos para diagnósticos precisos e resultados rápidos.
                </p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow-card">
            <img
              src={nutritionImage}
              alt="Consulta nutricional na Clínica Vida Plena"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h4 className="text-2xl font-poppins font-semibold mb-2">
                  Consulta Nutricional
                </h4>
                <p className="text-white/90 font-lato">
                  Orientação personalizada para uma alimentação saudável e equilibrada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;