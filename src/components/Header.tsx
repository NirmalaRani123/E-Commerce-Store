import Link from 'next/link';

const Header = () => (
    <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4">
            {/* Logo */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800">
                    <Link href="/">Bandage</Link>
                </h1>
            </div>

            {/* Navigation */}
            <nav>
                <ul className="flex space-x-6">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/shop">Shop</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/pages">Pages</Link></li>
                </ul>
            </nav>

            {/* Action Icons */}
            <div className="flex items-center space-x-4">
                <Link href="/login" className="text-gray-600">Login / Register</Link>
                <i className="fas fa-search text-gray-600"></i>
                <i className="fas fa-shopping-cart text-gray-600"></i>
                <i className="fas fa-heart text-gray-600"></i>
            </div>
        </div>
    </header>
);

export default Header;
