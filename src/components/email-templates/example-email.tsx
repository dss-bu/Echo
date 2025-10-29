interface SimpleWelcomeEmailProps {
  name: string;
  appName?: string;
  loginUrl?: string;
}

export function SimpleWelcomeEmail({
  name,
  appName = "Example",
  loginUrl = "https://example.com/login",
}: SimpleWelcomeEmailProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#ffffff",
        color: "#333",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ color: "#4f46e5", textAlign: "center" }}>
        Welcome to {appName}!
      </h2>

      <p>Hi {name},</p>

      <p>
        Thanks for joining <strong>{appName}</strong>! We’re happy to have you
        onboard. You can log in anytime using the button below.
      </p>

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <a
          href={loginUrl}
          style={{
            backgroundColor: "#4f46e5",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Log In
        </a>
      </div>

      <p style={{ fontSize: "14px", color: "#555" }}>
        If you have any questions, just reply to this email — we’d love to help!
      </p>

      <p style={{ marginTop: "30px" }}>
        Cheers,
        <br />
        <strong>The {appName} Team</strong>
      </p>
    </div>
  );
}
