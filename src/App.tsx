function App() {
  return (
    <div className="min-h-dvh p-6">
      <header className="text-center mb-8 min-h-[50dvh] flex justify-evenly items-center bg-emerald-50 rounded-xl">
        <h1 className="text-4xl font-bold mb-4">Scotophobia</h1>
        <div className="text-lg w-1/3">
        <p>
          The fear of darkness, also known as nyctophobia, is a common phobia
          that affects people of all ages.</p>
          <button className="mt-4 bg-emerald-500 text-white py-2 px-4 rounded">
            <a
              href="#what-is-scotophobia"
              // target="_blank"
              // rel="noopener noreferrer"
            >
              Learn more
            </a>
          </button>
        </div>
      </header>

      <main className="max-w-3xl space-y-6">
        <section id="what-is-scotophobia">
          <h2 className="text-2xl font-semibold mb-2">What is Scotophobia?</h2>
          <p>
            Scotophobia is an intense fear of darkness or being in dark
            environments. It can cause anxiety, panic, and discomfort,
            especially in situations where visibility is limited.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Symptoms</h2>
          <ul className="list-disc list-inside text-left">
            <li>Increased heart rate</li>
            <li>Shortness of breath</li>
            <li>Feeling of dread or panic</li>
            <li>Difficulty sleeping in the dark</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">How to Cope</h2>
          <p>
            Coping with scotophobia can involve therapy, relaxation techniques,
            and gradual exposure to darkness in a safe environment. Seeking
            professional help is often beneficial.
          </p>
        </section>
      </main>
      <footer className="mt-12 text-sm group text-gray-400 flex gap-4">
        <p>© 2025 Scotophobia Awareness. All rights reserved.</p>
<div className="group-hover:opacity-100 opacity-0 transition">
  For legal reasons this is not a real copyright
</div>
      </footer>
    </div>
  );
}

export default App;
