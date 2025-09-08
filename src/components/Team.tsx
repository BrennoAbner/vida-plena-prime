import doctorCarlos from '@/assets/doctor-carlos.jpg';
import nutritionistAna from '@/assets/nutritionist-ana.jpg';
import doctorMaria from '@/assets/doctor-maria.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Carlos Silva",
      role: "Clínico Geral",
      image: doctorCarlos,
      description: "Especialista em medicina interna com mais de 15 anos de experiência em atendimento humanizado."
    },
    {
      name: "Dra. Ana Costa",
      role: "Nutricionista",
      image: nutritionistAna,
      description: "Especialista em nutrição clínica e esportiva, dedicada a promover hábitos alimentares saudáveis."
    },
    {
      name: "Dra. Maria Santos",
      role: "Cardiologista",
      image: doctorMaria,
      description: "Cardiologista experiente com foco em prevenção e tratamento de doenças cardiovasculares."
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-secondary mb-6">
            Conheça Nossa Equipe de Especialistas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-lato">
            Profissionais altamente qualificados e dedicados ao seu bem-estar, 
            oferecendo atendimento personalizado e de excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="medical-card text-center group">
              {/* Photo */}
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={`Foto profissional de ${member.name}`}
                    className="w-32 h-32 rounded-full object-cover shadow-lg group-hover:shadow-xl transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"></div>
                </div>
              </div>

              {/* Name */}
              <h4 className="text-2xl font-poppins font-semibold text-secondary mb-2">
                {member.name}
              </h4>

              {/* Role */}
              <p className="text-primary font-lato font-semibold text-lg mb-4">
                {member.role}
              </p>

              {/* Description */}
              <p className="text-muted-foreground font-lato leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="medical-card max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
            <h3 className="text-2xl font-poppins font-semibold text-secondary mb-4">
              Agende sua Consulta
            </h3>
            <p className="text-muted-foreground font-lato mb-6">
              Nossa equipe está pronta para cuidar da sua saúde com dedicação e profissionalismo.
            </p>
            <button
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero"
            >
              Marcar Consulta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;