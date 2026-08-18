import { createFileRoute } from "@tanstack/react-router";
import { MatrixRain } from "@/components/MatrixRain";
import { useState, useEffect } from "react";
import smartHomeAsset from "@/assets/smart-home-ui.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALFRED VISION | Seu Assistente de IA Personalizado" },
      { name: "description", content: "Crie um assistente de IA que interage com você como nos filmes. Visão computacional, automação de tela e controle por voz." },
      { property: "og:title", content: "ALFRED VISION | Seu Assistente de IA Personalizado" },
      { property: "og:description", content: "Crie um assistente de IA que interage com você como nos filmes. Visão computacional, automação de tela e controle por voz." },
      { property: "og:url", content: "https://alfred-vision1.lovable.app" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://alfred-vision1.lovable.app" }
    ]
  }),
  component: Index,
});

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVideoStarted, setIsVideoStarted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCtaClick = () => {
    window.open("https://go.hotmart.com/I107105867N?dp=1", "_blank", "noopener,noreferrer");
  };

  const features = [
    { 
      title: "Visão Computacional", 
      desc: "Identifica objetos, pessoas e comportamentos em tempo real para ações proativas e seguras.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
        </svg>
      )
    },
    { 
      title: "Interpretação de Tela", 
      desc: "O Alfred entende o que você está fazendo no PC e te auxilia em tarefas repetitivas ou complexas.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    },
    { 
      title: "Comandos de Voz", 
      desc: "Dialogue com sua IA de forma fluida. Sem \"Ok Google\", apenas conversas como entre humanos.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1"/><line x1="12" y1="18" x2="12" y2="22"/>
        </svg>
      )
    },
    { 
      title: "Memória Cognitiva", 
      desc: "Ele lembra das suas preferências, projetos e conversas passadas para um auxílio verdadeiramente único.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1 0-4.88 2.5 2.5 0 0 1 0-4.88A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 0-4.88 2.5 2.5 0 0 0 0-4.88A2.5 2.5 0 0 0 14.5 2Z"/>
        </svg>
      )
    },
    { 
      title: "Automação No-Code", 
      desc: "Configure fluxos de trabalho poderosos arrastando blocos. Do Windows à sua Cafeteira.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      )
    },
    { 
      title: "Privacidade Total", 
      desc: "Seus dados são seus. Configure sua IA para rodar localmente ou com criptografia de ponta.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    }
  ];

  const faqs = [
    { q: "Preciso saber programar?", a: "Absolutamente não! O curso é focado em ferramentas no-code e configurações simples para que qualquer pessoa consiga criar seu assistente." },
    { q: "O acesso é vitalício?", a: "Sim, uma vez adquirido, o curso e as atualizações são seus para sempre." },
    { q: "Funciona com dispositivos inteligentes?", a: "Sim! O Alfred pode ser integrado com sistemas de automação residencial, permitindo controlar sua casa por comandos de voz ou gestos captados pela visão computacional." },
    { q: "Como funciona o suporte?", a: "Temos um grupo exclusivo de alunos e suporte direto para tirar todas as suas dúvidas durante a criação do seu Alfred." }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#00ff66] selection:text-black scroll-smooth max-w-[900px] mx-auto border-x border-[#00ff66]/10 shadow-[0_0_100px_rgba(0,0,0,0.8)]">
      <MatrixRain />
      
      {/* Header */}
      <nav className="sticky top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#00ff66]/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-black text-[#00ff66] tracking-tighter">ALFRED VISION</a>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-gray-400">
            <a href="#recursos" className="hover:text-[#00ff66] transition-colors">Recursos</a>
            <a href="#oferta" className="hover:text-[#00ff66] transition-colors">Oferta</a>
            <a href="#faq" className="hover:text-[#00ff66] transition-colors">FAQ</a>
          </div>
          <button onClick={handleCtaClick} className="text-[10px] font-black border border-[#00ff66] text-[#00ff66] px-4 py-1.5 rounded-full bg-gradient-to-b from-transparent to-black hover:from-[#00ff66] hover:to-[#006629] hover:text-black transition-all cursor-pointer uppercase">
            MATRICULE-SE
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-20 container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-white leading-[0.95] tracking-[-0.04em] uppercase">
          IA que <span className="bg-gradient-to-b from-[#00ff66] to-[#006629] bg-clip-text text-transparent">interage</span> como nos <span className="bg-gradient-to-b from-[#00ff66] to-[#006629] bg-clip-text text-transparent">filmes</span>
        </h1>
        <p className="text-base md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed tracking-widest opacity-70" style={{ fontWeight: 100, fontFamily: "'Inter', sans-serif" }}>
          Capaz de <span className="text-[#00ff66]" style={{ fontWeight: 300 }}>enxergar o mundo</span> em tempo real, tela do computador, conversar naturalmente, escrever textos e automações inteligentes. <span className="text-[#00ff66]" style={{ fontWeight: 300 }}>Tudo por voz</span>
          <br /><br />
          <span style={{ fontWeight: 100 }}>Não é necessário ter conhecimento em programação</span>
        </p>
        
        <div className="mb-10 aspect-[9/16] max-w-[340px] mx-auto bg-black/40 border border-[#00ff66]/20 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl relative group p-1.5 cursor-pointer">
          {!isVideoStarted ? (
            <div 
              className="absolute inset-0 z-20 bg-black flex flex-col items-center justify-center cursor-pointer"
              onClick={() => setIsVideoStarted(true)}
            >
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00ff66]/20 via-transparent to-transparent"></div>
              <div className="w-20 h-20 border-2 border-[#00ff66] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,255,102,0.5)] animate-pulse mb-4">
                <svg className="w-10 h-10 text-[#00ff66] fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-[#00ff66] font-black uppercase tracking-[0.3em] text-[10px] animate-pulse">Vision Interface Activating...</span>
              <div className="absolute bottom-4 w-full px-8 opacity-50">
                <div className="h-0.5 bg-[#00ff66]/20 w-full">
                  <div className="h-full bg-[#00ff66] w-1/3 animate-[loading_2s_infinite]"></div>
                </div>
              </div>
            </div>
          ) : (
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/0DshbSYIeuI?autoplay=1&rel=0&modestbranding=1" 
              title="Alfred Vision" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="absolute inset-0 w-full h-full z-10"
            ></iframe>
          )}
        </div>

        <style>{`
          @keyframes loading {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(300%); }
          }
        `}</style>

        <button 
          onClick={handleCtaClick}
          className="inline-block bg-gradient-to-b from-[#00ff66] to-[#006629] text-black font-black text-base md:text-lg px-8 py-3 rounded-full shadow-[0_0_15px_rgba(0,255,102,0.2)] hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,102,0.4)] transition-all uppercase cursor-pointer"
        >
          CRIAR MEU ALFRED AGORA
        </button>
      </section>

      {/* Casa Inteligente Section */}
      <section className="py-24 relative z-10 bg-gradient-to-r from-black via-[#00ff66]/5 to-black border-y border-[#00ff66]/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <div className="w-full mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter uppercase leading-[0.95] text-center md:text-left">
                O Cérebro da sua <span className="bg-gradient-to-b from-[#00ff66] to-[#006629] bg-clip-text text-transparent uppercase">Smart Home</span>
              </h2>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-2xl text-center md:text-left">
                Esqueça comandos robóticos. Controle luzes, segurança e eletrodomésticos através de diálogos naturais ou visão computacional.
              </p>
            </div>

            <div className="bg-black/40 border border-[#00ff66]/30 backdrop-blur-md rounded-2xl p-0 overflow-hidden relative group w-full mb-10">
              <img 
                src="/assets/sala.png" 
                alt="Automação Residencial ALFRED VISION" 
                className="w-full h-auto block transition-all duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
                <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] text-[#00ff66]">Dashboard Alfred Vision Home</p>
              </div>
            </div>
            
            <div className="bg-black/40 border border-[#00ff66]/30 backdrop-blur-md rounded-2xl p-0 overflow-hidden relative group w-full mb-10">
              <img 
                src="/assets/geral.png" 
                alt="Smart Home Interface ALFRED VISION" 
                className="w-full h-auto block transition-all duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
                <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] text-[#00ff66]">Interface Smart Home</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300 text-xs w-full mt-8">
              <div className="flex items-center gap-3 bg-black/40 border border-[#00ff66]/20 backdrop-blur-md rounded-2xl p-4 transition-all duration-300 hover:border-[#00ff66]/50">
                <span className="text-[#00ff66] font-bold text-lg">✓</span>
                <span>Integração total com dispositivos IoT</span>
              </div>
              <div className="flex items-center gap-3 bg-black/40 border border-[#00ff66]/20 backdrop-blur-md rounded-2xl p-4 transition-all duration-300 hover:border-[#00ff66]/50">
                <span className="text-[#00ff66] font-bold text-lg">✓</span>
                <span>Automação por reconhecimento de gestos</span>
              </div>
              <div className="flex items-center gap-3 bg-black/40 border border-[#00ff66]/20 backdrop-blur-md rounded-2xl p-4 transition-all duration-300 hover:border-[#00ff66]/50">
                <span className="text-[#00ff66] font-bold text-lg">✓</span>
                <span>Rotinas inteligentes personalizadas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section id="recursos" className="py-24 bg-black/40 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center tracking-tighter uppercase">Recursos <span className="bg-gradient-to-b from-[#00ff66] to-[#006629] bg-clip-text text-transparent">Elite</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-black/40 border border-[#00ff66]/20 backdrop-blur-md p-6 rounded-2xl transition-all duration-300 hover:border-[#00ff66]/50 hover:shadow-[0_0_20px_rgba(0,255,102,0.1)] group">
                <div className="text-[#00ff66] mb-4 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-base font-bold mb-3 bg-gradient-to-b from-[#00ff66] to-[#006629] bg-clip-text text-transparent uppercase tracking-tighter">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 max-w-3xl mx-auto text-center border-t border-[#00ff66]/10 pt-16">
            <h3 className="text-2xl font-black mb-6 tracking-widest uppercase text-white">Mas isso já não existe?</h3>
            <div className="space-y-6 text-xl text-gray-400 leading-relaxed font-thin tracking-tight opacity-90" style={{ fontWeight: 100 }}>
              <p>A maioria das IAs disponíveis são plataformas prontas e caras. Você utiliza apenas os recursos prontos que elas oferecem.</p>
              <p className="text-white font-bold uppercase tracking-tight">Com o ALFRED é diferente.</p>
              <p>Você vai ter um assistente de IA surpreendente, utilizando uma das tecnologias mais avançadas da atualidade, capaz de interagir com você em tempo real enquanto trabalha, navega, joga ou estuda — como nos filmes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="py-12 container mx-auto px-6 text-center relative z-10">
        <div className="max-w-xl mx-auto bg-gradient-to-b from-[#111] to-[#006629]/20 border border-[#00ff66] p-6 md:p-8 rounded-[2.5rem] shadow-[0_0_60px_rgba(0,255,102,0.1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#00ff66] text-black font-black px-6 py-1.5 text-[8px] -rotate-45 translate-x-10 translate-y-6 uppercase">Vagas Limitadas</div>
          <span className="text-[#00ff66] font-black tracking-[0.4em] uppercase mb-3 block text-[10px]">Acesso Vitalício + Bônus</span>
          <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tighter uppercase">Oferta <span className="bg-gradient-to-b from-[#00ff66] to-[#006629] bg-clip-text text-transparent">Elite</span></h2>
          <p className="text-gray-400 text-sm mb-6">Inclui 6 videoaulas práticas, suporte exclusivo e garantia total.</p>
          
          <div className="mb-6">
            <p className="text-gray-500 line-through text-base mb-1 font-bold italic">De R$ 399,00</p>
            <p className="text-lg text-white mb-1 uppercase tracking-widest">Por apenas</p>
            <p className="text-4xl md:text-6xl font-black bg-gradient-to-b from-[#00ff66] to-[#006629] bg-clip-text text-transparent leading-none mb-3">12x R$ 20,37</p>
            <p className="text-base text-gray-400 mt-2 font-bold uppercase tracking-widest">ou R$ 197,00 à vista</p>
          </div>

          <button 
            onClick={handleCtaClick}
            className="w-auto inline-block bg-gradient-to-b from-[#00ff66] to-[#006629] text-black font-black text-[12px] px-8 py-3 rounded-2xl shadow-[0_0_15px_rgba(0,255,102,0.2)] hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,102,0.4)] transition-all uppercase cursor-pointer"
          >
            GARANTIR MEU ALFRED
          </button>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-bold text-gray-500 uppercase tracking-widest">
            <span>✓ 6 Aulas Práticas</span>
            <span>✓ Garantia Incondicional</span>
            <span>✓ Suporte na Comunidade</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 container mx-auto px-6 relative z-10 border-t border-[#00ff66]/10">
        <h2 className="text-3xl font-black mb-12 text-center tracking-tighter uppercase">Dúvidas <span className="bg-gradient-to-b from-[#00ff66] to-[#006629] bg-clip-text text-transparent">Comuns</span></h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#00ff66]/20 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-4 text-left flex justify-between items-center hover:bg-[#00ff66]/5 transition-colors"
              >
                <span className="font-bold text-base">{faq.q}</span>
                <span className={`text-[#00ff66] text-2xl transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {openFaq === i && (
                <div className="p-4 pt-0 text-gray-400 text-sm border-t border-[#00ff66]/10 bg-black/20">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-[#00ff66]/10 relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h2 className="text-3xl font-black bg-gradient-to-b from-[#00ff66] to-[#006629] bg-clip-text text-transparent mb-4 tracking-tighter uppercase">ALFRED VISION</h2>
            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">© 2026 ALFRED VISION. Pioneirismo em IA Pessoal.</p>
          </div>
          <div className="flex gap-8 text-gray-500 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
          <p className="text-gray-600 text-sm">© 2026 ALFRED VISION. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
