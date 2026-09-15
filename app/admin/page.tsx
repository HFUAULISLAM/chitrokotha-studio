export default function AdminPage() {
  return (
    <div>
      {/* HEADER */}
      <div
        style={{
          marginBottom: "35px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "30px",
            fontWeight: 600,
          }}
        >
          Dashboard
        </h1>

        <p
          style={{
            margin: "8px 0 0",
            color: "#777",
            fontSize: "15px",
          }}
        >
          Manage Chitrokotha Studio website content
        </p>
      </div>

      {/* WEBSITE CONTENT */}
      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "18px",
          }}
        >
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: "21px",
                fontWeight: 600,
              }}
            >
              Website Content
            </h2>

            <p
              style={{
                margin: "5px 0 0",
                color: "#888",
                fontSize: "13px",
              }}
            >
              Content currently used on the Chitrokotha website
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "18px",
          }}
        >
          {/* WORK */}
          <a
            href="/admin/content/work"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "22px",
                borderRadius: "10px",
                border: "1px solid #e5e5e5",
                minHeight: "130px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#777",
                  fontSize: "13px",
                }}
              >
                Work / Projects
              </p>

              <h2
                style={{
                  margin: "12px 0 5px",
                  fontSize: "30px",
                }}
              >
                3
              </h2>

              <span
                style={{
                  color: "#888",
                  fontSize: "13px",
                }}
              >
                Includes project images
              </span>
            </div>
          </a>

          {/* SERVICES */}
          <a
            href="/admin/content/services"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "22px",
                borderRadius: "10px",
                border: "1px solid #e5e5e5",
                minHeight: "130px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#777",
                  fontSize: "13px",
                }}
              >
                Services
              </p>

              <h2
                style={{
                  margin: "12px 0 5px",
                  fontSize: "30px",
                }}
              >
                6
              </h2>

              <span
                style={{
                  color: "#888",
                  fontSize: "13px",
                }}
              >
                Film, Photo, Design & more
              </span>
            </div>
          </a>

          {/* PROCESS */}
          <a
            href="/admin/content/process"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "22px",
                borderRadius: "10px",
                border: "1px solid #e5e5e5",
                minHeight: "130px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#777",
                  fontSize: "13px",
                }}
              >
                Process
              </p>

              <h2
                style={{
                  margin: "12px 0 5px",
                  fontSize: "30px",
                }}
              >
                5
              </h2>

              <span
                style={{
                  color: "#888",
                  fontSize: "13px",
                }}
              >
                Discover → Deliver
              </span>
            </div>
          </a>

          {/* BRAND NEEDS */}
          <a
            href="/admin/content/brand-needs"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "22px",
                borderRadius: "10px",
                border: "1px solid #e5e5e5",
                minHeight: "130px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#777",
                  fontSize: "13px",
                }}
              >
                Brand Needs
              </p>

              <h2
                style={{
                  margin: "12px 0 5px",
                  fontSize: "30px",
                }}
              >
                4
              </h2>

              <span
                style={{
                  color: "#888",
                  fontSize: "13px",
                }}
              >
                Brand solutions
              </span>
            </div>
          </a>

          {/* TESTIMONIALS */}
          <a
            href="/admin/content/testimonials"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "22px",
                borderRadius: "10px",
                border: "1px solid #e5e5e5",
                minHeight: "130px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#777",
                  fontSize: "13px",
                }}
              >
                Testimonials
              </p>

              <h2
                style={{
                  margin: "12px 0 5px",
                  fontSize: "30px",
                }}
              >
                2
              </h2>

              <span
                style={{
                  color: "#888",
                  fontSize: "13px",
                }}
              >
                Client / project quotes
              </span>
            </div>
          </a>

          {/* ABOUT */}
          <a
            href="/admin/content/about"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "22px",
                borderRadius: "10px",
                border: "1px solid #e5e5e5",
                minHeight: "130px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#777",
                  fontSize: "13px",
                }}
              >
                About
              </p>

              <h2
                style={{
                  margin: "12px 0 5px",
                  fontSize: "22px",
                }}
              >
                Chitrokotha
              </h2>

              <span
                style={{
                  color: "#888",
                  fontSize: "13px",
                }}
              >
                Studio information
              </span>
            </div>
          </a>

          {/* CONTACT */}
          <a
            href="/admin/content/contact"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "22px",
                borderRadius: "10px",
                border: "1px solid #e5e5e5",
                minHeight: "130px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#777",
                  fontSize: "13px",
                }}
              >
                Contact
              </p>

              <h2
                style={{
                  margin: "12px 0 5px",
                  fontSize: "22px",
                }}
              >
                hello@
              </h2>

              <span
                style={{
                  color: "#888",
                  fontSize: "13px",
                }}
              >
                Contact information
              </span>
            </div>
          </a>

          {/* HERO */}
          <a
            href="/admin/content/hero"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "22px",
                borderRadius: "10px",
                border: "1px solid #e5e5e5",
                minHeight: "130px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#777",
                  fontSize: "13px",
                }}
              >
                Hero
              </p>

              <h2
                style={{
                  margin: "12px 0 5px",
                  fontSize: "22px",
                }}
              >
                Stories
              </h2>

              <span
                style={{
                  color: "#888",
                  fontSize: "13px",
                }}
              >
                Main homepage section
              </span>
            </div>
          </a>

          {/* BEHIND FRAME */}
          <a
            href="/admin/content/behind-frame"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "22px",
                borderRadius: "10px",
                border: "1px solid #e5e5e5",
                minHeight: "130px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#777",
                  fontSize: "13px",
                }}
              >
                Behind the Frame
              </p>

              <h2
                style={{
                  margin: "12px 0 5px",
                  fontSize: "22px",
                }}
              >
                Process
              </h2>

              <span
                style={{
                  color: "#888",
                  fontSize: "13px",
                }}
              >
                Background image + text
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* CASTING */}
      <section style={{ marginTop: "40px" }}>
        <div
          style={{
            background: "#111",
            color: "#fff",
            padding: "28px",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  color: "#888",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Casting
              </p>

              <h2
                style={{
                  margin: "8px 0 5px",
                  fontSize: "23px",
                }}
              >
                Model Collection
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#aaa",
                  fontSize: "14px",
                }}
              >
                Manage model and creator applications.
              </p>
            </div>

            <a
              href="/admin/content/casting"
              style={{
                background: "#fff",
                color: "#111",
                padding: "11px 18px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Open Casting
            </a>
          </div>
        </div>
      </section>

      {/* SETTINGS */}
      <section style={{ marginTop: "20px" }}>
        <a
          href="/admin/settings"
          style={{
            display: "block",
            background: "#fff",
            border: "1px solid #e5e5e5",
            borderRadius: "10px",
            padding: "22px",
            textDecoration: "none",
            color: "#111",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: "17px",
            }}
          >
            Settings
          </h3>

          <p
            style={{
              margin: "6px 0 0",
              color: "#888",
              fontSize: "13px",
            }}
          >
            Social links, site information and SEO
          </p>
        </a>
      </section>
    </div>
  );
}