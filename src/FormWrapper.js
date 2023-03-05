export default function FormWrapper({ title, children }) {
  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>{title}</h2>
      <div
        style={{
          display: "grid",
          gap: "1rem 0.5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 400px)",
        }}
      >
        {children}
      </div>
    </>
  );
}
