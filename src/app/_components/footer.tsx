import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-slate-700">
      <Container>
        <div className="flex items-center justify-between py-6">
          <div className="text-neutral-500 dark:text-neutral-400 text-sm">
            © {new Date().getFullYear()} Ebenezer.
          </div>
          <a
            href="https://github.com/Itsfoss0"
            className="text-sm text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors"
          >
            View on GitHub
          </a>

          <a
            href="https://linkedin.com/in/ebenezer-akhonya"
            className="text-sm text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors"
          >
            Linkedin
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
