export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-4xl px-6 py-14">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mt-3 text-zinc-300">
          A few things I’ve built / worked on.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-5">
            <div className="font-semibold">WeedOutYEG Website</div>
            <p className="mt-2 text-sm text-zinc-300">
              Responsive site for services, pricing, and contact.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-5">
            <div className="font-semibold">CS50 Python</div>
            <p className="mt-2 text-sm text-zinc-300">
              Problem-solving programs using clean Python logic.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-5">
            <div className="font-semibold">CS50 AI</div>
            <p className="mt-2 text-sm text-zinc-300">
              Intro AI concepts: search, logic, decision models.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}