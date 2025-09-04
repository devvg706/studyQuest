import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavbarLinks } from '../../data/navbar-links'
import logo from '../../assests/Logo/StudyQuest-logo-transparent.png'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart, AiOutlineMenu } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { apiConnector } from '../../services/apiconnector'
import { categories } from '../../services/apis'
import { ACCOUNT_TYPE } from '../../utils/constants'

const Navbar = () => {
  const [CurrentLink, setCurrentLink] = useState(0)
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const { totalItems } = useSelector((state) => state.cart)
  const [subLinks, setSubLinks] = useState([])

  const fetchSubLinks = async () => {
    try {
      const result = await apiConnector('GET', categories.CATEGORIES_API)
      setSubLinks(result.data.data)
    } catch (error) {
      console.log('Could not fetch category list')
    }
  }

  useEffect(() => {
    fetchSubLinks()
  }, [])

  return (
    <div className="flex h-16 items-center justify-center border-b border-richblack-700 bg-richblack-900 shadow-md z-50 ">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="StudyQuest Logo"
            width={160}
            height={42}
            loading="lazy"
            className="object-contain hover:scale-105 transition-all duration-300"
          />
        </Link>

        {/* Navigation Links */}
        <nav >
          <ul className="hidden md:flex gap-x-8 text-richblack-25 text-sm font-medium">
            {NavbarLinks.map((link, index) => (
              <li
                key={index}
                onClick={() => setCurrentLink(index)}
                className="group relative cursor-pointer"
              >
                {link.title === 'Catalog' ? (
                  <div className="relative group">
                    <p className="flex items-center gap-1 hover:text-yellow-50 transition-colors">
                      {link.title}
                      <MdKeyboardArrowDown size={20} />
                    </p>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 z-[100] hidden w-[300px] -translate-x-1/2 mt-2 rounded-md bg-richblack-5 text-richblack-900 shadow-md group-hover:flex flex-col transition-all duration-300">
                      <div className="absolute top-0 left-[56%] -translate-x-[-1px] -translate-y-[40%] rotate-45 h-4 w-4 bg-richblack-5 z-0"></div>
                      {subLinks.length > 0 ? (
                        subLinks.map((subLink, subIndex) => (
                          <Link
                            key={subIndex}
                            to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
                            className="px-4 py-2 hover:bg-richblack-100 transition"
                          >
                            <p className="text-sm text-richblack-700 font-medium">{subLink.name}</p>
                          </Link>
                        ))
                      ) : (
                        <p className="px-4 py-2 text-sm text-richblack-400">Loading...</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={link.path}>
                    <p
                      className={`hover:text-yellow-25 transition ${
                        CurrentLink === index ? 'text-yellow-25' : 'text-richblack-5'
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right section (Cart / Auth) */}
        <div className="hidden md:flex items-center gap-x-4">
          {/* Cart Icon */}
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center rounded-full bg-richblack-600 text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}

          {/* Login & Signup */}
          {!token && (
            <>
              <Link to="/login">
                <button className="rounded-lg border border-richblack-700 bg-richblack-800 px-4 py-2 text-sm text-richblack-100 hover:bg-richblack-700 transition">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="rounded-lg border border-richblack-700 bg-richblack-800 px-4 py-2 text-sm text-richblack-100 hover:bg-richblack-700 transition">
                  Sign up
                </button>
              </Link>
            </>
          )}

          {/* Profile Dropdown */}
          {token && <ProfileDropDown />}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-richblack-200">
            <AiOutlineMenu fontSize={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
