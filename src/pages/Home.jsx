import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Users,
  Wallet,
  CalendarDays,
  Smartphone,
  HandHeart,
  Megaphone,
  Check,
  Quote,
} from "lucide-react";

import "./Home.css";

const photos = {
  community:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85",
  discussion:
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=85",
  planning:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
};

const features = [
  {
    number: "01",
    icon: Users,
    title: "Des tontines mieux organisées",
    description:
      "Créez une tontine ou rejoignez un groupe existant. Retrouvez les membres, les règles et les informations essentielles au même endroit.",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Un fonctionnement plus clair",
    description:
      "Les tours de réception sont organisés selon les règles du groupe, par tirage au sort ou par décision du président.",
  },
  {
    number: "03",
    icon: Wallet,
    title: "Un portefeuille intégré",
    description:
      "Alimentez votre portefeuille WertSave avec MTN Mobile Money ou Orange Money, puis effectuez vos contributions depuis la plateforme.",
  },
];

const participation = [
  {
    icon: Users,
    title: "Devenir membre",
    description:
      "Vous souhaitez rejoindre une tontine et participer à une nouvelle manière de gérer l'épargne collective.",
    action: "Je souhaite participer",
  },
  {
    icon: HandHeart,
    title: "Soutenir le projet",
    description:
      "Vous croyez en cette initiative et souhaitez contribuer à son développement.",
    action: "Je souhaite soutenir",
  },
  {
    icon: Megaphone,
    title: "Faire grandir la communauté",
    description:
      "Vous pouvez contribuer à la communication, au marketing ou à la visibilité de WertSave.",
    action: "Je veux contribuer",
  },
];

function SectionEyebrow({ children }) {
  return (
    <div className="section-eyebrow">
      <span />
      {children}
    </div>
  );
}

function Home() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.65, ease: "easeOut" },
  };

  return (
    <div className="community-home">
      {/* HERO */}
      <section className="community-hero">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />

        <div className="community-container hero-layout">
          <motion.div className="hero-copy" {...reveal}>
            <div className="hero-kicker">
              <span className="kicker-dot" />
              Une communauté qui avance ensemble
            </div>

            <h1>
              L'épargne collective mérite
              <span> une nouvelle dynamique.</span>
            </h1>

            <p className="hero-description">
              WertSave rassemble les personnes qui croient à la force du
              collectif et souhaite rendre les tontines plus simples à
              organiser, plus accessibles et mieux structurées.
            </p>

            <div className="hero-actions">
              <Link to="/join" className="community-button button-dark">
                Rejoindre la communauté
                <ArrowUpRight size={18} />
              </Link>

              <a href="#notre-vision" className="hero-text-link">
                Découvrir notre vision
                <ArrowDown size={16} />
              </a>
            </div>

            <div className="hero-note">
              <span className="hero-note-line" />
              <span>Une initiative construite autour du collectif.</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-composition"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="hero-photo-main">
              <img
                src={photos.community}
                alt="Un groupe de personnes réunies dans un moment de partage"
              />
            </div>

            <div className="hero-photo-small">
              <img
                src={photos.discussion}
                alt="Des personnes qui échangent et construisent ensemble"
              />
            </div>

            <div className="hero-photo-label">
              <span className="label-mark">W.</span>
              <div>
                <strong>Le collectif avant tout.</strong>
                <span>La vision WertSave</span>
              </div>
            </div>

            <div className="hero-side-number">01 / COMMUNITY</div>
            <div className="hero-gold-shape" />
          </motion.div>
        </div>

        <div className="community-container hero-bottom">
          <span>Une autre façon de faire grandir les projets collectifs.</span>
          <span className="hero-bottom-line" />
          <span>WERTSAVE COMMUNITY</span>
        </div>
      </section>

      {/* DEVELOPMENT STATUS */}
      <section className="development-strip">
        <div className="community-container development-content">
          <div className="development-label">
            <span className="status-indicator" />
            <span>Le projet avance</span>
          </div>

          <div className="development-message">
            <strong>WertSave est à 95 % de son développement.</strong>
            <span>
              La plateforme entre dans sa dernière phase de finalisation.
            </span>
          </div>

          <div
            className="development-progress"
            role="progressbar"
            aria-label="Avancement du développement de WertSave"
            aria-valuenow="95"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="progress-track">
              <span />
            </div>
            <strong>95%</strong>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="vision-section" id="notre-vision">
        <div className="community-container vision-layout">
          <motion.div className="vision-heading" {...reveal}>
            <SectionEyebrow>Notre vision</SectionEyebrow>

            <h2>
              La force d'une tontine,
              <span> c'est d'abord la force de ceux qui la composent.</span>
            </h2>
          </motion.div>

          <motion.div className="vision-content" {...reveal}>
            <p className="vision-lead">
              Depuis longtemps, les tontines permettent aux personnes de se
              soutenir, d'épargner ensemble et de concrétiser des projets.
            </p>

            <p>
              Mais organiser un groupe, suivre les contributions, gérer les
              tours et maintenir une bonne communication demande du temps et de
              la rigueur.
            </p>

            <p>
              WertSave veut apporter une réponse concrète à ces défis, sans
              perdre ce qui fait la valeur de la tontine : la confiance, la
              solidarité et l'engagement de chaque membre.
            </p>

            <Link to="/about" className="underlined-link">
              En savoir plus sur WertSave
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>
        </div>

        <div className="community-container vision-image-layout">
          <motion.div className="vision-image" {...reveal}>
            <img
              src={photos.planning}
              alt="Une équipe qui échange autour d'un projet commun"
              loading="lazy"
            />
            <div className="image-caption">
              <span>01</span>
              <span>Construire ensemble, avec méthode.</span>
            </div>
          </motion.div>

          <div className="vision-side-note">
            <span className="side-note-line" />
            <p>
              Nous ne voulons pas remplacer l'esprit de la tontine.
              <strong> Nous voulons lui donner de meilleurs outils.</strong>
            </p>
            <span className="side-note-signature">L'ESPRIT WERTSAVE</span>
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section className="product-section">
        <div className="community-container">
          <motion.div className="product-heading" {...reveal}>
            <div>
              <SectionEyebrow>La plateforme</SectionEyebrow>
              <h2>
                Une expérience pensée
                <span> pour le quotidien des tontines.</span>
              </h2>
            </div>

            <p>
              Derrière la communauté, un outil concret : une plateforme conçue
              pour accompagner les membres et les organisateurs dans la gestion
              de leurs tontines.
            </p>
          </motion.div>

          <div className="product-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  className="product-card"
                  key={feature.number}
                  {...reveal}
                >
                  <div className="product-card-top">
                    <span>{feature.number}</span>
                    <Icon size={23} strokeWidth={1.5} />
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>

                  <div className="product-card-bottom">
                    <span>WERTSAVE</span>
                    <span className="card-bottom-line" />
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="product-footnote">
            <Smartphone size={18} />
            <p>
              Les fonctionnalités présentées correspondent à la vision actuelle
              de la plateforme, dont le développement est en cours de
              finalisation.
            </p>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="community-section">
        <div className="community-container community-layout">
          <motion.div className="community-image-panel" {...reveal}>
            <img
              src={photos.community}
              alt="Des amis réunis, symbolisant l'esprit de communauté"
              loading="lazy"
            />
            <div className="community-image-overlay">
              <span>PLUS QU'UNE PLATEFORME</span>
              <strong>Une dynamique collective.</strong>
            </div>
            <div className="community-image-index">02 — 03</div>
          </motion.div>

          <motion.div className="community-copy" {...reveal}>
            <SectionEyebrow>La communauté WertSave</SectionEyebrow>

            <h2>
              Le projet ne se construit pas
              <span> sans vous.</span>
            </h2>

            <p>
              Nous croyons qu'un projet comme WertSave doit grandir avec les
              personnes auxquelles il s'adresse. C'est pourquoi nous souhaitons
              réunir dès maintenant celles et ceux qui veulent prendre part à
              cette initiative.
            </p>

            <div className="community-values">
              <div>
                <Check size={17} />
                <span>Des membres qui partagent une vision commune.</span>
              </div>
              <div>
                <Check size={17} />
                <span>
                  Des organisateurs qui veulent mieux structurer leurs tontines.
                </span>
              </div>
              <div>
                <Check size={17} />
                <span>Des personnes qui souhaitent soutenir le projet.</span>
              </div>
            </div>

            <Link to="/join" className="community-button button-outline">
              Prendre part à l'initiative
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PARTICIPATION / CONVERSION */}
      <section className="participation-section">
        <div className="community-container">
          <motion.div className="participation-heading" {...reveal}>
            <SectionEyebrow>Votre place dans le projet</SectionEyebrow>

            <h2>
              Comment souhaitez-vous
              <span> participer à l'aventure ?</span>
            </h2>

            <p>
              Que vous souhaitiez utiliser la plateforme, soutenir son
              développement ou contribuer à sa visibilité, votre intérêt compte.
            </p>
          </motion.div>

          <div className="participation-grid">
            {participation.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="participation-card"
                  key={item.title}
                  {...reveal}
                >
                  <div className="participation-card-icon">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>

                  <span className="participation-index">0{index + 1}</span>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <Link to="/join" className="participation-link">
                    {item.action}
                    <ArrowUpRight size={17} />
                  </Link>
                </motion.article>
              );
            })}
          </div>

          <motion.div className="participation-bottom" {...reveal}>
            <div>
              <span className="participation-bottom-label">
                FAISONS GRANDIR CETTE INITIATIVE
              </span>
              <h3>Votre prochaine étape commence ici.</h3>
              <p>
                Faites-nous part de votre intérêt et de la manière dont vous
                souhaitez participer.
              </p>
            </div>

            <Link to="/join" className="community-button button-gold">
              Rejoindre WertSave
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="closing-section">
        <div className="community-container closing-content">
          <span className="closing-mark">W.</span>
          <Quote className="closing-quote-icon" size={28} />

          <h2>
            Les projets collectifs prennent de la valeur
            <span> lorsque chacun peut y prendre part.</span>
          </h2>

          <Link to="/join" className="closing-link">
            Rejoindre la communauté WertSave
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
