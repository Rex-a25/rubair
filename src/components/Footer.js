export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="section-wrap flex flex-col gap-3 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 MediaFinder. Crafted for creators.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
