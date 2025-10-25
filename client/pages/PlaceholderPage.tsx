import { Link } from 'react-router-dom';

interface PlaceholderPageProps {
  pageName: string;
}

export default function PlaceholderPage({ pageName }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-[#FC6297]">
      {/* Header */}
      <header className="px-4 sm:px-8 lg:px-12 py-6 lg:py-10">
        <div className="max-w-[1512px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2.5">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/bb9fdd1f7b17f11002a515bd3e7ca4d337387cb8?width=140" 
              alt="GlazedBySena Logo" 
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[70px] lg:h-[70px]"
            />
            <h1 className="font-gorditas text-2xl sm:text-3xl lg:text-4xl text-[#0C0B0B]">
              GlazedBySena
            </h1>
          </Link>

          <nav className="flex items-center gap-4 sm:gap-6 lg:gap-8">
            <Link to="/" className="font-inter text-base sm:text-lg lg:text-xl xl:text-2xl text-black hover:underline">
              Home
            </Link>
            <Link to="/menu" className={`font-inter text-base sm:text-lg lg:text-xl xl:text-2xl text-black hover:underline ${pageName === 'Menu' ? 'font-bold underline' : ''}`}>
              Menu
            </Link>
            <Link to="/our-story" className={`font-inter text-base sm:text-lg lg:text-xl xl:text-2xl text-black hover:underline ${pageName === 'Our Story' ? 'font-bold underline' : ''}`}>
              Our Story
            </Link>
            <Link to="/recipes" className={`font-inter text-base sm:text-lg lg:text-xl xl:text-2xl text-black hover:underline ${pageName === 'Recipes' ? 'font-bold underline' : ''}`}>
              Recipes
            </Link>
          </nav>

          <button className="px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full bg-[#FF0788] hover:bg-[#E0066D] text-white font-inter text-lg sm:text-xl lg:text-2xl xl:text-3xl transition-all hover:scale-105">
            Contact
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-8 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-gorditas text-5xl sm:text-6xl lg:text-7xl text-[#0C0B0B] mb-8">
            {pageName}
          </h2>
          <p className="font-inter text-2xl sm:text-3xl text-white mb-12">
            This page is coming soon! Continue prompting to help us build out this section.
          </p>
          <Link 
            to="/"
            className="inline-block px-12 py-6 rounded-full bg-[#FF0788] hover:bg-[#E0066D] text-white font-inter text-2xl transition-all hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
