import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
    const [inputValue, setInputValue] = useState('');
    const [view, setView] = useState('home'); // 'home', 'projects', or 'help'
    const [error, setError] = useState(''); // State for error message
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [loadingText, setLoadingText] = useState('Initializing assets...'); // Loading text
    const [progress, setProgress] = useState(0); // Progress bar state
    const inputRef = useRef(null); // Ref for the input field

    const totalRectangles = 60; // Number of rectangles (divisible by 3)
    const rectanglesPerThird = totalRectangles / 3; // Rectangles per third

    // Focus the input field when loading is complete
    useEffect(() => {
        if (!isLoading && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isLoading]);

    // Update loading text when progress reaches a third
    useEffect(() => {
        if (isLoading) {
            const loadingTexts = [
                'Initializing assets...',
                'Setting up portfolio...',
                'Almost there...',
            ];
            const currentTextIndex = Math.floor(progress / rectanglesPerThird);
            if (currentTextIndex < loadingTexts.length) {
                setLoadingText(loadingTexts[currentTextIndex]);
            }
        }
    }, [progress, isLoading, rectanglesPerThird]);

    // Handle loading animation
    useEffect(() => {
        if (isLoading) {
            const interval = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress >= totalRectangles) {
                        clearInterval(interval);
                        setIsLoading(false); // End loading
                        return totalRectangles;
                    }
                    return prevProgress + 1; // Increment progress
                });
            }, 100); // Update every 100ms for slower animation

            return () => clearInterval(interval); // Cleanup
        }
    }, [isLoading, totalRectangles]);

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
                // const firstWord = command.split(' ')[0];
                setError(
                    `ERROR: Unrecognized command. Type 'help' to see what you can do.`
                );
            }
            setInputValue(''); // Clear the input field
        }
    };

    // Dummy projects data
    const projects = [
        {
            project: 'Project 1',
            description: 'A web application for task management.',
            status: '200 OK COMPLETE',
        },
        {
            project: 'Project 2',
            description: 'A mobile app for fitness tracking.',
            status: '202 IN PROGRESS',
        },
        {
            project: 'Project 3',
            description: 'A machine learning model for sentiment analysis.',
            status: '200 OK COMPLETE',
        },
        {
            project: 'Project 4',
            description: 'A blockchain-based voting system.',
            status: '202 IN PROGRESS',
        },
        {
            project: 'Project 5',
            description: 'A REST API for e-commerce platforms.',
            status: '200 OK COMPLETE',
        },
        {
            project: 'Project 6',
            description: 'A game development project using Unity.',
            status: '202 IN PROGRESS',
        },
        {
            project: 'Project 7',
            description: 'A data visualization dashboard.',
            status: '200 OK COMPLETE',
        },
        {
            project: 'Project 8',
            description: 'A chatbot for customer support.',
            status: '202 IN PROGRESS',
        },
        {
            project: 'Project 9',
            description: 'A cloud-based file storage system.',
            status: '200 OK COMPLETE',
        },
        {
            project: 'Project 10',
            description: 'A real-time chat application.',
            status: '202 IN PROGRESS',
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white font-ibm-plex-mono p-8">
            {/* Loading Screen */}
            {isLoading ? (
                <div className="fixed inset-0 flex flex-col justify-end p-8">
                    <p className="text-lg mb-4">{loadingText}</p>
                    <div className="flex space-x-1">
                        {Array.from({ length: totalRectangles }).map(
                            (_, index) => (
                                <div
                                    key={index}
                                    className={`flex-1 h-8 border ${
                                        progress > index
                                            ? 'bg-green-500 border-green-500' // Filled
                                            : 'border-white' // Empty
                                    }`}
                                />
                            )
                        )}
                    </div>
                </div>
            ) : (
                <>
                    {/* Dynamic Content Based on View */}
                    {view === 'home' ? (
                        <div className="mb-8 text-left">
                            <pre className="text-white text-sm mt-4">
                                {`
██████   █████  ██    ██ ██ ███    ██ ██████  ██    ██      █████  ██████   █████  ████████  ██████ ██   ██ ██  ██████  ███████ 
██   ██ ██   ██ ██    ██ ██ ████   ██ ██   ██ ██    ██     ██   ██ ██   ██ ██   ██    ██    ██      ██   ██ ██ ██       ██      
██████  ███████ ██    ██ ██ ██ ██  ██ ██   ██ ██    ██     ███████ ██████  ███████    ██    ██      ███████ ██ ██   ███ █████   
██   ██ ██   ██  ██  ██  ██ ██  ██ ██ ██   ██ ██    ██     ██   ██ ██   ██ ██   ██    ██    ██      ██   ██ ██ ██    ██ ██      
██   ██ ██   ██   ████   ██ ██   ████ ██████   ██████      ██   ██ ██   ██ ██   ██    ██     ██████ ██   ██ ██  ██████  ███████ 
                                `}
                            </pre>
                            <p className="text-xl mt-4">
                                WELCOME TO MY PORTFOLIO!
                            </p>
                            <div className="mt-4">
                                <p className="text-white">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                                <p className="text-white mt-2">
                                    Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    ) : view === 'projects' ? (
                        <div className="mb-8 text-left">
                            <h1 className="text-2xl font-bold">My Projects</h1>
                            <div className="mt-4">
                                <p className="text-white">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                            {/* Projects Table */}
                            <div className="mt-6">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="font-semibold">Project</div>
                                    <div className="font-semibold">
                                        Description
                                    </div>
                                    <div className="font-semibold">Status</div>
                                </div>
                                <div className="border-b border-dashed border-white my-2"></div>
                                {projects.map((project, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-3 gap-4 py-2 hover:bg-green-500 hover:text-black transition-colors duration-200"
                                    >
                                        <div>{project.project}</div>
                                        <div>{project.description}</div>
                                        <div>{project.status}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="mb-8 text-left">
                            <h1 className="text-2xl font-bold">
                                Navigating Ravindu's Portfolio
                            </h1>
                            <div className="mt-4">
                                <p className="text-white">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            </div>
                            <h2 className="text-xl font-semibold mt-6">
                                List of available commands
                            </h2>
                            <div className="mt-4 grid grid-cols-2 gap-4">
                                <div className="text-white">
                                    <p>cd home</p>
                                    <p>cd projects</p>
                                    <p>help</p>
                                </div>
                                <div className="text-white">
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
                    <div className="fixed bottom-0 right-0 w-full bg-black p-4 border-t border-white">
                        <div className="flex items-center text-left">
                            <label
                                htmlFor="command"
                                className="text-white mr-2"
                            >
                                portfolio@ravindu-aratchige:
                            </label>
                            <input
                                type="text"
                                id="command"
                                value={inputValue}
                                onChange={handleInputChange}
                                onKeyPress={handleKeyPress}
                                className="flex-grow bg-black text-white outline-none"
                                autoFocus
                                ref={inputRef} // Attach the ref to the input field
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
