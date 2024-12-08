const TopHeader = () => (
    <div className="bg-green-600 text-white py-2 text-sm">
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <span>(225) 555-0118</span>
                <span>michelle.rivera@example.com</span>
            </div>
            <div className="flex items-left space-x-4">
                <span>Follow Us and get a chance to win 80% off</span>
                <div className="flex space-x-2">
                    <a href="#" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" aria-label="YouTube">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a href="#" aria-label="Facebook">
                        <i className="fab fa-facebook"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default TopHeader;
