
import './App.css';

export default function Portfolio() {
  return (
    <div className="container">
      <header className="header">
        <div>
          <h1>Walid Gamal Elmnshawy</h1>
          <p>Junior Flutter Developer</p>
        </div>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          Junior Flutter Developer with over 6 months of experience building cross-platform mobile apps using Flutter and Dart. Skilled in REST APIs, Firebase, GraphQL, and Clean Architecture.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>Dart, Flutter</li>
          <li>REST APIs, Firebase, GraphQL</li>
          <li>Hive, Firestore, SharedPreferences</li>
          <li>Cubit, Riverpod</li>
          <li>Clean Architecture, MVVM, SOLID</li>
          <li>GitHub, GitLab</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <div>
          <h3>Bookly App</h3>
          <p>Free book reading app with search and PDF download.</p>
        </div>
        <div>
          <h3>Note App</h3>
          <p>Offline note-taking app with Hive and Cubit.</p>
        </div>
        <div>
          <h3>EHC-eVenue Hub</h3>
          <p>Remote collaboration on hall booking app using GraphQL and Riverpod.</p>
        </div>
        <div>
          <h3>Chat App</h3>
          <p>Real-time chat application with Firebase and Cubit.</p>
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <p>Bachelor of Computer Science, Mansoura University, 2023 – Very Good</p>
        <p>Information Technology High School</p>
      </section>

      <footer>
        <p>Contact: walidgamal010633@gmail.com | GitHub: walidgamal010633 | LinkedIn: walid-elmnshawy</p>
      </footer>
    </div>
  );
}
