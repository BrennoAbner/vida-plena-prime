const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container-custom">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6">
            <h3 className="text-3xl font-poppins font-bold text-primary">
              Clínica Vida Plena
            </h3>
            <p className="text-secondary-foreground/80 font-lato mt-2">
              Cuidando de você em cada detalhe
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-secondary-foreground/20 mb-6"></div>

          {/* Copyright */}
          <p className="text-secondary-foreground/60 font-lato">
            © {currentYear} Clínica Vida Plena. Todos os direitos reservados.
          </p>
          
          {/* Additional Info */}
          <div className="mt-4 text-sm text-secondary-foreground/50 font-lato">
            <p>CNPJ: 12.345.678/0001-90 | CRM: 123456-SP</p>
            <p className="mt-1">Responsável Técnico: Dr. Carlos Silva - CRM 123456-SP</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;