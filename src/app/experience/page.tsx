export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-4xl px-6 py-14">
        <h1 className="text-4xl font-bold">Experience</h1>
        <p className="mt-3 text-zinc-300">
          Work, leadership, and volunteering.
        </p>

        <div className="mt-10 grid gap-4">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6">
            <div className="flex items-baseline justify-between gap-2">
              <div className="font-semibold">Founder & Owner — WeedOutYEG</div>
              <div className="text-sm text-zinc-400">Jun 2024 – Present</div>
            </div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>$10k+ revenue in 6 months</li>
              <li>50+ five-star reviews</li>
              <li>Operations, pricing, and customer retention</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6">
            <div className="flex items-baseline justify-between gap-2">
              <div className="font-semibold">Customer Service — McDonald’s</div>
              <div className="text-sm text-zinc-400">Apr 2023 – Present</div>
            </div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
              <li>High-volume service & teamwork</li>
              <li>Accuracy under pressure</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}