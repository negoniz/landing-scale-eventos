"use client"

import { useState, useEffect } from "react"
import { Menu, X, CheckCircle, Target, Users, TrendingUp, BarChart, Award, MessageCircle, Phone, Mail, Instagram, Linkedin, Facebook, ChevronDown, ChevronLeft, ChevronRight, Music } from "lucide-react"

export default function ScaleEventosLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  // Flyers dos eventos - Imagens reais dos eventos musicais (SEM DUPLICATAS)
  const flyers = [
    {
      id: 1,
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/762248f0-58bc-466e-a8a4-4b8ac6639899.png",
      alt: "Marks Feed - Evento Musical",
      titulo: "Marks Feed"
    },
    {
      id: 2,
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/6f95fc81-4e51-426b-9763-37f88c2030e9.jpg",
      alt: "Funk on the Beach",
      titulo: "Funk on the Beach"
    },
    {
      id: 3,
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/c4aae648-e376-4b05-848a-8b2947487edd.jpg",
      alt: "Maior das Gauchadas",
      titulo: "Maior das Gauchadas"
    },
    {
      id: 4,
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/367b6a59-2575-4a31-a8ad-9af495b89074.jpg",
      alt: "Zé Felipe",
      titulo: "Zé Felipe"
    },
    {
      id: 5,
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/79383430-60d2-40cd-adc6-1cc39062ebdb.png",
      alt: "Petroski São Chico",
      titulo: "Petroski São Chico"
    },
    {
      id: 6,
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/9ac25aaf-83f0-400a-ad16-77875dd10de8.jpg",
      alt: "Mega Tri Baile",
      titulo: "Mega Tri Baile"
    },
    {
      id: 7,
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/c8d8b725-5a84-46af-b35f-4874db961d2c.jpg",
      alt: "Koyote Luxuria",
      titulo: "Koyote Luxuria"
    },
    {
      id: 8,
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/9ca7a975-fe0e-4480-89f8-4560e1a909ec.png",
      alt: "Manu Batidão - Evento Musical",
      titulo: "Manu Batidão"
    },
    {
      id: 9,
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/b8b0312b-5aef-42cd-ae62-5a6990b01c14.png",
      alt: "Oktobertchê - Evento Musical",
      titulo: "Oktobertchê"
    },
    {
      id: 10,
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/67548431-2449-46f4-8550-9ba2ab6e72f7.png",
      alt: "Evento Musical",
      titulo: "Edy Lemond"
    }
  ]

  // Logos dos clientes
  const clientLogos = [
    {
      id: 1,
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/d3e78fae-eb4d-4de8-a85e-5e10a741a602.jpg",
      alt: "Cliente 1"
    },
    {
      id: 2,
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/b882aa8d-b6c7-447f-99f0-73d18d9465fd.jpg",
      alt: "Cliente 2"
    },
    {
      id: 3,
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/48e480f0-4584-4448-816f-a43c4e22810f.jpg",
      alt: "Cliente 3"
    },
    {
      id: 4,
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/214d3d70-2095-4db9-b60b-d502b8d39bbc.jpg",
      alt: "Cliente 4"
    },
    {
      id: 5,
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/40d63930-d42e-4602-83f1-9ee8837a4341.jpg",
      alt: "Cliente 5"
    },
    {
      id: 6,
      image: "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/55089f16-0ca4-4007-a105-192763b4755b.jpg",
      alt: "Cliente 6"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % flyers.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + flyers.length) % flyers.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-red-600">
                Scale<span className="text-gray-900">Eventos</span>
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection("sobre")} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                Sobre Nós
              </button>
              <button onClick={() => scrollToSection("metodologia")} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                Metodologia
              </button>
              <button onClick={() => scrollToSection("portfolio")} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                Portfólio
              </button>
              <button onClick={() => scrollToSection("cases")} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                Cases de Sucesso
              </button>
              <button onClick={() => scrollToSection("contato")} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                Contato
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left">
                  Home
                </button>
                <button onClick={() => scrollToSection("sobre")} className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left">
                  Sobre Nós
                </button>
                <button onClick={() => scrollToSection("metodologia")} className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left">
                  Metodologia
                </button>
                <button onClick={() => scrollToSection("portfolio")} className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left">
                  Portfólio
                </button>
                <button onClick={() => scrollToSection("cases")} className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left">
                  Cases de Sucesso
                </button>
                <button onClick={() => scrollToSection("contato")} className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left">
                  Contato
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Maximize o Sucesso dos Seus Eventos com o{" "}
              <span className="text-red-600">Método Scale</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Seu evento não pode depender da sorte. Com tráfego estratégico, você alcança o público certo e vende muito mais.
            </p>
          </div>
        </div>
      </section>

      {/* Portfólio - Carrossel de Flyers */}
      <section id="portfolio" className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Music className="w-10 h-10 text-red-500" />
              <h3 className="text-3xl sm:text-4xl font-bold">
                Eventos que Potencializamos com Estratégias de Marketing
              </h3>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              São + de 1000 Eventos que escalaram resultados com nossas estratégias.
            </p>
          </div>

          {/* Carrossel Desktop */}
          <div className="hidden md:block max-w-6xl mx-auto">
            <div className="relative">
              {/* Imagem Principal */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={flyers[currentSlide].image}
                  alt={flyers[currentSlide].alt}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h4 className="text-3xl font-bold text-white mb-2">
                    {flyers[currentSlide].titulo}
                  </h4>
                  <p className="text-gray-200 text-lg">Marketing feito pela Scale Eventos</p>
                </div>
              </div>

              {/* Botões de Navegação */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicadores */}
              <div className="flex justify-center gap-3 mt-8">
                {flyers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? "w-12 h-3 bg-red-500"
                        : "w-3 h-3 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Miniaturas */}
            <div className="grid grid-cols-4 gap-4 mt-8">
              {flyers.slice(0, 4).map((flyer, index) => (
                <button
                  key={flyer.id}
                  onClick={() => goToSlide(index)}
                  className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                    index === currentSlide
                      ? "ring-4 ring-red-500 scale-105"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={flyer.image}
                    alt={flyer.alt}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <p className="absolute bottom-3 left-3 right-3 text-white font-bold text-sm">
                    {flyer.titulo}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Carrossel Mobile */}
          <div className="md:hidden">
            <div className="relative">
              {/* Imagem Principal */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={flyers[currentSlide].image}
                  alt={flyers[currentSlide].alt}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-4 right-4">
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {flyers[currentSlide].titulo}
                  </h4>
                  <p className="text-gray-200">Marketing feito pela Scale Eventos</p>
                </div>
              </div>

              {/* Botões de Navegação Mobile */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Indicadores Mobile */}
              <div className="flex justify-center gap-2 mt-6">
                {flyers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? "w-8 h-2 bg-red-500"
                        : "w-2 h-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button
              onClick={() => scrollToSection("contato")}
              className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-2xl inline-flex items-center gap-2"
            >
              Quero marketing pro meu evento
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Sobre a Scale Eventos
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Somos especialistas em impulsionar eventos através de estratégias avançadas de tráfego pago que transformam interesse em público real e resultados mensuráveis.
            </p>
            <p className="text-lg text-gray-600">
              Com anos de experiência no mercado e campanhas rodadas para os mais diversos formatos de eventos, desenvolvemos o Método Scale: uma abordagem estratégica que une segmentação inteligente, anúncios de alta performance e análise profunda de dados para atrair o público certo, no momento certo — garantindo máxima eficiência e potencial de lotação.
            </p>
          </div>
        </div>
      </section>

      {/* Clientes que Confiam na Gente */}
      <section className="py-12 sm:py-16 bg-white border-y overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Clientes que Confiam na Gente
            </h3>
            <p className="text-gray-600">
              Marcas que escolheram a Scale Eventos para seus projetos
            </p>
          </div>

          {/* Carrossel Infinito Rápido */}
          <div className="relative">
            <div className="flex animate-scroll-fast">
              {/* Primeira sequência */}
              {clientLogos.map((logo) => (
                <div
                  key={`first-${logo.id}`}
                  className="flex-shrink-0 w-48 h-32 mx-6 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={logo.image}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain p-4"
                  />
                </div>
              ))}
              {/* Segunda sequência (duplicada para loop infinito) */}
              {clientLogos.map((logo) => (
                <div
                  key={`second-${logo.id}`}
                  className="flex-shrink-0 w-48 h-32 mx-6 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={logo.image}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain p-4"
                  />
                </div>
              ))}
              {/* Terceira sequência (para garantir loop suave) */}
              {clientLogos.map((logo) => (
                <div
                  key={`third-${logo.id}`}
                  className="flex-shrink-0 w-48 h-32 mx-6 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={logo.image}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain p-4"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll-fast {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          .animate-scroll-fast {
            animation: scroll-fast 15s linear infinite;
          }

          .animate-scroll-fast:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* O Que É o Método Scale */}
      <section id="metodologia" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              O Que É o Método Scale
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nossa metodologia exclusiva baseada em 5 pilares fundamentais para o sucesso do seu evento
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Pilar 1 */}
            <div className="bg-red-50 p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Estratégia</h4>
              <p className="text-gray-600">
                Definição clara de objetivos, público-alvo e KPIs para garantir que seu evento atinja os resultados esperados
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="bg-red-50 p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Engajamento</h4>
              <p className="text-gray-600">
                Criação de experiências interativas que mantêm seu público envolvido do início ao fim
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="bg-red-50 p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Execução</h4>
              <p className="text-gray-600">
                Planejamento detalhado e gestão profissional para garantir que tudo saia perfeito
              </p>
            </div>

            {/* Pilar 4 */}
            <div className="bg-red-50 p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <BarChart className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Análise</h4>
              <p className="text-gray-600">
                Mensuração completa de resultados com relatórios detalhados e insights acionáveis
              </p>
            </div>

            {/* Pilar 5 */}
            <div className="bg-red-50 p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Crescimento</h4>
              <p className="text-gray-600">
                Aprendizado contínuo e otimização para que cada evento seja melhor que o anterior
              </p>
            </div>

            {/* Pilar 6 */}
            <div className="bg-red-50 p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Excelência</h4>
              <p className="text-gray-600">
                Compromisso com a qualidade em cada detalhe, superando expectativas sempre
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              O Que Nossos Clientes Dizem
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Depoimento 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  MR
                </div>
                <div className="ml-4">
                  <h5 className="font-bold text-gray-900">Maria Rodrigues</h5>
                  <p className="text-sm text-gray-500">CEO, Tech Solutions</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "O Método Scale transformou nossos eventos corporativos. Aumentamos o engajamento em 300% e os resultados foram além das expectativas!"
              </p>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  JS
                </div>
                <div className="ml-4">
                  <h5 className="font-bold text-gray-900">João Silva</h5>
                  <p className="text-sm text-gray-500">Diretor, Inovação Corp</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Profissionalismo impecável! A equipe da Scale cuidou de cada detalhe e nosso evento foi um sucesso absoluto."
              </p>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  AC
                </div>
                <div className="ml-4">
                  <h5 className="font-bold text-gray-900">Ana Costa</h5>
                  <p className="text-sm text-gray-500">Gerente, Marketing Plus</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Finalmente encontramos um parceiro que entende nossas necessidades. Os relatórios de análise são incríveis!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases de Sucesso */}
      <section id="cases" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Cases de Sucesso
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Resultados reais de eventos transformados pelo Método Scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Case 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                <Award className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Tech Summit 2023</h4>
                <p className="text-gray-600 mb-4">
                  Conferência de tecnologia com 800 participantes
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                    <span className="text-gray-700">95% de satisfação</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                    <span className="text-gray-700">300% ROI</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                    <span className="text-gray-700">150 leads qualificados</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                <TrendingUp className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Lançamento Produto X</h4>
                <p className="text-gray-600 mb-4">
                  Evento exclusivo para 200 stakeholders
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                    <span className="text-gray-700">100% de presença</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                    <span className="text-gray-700">500% aumento em vendas</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                    <span className="text-gray-700">Cobertura em 15 mídias</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                <Users className="w-20 h-20 text-white" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Convenção Anual 2024</h4>
                <p className="text-gray-600 mb-4">
                  Encontro nacional com 1.200 colaboradores
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                    <span className="text-gray-700">98% engajamento</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                    <span className="text-gray-700">Zero incidentes</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                    <span className="text-gray-700">40% redução de custos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-16 sm:py-24 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl sm:text-5xl font-bold mb-6">
              Pronto Para Transformar Seus Eventos?
            </h3>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 opacity-90">
              Agende uma consultoria gratuita e descubra como o Método Scale pode revolucionar seus eventos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/message/AZWFIBYQ7E54C1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-600 px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8">
            {/* Coluna 1 - Logo e Descrição */}
            <div>
              <h4 className="text-2xl font-bold mb-4">
                Scale<span className="text-red-600">Eventos</span>
              </h4>
              <p className="text-gray-400 mb-4">
                Transformando eventos em experiências memoráveis desde 2014
              </p>
            </div>

            {/* Coluna 2 - Contato */}
            <div>
              <h5 className="text-lg font-bold mb-4">Contato</h5>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span className="text-gray-400">(47) 99182-2350</span>
                </div>
              </div>
            </div>

            {/* Coluna 3 - Redes Sociais */}
            <div>
              <h5 className="text-lg font-bold mb-4">Redes Sociais</h5>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/scaleeventos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/scaleeventos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/scaleeventos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Scale Eventos. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
