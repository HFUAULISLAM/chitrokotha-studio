"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }

    const callbackUrl = searchParams.get("callbackUrl") || "/admin";

    window.location.href = callbackUrl;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          border: "1px solid #292929",
          padding: "40px",
          background: "#111",
        }}
      >
        <div style={{ marginBottom: "36px" }}>
          <div
            style={{
              fontSize: "13px",
              letterSpacing: "0.18em",
              color: "#888",
              marginBottom: "14px",
            }}
          >
            CHITROKOTHA STUDIO
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "32px",
              fontWeight: 500,
            }}
          >
            Admin Login
          </h1>

          <p
            style={{
              color: "#888",
              fontSize: "14px",
              marginTop: "10px",
            }}
          >
            Sign in to manage your website.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                fontSize: "13px",
                color: "#aaa",
                marginBottom: "8px",
              }}
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="email"
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "13px 14px",
                background: "#0a0a0a",
                border: "1px solid #333",
                color: "#fff",
                outline: "none",
                fontSize: "14px",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="password"
              style={{
                display: "block",
                fontSize: "13px",
                color: "#aaa",
                marginBottom: "8px",
              }}
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="current-password"
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "13px 14px",
                background: "#0a0a0a",
                border: "1px solid #333",
                color: "#fff",
                outline: "none",
                fontSize: "14px",
              }}
            />
          </div>

          {error && (
            <div
              style={{
                marginBottom: "20px",
                padding: "12px 14px",
                border: "1px solid #5a2525",
                background: "#1b0d0d",
                color: "#e88",
                fontSize: "13px",
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              border: "none",
              background: "#fff",
              color: "#000",
              cursor: loading ? "wait" : "pointer",
              fontSize: "14px",
              fontWeight: 600,
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}