import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Eye,
  MousePointerClick,
  MessageCircle,
  Wallet,
  Sparkles,
  TrendingUp,
  TrendingDown,
  MapPin,
  Users,
  Search,
  Calendar,
  Gift,
  Target,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import studioLogo from "@/assets/studio21-logo.png";
import googleAdsLogo from "@/assets/google-ads-logo.png";
import googleAdsDashboard from "@/assets/google-ads-dashboard.png";
// Adicione aqui os imports dos outros dois prints se necessário:
// import googleAdsPrint2 from "@/assets/google-ads-print2.png";
// import googleAdsPrint3 from "@/assets/google-ads-print3.png";

import { Section } from "@/components/report/Section";
import { MetricCard } from "@/components/report/MetricCard";

export const Route = createFileRoute("/")({
  component: ReportPage,
  head: () => ({
    meta: [
      { title: "Relatório Google Ads — Studio 21 · 1º Mês" },
      {
        name: "description",
        content:
          "Relatório de performance do primeiro mês de Google Ads para o Studio 21 Cabeleireiros. Resultados, alcance, público e estratégia de crescimento.",
      },
      { property: "og:title", content: "Relatório Google Ads — Studio 21" },
      {
        property: "og:description",
        content: "Resultados do 1º mês de gestão de Google Ads para o Studio 21.",
      },
    ],
  }),
});

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

// Array de imagens do carrossel rotativo
const carouselImages = [
  googleAdsDashboard, 
  googleAdsDashboard, // Substitua pelo import do print 2
  googleAdsDashboard, // Substitua pelo import do print 3
];

function ReportPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Efeito para alternar as imagens automaticamente a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ---------- TOP BAR ---------- */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <img src={studioLogo} alt="Studio 21" className="h-7 w-auto md:h-8" />
          </div>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-white/60">
            <span className="hidden sm:inline">Relatório · 1º Mês</span>
            <span className="h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
            <span>Mai · 2026</span>
          </div>
        </div>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />
        
        {/* Transformado em Grid 12 colunas a partir do md: para separar em Lado Esquerdo e Lado Direito */}
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pb-32 md:pt-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* COLUNA DA ESQUERDA (Conteúdo, Metadados e Logo) */}
          <div className="md:col-span-7 z-10">
            <motion.div {...fadeUp} className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink-soft">
              <span className="flex h-1.5 w-1.5 rounded-full bg-ga-green animate-pulse" />
              Relatório de Performance
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="mt-6 font-display text-[44px] leading-[0.95] tracking-tight text-ink md:text-[80px]"
            >
              Google Ads
              <br />
              <span className="text-ink-soft">Studio 21</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft"
            >
              Este relatório apresenta, de forma simples e direta, os resultados do{" "}
              <span className="text-ink">primeiro mês</span> de campanhas no Google Ads para o
              Studio 21. O objetivo é mostrar com clareza o que foi feito, o que foi alcançado e qual
              é a estratégia de crescimento para os próximos meses.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.18 }}
              className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {[
                { k: "Período", v: "30 dias" },
                { k: "Plataforma", v: "Google Ads" },
                { k: "Região", v: "Itanhaém · Mongaguá" },
                { k: "Ciclo", v: "1º mês" },
              ].map((it) => (
                <div key={it.k} className="rounded-xl border border-hairline bg-surface/60 p-4">
                  <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-soft">
                    {it.k}
                  </div>
                  <div className="mt-1 text-sm font-medium text-ink">{it.v}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.25 }}
              className="mt-14 flex items-center gap-4 text-xs text-ink-soft"
            >
              <span>Powered by</span>
              {/* Logo do Google Ads aumentada com h-9 e md:h-11 para dar mais presença mantendo o minimalismo */}
              <img src={googleAdsLogo} alt="Google Ads" className="h-9 w-auto opacity-90 md:h-11" />
            </motion.div>
          </div>

          {/* COLUNA DA DIREITA (Carrossel Rotativo Premium) */}
          <motion.div 
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="md:col-span-5 flex justify-center items-center w-full"
          >
            {/* Moldura Premium Assimétrica com Glassmorphism sutil */}
            <div className="relative w-full max-w-[440px] md:max-w-none aspect-[4/3] md:aspect-square rounded-2xl border border-hairline bg-surface/40 p-2 shadow-2xl backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/[0.02] to-transparent pointer-events-none z-10" />
              
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={carouselImages[currentImageIndex]}
                  alt={`Anúncio Studio 21 - Slide ${currentImageIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.98, x: 8 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 1.01, x: -8 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl p-1"
                />
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ---------- VISÃO GERAL ---------- */}
      <Section
        eyebrow="01 · Visão Geral"
        title={<>Resumo do mês <span className="text-ink-soft">em números</span></>}
        intro="Em apenas 30 dias, o Studio 21 passou a aparecer no Google para milhares de pessoas que estavam procurando serviços de beleza na região. Os anúncios geraram interesse real, mensagens no WhatsApp e agendamentos concretos."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            value="10,5K"
            label="Impressões"
            description="O nome do Studio 21 apareceu no Google mais de 10 mil vezes."
            icon={<Eye className="h-5 w-5" />}
            accent="blue"
            index={0}
          />
          <MetricCard
            value="530"
            label="Cliques"
            description="Pessoas que demonstraram interesse nos anúncios do salão."
            icon={<MousePointerClick className="h-5 w-5" />}
            accent="red"
            index={1}
          />
          <MetricCard
            value="63"
            label="Mensagens"
            description="Contatos no WhatsApp gerados diretamente pelos anúncios."
            icon={<MessageCircle className="h-5 w-5" />}
            accent="yellow"
            index={2}
          />
          <MetricCard
            value="R$1,2K"
            label="Investimento"
            description="Valor total investido em mídia paga no período."
            icon={<Wallet className="h-5 w-5" />}
            accent="green"
            index={3}
          />
        </div>

        <motion.div
          {...fadeUp}
          className="mt-10 rounded-2xl border border-hairline bg-surface p-6 md:p-8"
        >
          <p className="text-base leading-relaxed text-ink-soft md:text-lg">
            Esses números mostram que existe{" "}
            <span className="text-ink">demanda real e constante</span> por serviços de beleza em
            Itanhaém e Mongaguá. O Google Ads está funcionando como canal de atração de novos
            clientes para o Studio 21.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mt-6 overflow-hidden rounded-2xl border border-hairline bg-surface"
        >
          <div className="flex items-center justify-between border-b border-hairline px-5 py-3">
            <div className="flex items-center gap-2 text-xs text-ink-soft">
              <img src={googleAdsLogo} alt="" className="h-4 w-auto" />
              <span>Painel oficial · Google Ads</span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.18em] text-ink-soft">
              22 abr — 20 mai · 2026
            </span>
          </div>
          <img
            src={googleAdsDashboard}
            alt="Painel do Google Ads mostrando impressões, cliques, conversões e custo do período"
            className="w-full"
          />
        </motion.div>
      </Section>

      {/* ---------- INVESTIMENTO ---------- */}
      <Section
        eyebrow="02 · Investimento"
        title={<>Como o investimento <span className="text-ink-soft">foi feito</span></>}
        intro={
          <>
            O investimento total no período foi de{" "}
            <span className="text-ink">R$ 1.230,00</span>. Esse valor foi composto por duas partes:
            o que foi pago diretamente ao Google e um crédito promocional oferecido pela plataforma.
          </>
        }
        className="bg-surface-elevated"
      >
        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div {...fadeUp} className="lg:col-span-3 rounded-2xl border border-hairline bg-surface p-6 md:p-8">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">Total investido</div>
                <div className="num font-display text-5xl text-ink md:text-6xl">R$ 1.230</div>
              </div>
              <div className="text-right">
                <div className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">Período</div>
                <div className="text-sm text-ink">30 dias</div>
              </div>
            </div>

            <div className="mt-10 space-y-7">
              {[
                {
                  label: "Pago direto ao Google",
                  value: "R$ 615",
                  pct: 50,
                  color: "bg-ga-blue",
                  sub: "Valor pago em dinheiro pelo salão.",
                },
                {
                  label: "Crédito promocional Google",
                  value: "R$ 700",
                  pct: 57,
                  color: "bg-ga-green",
                  sub: "Bônus oferecido pela plataforma.",
                },
              ].map((b, i) => (
                <div key={b.label}>
                  <div className="flex items-baseline justify-between">
                    <div className="text-sm font-medium text-ink">{b.label}</div>
                    <div className="num text-sm font-semibold text-ink">{b.value}</div>
                  </div>
                  <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${b.pct}%` }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 1, delay: 0.1 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                      className={`h-full rounded-full ${b.color}`}
                    />
                  </div>
                  <div className="mt-2 text-xs text-ink-soft">{b.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-2 space-y-4">
            <motion.div {...fadeUp} className="rounded-2xl border border-hairline bg-surface p-6">
              <p className="text-sm leading-relaxed text-ink-soft">
                Quase <span className="text-ink">metade do investimento</span> foi um benefício
                oferecido pela própria plataforma. Isso significa que o Studio 21 conseguiu rodar
                campanhas com um alcance muito maior do que o valor pago em dinheiro — é como se o
                Google tivesse dado um desconto significativo nos primeiros 30 dias.
              </p>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="rounded-2xl border border-ink/15 bg-ink p-6 text-background"
            >
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] opacity-70">
                <Sparkles className="h-3.5 w-3.5" />
                Insight
              </div>
              <p className="mt-3 text-sm leading-relaxed">
                Quanto mais estável for o investimento ao longo do tempo, mais{" "}
                <span className="font-medium">eficiente</span> se torna cada real gasto nos
                anúncios.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ---------- ALCANCE ---------- */}
      <Section
        eyebrow="03 · Alcance"
        title={
          <>
            O Studio 21 apareceu <span className="num text-ga-blue">10.500</span> vezes no Google
          </>
        }
        intro="Impressões são o número de vezes que o anúncio do salão foi exibido para pessoas no Google. 10.500 impressões significa que o nome do Studio 21 apareceu para potenciais clientes mais de dez mil vezes durante o mês."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: <Target className="h-5 w-5" />,
              title: "Presença no momento certo",
              text: "Os anúncios apareceram exatamente quando pessoas estavam pesquisando por serviços de beleza, cabeleireiro ou salão na região. Muito mais poderoso do que um panfleto ou post — porque a pessoa já estava procurando.",
            },
            {
              icon: <TrendingUp className="h-5 w-5" />,
              title: "Visibilidade constante",
              text: "Diferente de uma publicação no Instagram que some em poucas horas, os anúncios ficam ativos e aparecem sempre que alguém faz uma pesquisa relevante. Presença contínua e recorrente.",
            },
            {
              icon: <MapPin className="h-5 w-5" />,
              title: "Alcance regional qualificado",
              text: "Todas as impressões foram para pessoas na região de atuação do salão. Sem desperdício de verba com quem mora longe demais para se tornar cliente.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="rounded-2xl border border-hairline bg-surface p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ga-blue/10 text-ga-blue">
                {c.icon}
              </div>
              <h3 className="mt-5 text-base font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ---------- CLIQUES & RESULTADOS ---------- */}
      <Section
        eyebrow="04 · Cliques e Resultados"
        title={<><span className="num text-ga-red">530</span> pessoas demonstraram interesse real</>}
        intro="Cliques representam pessoas que viram o anúncio e decidiram entrar em contato com o Studio 21. São leads qualificados — pessoas com intenção real de agendar um serviço."
        className="bg-surface-elevated"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div {...fadeUp} className="rounded-2xl border border-hairline bg-surface p-6 md:p-8">
            <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-ink-soft">
              Caminho percorrido
            </h3>
            <div className="mt-8 space-y-5">
              {[
                { label: "Viram o anúncio", value: 10500, max: 10500, color: "bg-ga-blue" },
                { label: "Clicaram para saber mais", value: 530, max: 10500, color: "bg-ga-red" },
                { label: "Mensagem no WhatsApp", value: 63, max: 10500, color: "bg-ga-yellow" },
              ].map((step, i) => {
                const pct = Math.max((step.value / step.max) * 100, 1.2);
                return (
                  <div key={step.label}>
                    <div className="flex items-baseline justify-between">
                      <div className="text-sm text-ink">{step.label}</div>
                      <div className="num text-sm font-semibold text-ink">
                        {step.value.toLocaleString("pt-BR")}
                      </div>
                    </div>
                    <div className="mt-2 h-10 w-full overflow-hidden rounded-lg bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className={`h-full rounded-lg ${step.color}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-8 text-sm leading-relaxed text-ink-soft">
              A cada etapa o número diminui — isso é completamente{" "}
              <span className="text-ink">normal e esperado</span> em qualquer campanha de marketing.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <div className="rounded-2xl border border-hairline bg-surface p-6 md:p-8">
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                Custo por clique
              </div>
              <div className="mt-3 flex items-baseline gap-3">
                <div className="num font-display text-6xl text-ink md:text-7xl">R$ 2,29</div>
                <span className="rounded-full bg-ga-green/10 px-2.5 py-1 text-xs font-medium text-ga-green">
                  Competitivo
                </span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                Em média, cada pessoa que clicou no anúncio custou apenas R$ 2,29 — um valor muito
                competitivo para a região e o segmento de beleza, especialmente considerando que
                essas pessoas têm intenção de compra.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { v: "10,5K", l: "Vistas" },
                { v: "530", l: "Cliques" },
                { v: "63", l: "WhatsApp" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-hairline bg-surface p-4 text-center">
                  <div className="num font-display text-2xl text-ink">{s.v}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-ink-soft">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ---------- PÚBLICO ---------- */}
      <Section
        eyebrow="05 · Público"
        title={<>Quem está vendo <span className="text-ink-soft">os anúncios</span></>}
        intro="Os dados do Google Ads mostram com precisão quem está interagindo com os anúncios. O perfil identificado é exatamente o público ideal do Studio 21 — mulheres adultas, com poder de decisão e localização próxima ao salão."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              icon: <Users className="h-5 w-5" />,
              title: "Gênero predominante",
              big: "Mulheres",
              text: "A grande maioria das pessoas que clicaram nos anúncios são mulheres — confirmando que a comunicação está atingindo o público correto, quem toma a decisão de agendar serviços de beleza.",
            },
            {
              icon: <Calendar className="h-5 w-5" />,
              title: "Faixa etária principal",
              big: "35 – 54 anos",
              text: "Mulheres com rotina estabelecida, poder de compra e fidelidade a serviços de qualidade — exatamente o perfil de cliente que o salão deseja atrair e reter.",
            },
            {
              icon: <MapPin className="h-5 w-5" />,
              title: "Região de origem",
              big: "Itanhaém · Mongaguá",
              text: "Todos os leads vieram das cidades onde o Studio 21 está localizado. Não há desperdício de verba com pessoas de outras regiões.",
            },
            {
              icon: <Search className="h-5 w-5" />,
              title: "Origem dos leads",
              big: "100% Pesquisa Google",
              text: "Todos os contatos vieram de pessoas ativamente buscando serviços de beleza no momento em que viram o anúncio — o tipo de lead mais qualificado que existe.",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.06 }}
              className="rounded-2xl border border-hairline bg-surface p-6 md:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-ink">
                  {c.icon}
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                  {c.title}
                </div>
              </div>
              <div className="num font-display mt-6 text-4xl text-ink md:text-5xl">{c.big}</div>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ---------- FUNIL ---------- */}
      <Section
        eyebrow="06 · Funil de Conversão"
        title={<>Do anúncio <span className="text-ink-soft">ao agendamento</span></>}
        intro="O fluxo abaixo mostra as etapas principais que cada pessoa percorre. A cada etapa o número diminui — isso é completamente natural e acontece em qualquer negócio."
        className="bg-surface-elevated"
      >
        <motion.div
          {...fadeUp}
          className="rounded-3xl border border-hairline bg-surface p-6 md:p-10"
        >
          <div className="grid grid-cols-1 items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
            {[
              { icon: "👁️", label: "Anúncio visto", value: "10.500", color: "ga-blue" },
              { icon: "🖱️", label: "Clique", value: "530", color: "ga-red" },
              { icon: "💬", label: "WhatsApp", value: "63", color: "ga-yellow" },
              { icon: "💇", label: "Agendamento", value: "~12 – 13", color: "ga-green" },
            ].flatMap((step, i, arr) => {
              const node = (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex flex-col items-center rounded-2xl border border-hairline bg-surface-elevated p-5 text-center"
                >
                  <div className="text-3xl">{step.icon}</div>
                  <div className="num font-display mt-3 text-2xl text-ink">{step.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-ink-soft">
                    {step.label}
                  </div>
                </motion.div>
              );
              if (i < arr.length - 1) {
                return [
                  node,
                  <div
                    key={`arr-${i}`}
                    className="flex items-center justify-center text-ink-soft"
                  >
                    <ArrowRight className="hidden h-5 w-5 md:block" />
                    <div className="h-6 w-px bg-hairline md:hidden" />
                  </div>,
                ];
              }
              return [node];
            })}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-hairline bg-surface-elevated p-6">
              <h3 className="text-sm font-semibold text-ink">O que os dados do salão mostram</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Segundo informações do próprio Studio 21, a cada 10 pessoas que chamam no WhatsApp,
                aproximadamente 2 agendam um serviço.
              </p>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-ink/15 bg-ink p-6 text-background">
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] opacity-70">Estimativa</div>
                <div className="num font-display mt-2 text-2xl md:text-3xl">
                  63 msg → ~12–13 clientes
                </div>
              </div>
              <Sparkles className="h-7 w-7 opacity-80" />
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ---------- ESTRATÉGIA ---------- */}
      <Section
        eyebrow="07 · Estratégia"
        title={
          <>
            Por que a estabilidade <span className="text-ink-soft">é fundamental</span>
          </>
        }
        intro="O Google Ads funciona como um sistema de aprendizado contínuo. Quanto mais tempo ele tem para analisar resultados e ajustar a entrega dos anúncios, melhor e mais barato se torna o desempenho. Quando o investimento é interrompido ou varia muito, esse aprendizado é perdido."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-2xl border border-destructive/20 bg-surface p-6 md:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <XCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">Cenário</div>
                <h3 className="text-base font-semibold text-ink">Sem estabilidade</h3>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                "Campanhas pausam frequentemente",
                "O Google reaprende do zero a cada reinício",
                "Custo por resultado aumenta",
                "Volume de leads fica imprevisível",
                "Otimização não avança de forma consistente",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-ink-soft">
                  <TrendingDown className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.08 }}
            className="relative overflow-hidden rounded-2xl border border-success/30 bg-surface p-6 md:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10 text-success">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">Cenário</div>
                <h3 className="text-base font-semibold text-ink">Com estabilidade</h3>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                "Campanhas rodam de forma contínua",
                "O algoritmo aprende e melhora sozinho",
                "Custo por resultado diminui com o tempo",
                "Volume de leads cresce e se torna previsível",
                "Resultados mais consistentes mês a mês",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-ink-soft">
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          className="mt-8 flex items-start gap-4 rounded-2xl border border-warning/30 bg-warning/10 p-5 md:p-6"
        >
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-warning" />
          <p className="text-sm leading-relaxed text-ink">
            Durante o primeiro mês, o saldo foi recarregado de forma fracionada, gerando pausas nas
            campanhas. Isso explica parte das oscilações nos resultados. Para o próximo ciclo, a
            recomendação é <span className="font-semibold">manter saldo positivo</span> com recargas
            semanais ou mensais.
          </p>
        </motion.div>
      </Section>

      {/* ---------- ORÇAMENTO ---------- */}
      <Section
        eyebrow="08 · Orçamento"
        title={<>Evolução <span className="text-ink-soft">do investimento</span></>}
        className="bg-surface-elevated"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <motion.div {...fadeUp} className="rounded-2xl border border-hairline bg-surface p-6 md:p-8">
            <div className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">Orçamento inicial</div>
            <div className="num font-display mt-3 text-5xl text-ink">R$ 40<span className="text-2xl text-ink-soft">/dia</span></div>
            <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "53%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-full rounded-full bg-ink-soft/60"
              />
            </div>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="rounded-2xl border border-hairline bg-surface p-6 md:p-8"
          >
            <div className="flex items-center justify-between">
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">Orçamento atual</div>
              <ArrowUpRight className="h-4 w-4 text-success" />
            </div>
            <div className="num font-display mt-3 text-5xl text-ink">R$ 75<span className="text-2xl text-ink-soft">/dia</span></div>
            <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full rounded-full bg-ga-green"
              />
            </div>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="rounded-2xl border border-ink/15 bg-ink p-6 md:p-8 text-background"
          >
            <div className="text-[11px] uppercase tracking-[0.18em] opacity-70">Projeção mensal</div>
            <div className="num font-display mt-3 text-5xl">R$ 2.250</div>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              Mantendo R$ 75/dia, o investimento mensal projetado é de R$ 2.250 — base ideal para
              escalar resultados.
            </p>
          </motion.div>
        </div>
        <motion.p {...fadeUp} className="mt-8 max-w-2xl text-base text-ink-soft md:text-lg">
          <span className="text-ink">Recomendação:</span> manter o orçamento estável e evitar
          interrupções nas campanhas.
        </motion.p>
      </Section>

      {/* ---------- OPORTUNIDADE / CRÉDITO GOOGLE ---------- */}
      <Section
        eyebrow="09 · Oportunidade"
        title={
          <>
            <span className="num text-ga-green">R$ 2.500</span> em bônus do Google
          </>
        }
        intro="O Google Ads está com uma promoção ativa: ao investir R$ 3.500 em até 32 dias, o Studio 21 recebe R$ 2.500 em créditos extras para anúncios — sem custo adicional."
      >
        <motion.div
          {...fadeUp}
          className="rounded-3xl border border-hairline bg-surface p-6 md:p-10"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">Meta de investimento</div>
              <div className="num font-display text-5xl text-ink md:text-6xl">R$ 3.500</div>
              <div className="text-sm text-ink-soft">Prazo: 32 dias restantes</div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-ga-green/20 bg-ga-green/10 px-6 py-4">
              <Gift className="h-6 w-6 text-ga-green" />
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-ga-green">Recompensa</div>
                <div className="num font-display text-2xl text-ink">R$ 2.500</div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-baseline justify-between">
              <div className="text-sm font-medium text-ink">Progresso do investimento</div>
              <div className="num text-sm font-semibold text-ink">R$ 1.230 de R$ 3.500</div>
            </div>
            <div className="mt-3 h-4 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "35%" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full bg-ga-green"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-ink-soft">Já investido: <span className="font-semibold text-ink">R$ 1.230</span></span>
              <span className="text-ink-soft">Faltam: <span className="font-semibold text-ga-red">R$ 2.270</span></span>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                label: "Investimento realizado",
                value: "R$ 1.230",
                desc: "Valor já aplicado nos primeiros 30 dias",
              },
              {
                label: "Investimento faltante",
                value: "R$ 2.270",
                desc: "Necessário para liberar o crédito",
              },
              {
                label: "Crédito a receber",
                value: "R$ 2.500",
                desc: "Bônus do Google ao atingir a meta",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-hairline bg-surface-elevated p-5"
              >
                <div className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">{item.label}</div>
                <div className="num font-display mt-2 text-3xl text-ink">{item.value}</div>
                <div className="mt-1 text-xs text-ink-soft">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <motion.div {...fadeUp} className="rounded-2xl border border-hairline bg-surface p-6 md:p-8">
            <h3 className="text-base font-semibold text-ink">Como atingir a meta</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Com o orçamento atual de <span className="text-ink">R$ 75/dia</span>, faltam aproximadamente{" "}
              <span className="text-ink">R$ 2.270</span> para completar os R$ 3.500 necessários. Mantendo o
              investimento diário, a meta será atingida dentro do prazo de 32 dias — e os{" "}
              <span className="text-ink">R$ 2.500 em créditos</span> serão liberados automaticamente pelo
              Google.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="rounded-2xl border border-hairline bg-surface p-6 md:p-8"
          >
            <h3 className="text-base font-semibold text-ink">O que fazer com os créditos</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Os R$ 2.500 podem ser usados para ampliar o alcance, testar novos públicos, aumentar
              a frequência dos anúncios ou reduzir o custo real de aquisição de clientes —{" "}
              <span className="text-ink">sem gastar um real a mais</span> do bolso do salão.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* ---------- CONCLUSÃO ---------- */}
      <Section
        eyebrow="10 · Conclusão"
        title={<>A base foi construída. <span className="text-ink-soft">Hora de escalar.</span></>}
        intro="O primeiro mês de Google Ads para o Studio 21 demonstra com clareza que existe demanda real e constante na região, que os anúncios estão gerando tráfego qualificado e que há conversão efetiva em agendamentos."
        className="bg-surface-elevated"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              n: "01",
              title: "Manter orçamento estável",
              text: "Manter R$ 75/dia ou acima, evitando reduções bruscas. A estabilidade é o que permite ao Google otimizar continuamente e reduzir o custo por resultado ao longo do tempo.",
            },
            {
              n: "02",
              title: "Evitar pausas e zerar saldo",
              text: "Manter sempre saldo positivo na conta, com recargas semanais ou mensais. Isso garante que as campanhas rodem sem interrupção e que o aprendizado do algoritmo não seja perdido.",
            },
            {
              n: "03",
              title: "Ativar o crédito promocional",
              text: "Buscar ativamente a meta de R$ 3.500 investidos em até 32 dias para receber os R$ 2.500 em créditos do Google — ampliando o alcance sem custo adicional direto.",
            },
            {
              n: "04",
              title: "Acompanhar e crescer",
              text: "Com investimento estável e contínuo, a tendência natural é de aumento no volume de leads, redução do custo por resultado e maior previsibilidade de agendamentos mês a mês.",
            },
          ].map((s, i) => (
            <motion.div
              key={s.n}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-hairline bg-surface p-6 md:p-8"
            >
              <div className="flex items-baseline justify-between">
                <span className="num font-display text-3xl text-ink-soft/60">{s.n}</span>
                <ArrowUpRight className="h-4 w-4 text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          {...fadeUp}
          className="mt-14 rounded-3xl border border-ink/15 bg-ink p-8 text-background md:p-14"
        >
          <Sparkles className="h-6 w-6 opacity-70" />
          <p className="font-display mt-6 text-3xl leading-[1.15] md:text-5xl">
            “Google Ads é investimento em marketing. Cada real colocado de forma estratégica e
            consistente retorna em clientes novos, agendamentos e faturamento para o Studio 21.”
          </p>
        </motion.blockquote>
      </Section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 md:flex-row md:items-center md:px-8">
          <div className="flex items-center gap-4">
            <img src={studioLogo} alt="Studio 21" className="h-6 w-auto" />
            <span className="h-4 w-px bg-hairline" />
            <img src={googleAdsLogo} alt="Google Ads" className="h-4 w-auto opacity-80" />
          </div>
          <div className="text-xs text-ink-soft">
            Relatório de performance · 1º mês · Itanhaém · Mongaguá
          </div>
        </div>
      </footer>
    </main>
  );
}
