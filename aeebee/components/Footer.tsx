export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-green-300 mb-4 sm:mb-0">&copy; 2024 Aeebee All rights reserved.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/Abhishek_Soni_July_2024.pdf" download className="text-green-500 hover:text-green-400 transition-colors text-center sm:text-left">
              Download Resume
            </a>
            <a href="mailto:work.abhisheksoni@gmail.com" className="text-green-500 hover:text-green-400 transition-colors text-center sm:text-left">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}