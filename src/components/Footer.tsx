const Footer = () => {
  return (
    <footer className="py-6 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-dim font-mono tracking-wide">
          © {new Date().getFullYear()} Dev Mishra
        </p>
        <p className="text-xs text-dim">
          Built with precision & purpose.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
