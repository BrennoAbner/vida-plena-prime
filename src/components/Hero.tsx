import heroImage from '@/assets/hero-medical-clinic.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Ambiente acolhedor da Clínica Vida Plena"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 leading-tight">
            Cuidando de Você em{' '}
            <span className="bg-gradient-to-r from-accent to-accent-foreground bg-clip-text text-transparent">
              Cada Detalhe
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-lato leading-relaxed max-w-3xl mx-auto">
            Na Clínica Vida Plena, oferecemos atendimento médico humanizado e tecnologia de ponta 
            para cuidar da sua saúde com excelência e carinho.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="btn-hero text-lg px-10 py-5"
            >
              Agende sua Consulta
            </button>
            
            <button
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white border-2 border-white/30 hover:border-white hover:bg-white/10 font-poppins font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              Conheça nossos Serviços
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;