export default function Footer() {
  return (
    <footer className="py-4 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-sm">
          <p className="text-green-300">&copy; 2024 Aeebee All rights reserved.</p>
          <div className="space-x-4">
            <a href="/Abhishek_Soni_July_2024.pdf" download className="text-green-500 hover:text-green-400 transition-colors">
              Download Resume
            </a>
            <a href="mailto:work.abhisheksoni@gmail.com" className="text-green-500 hover:text-green-400 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}