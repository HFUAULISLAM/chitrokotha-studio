export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuStyle = {
    display: "block",
    padding: "12px 10px",
    marginBottom: "4px",
    color: "#bbb",
    textDecoration: "none",
    borderRadius: "6px",
  };

  const sectionStyle = {
    color: "#777",
    fontSize: "11px",
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
    padding: "0 10px",
    marginTop: "30px",
    marginBottom: "10px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        background: "#f5f5f5",
        color: "#111",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: "250px",
          minHeight: "100vh",
          background: "#111",
          color: "#fff",
          padding: "28px 20px",
          boxSizing: "border-box",
          flexShrink: 0,
          overflowY: "auto",
        }}
      >
        {/* Logo */}
        <div
          style={{
            padding: "0 10px 30px",
            borderBottom: "1px solid #2d2d2d",
            marginBottom: "25px",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "22px",
              fontWeight: 600,
              letterSpacing: "-0.5px",
            }}
          >
            Chitrokotha
          </h2>

          <p
            style={{
              margin: "6px 0 0",
              color: "#999",
              fontSize: "13px",
            }}
          >
            Studio Admin
          </p>
        </div>

        <nav>
          {/* MAIN */}
          <p
            style={{
              color: "#777",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              padding: "0 10px",
              marginBottom: "10px",
            }}
          >
            Main Menu
          </p>

          <a href="/admin" style={{ ...menuStyle, color: "#fff", background: "#242424" }}>
            Dashboard
          </a>

          <a href="/admin/models" style={menuStyle}>
            Models
          </a>

          <a href="/admin/clients" style={menuStyle}>
            Clients
          </a>

          <a href="/admin/projects" style={menuStyle}>
            Projects
          </a>

          {/* WEBSITE CONTENT */}
          <p style={sectionStyle}>Website Content</p>

          <a href="/admin/content/hero" style={menuStyle}>
            Hero
          </a>

          <a href="/admin/content/intro" style={menuStyle}>
            Intro
          </a>

          <a href="/admin/content/work" style={menuStyle}>
            Work
          </a>

          <a href="/admin/content/manifesto" style={menuStyle}>
            Manifesto
          </a>

          <a href="/admin/content/services" style={menuStyle}>
            Services
          </a>

          <a href="/admin/content/behind-frame" style={menuStyle}>
            Behind the Frame
          </a>

          <a href="/admin/content/brand-needs" style={menuStyle}>
            Brand Needs
          </a>

          <a href="/admin/content/process" style={menuStyle}>
            Process
          </a>

          <a href="/admin/content/casting" style={menuStyle}>
            Casting
          </a>

          <a href="/admin/content/testimonials" style={menuStyle}>
            Testimonials
          </a>

          <a href="/admin/content/about" style={menuStyle}>
            About
          </a>

          <a href="/admin/content/contact" style={menuStyle}>
            Contact
          </a>

          {/* SYSTEM */}
          <p style={sectionStyle}>System</p>

          <a href="/admin/settings" style={menuStyle}>
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          minWidth: 0,
          padding: "40px",
          boxSizing: "border-box",
        }}
      >
        {children}
      </main>
    </div>
  );
}