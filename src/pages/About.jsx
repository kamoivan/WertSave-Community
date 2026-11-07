import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  Clock3,
  Eye,
  FileClock,
  FolderKanban,
  HandCoins,
  HeartHandshake,
  Landmark,
  MessagesSquare,
  Network,
  ShieldCheck,
  Smartphone,
  Users,
  Wallet,
  CalendarDays,
  Check,
  Target,
  UserRound,
  Building2,
  Megaphone,
  CircleDollarSign,
} from "lucide-react";

import "./About.css";

const problems = [
  {
    number: "01",
    icon: FileClock,
    title: "Un manque de traçabilité",
    description:
      "Les contributions et les opérations doivent laisser une trace claire. Chaque membre peut retrouver l'historique de ses activités.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Une transparence difficile à maintenir",
    description:
      "Les informations essentielles, les règles et les activités de la tontine sont regroupées dans un espace commun.",
  },
  {
    number: "03",
    icon: Clock3,
    title: "Un suivi irrégulier des cotisations",
    description:
      "Les contributions sont enregistrées sur la plateforme pour permettre un suivi actualisé, accessible à tout moment.",
  },
  {
    number: "04",
    icon: FolderKanban,
    title: "Une gestion dispersée",
    description:
      "Membres, règles, invitations et contributions sont centralisés pour faciliter l'organisation quotidienne.",
  },
  {
    number: "05",
    icon: Network,
    title: "Des communautés difficiles à coordonner",
    description:
      "Les organisateurs disposent d'outils pour structurer leurs groupes et faciliter la participation de leurs membres.",
  },
];

const audiences = [
  {
    icon: UserRound,
    title: "Les particuliers",
    description:
      "Ceux qui souhaitent rejoindre une tontine, épargner collectivement et mieux suivre leur participation.",
    label: "Membres",
  },
  {
    icon: Users,
    title: "Les organisateurs",
    description:
      "Les présidents et responsables qui veulent gérer leurs groupes avec davantage de visibilité et de méthode.",
    label: "Gestionnaires",
  },
  {
    icon: Building2,
    title: "Les associations",
    description:
      "Les communautés et groupes qui souhaitent structurer leurs activités financières collectives.",
    label: "Communautés",
  },
  {
    icon: HeartHandshake,
    title: "Les contributeurs",
    description:
      "Les personnes qui souhaitent soutenir le projet par leurs compétences, leurs idées ou leurs ressources.",
    label: "Partenaires",
  },
];

const features = [
  {
    number: "01",
    icon: Users,
    title: "Tontines collectives",
    description:
      "Créez une tontine ou rejoignez un groupe. Retrouvez les membres, les règles et les informations essentielles au même endroit.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Groupe d'amis réunis autour d'un moment collectif",
    tag: "Organisation collective",
  },
  {
    number: "02",
    icon: Wallet,
    title: "Portefeuille numérique",
    description:
      "Alimentez votre portefeuille WertSave depuis les services Mobile Money pris en charge : MTN MoMo et Orange Money.",
    image:
      "https://images.unsplash.com/photo-1512427691650-1b7e7b4e7c0d?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Personne utilisant son smartphone au quotidien",
    tag: "Gestion des fonds",
  },
  {
    number: "03",
    icon: Activity,
    title: "Cotisations et historique",
    description:
      "Effectuez vos contributions depuis votre portefeuille et consultez l'historique de vos opérations.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Organisation et suivi de documents financiers",
    tag: "Suivi des opérations",
  },
  {
    number: "04",
    icon: CalendarDays,
    title: "Planification des tours",
    description:
      "Organisez les tours de réception grâce à un tirage au sort ou à une décision du président de la tontine.",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Calendrier de planification sur un bureau",
    tag: "Coordination",
  },
  {
    number: "05",
    icon: MessagesSquare,
    title: "Invitations et gestion des membres",
    description:
      "Invitez de nouveaux participants par email ou WhatsApp et gardez une vue organisée sur la composition de votre groupe.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Personne échangeant avec son téléphone et son ordinateur",
    tag: "Communauté",
  },
  {
    number: "06",
    icon: Target,
    title: "Objectifs d'épargne",
    description:
      "Structurez vos projets d'épargne à court ou à long terme dans une dynamique collective.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Carnet de notes utilisé pour organiser des objectifs",
    tag: "Projets et objectifs",
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "La confiance",
    text: "Des informations structurées et un historique consultable.",
  },
  {
    icon: Landmark,
    title: "La centralisation",
    text: "Les éléments essentiels de la tontine réunis dans un seul espace.",
  },
  {
    icon: HandCoins,
    title: "La simplicité",
    text: "Des opérations et des outils pensés pour faciliter la participation.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className={`about-section-heading ${light ? "is-light" : ""}`}>
      <span className="about-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function About() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.15 },
        variants: fadeUp,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-container">
          <div className="about-hero-grid">
            <motion.div className="about-hero-content" {...reveal}>
              <span className="about-eyebrow">À PROPOS DE WERTSAVE</span>

              <h1>
                L'épargne collective mérite une{" "}
                <span>meilleure organisation.</span>
              </h1>

              <p className="about-hero-description">
                WertSave est une plateforme numérique conçue pour moderniser la
                gestion des tontines et faciliter l'organisation de l'épargne
                collective.
              </p>

              <div className="about-hero-actions">
                <Link to="/join" className="about-button about-button-primary">
                  Rejoindre la communauté
                  <ArrowRight size={18} />
                </Link>

                <a href="#notre-approche" className="about-text-link">
                  Découvrir notre approche
                  <ArrowUpRight size={17} />
                </a>
              </div>

              <div className="about-hero-proof">
                <div className="about-proof-icon">
                  <Check size={17} />
                </div>
                <span>
                  Une plateforme pensée pour les membres et les organisateurs.
                </span>
              </div>
            </motion.div>

            <motion.div
              className="about-hero-visual"
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=90"
                alt="Des personnes réunies autour d'un moment de partage"
                className="about-hero-image"
              />

              <div className="about-image-caption">
                <span className="about-caption-mark">
                  <Users size={19} />
                </span>
                <div>
                  <strong>La force du collectif</strong>
                  <span>Une organisation pensée pour tous.</span>
                </div>
              </div>

              <div className="about-hero-decoration" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* POSITIONNEMENT */}
      <section className="about-approach" id="notre-approche">
        <div className="about-container">
          <div className="about-approach-grid">
            <motion.div {...reveal}>
              <span className="about-eyebrow">NOTRE APPROCHE</span>
              <h2>
                Une pratique collective.
                <br />
                Une organisation repensée.
              </h2>
            </motion.div>

            <motion.div className="about-approach-copy" {...reveal}>
              <p>
                La tontine repose sur la confiance, l'engagement et la
                solidarité entre ses membres. Pourtant, son organisation peut
                devenir complexe lorsque les informations, les contributions et
                les échanges sont dispersés.
              </p>
              <p>
                WertSave apporte un environnement numérique centralisé pour
                faciliter le suivi des activités, structurer les groupes et
                rendre la participation plus lisible.
              </p>
            </motion.div>
          </div>

          <div className="about-principles">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="about-principle-card"
                  key={item.title}
                  {...reveal}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                >
                  <div className="about-principle-icon">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROBLÈMES */}
      <section className="about-problems">
        <div className="about-container">
          <SectionHeading
            eyebrow="POURQUOI WERTSAVE ?"
            title="Des difficultés concrètes. Des réponses structurées."
            description="Nous partons des réalités de la gestion des tontines pour proposer des outils adaptés."
          />

          <div className="about-problems-layout">
            <motion.div className="about-problems-intro" {...reveal}>
              <div className="about-problems-photo">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=85"
                  alt="Des collaborateurs échangent autour d'une table"
                  loading="lazy"
                />
              </div>
              <div className="about-problems-note">
                <span>NOTRE OBJECTIF</span>
                <strong>
                  Rendre la gestion collective plus claire, plus structurée et
                  plus accessible.
                </strong>
              </div>
            </motion.div>

            <div className="about-problem-list">
              {problems.map((problem, index) => {
                const Icon = problem.icon;

                return (
                  <motion.article
                    className="about-problem-item"
                    key={problem.number}
                    {...reveal}
                    transition={{ delay: index * 0.06, duration: 0.55 }}
                  >
                    <span className="about-problem-number">
                      {problem.number}
                    </span>

                    <div className="about-problem-icon">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <div className="about-problem-content">
                      <h3>{problem.title}</h3>
                      <p>{problem.description}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CIBLES */}
      <section className="about-audience">
        <div className="about-container">
          <SectionHeading
            eyebrow="À QUI S'ADRESSE WERTSAVE ?"
            title="Une plateforme, plusieurs façons de participer."
            description="WertSave s'adresse aux personnes qui prennent part à une tontine comme à celles qui organisent, structurent ou soutiennent une communauté."
          />

          <div className="about-audience-grid">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;

              return (
                <motion.article
                  className="about-audience-card"
                  key={audience.title}
                  {...reveal}
                  transition={{ delay: index * 0.07, duration: 0.6 }}
                >
                  <div className="about-audience-top">
                    <div className="about-audience-icon">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>
                    <span>{audience.label}</span>
                  </div>

                  <h3>{audience.title}</h3>
                  <p>{audience.description}</p>
                  <div className="about-audience-line" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="about-features" id="fonctionnalites">
        <div className="about-container">
          <SectionHeading
            eyebrow="L'ÉCOSYSTÈME WERTSAVE"
            title="Bien plus qu'une simple épargne."
            description="Des fonctionnalités complémentaires pour accompagner les différentes étapes de la vie d'une tontine."
          />

          <div className="about-features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  className="about-feature-card"
                  key={feature.number}
                  {...reveal}
                  transition={{ delay: (index % 3) * 0.08, duration: 0.6 }}
                >
                  <div className="about-feature-image-wrap">
                    <img
                      src={feature.image}
                      alt={feature.imageAlt}
                      loading="lazy"
                    />
                    <span className="about-feature-number">
                      {feature.number}
                    </span>
                    <span className="about-feature-tag">{feature.tag}</span>
                  </div>

                  <div className="about-feature-body">
                    <div className="about-feature-icon">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>

                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="about-feature-footnote">
            <Smartphone size={18} />
            <p>
              Les fonctionnalités sont réunies dans une seule plateforme,
              accessible depuis vos appareils compatibles.
            </p>
          </div>
        </div>
      </section>

      {/* AVANCEMENT */}
      <section className="about-progress">
        <div className="about-container">
          <motion.div className="about-progress-card" {...reveal}>
            <div className="about-progress-copy">
              <span className="about-eyebrow">OÙ EN SOMMES-NOUS ?</span>
              <h2>WertSave se prépare à entrer dans une nouvelle étape.</h2>
              <p>
                La plateforme est actuellement à 95 % de son développement. Nous
                travaillons sur les derniers ajustements avant sa mise à
                disposition.
              </p>

              <Link to="/join" className="about-progress-link">
                Suivre le projet
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="about-progress-visual">
              <div className="about-progress-circle">
                <div className="about-progress-circle-inner">
                  <strong>
                    95<span>%</span>
                  </strong>
                  <small>Développement</small>
                </div>
              </div>

              <div className="about-progress-status">
                <span className="about-status-dot" />
                <span>Phase de finalisation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="about-final">
        <div className="about-container">
          <motion.div className="about-final-card" {...reveal}>
            <div className="about-final-content">
              <span className="about-eyebrow">
                FAISONS GRANDIR LE COLLECTIF
              </span>
              <h2>La prochaine étape de WertSave se construit avec vous.</h2>
              <p>
                Vous souhaitez rejoindre une tontine, soutenir le projet ou
                contribuer à son développement ? Faites-nous connaître votre
                intérêt.
              </p>

              <Link to="/join" className="about-button about-button-light">
                Rejoindre la communauté
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="about-final-symbol" aria-hidden="true">
              <Users size={118} strokeWidth={0.8} />
              <span className="about-final-symbol-ring" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
