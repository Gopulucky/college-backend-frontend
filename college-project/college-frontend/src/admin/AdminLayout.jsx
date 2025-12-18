export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h2 className="text-xl font-semibold mb-8">Admin Panel</h2>
        <nav className="space-y-4 text-sm">
          <a href="/admin/enquiries" className="block hover:text-accent">
            Enquiries
          </a>
          <a href="/admin/marks" className="block hover:text-accent">
            Marks
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
