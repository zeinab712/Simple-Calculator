function Button({ text, value, onClick }) {
    return (
        <>
        <button
            onClick={onClick}
            value={value}
            className={` font-['Abhaya_Libre'] font-bold flex items-center justify-center text-2xl font-semibold font-semibold py-2 rounded border border-transparent focus:outline-none focus:ring-2 focus:ring-sky-300 transition
                        ${
                        text === "="
                            ? "bg-sky-300 text-slate-900 hover:bg-sky-400"
                            : "bg-slate-600 text-sky-300 hover:bg-slate-700 hover:border-sky-300"
                        }`}
        >
            {text}
        </button>
        </>
    );
}

export default Button;
