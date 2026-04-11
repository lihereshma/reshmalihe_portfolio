function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6 relative z-10">
        <div className="text-sm text-center text-lightGray">
          <p>
            © {new Date().getFullYear()} Reshma Lihe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
