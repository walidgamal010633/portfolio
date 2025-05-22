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
            <p>Developed a Flutter application for reading and downloading free books in PDF format, with categorized search and offline access.</p>
            <p>Fetched book data from a RESTful API and implemented topic-based search, PDF download, and smooth navigation using Cubit and Clean Architecture.</p>
          </li>
          <li>
            <strong>Note App:</strong>
            <p>Created a note-taking app that mimics native mobile notes apps, allowing users to add, edit, and delete notes offline.</p>
            <p>Used Hive for local storage, implemented full CRUD operations, and managed state with Cubit following Clean Architecture principles.</p>
          </li>
          <li>
            <strong>EHC-eVenue Hub:</strong>
            <p>Worked remotely with NKSA company on an event hall booking application using Riverpod for state management and GraphQL.</p>
            <p>Developed and implemented key UI screens including Profile, Favorites, Side Menu, Special Request, Notifications, Edit Profile, Contact Us, and Terms of Use, ensuring smooth user experience and consistent design</p>
            <p>The app allows users to browse available halls with detailed info such as location, capacity, and equipment, streamlining reservation management . </p>
          </li>
          <li>
            <strong>Chat App:</strong>
            <p>Built a real-time chat application using Firebase Authentication and Firestore, enabling secure login and instant messaging.</p>
            <p>Used Cubit for state management, ensured clean separation of concerns, and created a responsive UI with proper form validation and error handling.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}