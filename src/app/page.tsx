"use client"

import { useState } from "react"
import { Menu, X, CheckCircle, Target, Users, TrendingUp, BarChart, Award, MessageCircle, Phone, Mail, Instagram, Linkedin, Facebook, ChevronDown, Calendar, MapPin, Music } from "lucide-react"

export default function ScaleEventosLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState({
    question1: "",
    question2: "",
    question3: ""
  })

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const handleQuizSubmit = () => {
    const message = `Olá! Acabei de responder o quiz no site da Scale Eventos:\n\n1. Tipo de evento: ${quizAnswers.question1}\n2. Público esperado: ${quizAnswers.question2}\n3. Principal desafio: ${quizAnswers.question3}\n\nGostaria de receber meus resultados e saber mais sobre o Método Scale!`
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  // Eventos passados com flyers
  const eventosPassados = [
    {
      nome: "Festival de Verão 2024",
      data: "15 de Janeiro, 2024",
      local: "Parque Ibirapuera, SP",
      tipo: "Festival",
      publico: "5.000 pessoas",
      cor: "from-orange-400 to-pink-600"
    },
    {
      nome: "Tech Innovation Summit",
      data: "22 de Março, 2024",
      local: "Centro de Convenções, SP",
      tipo: "Conferência",
      publico: "800 pessoas",
      cor: "from-blue-500 to-purple-600"
    },
    {
      nome: "Noite Corporativa Premium",
      data: "10 de Abril, 2024",
      local: "Hotel Unique, SP",
      tipo: "Evento Corporativo",
      publico: "300 pessoas",
      cor: "from-gray-700 to-gray-900"
    },
    {
      nome: "Expo Negócios 2024",
      data: "5 de Maio, 2024",
      local: "Expo Center Norte, SP",
      tipo: "Feira",
      publico: "2.500 pessoas",
      cor: "from-green-500 to-teal-600"
    },
    {
      nome: "Gala Beneficente",
      data: "18 de Junho, 2024",
      local: "Sala São Paulo, SP",
      tipo: "Gala",
      publico: "400 pessoas",
      cor: "from-purple-600 to-pink-600"
    },
    {
      nome: "Workshop Liderança 360°",
      data: "30 de Julho, 2024",
      local: "Espaço Colaborativo, SP",
      tipo: "Workshop",
      publico: "150 pessoas",
      cor: "from-cyan-500 to-blue-600"
    }
  ]

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
              Transforme seus eventos em experiências memoráveis e resultados mensuráveis com nossa metodologia comprovada
            </p>
            <button
              onClick={() => scrollToSection("contato")}
              className="bg-red-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/50 inline-flex items-center gap-2"
            >
              Solicite uma Consultoria Gratuita
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Prova Social - Logos de Clientes */}
      <section className="py-12 sm:py-16 bg-white border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-8 text-sm sm:text-base font-medium">
            EMPRESAS QUE CONFIAM NO MÉTODO SCALE
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 font-bold text-sm">Cliente {i}</span>
              </div>
            ))}
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
              Somos especialistas em transformar eventos corporativos em experiências inesquecíveis que geram resultados reais para o seu negócio.
            </p>
            <p className="text-lg text-gray-600">
              Com mais de 10 anos de experiência e centenas de eventos realizados, desenvolvemos o Método Scale: uma abordagem estratégica que combina planejamento, execução impecável e mensuração de resultados.
            </p>
          </div>
        </div>
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

      {/* Mini Quiz */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Descubra Como o Método Scale Pode Ajudar Você
              </h3>
              <p className="text-lg text-gray-600">
                Responda 3 perguntas rápidas e receba uma análise personalizada no WhatsApp
              </p>
            </div>

            <div className="bg-red-50 p-6 sm:p-10 rounded-2xl space-y-6">
              {/* Pergunta 1 */}
              <div>
                <label className="block text-lg font-bold text-gray-900 mb-3">
                  1. Que tipo de evento você está planejando?
                </label>
                <select
                  value={quizAnswers.question1}
                  onChange={(e) => setQuizAnswers({ ...quizAnswers, question1: e.target.value })}
                  className="w-full p-4 rounded-lg border-2 border-gray-300 focus:border-red-600 focus:outline-none text-gray-900"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="Conferência/Congresso">Conferência/Congresso</option>
                  <option value="Lançamento de Produto">Lançamento de Produto</option>
                  <option value="Treinamento Corporativo">Treinamento Corporativo</option>
                  <option value="Feira/Exposição">Feira/Exposição</option>
                  <option value="Evento de Networking">Evento de Networking</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              {/* Pergunta 2 */}
              <div>
                <label className="block text-lg font-bold text-gray-900 mb-3">
                  2. Qual o público esperado?
                </label>
                <select
                  value={quizAnswers.question2}
                  onChange={(e) => setQuizAnswers({ ...quizAnswers, question2: e.target.value })}
                  className="w-full p-4 rounded-lg border-2 border-gray-300 focus:border-red-600 focus:outline-none text-gray-900"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="Até 50 pessoas">Até 50 pessoas</option>
                  <option value="50-100 pessoas">50-100 pessoas</option>
                  <option value="100-300 pessoas">100-300 pessoas</option>
                  <option value="300-500 pessoas">300-500 pessoas</option>
                  <option value="Mais de 500 pessoas">Mais de 500 pessoas</option>
                </select>
              </div>

              {/* Pergunta 3 */}
              <div>
                <label className="block text-lg font-bold text-gray-900 mb-3">
                  3. Qual seu principal desafio?
                </label>
                <select
                  value={quizAnswers.question3}
                  onChange={(e) => setQuizAnswers({ ...quizAnswers, question3: e.target.value })}
                  className="w-full p-4 rounded-lg border-2 border-gray-300 focus:border-red-600 focus:outline-none text-gray-900"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="Engajamento do público">Engajamento do público</option>
                  <option value="Gestão de fornecedores">Gestão de fornecedores</option>
                  <option value="Mensuração de resultados">Mensuração de resultados</option>
                  <option value="Orçamento limitado">Orçamento limitado</option>
                  <option value="Logística complexa">Logística complexa</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <button
                onClick={handleQuizSubmit}
                disabled={!quizAnswers.question1 || !quizAnswers.question2 || !quizAnswers.question3}
                className="w-full bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar e Receber Resultados no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfólio - Eventos Passados */}
      <section id="portfolio" className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Confira Alguns Eventos Que Já Trabalhamos
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Mais de 500 eventos realizados com excelência. Veja alguns dos nossos trabalhos mais recentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {eventosPassados.map((evento, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:scale-105"
              >
                {/* Flyer simulado com gradiente */}
                <div className={`h-96 bg-gradient-to-br ${evento.cor} p-8 flex flex-col justify-between relative overflow-hidden`}>
                  {/* Padrão de fundo decorativo */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
                  </div>

                  {/* Conteúdo do flyer */}
                  <div className="relative z-10">
                    <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-4">
                      {evento.tipo}
                    </div>
                    <h4 className="text-3xl font-bold mb-2 leading-tight">
                      {evento.nome}
                    </h4>
                  </div>

                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center gap-3 text-white/90">
                      <Calendar className="w-5 h-5" />
                      <span className="font-medium">{evento.data}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/90">
                      <MapPin className="w-5 h-5" />
                      <span className="font-medium">{evento.local}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/90">
                      <Users className="w-5 h-5" />
                      <span className="font-medium">{evento.publico}</span>
                    </div>
                  </div>

                  {/* Badge "Realizado" */}
                  <div className="absolute top-4 right-4 bg-white text-gray-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg z-10">
                    ✓ REALIZADO
                  </div>
                </div>

                {/* Overlay com informação adicional no hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm font-medium mb-2">Evento produzido pela Scale Eventos</p>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-red-500" />
                      <span className="text-xs">Método Scale aplicado com sucesso</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA para ver mais */}
          <div className="text-center mt-12">
            <button
              onClick={() => scrollToSection("contato")}
              className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-2xl inline-flex items-center gap-2"
            >
              Quero Criar Meu Evento
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Cases de Sucesso */}
      <section id="cases" className="py-16 sm:py-24 bg-gray-50">
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

      {/* Garantia de Satisfação */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-red-50 to-red-100 p-8 sm:p-12 rounded-3xl text-center">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Garantia de Satisfação 100%
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Estamos tão confiantes no Método Scale que oferecemos garantia total de satisfação. Se você não ficar completamente satisfeito com os resultados, devolvemos seu investimento.
            </p>
            <p className="text-base text-gray-600 italic">
              Sem letras miúdas. Sem complicações. Apenas resultados garantidos.
            </p>
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
                href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consultoria gratuita sobre o Método Scale"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-600 px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
              <a
                href="mailto:contato@scaleeventos.com.br"
                className="bg-transparent border-2 border-white text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg font-bold hover:bg-white hover:text-red-600 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Enviar E-mail
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
                  <span className="text-gray-400">(11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-red-600" />
                  <span className="text-gray-400">contato@scaleeventos.com.br</span>
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
