import { Link } from '@tanstack/react-router';

export default function Header() {
    return (
        <header className="flex justify-between gap-2 border-b p-4">
            <nav className="flex flex-row px-2">
                <Link to="/" className="text-rose-400">
                    Home - List of Dog Breeds
                </Link>
            </nav>
        </header>
    );
}
