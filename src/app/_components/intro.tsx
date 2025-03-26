
export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-6 mb-6 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Itsfoss Reports.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Writeups about incidents and new developments in my{" "}
        <a
          href="https://github.com/Itsfoss0/withk8s"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Home Lab
        </a>{" "}
        and postmoterms for outages.
      </h4>
    </section>
  );
}
