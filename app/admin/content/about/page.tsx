"use client";

import { useEffect, useState } from "react";

type AboutContent = {
  sectionNumber: string;
  label: string;
  headingLineOne: string;
  headingLineTwo: string;
  paragraphOne: string;
  paragraphTwo: string;
  paragraphThree: string;
  basedIn: string;
  focus: string;
  availableFor: string;
};

const defaultContent: AboutContent = {
  sectionNumber: "09",
  label: "About",
  headingLineOne: "A small studio",
  headingLineTwo: "with a big frame.",
  paragraphOne:
    "Chitrokotha Studio is an independent creative studio based in Dhaka, Bangladesh.",
  paragraphTwo:
    "We work across cinematography, photography, editing, animation, design and visual storytelling — creating work for brands, businesses and people who want to communicate with intention.",
  paragraphThree:
    "We keep the team flexible, the process collaborative and the visual language honest.",
  basedIn: "Dhaka, Bangladesh",
  focus: "Film / Photo / Design",
  availableFor: "Projects / Collaborations",
};

const STORAGE_KEY = "chitrokotha-about";

export default function AboutPage() {
  const [content, setContent] = useState<AboutContent>(defaultContent);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      try {
        const parsed = JSON.parse(stored);

        setContent({
          ...defaultContent,
          ...parsed,
        });
      } catch {
        setContent(defaultContent);
      }
    }
  }, []);

  const updateField = (field: keyof AboutContent, value: string) => {
    setContent((current) => ({
      ...current,
      [field]: value,
    }));

    setSaved(false);
  };

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    setSaved(true);
  };

  const handleReset = () => {
    const confirmed = window.confirm(
      "Reset About content to the original default values?"
    );

    if (!confirmed) return;

    localStorage.removeItem(STORAGE_KEY);
    setContent(defaultContent);
    setSaved(false);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "20px",
          marginBottom: "32px",
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: "32px" }}>About</h1>
          <p style={{ color: "#666", marginTop: "8px" }}>
            Manage the About section and studio information.
          </p>
        </div>

        {saved && (
          <span
            style={{
              background: "#e8f7ed",
              color: "#16733b",
              padding: "8px 12px",
              borderRadius: "6px",
              fontSize: "13px",
            }}
          >
            Changes saved
          </span>
        )}
      </div>

      <div
        style={{
          background: "#fff",
          border: "1px solid #e5e5e5",
          borderRadius: "10px",
          padding: "28px",
          marginBottom: "24px",
        }}
      >
        <h2 style={{ marginTop: 0, fontSize: "19px" }}>Section Content</h2>

        <div style={{ display: "grid", gap: "20px" }}>
          <Field
            label="Section Number"
            value={content.sectionNumber}
            onChange={(value) => updateField("sectionNumber", value)}
          />

          <Field
            label="Section Label"
            value={content.label}
            onChange={(value) => updateField("label", value)}
          />

          <Field
            label="Heading Line One"
            value={content.headingLineOne}
            onChange={(value) => updateField("headingLineOne", value)}
          />

          <Field
            label="Heading Line Two"
            value={content.headingLineTwo}
            onChange={(value) => updateField("headingLineTwo", value)}
          />

          <TextArea
            label="Paragraph One"
            value={content.paragraphOne}
            onChange={(value) => updateField("paragraphOne", value)}
          />

          <TextArea
            label="Paragraph Two"
            value={content.paragraphTwo}
            onChange={(value) => updateField("paragraphTwo", value)}
          />

          <TextArea
            label="Paragraph Three"
            value={content.paragraphThree}
            onChange={(value) => updateField("paragraphThree", value)}
          />
        </div>
      </div>

      <div
        style={{
          background: "#fff",
          border: "1px solid #e5e5e5",
          borderRadius: "10px",
          padding: "28px",
          marginBottom: "24px",
        }}
      >
        <h2 style={{ marginTop: 0, fontSize: "19px" }}>Studio Details</h2>

        <div style={{ display: "grid", gap: "20px" }}>
          <Field
            label="Based in"
            value={content.basedIn}
            onChange={(value) => updateField("basedIn", value)}
          />

          <Field
            label="Focus"
            value={content.focus}
            onChange={(value) => updateField("focus", value)}
          />

          <Field
            label="Available for"
            value={content.availableFor}
            onChange={(value) => updateField("availableFor", value)}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
        }}
      >
        <button type="button" onClick={handleReset} style={secondaryButton}>
          Reset
        </button>

        <button type="button" onClick={handleSave} style={primaryButton}>
          Save Changes
        </button>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label style={{ display: "grid", gap: "8px" }}>
      <span style={labelStyle}>{label}</span>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={inputStyle}
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label style={{ display: "grid", gap: "8px" }}>
      <span style={labelStyle}>{label}</span>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        style={{
          ...inputStyle,
          resize: "vertical",
          fontFamily: "inherit",
        }}
      />
    </label>
  );
}

const labelStyle = {
  fontSize: "13px",
  fontWeight: 600,
  color: "#333",
};

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  border: "1px solid #ddd",
  borderRadius: "7px",
  fontSize: "14px",
  boxSizing: "border-box" as const,
  outline: "none",
};

const primaryButton = {
  border: "none",
  background: "#111",
  color: "#fff",
  padding: "11px 16px",
  borderRadius: "7px",
  cursor: "pointer",
  fontSize: "14px",
};

const secondaryButton = {
  border: "1px solid #ddd",
  background: "#fff",
  color: "#333",
  padding: "11px 16px",
  borderRadius: "7px",
  cursor: "pointer",
  fontSize: "14px",
};