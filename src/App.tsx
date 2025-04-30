import BlackoutScreen from "./components/BlackoutScreen";

function App() {
  return (
    <>
      <div className="min-h-screen bg-zinc-50/50 text-zinc-800 flex flex-col items-center py-6 overflow-x-hidden">
        <header className="mb-12 w-dvw min-h-[50dvh] flex flex-col justify-evenly items-center bg-emerald-50 shadow-lg p-8 my-10 md:flex-row">
          <h1 className="text-4xl font-bold mb-4">Scotophobia</h1>
          <div className="text-lg w-1/3">
            <p>
              The fear of darkness, also known as nyctophobia, is a common
              phobia that affects people of all ages.
            </p>
            <button className="mt-6 bg-emerald-500 cursor-pointer hover:bg-emerald-600 text-white py-2 px-6 rounded shadow-md transition">
              <a href="#what-is-scotophobia">Learn more</a>
            </button>
          </div>
        </header>

        <main className="max-w-4xl w-full space-y-12">
          <section
            id="what-is-scotophobia"
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">
              What is Scotophobia?
            </h2>
            <p className="leading-relaxed">
              Scotophobia is an intense fear of darkness or being in dark
              environments. It can cause anxiety, panic, and discomfort,
              especially in situations where visibility is limited.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Symptoms</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Increased heart rate</li>
              <li>Shortness of breath</li>
              <li>Feeling of dread or panic</li>
              <li>Difficulty sleeping in the dark</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">How to Cope</h2>
            <p className="leading-relaxed">
              Coping with scotophobia can involve therapy, relaxation
              techniques, and gradual exposure to darkness in a safe
              environment. Seeking professional help is often beneficial.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              Causes of Scotophobia
            </h2>
            <p className="leading-relaxed">
              Scotophobia can stem from traumatic experiences, such as being
              left alone in the dark as a child. It may also be linked to an
              overactive imagination or a fear of the unknown. In some cases, it
              can be a learned behavior from observing others with similar
              fears.
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Interesting Facts</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                The word "scotophobia" comes from the Greek word "skotos,"
                meaning darkness.
              </li>
              <li>
                Scotophobia is more common in children but can persist into
                adulthood.
              </li>
              <li>
                Many people with scotophobia find comfort in nightlights or
                sleeping with a light on.
              </li>
              <li>It is one of the most common specific phobias worldwide.</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">When to Seek Help</h2>
            <p className="leading-relaxed">
              If scotophobia significantly impacts your daily life,
              relationships, or ability to function, it may be time to seek
              professional help. Therapists can provide strategies to manage and
              overcome the fear, such as cognitive-behavioral therapy (CBT) or
              exposure therapy.
            </p>
          </section>
        </main>

        <footer className="mt-16 text-sm text-zinc-500 text-center">
          <p>© 2025 Scotophobia Awareness. All rights reserved.</p>
          <p className="mt-2 text-xs">
            <span className="opacity-50">
              For legal reasons, this is not a real copyright.
            </span>
          </p>
        </footer>
      </div>

      <BlackoutScreen />
    </>
  );
}

export default App;
