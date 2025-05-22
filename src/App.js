import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold">Walid Gamal Elmnshawy</h1>
          <p className="text-lg text-gray-600">Junior Flutter Developer</p>

          <div className="mt-4 space-x-4">
            <a
              href="https://wa.me/201063323039"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="mailto:walidgamal010633@gmail.com"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
            <a
              href="https://github.com/walidgamal010633"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/walid-elmnshawy-8036762a6"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>
            Junior Flutter Developer with over 6 months of experience building
            cross-platform mobile applications using Flutter and Dart. Skilled
            in REST APIs, Firebase, GraphQL, with a solid understanding of Clean
            Architecture.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside">
            <li>Dart, Flutter</li>
            <li>REST API, Firebase, GraphQL</li>
            <li>Hive, Bloc, SharedPreferences</li>
            <li>Cubit, Riverpod</li>
            <li>Clean Architecture, MVVM, SOLID</li>
            <li>GitHub, GitLab</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Bookly App:</strong> Free book reading app with search and
              PDF download.
            </li>
            <li>
              <strong>Note App:</strong> Offline note-taking app with Hive and
              Cubit.
            </li>
            <li>
              <strong>EHC-eVenue Hub:</strong> Remote collaboration on hall
              booking app using GraphQL and Riverpod.
            </li>
            <li>
              <strong>Chat App:</strong> Real-time messaging app using Firebase.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}