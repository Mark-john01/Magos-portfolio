function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <p className="mx-auto max-w-5xl px-4 py-6 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Mark John Magos. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
