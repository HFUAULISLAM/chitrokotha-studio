"use client";

import { useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        .admin-layout {
          min-height: 100vh;
          display: flex;
          background: #f5f5f5;
          color: #111;
        }

        .admin-sidebar {
          width: 250px;
          min-height: 100vh;
          background: #111;
          color: #fff;
          padding: 28px 20px;
          box-sizing: border-box;
          flex-shrink: 0;
          overflow-y: auto;
        }

        .admin-main {
          flex: 1;
          min-width: 0;
          padding: 40px;
          box-sizing: border-box;
          overflow-x: hidden;
        }

        .mobile-header {
          display: none;
        }

        .mobile-overlay {
          display: none;
        }

        .close-menu {
          display: none;
        }

        @media (max-width: 900px) {
          .admin-layout {
            display: block;
          }

          .admin-sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: 280px;
            max-width: 85vw;
            height: 100vh;
            min-height: 100vh;
            z-index: 1000;
            transform: translateX(-100%);
            transition: transform 0.25s ease;
            box-shadow: 8px 0 30px rgba(0, 0, 0, 0.2);
          }

          .admin-sidebar.open {
            transform: translateX(0);
          }

          .admin-main {
            width: 100%;
            padding: 24px 20px 40px;
          }

          .mobile-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: calc(100% + 40px);
            margin: -24px -20px 28px;
            padding: 14px 20px;
            background: #111;
            color: #fff;
            box-sizing: border-box;
          }

          .mobile-title {
            margin: 0;
            font-size: 16px;
            font-weight: 600;
          }

          .mobile-subtitle {
            margin: 3px 0 0;
            color: #999;
            font-size: 11px;
          }

          .menu-button {
            width: 42px;
            height: 42px;
            border: 1px solid #333;
            border-radius: 7px;
            background: #222;
            color: #fff;
            cursor: pointer;
            font-size: 22px;
          }

          .close-menu {
            display: block;
            position: absolute;
            top: 18px;
            right: 16px;
            width: 36px;
            height: 36px;
            border: 1px solid #333;
            border-radius: 6px;
            background: #222;
            color: #fff;
            cursor: pointer;
            font-size: 22px;
          }

          .mobile-overlay {
            display: block;
            position: fixed;
            inset: 0;
            z-index: 999;
            background: rgba(0, 0, 0, 0.45);
          }
        }

        @media (max-width: 600px) {
          .admin-main {
            padding: 20px 14px 32px;
          }

          .mobile-header {
            width: calc(100% + 28px);
            margin: -20px -14px 22px;
            padding: 14px;
          }

          .admin-main table {
            display: block;
            width: 100%;
            overflow-x: auto;
          }

          .admin-main img {
            max-width: 100%;
            height: auto;
          }

          .admin-main input,
          .admin-main textarea,
          .admin-main select {
            max-width: 100%;
          }

          .admin-main [style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }

          .admin-main [style*="justify-content: space-between"] {
            flex-wrap: wrap;
            gap: 14px;
          }
        }

        @media (max-width: 420px) {
          .admin-main {
            padding-left: 12px;
            padding-right: 12px;
          }

          .mobile-header {
            width: calc(100% + 24px);
            margin-left: -12px;
            margin-right: -12px;
            padding-left: 12px;
            padding-right: 12px;
          }
        }
      `}</style>

      <div className="admin-layout">
        {menuOpen && (
          <div
            className="mobile-overlay"
            onClick={closeMenu}
          />
        )}

        <aside
          className={`admin-sidebar ${menuOpen ? "open" : ""}`}
        >
          <button
            type="button"
            className="close-menu"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ×
          </button>

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

            <a
              href="/admin"
              onClick={closeMenu}
              style={{
                ...menuStyle,
                color: "#fff",
                background: "#242424",
              }}
            >
              Dashboard
            </a>

            <a
              href="/admin/models"
              onClick={closeMenu}
              style={menuStyle}
            >
              Models
            </a>

            <a
              href="/admin/clients"
              onClick={closeMenu}
              style={menuStyle}
            >
              Clients
            </a>

            <a
              href="/admin/projects"
              onClick={closeMenu}
              style={menuStyle}
            >
              Projects
            </a>

            <p style={sectionStyle}>Website Content</p>

            <a
              href="/admin/content/hero"
              onClick={closeMenu}
              style={menuStyle}
            >
              Hero
            </a>

            <a
              href="/admin/content/intro"
              onClick={closeMenu}
              style={menuStyle}
            >
              Intro
            </a>

            <a
              href="/admin/content/work"
              onClick={closeMenu}
              style={menuStyle}
            >
              Work
            </a>

            <a
              href="/admin/content/manifesto"
              onClick={closeMenu}
              style={menuStyle}
            >
              Manifesto
            </a>

            <a
              href="/admin/content/services"
              onClick={closeMenu}
              style={menuStyle}
            >
              Services
            </a>

            <a
              href="/admin/content/behind-frame"
              onClick={closeMenu}
              style={menuStyle}
            >
              Behind the Frame
            </a>

            <a
              href="/admin/content/brand-needs"
              onClick={closeMenu}
              style={menuStyle}
            >
              Brand Needs
            </a>

            <a
              href="/admin/content/process"
              onClick={closeMenu}
              style={menuStyle}
            >
              Process
            </a>

            <a
              href="/admin/content/casting"
              onClick={closeMenu}
              style={menuStyle}
            >
              Casting
            </a>

            <a
              href="/admin/content/testimonials"
              onClick={closeMenu}
              style={menuStyle}
            >
              Testimonials
            </a>

            <a
              href="/admin/content/about"
              onClick={closeMenu}
              style={menuStyle}
            >
              About
            </a>

            <a
              href="/admin/content/contact"
              onClick={closeMenu}
              style={menuStyle}
            >
              Contact
            </a>

            <p style={sectionStyle}>System</p>

            <a
              href="/admin/settings"
              onClick={closeMenu}
              style={menuStyle}
            >
              Settings
            </a>
          </nav>
        </aside>

        <main className="admin-main">
          <div className="mobile-header">
            <div>
              <p className="mobile-title">
                Chitrokotha Admin
              </p>

              <p className="mobile-subtitle">
                Studio Admin
              </p>
            </div>

            <button
              type="button"
              className="menu-button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>

          {children}
        </main>
      </div>
    </>
  );
}