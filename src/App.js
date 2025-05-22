// src/App.js
import './App.css';

export default function Portfolio() {
  return (
    <div className="container">
      <header className="text-center">
        <h1>Walid Gamal Elmnsawy</h1>
        <p>Junior Flutter Developer</p>
        <div className="section">
          <a href="https://wa.me/201063323039" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>{' | '}
          <a href="mailto:walidgamal010633@gmail.com" target="_blank" rel="noopener noreferrer">
            Gmail
          </a>{' | '}
          <a href="https://github.com/walidgamal010633" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{' | '}
          <a href="https://www.linkedin.com/in/walid-elmnshawy-8036762a6" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </header>

      <section className="section">
        <h2>About Me</h2>
        <p>
          Junior Flutter Developer with over 6 months of experience building cross-platform mobile
          applications using Flutter and Dart. Skilled in REST APIs, Firebase, GitHub, and Clean Architecture.
        </p>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul>
          <li>Dart, Flutter</li>
          <li>REST API, Firebase, GraphQL</li>
          <li>Hive, Bloc, SharedPreferences</li>
          <li>Cubit, Riverpod</li>
          <li>Clean Architecture, MVVM, SOLID</li>
          <li>GitHub, GitLab</li>
        </ul>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Bookly App:</strong>
            <p>A free book reading app with PDF preview and search functionality.</p>
            <p>Built using Flutter and integrated with Google Books API for real-time data access.</p>
          </li>
          <li>
            <strong>Note App:</strong>
            <p>An offline note-taking app using Hive and Cubit for local data management.</p>
            <p>Allows users to add, delete, and edit notes without internet access.</p>
          </li>
          <li>
            <strong>EHC-eVenue Hub:</strong>
            <p>Remote collaboration on hall booking with GraphQL and Riverpod.</p>
            <p>Admin panel and booking management system for event coordinators.</p>
          </li>
          <li>
            <strong>Chat App:</strong>
            <p>A real-time chat application with Firebase authentication and Firestore database.</p>
            <p>Supports sending text messages and displaying active user status.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}