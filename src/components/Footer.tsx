function Footer() {
  return (
    <footer className="p-container flex justify-center">
      <div className="text-center">
        <p className="text-sm">
          &copy; 2024 Benjamin Rasoli. All rights reserved.
        </p>
        <div className="mt-3">
          <a
            href="https://www.linkedin.com/in/benjamin-rasoli-2948ab300/"
            target="_blank"
            className="hover:underline mx-2"
          >
            LinkedIn
          </a>
          <span>|</span>
          <a
            href="https://github.com/BenjaminRasoli"
            target="_blank"
            className="hover:underline mx-2"
          >
            GitHub
          </a>
          <span>|</span>
          <a
            href="mailto:benjaminrasoli05@gmail.com"
            className="hover:underline mx-2"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
