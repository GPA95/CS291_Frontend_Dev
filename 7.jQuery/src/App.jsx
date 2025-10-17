import { useEffect } from "react";
import './App.css';

function App() {
    useEffect(() => {
        const newParagraph = document.createElement("p");
        newParagraph.textContent = "This is a new paragraph appended to the end of the body.";
        document.body.appendChild(newParagraph);

        const newHeading = document.createElement("h1");
        newHeading.textContent = "This is a new heading prepended to the beginning of the body.";
        document.body.insertBefore(newHeading, document.body.firstChild);
    }, []);

    return (
        <div>
            <h2>Existing content</h2>
            <p>This is the existing content of the body.</p>
        </div>
    );
}

export default App;
