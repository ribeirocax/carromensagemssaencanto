import React, { useState, useEffect } from 'react';
import { Heart, Gift, Baby, Sparkles, MessageCircle, Phone, MapPin, Clock, Star, Users, Music, Camera, ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-12">
      <div className="aspect-[16/9] overflow-hidden rounded-2xl shadow-xl">
        <img
          src={images[currentIndex]}
          alt={`Carro de mensagem ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
          onError={(e) => {
            console.error('Error loading image:', e.currentTarget.src);
          }}
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const occasions = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Aniversário",
      description: "Torne o dia especial ainda mais memorável"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Romântica",
      description: "Declare seu amor de forma única e emocionante"
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Chá Revelação",
      description: "Compartilhe a grande novidade com estilo"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Surpresa",
      description: "Para qualquer momento que merece ser especial"
    }
  ];

  const differentials = [
    {
      icon: <Music className="w-6 h-6" />,
      title: "Emoção ao Vivo",
      description: "Mensagem cantada e falada na hora, criando um momento único e autêntico"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Totalmente Personalizada",
      description: "Cada mensagem é criada especialmente para sua ocasião e pessoa especial"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Praticidade Total",
      description: "Você agenda, nós cuidamos de tudo. Simples assim!"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Momentos Inesquecíveis",
      description: "Criamos memórias que durarão para sempre no coração"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Simplesmente perfeito! Minha filha ficou emocionada até as lágrimas. Foi o aniversário mais especial da vida dela!",
      rating: 5
    },
    {
      name: "João Santos",
      text: "Surpreendi minha esposa no nosso aniversário de casamento. Ela não parava de chorar de emoção. Valeu cada centavo!",
      rating: 5
    },
    {
      name: "Carla Oliveira",
      text: "O chá revelação ficou perfeito! Todos os convidados ficaram emocionados. Recomendo demais o serviço!",
      rating: 5
    }
  ];

  const whatsappNumber = "5571988683344";
  const whatsappMessage = "Olá! Gostaria de agendar um Carro de Mensagem ao Vivo. Podem me ajudar?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Images for the carousel
  const carouselImages = [
    "/smart.jpg",
    "/depoimento.jpg", 
    "/aniversário.png",
    "/CARRO_entanto_mensagem2 copy.png"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-pink-200" />
            <h1 className="text-2xl font-bold">Encanto Mensagem</h1>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full font-semibold transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar Agora
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Encanto Mensagem
            </h1>
            <h2 className="text-2xl md:text-3xl text-pink-600 mb-8 font-semibold">
              Surpreenda alguém especial com Carro de Mensagem AO VIVO! 💖
            </h2>
            
            {/* Hero Image Carousel */}
            <Carousel images={carouselImages} />

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-lg flex items-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Agendar Minha Surpresa
              </a>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">(71) 98868-3344</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is the service */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              O que é o Carro de Mensagem ao Vivo?
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                Imagine a emoção de ver alguém especial receber uma mensagem cantada e falada 
                especialmente para ela, diretamente na porta de casa ou no local que você escolher!
              </p>
              <p>
                Nosso <strong className="text-pink-600">Carro de Mensagem ao Vivo</strong> é um serviço único que leva 
                alegria, surpresa e emoção até a pessoa amada. Com um carro decorado, música, 
                microfone e muito carinho, criamos momentos que ficam para sempre na memória.
              </p>
              <p className="text-pink-600 font-semibold text-xl">
                É mais que uma mensagem, é uma experiência inesquecível! ✨
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Para quais momentos é perfeita?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {occasions.map((occasion, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 text-center"
              >
                <div className="text-pink-500 mb-4 flex justify-center">
                  {occasion.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {occasion.title}
                </h3>
                <p className="text-gray-600">
                  {occasion.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Por que escolher a Encanto Mensagem?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl"
              >
                <div className="text-pink-500 mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            O que nossos clientes dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-800">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
          
          {/* Google Reviews Link */}
          <div className="text-center mt-12">
            <a
              href="https://share.google/TmvgmtDU9VPA78raV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-full font-semibold shadow-lg transition-all transform hover:scale-105 border-2 border-gray-200"
            >
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              Veja mais avaliações no Google
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para criar um momento inesquecível?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato agora e vamos planejar a surpresa perfeita!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full text-2xl font-bold transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-3"
          >
            <MessageCircle className="w-8 h-8" />
            Falar no WhatsApp Agora
          </a>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Entre em Contato
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-green-500" />
              <div>
                <p className="font-semibold text-gray-800">WhatsApp</p>
                <p className="text-gray-600">(71) 98868-3344</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-pink-500" />
              <div>
                <p className="font-semibold text-gray-800">Atendimento</p>
                <p className="text-gray-600">Salvador e Região</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-pink-400" />
            <span className="text-xl font-bold">Encanto Mensagem</span>
          </div>
          <p className="text-gray-400 mb-2">
            Salvador, Bahia - Criando momentos inesquecíveis
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Encanto Mensagem. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 z-50 animate-pulse"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}

export default App;