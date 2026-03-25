function App() {
  return (
    <main className="card">
      <h1>Hello from React</h1>
      <p>This React file is now part of your Node.js project.</p>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
