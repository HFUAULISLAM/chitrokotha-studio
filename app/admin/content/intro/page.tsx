"use client";

import { useEffect, useState } from "react";

const defaultIntro = {
  sectionNumber: "01",
  label: "What we believe",
  headingLineOne: "Not just content.",
  headingLineTwo: "Visual stories.",
  paragraphOne:
    "Every brand has something worth saying. Our job is to find the visual language that makes people stop, look and remember.",
  paragraphTwo:
    "From a single frame to a complete campaign, Chitrokotha brings cinematography, photography, editing and design together under one visual direction.",
  linkText: "More about Chitrokotha",
};

export default function IntroAdminPage() {
  const [intro, setIntro] = useState(defaultIntro);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("chitrokotha-intro");

    if (stored) {
      try {
        setIntro(JSON.parse(stored));
      } catch {
        setIntro(defaultIntro);
      }
    }
  }, []);

  const handleChange = (
    field: keyof typeof intro,
    value: string
  ) => {
    setIntro((current) => ({
      ...current,
      [field]: value,
    }));

    setSaved(false);
  };

  const saveChanges = () => {
    localStorage.setItem("chitrokotha-intro", JSON.stringify(intro));
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const resetChanges = () => {
    const confirmed = window.confirm(
      "Are you sure you want to reset the Intro section?"
    );

    if (!confirmed) return;

    setIntro(defaultIntro);
    localStorage.setItem(
      "chitrokotha-intro",
      JSON.stringify(defaultIntro)
    );
    setSaved(false);
  };

  return (
    <div style={{ maxWidth: "1100px" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "30px",
          marginBottom: "35px",
        }}
      >
        <div>
          <p style={eyebrowStyle}>Website Content</p>

          <h1 style={headingStyle}>Intro Section</h1>

          <p style={descriptionStyle}>
            Manage the introductory message and belief statement of the
            homepage.
          </p>
        </div>

        <span style={badgeStyle}>Single Content</span>
      </div>

      {/* Form */}
      <div style={cardStyle}>
        <div style={{ display: "grid", gap: "24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr",
              gap: "20px",
            }}
          >
            <Field
              label="Section No."
              value={intro.sectionNumber}
              onChange={(value) =>
                handleChange("sectionNumber", value)
              }
            />

            <Field
              label="Section Label"
              value={intro.label}
              onChange={(value) => handleChange("label", value)}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <Field
              label="Heading — Line 1"
              value={intro.headingLineOne}
              onChange={(value) =>
                handleChange("headingLineOne", value)
              }
            />

            <Field
              label="Heading — Line 2"
              value={intro.headingLineTwo}
              onChange={(value) =>
                handleChange("headingLineTwo", value)
              }
            />
          </div>

          <Field
            label="Paragraph 1"
            type="textarea"
            value={intro.paragraphOne}
            onChange={(value) =>
              handleChange("paragraphOne", value)
            }
          />

          <Field
            label="Paragraph 2"
            type="textarea"
            value={intro.paragraphTwo}
            onChange={(value) =>
              handleChange("paragraphTwo", value)
            }
          />

          <Field
            label="Link Text"
            value={intro.linkText}
            onChange={(value) => handleChange("linkText", value)}
          />
        </div>

        {/* Actions */}
        <div style={actionsStyle}>
          <span
            style={{
              fontSize: "13px",
              color: saved ? "#167a42" : "#999",
            }}
          >
            {saved ? "✓ Changes saved" : "Changes are stored locally."}
          </span>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={resetChanges}
              style={secondaryButtonStyle}
            >
              Reset
            </button>

            <button
              onClick={saveChanges}
              style={primaryButtonStyle}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "input",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "input" | "textarea";
}) {
  return (
    <label style={{ display: "grid", gap: "8px" }}>
      <span
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: "#333",
        }}
      >
        {label}
      </span>

      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
          style={inputStyle}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={inputStyle}
        />
      )}
    </label>
  );
}

const eyebrowStyle = {
  margin: "0 0 8px",
  color: "#777",
  fontSize: "12px",
  textTransform: "uppercase" as const,
  letterSpacing: "1.5px",
};

const headingStyle = {
  margin: 0,
  fontSize: "32px",
  fontWeight: 600,
};

const descriptionStyle = {
  margin: "10px 0 0",
  color: "#777",
  fontSize: "14px",
};

const badgeStyle = {
  padding: "8px 12px",
  borderRadius: "6px",
  background: "#fff",
  border: "1px solid #ddd",
  color: "#777",
  fontSize: "12px",
};

const cardStyle = {
  background: "#fff",
  border: "1px solid #e2e2e2",
  borderRadius: "10px",
  padding: "30px",
};

const actionsStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "15px",
  marginTop: "35px",
  paddingTop: "25px",
  borderTop: "1px solid #eee",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box" as const,
  border: "1px solid #d8d8d8",
  borderRadius: "6px",
  padding: "12px 13px",
  fontSize: "14px",
  color: "#111",
  background: "#fff",
  outline: "none",
};

const primaryButtonStyle = {
  border: "none",
  borderRadius: "6px",
  padding: "11px 18px",
  background: "#111",
  color: "#fff",
  cursor: "pointer",
  fontSize: "13px",
  fontWeight: 600,
};

const secondaryButtonStyle = {
  border: "1px solid #d5d5d5",
  borderRadius: "6px",
  padding: "11px 18px",
  background: "#fff",
  color: "#333",
  cursor: "pointer",
  fontSize: "13px",
  fontWeight: 500,
};