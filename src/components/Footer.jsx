import logo from '../assets/images/logo.png';

function Footer() {
    return (
        <footer className="bg-black text-white py-8">
        <div className="flex justify-center items-center">
            {/* Phone Mockup */}
            <div className="mr-8">
            <div className="bg-green-600 w-32 h-64 rounded-lg flex items-center justify-center">
                <img src={logo} alt="Agro Jaya" className="w-16 h-16" />
            </div>
            </div>
            
            {/* Links */}
            <div className="text-center">
            <div className="flex space-x-8 mb-6">
                <a href="#informasi-aplikasi" className="text-white hover:text-gray-400">Informasi Aplikasi</a>
                <a href="#akses-link" className="text-white hover:text-gray-400">Akses Link</a>
            </div>
            <p className="text-sm text-gray-400 mt-4">
                Copyright AgroJaya 2024, all rights reserved
            </p>
            </div>
        </div>
        </footer>
    );
}

export default Footer;

