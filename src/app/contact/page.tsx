export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-4xl px-6 py-14">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-3 text-zinc-300">
          Want to reach out? Email is best.
        </p>

        <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6">
          <div className="text-zinc-300">Email</div>
          <a
            className="mt-2 inline-block rounded-xl bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-white"
            href="mailto:madhavkaushikx7@gmail.com"
          >
            madhavkaushikx7@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}