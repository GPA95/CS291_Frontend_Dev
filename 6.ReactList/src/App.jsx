import "./App.css";

export default function App() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
      <div>
          <h1>Days of the Week</h1>
          <ul>
              {days.map((item, index) => (
                  <li key={index}>{item}</li>
              ))}
          </ul>
      </div>
  );
}
