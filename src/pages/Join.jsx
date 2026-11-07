import { useState } from "react";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Users,
  Wallet,
  HeartHandshake,
  Megaphone,
  ShieldCheck,
  Send,
  LoaderCircle,
  ChevronRight,
  CircleCheck,
  HandCoins,
  Lightbulb,
} from "lucide-react";

import { toast } from "react-toastify";

import { joinSchema, joinDefaultValues } from "./JoinSchema";

import "./join.css";

const participationOptions = [
  {
    id: "member",
    title: "Rejoindre WertSave",
    description: "Participer à une tontine et faire partie de la communauté.",
    icon: Users,
  },
  {
    id: "financial-support",
    title: "Soutenir financièrement",
    description: "Contribuer au développement et à la croissance du projet.",
    icon: HandCoins,
  },
  {
    id: "communication",
    title: "Communication",
    description: "Faire connaître WertSave et partager sa vision.",
    icon: Megaphone,
  },
  {
    id: "marketing",
    title: "Marketing",
    description:
      "Participer à la visibilité et à l'acquisition de nouveaux membres.",
    icon: Lightbulb,
  },
  {
    id: "other",
    title: "Autre contribution",
    description: "Proposer une autre forme de collaboration ou de soutien.",
    icon: HeartHandshake,
  },
];

const principles = [
  {
    number: "01",
    icon: Users,
    title: "Le collectif",
    description:
      "Rassembler membres et organisateurs autour d'une même dynamique.",
  },
  {
    number: "02",
    icon: Wallet,
    title: "L'organisation",
    description:
      "Faciliter la gestion des tontines et le suivi des contributions.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "La solidarité",
    description: "Faire de l'entraide et de l'engagement des forces concrètes.",
  },
];

const reveal = (reduceMotion, delay = 0) =>
  reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: {
          duration: 0.65,
          delay,
          ease: [0.22, 1, 0.36, 1],
        },
      };

function Join() {
  const reduceMotion = useReducedMotion();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(joinSchema),
    defaultValues: joinDefaultValues,
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const selectedInterests = watch("interests") || [];
  const showOtherField = selectedInterests.includes("other");

  const onSubmit = async (data) => {
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      toast.error(
        "Le formulaire n'est pas encore connecté à son service de réception.",
      );
      return;
    }

    setSubmitting(true);

    try {
      const selectedLabels = data.interests
        .map(
          (id) =>
            participationOptions.find((option) => option.id === id)?.title,
        )
        .filter(Boolean);

      const payload = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone || "Non renseigné",
        interests: selectedLabels.join(", "),
        otherDetails: data.otherDetails || "",
        _replyto: data.email,
        _subject: "Nouvelle demande — Communauté WertSave",
      };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      reset(joinDefaultValues);
      setSubmitted(true);

      toast.success("Votre demande a bien été transmise.");
    } catch {
      toast.error("L'envoi a échoué. Vérifiez votre connexion puis réessayez.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleNewRequest = () => {
    setSubmitted(false);

    document
      .getElementById("join-form")
      ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <div className="join-page">
      {/* HERO */}
      <section className="join-hero">
        <div className="join-container">
          <div className="join-hero-grid">
            <motion.div className="join-hero-content" {...reveal(reduceMotion)}>
              <span className="join-eyebrow">
                <span className="join-eyebrow-dot" />
                WERTSAVE COMMUNITY
              </span>

              <h1>
                Une vision commune.
                <span> Une aventure collective.</span>
              </h1>

              <p className="join-hero-description">
                WertSave veut donner une nouvelle dimension à la gestion des
                tontines. Mais au-delà de la technologie, c'est une communauté
                de membres, d'organisateurs et de contributeurs que nous voulons
                construire.
              </p>

              <div className="join-hero-actions">
                <a
                  href="#join-form"
                  className="join-button join-button-primary"
                >
                  Prendre part à l'aventure
                  <ArrowRight size={18} />
                </a>

                <Link to="/" className="join-text-link">
                  Découvrir WertSave
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              <div className="join-community-note">
                <div className="join-note-icon">
                  <Users size={19} />
                </div>

                <p>
                  Membres, organisateurs et contributeurs :
                  <strong> chaque engagement a sa place.</strong>
                </p>
              </div>
            </motion.div>

            <motion.div
              className="join-hero-visual"
              {...reveal(reduceMotion, 0.12)}
            >
              <div className="join-photo-main">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85"
                  alt="Un groupe de personnes réunies dans un moment de partage"
                  fetchPriority="high"
                />

                <div className="join-photo-overlay" />

                <div className="join-photo-caption">
                  <span>UNE COMMUNAUTÉ QUI AVANCE ENSEMBLE</span>
                  <p>La force du collectif commence par la confiance.</p>
                </div>
              </div>

              <div className="join-floating-note">
                <div className="join-floating-icon">
                  <HeartHandshake size={21} />
                </div>

                <div>
                  <strong>Une vision partagée</strong>
                  <span>Construire ensemble, avec un objectif commun.</span>
                </div>
              </div>

              <span className="join-visual-index">01 / 03</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="join-mission">
        <div className="join-container">
          <motion.div className="join-mission-grid" {...reveal(reduceMotion)}>
            <div className="join-section-intro">
              <span className="join-section-label">
                NOTRE VISION COMMUNAUTAIRE
              </span>

              <h2>
                Une plateforme prend vie
                <span> grâce aux personnes qui la font grandir.</span>
              </h2>
            </div>

            <div className="join-mission-copy">
              <p>
                Les tontines reposent depuis longtemps sur des principes forts :
                la confiance, la discipline, l'entraide et la responsabilité
                collective.
              </p>

              <p>
                WertSave souhaite accompagner cette réalité avec un outil
                numérique conçu pour simplifier l'organisation des groupes, le
                suivi des contributions et la gestion des membres.
              </p>

              <p>
                Notre ambition ne se limite donc pas à développer une
                plateforme. Nous voulons fédérer celles et ceux qui partagent
                cette vision et souhaitent contribuer à son développement.
              </p>
            </div>
          </motion.div>

          <div className="join-principles">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="join-principle"
                  key={item.number}
                  {...reveal(reduceMotion, index * 0.08)}
                >
                  <span className="join-principle-number">{item.number}</span>

                  <div className="join-principle-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLATFORM STATUS */}
      <section className="join-platform">
        <div className="join-container">
          <motion.div className="join-platform-card" {...reveal(reduceMotion)}>
            <div className="join-platform-content">
              <span className="join-section-label join-label-light">
                LE PROJET WERTSAVE
              </span>

              <h2>
                La plateforme entre dans sa dernière phase de développement.
              </h2>

              <p>
                Le développement de WertSave est actuellement estimé à 95 %.
                Nous travaillons à la finalisation de la plateforme et préparons
                la prochaine étape avec notre communauté.
              </p>

              <div className="join-progress-heading">
                <span>Avancement du développement</span>
                <strong>95 %</strong>
              </div>

              <div
                className="join-progress-track"
                role="progressbar"
                aria-label="Avancement du développement de WertSave"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={95}
              >
                <motion.span
                  initial={reduceMotion ? false : { width: 0 }}
                  whileInView={{ width: "95%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>

              <span className="join-progress-caption">
                Plateforme en cours de finalisation
              </span>
            </div>

            <div className="join-platform-side">
              <div className="join-platform-side-icon">
                <ShieldCheck size={27} />
              </div>

              <span>UNE AVENTURE COLLECTIVE</span>

              <h3>
                Votre engagement peut participer à la suite de cette histoire.
              </h3>

              <a href="#join-form">
                Exprimer mon intérêt
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PARTICIPATION OPTIONS */}
      <section className="join-participation">
        <div className="join-container">
          <motion.div
            className="join-participation-heading"
            {...reveal(reduceMotion)}
          >
            <span className="join-section-label">
              PLUSIEURS FAÇONS DE PARTICIPER
            </span>

            <h2>
              Chacun peut contribuer
              <span> à sa manière.</span>
            </h2>

            <p>
              Que vous souhaitiez utiliser la plateforme, soutenir le projet ou
              apporter vos compétences, votre participation peut prendre
              différentes formes.
            </p>
          </motion.div>

          <div className="join-participation-grid">
            {participationOptions.slice(0, 4).map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="join-participation-card"
                  key={item.id}
                  {...reveal(reduceMotion, index * 0.07)}
                >
                  <div className="join-participation-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <a href="#join-form">
                    Je suis intéressé
                    <ArrowUpRight size={15} />
                  </a>
                </motion.article>
              );
            })}
          </div>

          <div className="join-participation-footer">
            <p>
              Vous avez une autre idée ou une proposition de collaboration ?
            </p>

            <a href="#join-form">
              Présentez-nous votre proposition
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CONVERSION FORM */}
      <section className="join-form-section" id="join-form">
        <div className="join-container">
          <div className="join-form-layout">
            <motion.aside className="join-form-aside" {...reveal(reduceMotion)}>
              <span className="join-section-label">
                REJOINDRE LA COMMUNAUTÉ
              </span>

              <h2>Quelle place souhaitez-vous prendre dans l'aventure ?</h2>

              <p>
                Présentez-nous votre intérêt et choisissez comment vous aimeriez
                participer. Notre équipe pourra ainsi mieux comprendre votre
                démarche.
              </p>

              <div className="join-aside-benefits">
                <div>
                  <CircleCheck size={19} />
                  <span>Une démarche simple et rapide</span>
                </div>

                <div>
                  <CircleCheck size={19} />
                  <span>Plusieurs formes de participation possibles</span>
                </div>

                <div>
                  <CircleCheck size={19} />
                  <span>Une prise de contact au sujet de votre demande</span>
                </div>
              </div>

              <div className="join-aside-image">
                <img
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=85"
                  alt="Des personnes réunies pour un moment de partage"
                  loading="lazy"
                />

                <div>
                  <span>WERTSAVE COMMUNITY</span>
                  <strong>Le collectif nous rassemble.</strong>
                </div>
              </div>
            </motion.aside>

            <motion.div
              className="join-form-card"
              {...reveal(reduceMotion, 0.1)}
            >
              <div className="join-form-heading">
                <span>VOTRE PARTICIPATION</span>
                <h3>Faisons connaissance.</h3>
                <p>Quelques informations suffisent pour commencer.</p>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                {submitted ? (
                  <motion.div
                    key="success"
                    className="join-success"
                    initial={reduceMotion ? false : { opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? {} : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    role="status"
                    aria-live="polite"
                  >
                    <div className="join-success-icon">
                      <Check size={30} />
                    </div>

                    <span className="join-success-label">
                      DEMANDE TRANSMISE
                    </span>

                    <h3>Merci de faire partie de cette aventure.</h3>

                    <p>
                      Votre demande a bien été transmise. Nous vous remercions
                      pour l'intérêt que vous portez à WertSave.
                    </p>

                    <button
                      type="button"
                      className="join-button join-button-primary"
                      onClick={handleNewRequest}
                    >
                      Envoyer une autre demande
                      <ArrowRight size={17} />
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    className="join-form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reduceMotion ? {} : { opacity: 0 }}
                  >
                    <div className="join-field">
                      <label htmlFor="fullName">
                        Nom complet <span>*</span>
                      </label>

                      <input
                        id="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="Votre nom et prénom"
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={
                          errors.fullName ? "fullName-error" : undefined
                        }
                        {...register("fullName")}
                      />

                      {errors.fullName && (
                        <small
                          id="fullName-error"
                          className="join-error"
                          role="alert"
                        >
                          {errors.fullName.message}
                        </small>
                      )}
                    </div>

                    <div className="join-field">
                      <label htmlFor="email">
                        Adresse email <span>*</span>
                      </label>

                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="vous@exemple.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        {...register("email")}
                      />

                      {errors.email && (
                        <small
                          id="email-error"
                          className="join-error"
                          role="alert"
                        >
                          {errors.email.message}
                        </small>
                      )}
                    </div>

                    <div className="join-field">
                      <label htmlFor="phone">
                        Téléphone
                        <span className="join-optional">Facultatif</span>
                      </label>

                      <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => (
                          <PhoneInput
                            id="phone"
                            international
                            defaultCountry="CM"
                            countryCallingCodeEditable={false}
                            placeholder="Votre numéro de téléphone"
                            value={field.value || undefined}
                            onChange={(value) => field.onChange(value || "")}
                            onBlur={field.onBlur}
                            className="join-phone-input"
                            aria-label="Numéro de téléphone avec indicatif international"
                          />
                        )}
                      />

                      <small className="join-field-hint">
                        Choisissez votre pays pour utiliser son indicatif.
                      </small>

                      {errors.phone && (
                        <small className="join-error" role="alert">
                          {errors.phone.message}
                        </small>
                      )}
                    </div>

                    <fieldset className="join-interests">
                      <legend>
                        Comment souhaitez-vous participer ? <span>*</span>
                      </legend>

                      <p className="join-field-hint">
                        Sélectionnez une ou plusieurs réponses.
                      </p>

                      <Controller
                        name="interests"
                        control={control}
                        render={({ field }) => (
                          <div className="join-interest-list">
                            {participationOptions.map((option) => {
                              const Icon = option.icon;
                              const selected = field.value.includes(option.id);

                              const toggleOption = () => {
                                const nextValue = selected
                                  ? field.value.filter(
                                      (value) => value !== option.id,
                                    )
                                  : [...field.value, option.id];

                                field.onChange(nextValue);
                              };

                              return (
                                <button
                                  type="button"
                                  key={option.id}
                                  className={`join-interest-option ${
                                    selected ? "is-selected" : ""
                                  }`}
                                  onClick={toggleOption}
                                  aria-pressed={selected}
                                >
                                  <span className="join-interest-icon">
                                    <Icon size={19} />
                                  </span>

                                  <span className="join-interest-text">
                                    <strong>{option.title}</strong>
                                    <small>{option.description}</small>
                                  </span>

                                  <span className="join-interest-check">
                                    {selected && <Check size={14} />}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      />

                      {errors.interests && (
                        <small className="join-error" role="alert">
                          {errors.interests.message}
                        </small>
                      )}
                    </fieldset>

                    <AnimatePresence initial={false}>
                      {showOtherField && (
                        <motion.div
                          className="join-field join-other-field"
                          initial={
                            reduceMotion ? false : { opacity: 0, height: 0 }
                          }
                          animate={{ opacity: 1, height: "auto" }}
                          exit={reduceMotion ? {} : { opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <label htmlFor="otherDetails">
                            Décrivez votre proposition <span>*</span>
                          </label>

                          <textarea
                            id="otherDetails"
                            rows={3}
                            placeholder="Comment aimeriez-vous contribuer ?"
                            aria-invalid={Boolean(errors.otherDetails)}
                            {...register("otherDetails")}
                          />

                          {errors.otherDetails && (
                            <small className="join-error" role="alert">
                              {errors.otherDetails.message}
                            </small>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      type="submit"
                      className="join-button join-submit-button"
                      disabled={submitting || isSubmitting}
                    >
                      {submitting || isSubmitting ? (
                        <>
                          <LoaderCircle className="join-spinner" size={18} />
                          Transmission en cours...
                        </>
                      ) : (
                        <>
                          Envoyer ma demande
                          <Send size={17} />
                        </>
                      )}
                    </button>

                    <p className="join-form-privacy">
                      Vos informations sont utilisées pour traiter votre demande
                      et vous recontacter à ce sujet.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="join-bottom">
        <div className="join-container join-bottom-inner">
          <div>
            <span>WERTSAVE COMMUNITY</span>
            <h2>Le collectif est une force. Faisons-la grandir ensemble.</h2>
          </div>

          <a href="#join-form" className="join-button join-button-light">
            Rejoindre WertSave
            <ChevronRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Join;
