import { useState } from "react";
import "./App.css";
import { evaluate } from "mathjs";

function App() {
  // Use State variables
  const [expression, setExpression] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);
  const btnTxt = [
    { text: "C", value: "C", className: "col-span-2 !bg-sky-600 hover:!bg-slate-700 transition" },
    { text: "/", value: "/", className: "!bg-sky-600 hover:!bg-slate-700 transition" },
    { text: "*", value: "*", className: "!bg-sky-600 hover:!bg-slate-700 transition" },
    { text: "7", value: "7" },
    { text: "8", value: "8" },
    { text: "9", value: "9" },
    { text: "-", value: "-", className: "!bg-sky-600 hover:!bg-slate-700 transition" },
    { text: "4", value: "4" },
    { text: "5", value: "5" },
    { text: "6", value: "6" },
    { text: "+", value: "+", className: "!bg-sky-600 hover:!bg-slate-700 transition" },
    { text: "1", value: "1" },
    { text: "2", value: "2" },
    { text: "3", value: "3" },
    { text: "=", value: "=", className: "row-span-2" },
    { text: "0", value: "0", className: "col-span-2" },
    { text: ".", value: "." },
  ];

  function handleButtonClick(event) {
    const value = event.target.value;
    if (value === "C") {
      setExpression("");
      setIsCalculated(false);
      return;
    }

    if (value === "=") {
      try {
        const result = evaluate(expression);
        if (!isFinite(result)) {
          setExpression("Error: Division by zero");
          setIsCalculated(true);
          return;
        } else {
          setExpression(result.toString());
          setIsCalculated(true);
        }
      } catch (error) {
        setExpression("Error" + error.message);
      }
    } else {
      if (isCalculated) {
        if (value === "+" || value === "-" || value === "*" || value === "/") {
          setExpression((prev) => prev + value);
        } else {
          setExpression(value);
        }
        setIsCalculated(false);
      } else {
        if (value === "C") {
          setExpression("");
          setIsCalculated(false);
          return;
        } else {
          setExpression((prev) => prev + value);
        }
      }
    }
  }

  return (
    <>
      <div className="w-[320px] h-[450px] p-4 flex flex-col justify-start bg-slate-900 rounded-xl shadow gap-4">
        {/* Display Screen*/}
        <div className="w-full h-[15vh]">
          <textarea
            className=" font-['Abhaya_Libre'] font-bold w-full h-full p-4 text-2xl font-semibold resize-none overflow-y-auto break-words custom-scroll border border-slate-600 bg-transparent text-sky-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-300 transition "
            value={expression}
            readOnly
            placeholder="Start Calculating..."
          ></textarea>
        </div>

        {/* Buttons*/}
        <div className="grid grid-cols-4 grid-rows-4 gap-2 w-full flex-1">
          {btnTxt.map((btn) => (
            <button
              onClick={handleButtonClick}
              value={btn.value}
              className={` font-['Abhaya_Libre'] font-bold flex items-center justify-center text-2xl font-semibold font-semibold py-2 rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-sky-300 transition
                        ${
                          btn.text === "="
                            ? "bg-sky-300 text-slate-900 hover:bg-sky-400 transition"
                            : "bg-slate-600 text-sky-300 hover:bg-slate-700 hover:border-sky-300 transition"
                        } ${btn.className}`}
            >
              {btn.text}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer mt-4 text-center text-sm text-slate-800 text-lg">
        <p>
          Made with <span className="text-red-700"> &hearts;</span> by <br /> 
          Zeinab Hassan
        </p>
      </footer>
    </>
  );
}

export default App;
