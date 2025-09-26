export default function Page() {
  return (
    <>
      <section className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold">Welcome</h1>
          <p className="mt-4 text-lg text-gray-300">
            This is a minimal placeholder home page. The real homepage content
            is composed from components in `src/app/components/` (Hero, About,
            ProjectCard, etc.). Add or wire those components into this file to
            restore the full layout.
          </p>
        </div>
      </section>
    </>
  );
}
