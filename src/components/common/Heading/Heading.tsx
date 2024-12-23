const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="mb-4" style={{ fontSize: "20px" }}>
      {children}
    </h2>
  );
};

export default Heading;
