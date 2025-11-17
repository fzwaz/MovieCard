import React from "react";

const movies = [
  {
    title: "Inception",
    genre: "Sci-Fi / Thriller",
    why:
      "A brilliant mix of emotions and mind-bending ideas. Nolan’s storytelling and visuals make it unforgettable.",
  },
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    why:
      "A powerful story about hope and resilience. Every scene feels meaningful and inspiring.",
  },
  {
    title: "Spirited Away",
    genre: "Animation / Fantasy",
    why:
      "Beautiful animation and deep emotion. Miyazaki creates a world that feels alive and magical.",
  },
  {
    title: "The Grand Budapest Hotel",
    genre: "Comedy / Drama",
    why:
      "Wes Anderson’s unique style, colors, and humor make it a visually stunning experience.",
  },
];

export default function App() {
  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>My Favorite Movies</h1>
        <p style={styles.subtitle}>Movies That Inspired Me</p>
      </header>

      {/* Introduction */}
      <section style={styles.introSection}>
        <h2 style={styles.sectionTitle}>Introduction</h2>
        <p style={styles.paragraph}>
          I love movies because they let me explore new stories, emotions, and
          worlds. I enjoy films that combine great visuals and strong
          storytelling. Whether it's sci-fi, drama, or animation, I appreciate
          movies that stay with me long after they end.
        </p>
      </section>

      {/* Movies List */}
      <section style={styles.moviesSection}>
        <h2 style={styles.sectionTitle}>Movies List</h2>
        <div style={styles.grid}>
          {movies.map((m, i) => (
            <article key={i} style={styles.card}>
              <h3 style={styles.movieTitle}>{m.title}</h3>
              <p style={styles.genre}>{m.genre}</p>
              <p style={styles.why}>{m.why}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Preferences */}
      <section style={styles.prefSection}>
        <h2 style={styles.sectionTitle}>Movie Preferences</h2>
        <ul style={styles.prefList}>
          <li>
            <strong>Favorite genres:</strong> Sci-Fi, Drama, Animation, Comedy
          </li>
          <li>
            <strong>Favorite director/actor:</strong> Christopher Nolan / Meryl
            Streep
          </li>
          <li>
            <strong>How often I watch:</strong> Weekly movie nights and weekend
            binge-watching.
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={{ margin: 0 }}>Built with React + Vite 🎬</p>
      </footer>
    </div>
  );
}

/* Inline Styles */
const styles = {
  page: {
    fontFamily:
      "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial",
    color: "#8198c9ff",
    maxWidth: 900,
    margin: "32px auto",
    padding: 20,
    lineHeight: 1.6,
  },
  header: {
    textAlign: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 34,
    margin: 0,
  },
  subtitle: {
    marginTop: 6,
    color: "#486294ff",
  },
  introSection: {
    background: "#f9fafb",
    padding: 18,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    marginBottom: 10,
  },
  paragraph: {
    margin: 0,
    color: "#374151",
  },
  moviesSection: {
    marginBottom: 20,
  },
  grid: {
    display: "grid",
    gap: 16,
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  },
  card: {
    background: "white",
    padding: 16,
    borderRadius: 12,
    border: "1px solid #e5e7eb",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  movieTitle: {
    margin: 0,
    fontSize: 18,
  },
  genre: {
    color: "#6b7280",
    fontSize: 14,
    margin: "6px 0",
  },
  why: {
    fontSize: 14,
  },
  prefSection: {
    background: "#f3f4f6",
    padding: 16,
    borderRadius: 10,
  },
  prefList: {
    paddingLeft: 18,
  },
  footer: {
    textAlign: "center",
    marginTop: 30,
    paddingTop: 10,
    color: "#6b7280",
    fontSize: 14,
  },
};
