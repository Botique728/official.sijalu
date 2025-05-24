import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="py-4 px-4 md:px-8 border-b bg-white sticky top-0 z-50" data-id="kjdzglbgw" data-path="src/components/Header.tsx">
      <div className="container mx-auto flex justify-between items-center" data-id="km1l6tsib" data-path="src/components/Header.tsx">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-sijalu-primary flex items-center justify-center" data-id="77w9jdhfu" data-path="src/components/Header.tsx">
            <span className="text-white font-bold text-xl" data-id="ms7sjbgw6" data-path="src/components/Header.tsx">SJ</span>
          </div>
          <h1 className="text-xl font-bold text-sijalu-green" data-id="z7djn5z9l" data-path="src/components/Header.tsx">Si Jalu</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-1" data-id="7dlnis62q" data-path="src/components/Header.tsx">
          <Button
            variant={isActive('/') ? "default" : "ghost"}
            className={isActive('/') ? "bg-sijalu-primary text-white" : ""}
            asChild>

            <Link to="/">Home</Link>
          </Button>
          <Button
            variant={isActive('/about') ? "default" : "ghost"}
            className={isActive('/about') ? "bg-sijalu-primary text-white" : ""}
            asChild>

            <Link to="/about">About Us</Link>
          </Button>
          <Button
            variant={isActive('/products') ? "default" : "ghost"}
            className={isActive('/products') ? "bg-sijalu-primary text-white" : ""}
            asChild>

            <Link to="/products">Products</Link>
          </Button>
          <Button
            variant={isActive('/team') ? "default" : "ghost"}
            className={isActive('/team') ? "bg-sijalu-primary text-white" : ""}
            asChild>

            <Link to="/team">Our Team</Link>
          </Button>
          
          {isAuthenticated ?
          <>
              <Button
              variant={isActive('/dashboard') ? "default" : "ghost"}
              className={isActive('/dashboard') ? "bg-sijalu-primary text-white" : ""}
              asChild>

                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button
              variant="outline"
              className="border-sijalu-green text-sijalu-green hover:bg-sijalu-green hover:text-white"
              onClick={logout}>

                Logout
              </Button>
            </> :

          <>
              <Button
              variant={isActive('/login') ? "default" : "outline"}
              className={isActive('/login') ?
              "bg-sijalu-primary text-white" :
              "border-sijalu-primary text-sijalu-primary hover:bg-sijalu-primary hover:text-white"
              }
              asChild>

                <Link to="/login">Log In</Link>
              </Button>
              <Button
              variant={isActive('/signup') ? "default" : "default"}
              className={isActive('/signup') ?
              "bg-sijalu-green text-white" :
              "bg-sijalu-green text-white hover:bg-sijalu-green/90"
              }
              asChild>

                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          }
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} data-id="bzyoqgcf2" data-path="src/components/Header.tsx">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor" data-id="8q673wvp3" data-path="src/components/Header.tsx">

            {isMobileMenuOpen ?
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" data-id="t7oae3gmd" data-path="src/components/Header.tsx" /> :

            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" data-id="5hzjdd17u" data-path="src/components/Header.tsx" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen &&
      <div className="md:hidden mt-4 p-4 bg-white rounded-md shadow-lg fixed left-0 right-0 z-50" data-id="8e7l44xwx" data-path="src/components/Header.tsx">
          <nav className="flex flex-col space-y-2" data-id="c5ue9nagu" data-path="src/components/Header.tsx">
            <Link
            to="/"
            className={`px-4 py-2 rounded ${isActive('/') ? 'bg-sijalu-primary text-white' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}>

              Home
            </Link>
            <Link
            to="/about"
            className={`px-4 py-2 rounded ${isActive('/about') ? 'bg-sijalu-primary text-white' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}>

              About Us
            </Link>
            <Link
            to="/products"
            className={`px-4 py-2 rounded ${isActive('/products') ? 'bg-sijalu-primary text-white' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}>

              Products
            </Link>
            <Link
            to="/team"
            className={`px-4 py-2 rounded ${isActive('/team') ? 'bg-sijalu-primary text-white' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}>

              Our Team
            </Link>
            
            {isAuthenticated ?
          <>
                <Link
              to="/dashboard"
              className={`px-4 py-2 rounded ${isActive('/dashboard') ? 'bg-sijalu-primary text-white' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}>

                  Dashboard
                </Link>
                <button
              className="px-4 py-2 text-left text-sijalu-green hover:bg-sijalu-green hover:text-white rounded"
              onClick={() => {
                logout();
                setIsMobileMenuOpen(false);
              }} data-id="nbct2e2bn" data-path="src/components/Header.tsx">

                  Logout
                </button>
              </> :

          <>
                <Link
              to="/login"
              className="px-4 py-2 text-sijalu-primary border border-sijalu-primary rounded"
              onClick={() => setIsMobileMenuOpen(false)}>

                  Log In
                </Link>
                <Link
              to="/signup"
              className="px-4 py-2 bg-sijalu-green text-white rounded"
              onClick={() => setIsMobileMenuOpen(false)}>

                  Sign Up
                </Link>
              </>
          }
          </nav>
        </div>
      }
    </header>);

};

export default Header;