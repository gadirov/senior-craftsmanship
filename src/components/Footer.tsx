const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rufat Gadirov. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Built with React & TypeScript
        </p>
      </div>
    </footer>
  );
};

export default Footer;
