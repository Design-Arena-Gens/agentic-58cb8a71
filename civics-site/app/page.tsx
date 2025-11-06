import styles from "./page.module.css";

const civicPrinciples = [
  {
    title: "Civic Knowledge",
    description:
      "Understand how governments are structured, how laws are made, and how institutions interact.",
  },
  {
    title: "Civic Skills",
    description:
      "Research issues, evaluate sources, communicate clearly, and collaborate to solve shared problems.",
  },
  {
    title: "Civic Values",
    description:
      "Uphold democratic ideals such as liberty, equality, justice, and respect for the rule of law.",
  },
];

const governmentLevels = [
  {
    level: "Local",
    focus:
      "Cities, towns, and counties deliver everyday services like schools, public safety, zoning, and transportation.",
  },
  {
    level: "State",
    focus:
      "State governments pass laws on education, health, and infrastructure while balancing powers reserved in the Constitution.",
  },
  {
    level: "National",
    focus:
      "The federal government manages defense, foreign policy, interstate commerce, and protects constitutional rights.",
  },
];

const civicTimeline = [
  {
    era: "Ancient Foundations",
    highlight: "Athens & Rome",
    description:
      "Classical republics experimented with citizen assemblies, inspiring later democratic ideas about shared governance.",
  },
  {
    era: "Enlightenment Ideas",
    highlight: "17th–18th Centuries",
    description:
      "Thinkers like Locke, Montesquieu, and Rousseau argued for natural rights and separation of powers, shaping modern constitutions.",
  },
  {
    era: "Modern Democracies",
    highlight: "19th–21st Centuries",
    description:
      "Universal suffrage, civil rights movements, and global institutions expanded participation and demanded accountable governments.",
  },
];

const civicActions = [
  "Stay informed through trustworthy news and public records.",
  "Vote in local, state, and national elections.",
  "Attend community meetings or serve on advisory boards.",
  "Advocate for causes by writing, organizing, and peaceful protest.",
  "Hold officials accountable through transparency and oversight tools.",
];

const combine = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(" ");

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <span className={styles.heroBadge}>Civic Essentials</span>
          <h1 className={styles.heroTitle}>
            Civics explains how communities govern and how people share power.
          </h1>
          <p className={styles.heroSubtitle}>
            It blends knowledge of institutions, democratic values, and everyday
            participation so residents can shape the rules that influence their
            lives.
          </p>
        </section>

        <section className={combine(styles.section, styles.definition)}>
          <h2 className={styles.sectionTitle}>What is Civics?</h2>
          <p>
            Civics is the study and practice of citizenship—how people work
            together to make collective decisions, protect rights, and fulfill
            responsibilities within a political community. It reveals how the
            branches of government function, why constitutions matter, and how
            citizens can collaborate to improve public life.
          </p>
        </section>

        <section className={combine(styles.section, styles.principles)}>
          <h2 className={styles.sectionTitle}>Core Pillars of Civic Life</h2>
          <div className={styles.cardGrid}>
            {civicPrinciples.map((principle) => (
              <article key={principle.title} className={styles.card}>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={combine(styles.section, styles.levels)}>
          <h2 className={styles.sectionTitle}>
            Government Works on Multiple Levels
          </h2>
          <div className={styles.cardGrid}>
            {governmentLevels.map((level) => (
              <article key={level.level} className={styles.card}>
                <h3>{level.level}</h3>
                <p>{level.focus}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={combine(styles.section, styles.timeline)}>
          <h2 className={styles.sectionTitle}>How Civic Ideas Evolved</h2>
          <div className={styles.timelineGrid}>
            {civicTimeline.map((item) => (
              <article key={item.era} className={styles.timelineCard}>
                <span className={styles.timelineEra}>{item.era}</span>
                <h3>{item.highlight}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={combine(styles.section, styles.actions)}>
          <h2 className={styles.sectionTitle}>Practicing Civics Today</h2>
          <p>
            Civic life thrives when people show up, listen, and take action.
            Start small and build habits that make your community healthier and
            more responsive.
          </p>
          <ul>
            {civicActions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
        </section>

        <section className={combine(styles.section, styles.footerCta)}>
          <p>
            Civics is not only a subject—it is a shared practice of democracy.
            Explore your local institutions, ask questions, and contribute your
            voice.
          </p>
          <a
            className={styles.ctaButton}
            href="https://www.commoncause.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discover Civic Resources
          </a>
        </section>
      </main>
    </div>
  );
}
