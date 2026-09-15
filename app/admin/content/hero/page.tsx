"use client";

import { useEffect, useState } from "react";

const defaultHero = {
  kicker: "Visual storytelling studio",
  titleLineOne: "Stories",
  titleLineTwo: "in every frame.",
  description:
    "Chitrokotha is an independent visual studio creating films, photography and visual experiences for brands, people and ideas.",
  primaryButton: "Explore our work",
  secondaryButton: "Start a conversation",
  location: "Dhaka — Bangladesh",
};

export default function HeroAdminPage() {
  const [hero, setHero] = useState(defaultHero);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("chitrokotha-hero");

    if (stored) {
      try {
        setHero(JSON.parse(stored));
      } catch {
        setHero(defaultHero);
      }
    }
  }, []);

  const handleChange = (field: keyof typeof hero, value: string) => {
    setHero((current) => ({
      ...current,
      [field]: value,
    }));

    setSaved(false);
  };

  const saveChanges = () => {
    localStorage.setItem("chitrokotha-hero", JSON.stringify(hero));
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const resetChanges = () => {
    const confirmed = window.confirm(
      "Are you sure you want to reset the Hero section to the default content?"
    );

    if (!confirmed) return;

    setHero(defaultHero);
    localStorage.setItem("chitrokotha-hero", JSON.stringify(defaultHero));
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
          <p
            style={{
              margin: "0 0 8px",
              color: "#777",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
            }}
          >
            Website Content
          </p>

          <h1
            style={{
              margin: 0,
              fontSize: "32px",
              fontWeight: 600,
            }}
          >
            Hero Section
          </h1>

          <p
            style={{
              margin: "10px 0 0",
              color: "#777",
              fontSize: "14px",
            }}
          >
            Manage the main hero content displayed on the homepage.
          </p>
        </div>

        <div
          style={{
            padding: "8px 12px",
            borderRadius: "6px",
            background: "#fff",
            border: "1px solid #ddd",
            color: "#777",
            fontSize: "12px",
          }}
        >
          Single Content
        </div>
      </div>

      {/* Form */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #e2e2e2",
          borderRadius: "10px",
          padding: "30px",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "24px",
          }}
        >
          <Field
            label="Kicker"
            value={hero.kicker}
            onChange={(value) => handleChange("kicker", value)}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <Field
              label="Title — Line 1"
              value={hero.titleLineOne}
              onChange={(value) => handleChange("titleLineOne", value)}
            />

            <Field
              label="Title — Line 2"
              value={hero.titleLineTwo}
              onChange={(value) => handleChange("titleLineTwo", value)}
            />
          </div>

          <Field
            label="Description"
            type="textarea"
            value={hero.description}
            onChange={(value) => handleChange("description", value)}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <Field
              label="Primary Button"
              value={hero.primaryButton}
              onChange={(value) => handleChange("primaryButton", value)}
            />

            <Field
              label="Secondary Button"
              value={hero.secondaryButton}
              onChange={(value) => handleChange("secondaryButton", value)}
            />
          </div>

          <Field
            label="Location"
            value={hero.location}
            onChange={(value) => handleChange("location", value)}
          />
        </div>

        {/* Actions */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
            marginTop: "35px",
            paddingTop: "25px",
            borderTop: "1px solid #eee",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              color: saved ? "#167a42" : "#999",
            }}
          >
            {saved ? "✓ Changes saved" : "Changes are stored locally."}
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
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
    <label
      style={{
        display: "grid",
        gap: "8px",
      }}
    >
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