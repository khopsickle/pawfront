import { Link } from '@tanstack/react-router';

export default function Header() {
    return (
        <header className="flex justify-between gap-2 bg-white p-4 shadow-md outline outline-black/5">
            <nav className="flex flex-row px-2">
                <Link to="/" className="text-3xl font-bold">
                    Pawfront
                </Link>
            </nav>
        </header>
    );
}
