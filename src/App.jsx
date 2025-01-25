import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
    const [inputValue, setInputValue] = useState('');
    const [view, setView] = useState('home'); // 'home', 'projects', or 'help'
    const [error, setError] = useState(''); // State for error message
    const inputRef = useRef(null); // Ref for the input field

    // Focus the input field on component mount
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const command = inputValue.trim();
            if (command === 'cd projects') {
                setView('projects');
                setError(''); // Clear error message
            } else if (command === 'cd home') {
                setView('home');
                setError(''); // Clear error message
            } else if (command === 'help') {
                setView('help');
                setError(''); // Clear error message
            } else {
                // Extract the first word of the command for the error message
                const firstWord = command.split(' ')[0];
                setError(
                    `ERROR: command "${firstWord}" not recognized. Type 'help' to see what you can do.`
                );
            }
            setInputValue(''); // Clear the input field
        }
    };

    return (
        <div className="min-h-screen bg-black text-green-400 font-ibm-plex-mono p-8">
            {/* Dynamic Content Based on View */}
            {view === 'home' ? (
                <div className="mb-8 text-left">
                    <p className="text-lg">Loading Ravindu's Portfolio...</p>
                    <p className="text-lg">Portfolio loaded successfully.</p>
                    <p className="text-xl mt-4">
                        Hello, I'm Ravindu Aratchige, a software developer.
                    </p>
                    <div className="mt-4">
                        <p className="text-green-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <p className="text-green-400 mt-2">
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </div>
                </div>
            ) : view === 'projects' ? (
                <div className="mb-8 text-left">
                    <h1 className="text-2xl font-bold">My Projects</h1>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">Project 1</h2>
                        <p className="text-green-400 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">Project 2</h2>
                        <p className="text-green-400 mt-2">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </p>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">Project 3</h2>
                        <p className="text-green-400 mt-2">
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </div>
            ) : (
                <div className="mb-8 text-left">
                    <h1 className="text-2xl font-bold">
                        Navigating Ravindu's Portfolio
                    </h1>
                    <div className="mt-4">
                        <p className="text-green-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </div>
                    <h2 className="text-xl font-semibold mt-6">
                        List of available commands
                    </h2>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="text-green-400">
                            <p>cd home</p>
                            <p>cd projects</p>
                            <p>help</p>
                        </div>
                        <div className="text-green-400">
                            <p>Navigate to the home page.</p>
                            <p>Navigate to the projects page.</p>
                            <p>Display this help message.</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Error Message Section */}
            {error && (
                <div className="fixed bottom-16 right-0 w-full bg-black p-4 border-t border-red-500">
                    <p className="text-red-500">{error}</p>
                </div>
            )}

            {/* Bottom Right Section */}
            <div className="fixed bottom-0 right-0 w-full bg-black p-4 border-t border-green-400">
                <div className="flex items-center text-left">
                    <label htmlFor="command" className="text-green-400 mr-2">
                        portfolio@ravindu-aratchige:
                    </label>
                    <input
                        type="text"
                        id="command"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                        className="flex-grow bg-black text-green-400 outline-none"
                        autoFocus
                        ref={inputRef} // Attach the ref to the input field
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
