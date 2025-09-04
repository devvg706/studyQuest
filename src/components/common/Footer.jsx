import {Link} from "react-router-dom"
import { Facebook, Twitter, Youtube } from "lucide-react"

export default function StudyNotionFooter() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-12 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">S</span>
              </div>
              <span className="text-white font-semibold text-lg hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-pointer">
                StudyQuest
              </span>
            </div>
            <h3 className="text-white font-semibold mb-4 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-pointer">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Affiliates
                </Link>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <Facebook className="w-5 h-5 hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-pointer" />
              <div className="w-5 h-5 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-pointer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </div>
              <Twitter className="w-5 h-5 hover:text-blue-600 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-pointer" />
              <Youtube className="w-5 h-5 hover:text-red-50 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-pointer" />
            </div>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-pointer">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Chart Sheet
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Code challenges
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Videos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Workspaces
                </Link>
              </li>
            </ul>
          </div>

          {/* Plans & Community Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-pointer">
              Plans
            </h3>
            <ul className="space-y-2 mb-8">
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Paid memberships
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  For students
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Business solutions
                </Link>
              </li>
            </ul>

            <h3 className="text-white font-semibold mb-4 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-pointer">
              Community
            </h3>
            <ul className="space-y-2 mb-8">
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Forums
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Chapters
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Events
                </Link>
              </li>
            </ul>

            <h3 className="text-white font-semibold mb-4 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-pointer">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Subjects Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-pointer">
              Subjects
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  AI
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Cloud Computing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Code Foundations
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Computer Science
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Data Science
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Data Visualization
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Developer Tools
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  DevOps
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Game Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  IT
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Math
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Web Design
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Languages Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-pointer">
              Languages
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Bash
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  C++
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  C#
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Go
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  HTML & CSS
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Java
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  JavaScript
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Kotlin
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  PHP
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Python
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  R
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Ruby
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  SQL
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Swift
                </Link>
              </li>
            </ul>
          </div>

          {/* Career Building Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 cursor-pointer">
              Career building
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Career paths
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Career services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Interview prep
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Professional certification
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  -
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Full Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
                >
                  Beta Content
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
