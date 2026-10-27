import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <header className="bg-gray-900 text-white shadow-md"
        >
            <nav className="container mx-auto flex items-center justify-between px-6 py-4"
            >
                <div className="hidden md:flex items-center space-x-8"
                >
                    <Link to="/" className="text-sm font-medium transition-colors hover:text-blue-400">Home
                    </Link>
                    <Link to="/DispacherPage" className="text-sm font-medium transition-colors hover:text-blue-400">Dispacher
                    </Link>
                    <Link to="/RequesterPage" className="text-sm font-medium transition-colors hover:text-blue-400">Requester
                    </Link>
                    <Link to="/ResponderPage" className="text-sm font-medium transition-colors hover:text-blue-400">Responder
                    </Link>
                </div>
            </nav>
        </header>
    );
}