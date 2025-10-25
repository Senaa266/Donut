import { useState } from "react";
import { Link } from "react-router-dom";

const donuts = [
  {
    id: "raspberry",
    name: "Raspberry Donut",
    description:
      "A tangy raspberry-glazed donut with a glossy sheen balancing sweetness with a refreshing berry zing.",
    bgColor: "#FC6297",
    glowColor: "#FF8EB5",
    buttonColor: "#FF0788",
    buttonHoverColor: "#E0066D",
    mainImage:
      "https://api.builder.io/api/v1/image/assets/TEMP/fa213cb90c2c5fb2dd466bf6d80b5410557b0748?width=1600",
    thumbnail:
      "https://api.builder.io/api/v1/image/assets/TEMP/b032e7a3acc7ad0983ef1327805ff4915121a1ef?width=500",
    thumbnails: [
      "https://api.builder.io/api/v1/image/assets/TEMP/b032e7a3acc7ad0983ef1327805ff4915121a1ef?width=500",
      "https://api.builder.io/api/v1/image/assets/TEMP/8b9e56d991b0ea9fbbfb78c7eca2a49f358328eb?width=280",
      "https://api.builder.io/api/v1/image/assets/TEMP/b0bec4217cbcc44286d354540437e41122161325?width=300",
    ],
  },
  {
    id: "blueberry",
    name: "Blueberry Donut",
    description:
      "A fluffy donut infused with juicy blueberry flavor, topped with a smooth glaze and a hint of lemon zest for a bright, fruity finish.",
    bgColor: "#A664FC",
    glowColor: "#C195F9",
    buttonColor: "#AC09FE",
    buttonHoverColor: "#9108DB",
    mainImage:
      "https://api.builder.io/api/v1/image/assets/TEMP/ff1602a24ca05c856bcd7b2cc1efb4000b00bbb4?width=1600",
    thumbnail:
      "https://api.builder.io/api/v1/image/assets/TEMP/9d6f1146f2ede538afdb88287876a83d9c2ad367?width=500",
    thumbnails: [
      "https://api.builder.io/api/v1/image/assets/TEMP/74f6645f55579267a005b6dddf092eaad7c158d5?width=300",
      "https://api.builder.io/api/v1/image/assets/TEMP/8b9e56d991b0ea9fbbfb78c7eca2a49f358328eb?width=280",
      "https://api.builder.io/api/v1/image/assets/TEMP/9d6f1146f2ede538afdb88287876a83d9c2ad367?width=500",
    ],
  },
  {
    id: "chocolate",
    name: "Chocolate Donut",
    description:
      "Rich, velvety chocolate donut coated in a dark cocoa glaze and sprinkled with chocolate flakes — pure indulgence for true cocoa lovers.",
    bgColor: "#613A13",
    glowColor: "#EEAA66",
    buttonColor: "#3A1F03",
    buttonHoverColor: "#2A1602",
    mainImage:
      "https://api.builder.io/api/v1/image/assets/TEMP/eaefca3ccb88649b23f29be3180e9d68282411a7?width=1612",
    thumbnail:
      "https://api.builder.io/api/v1/image/assets/TEMP/0c3716ec4ffe387303e3e2a31762da8bf7bed702?width=480",
    thumbnails: [
      "https://api.builder.io/api/v1/image/assets/TEMP/74f6645f55579267a005b6dddf092eaad7c158d5?width=300",
      "https://api.builder.io/api/v1/image/assets/TEMP/0c3716ec4ffe387303e3e2a31762da8bf7bed702?width=480",
      "https://api.builder.io/api/v1/image/assets/TEMP/b0bec4217cbcc44286d354540437e41122161325?width=300",
    ],
  },
];

export default function Index() {
  const [activeDonut, setActiveDonut] = useState(0);
  const currentDonut = donuts[activeDonut];

  return (
    <div
      className="min-h-screen transition-colors duration-700 ease-in-out"
      style={{ backgroundColor: currentDonut.bgColor }}
    >
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
            <Link
              to="/"
              className="font-inter text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-black underline"
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="font-inter text-base sm:text-lg lg:text-xl xl:text-2xl text-black hover:underline"
            >
              Menu
            </Link>
            <Link
              to="/our-story"
              className="font-inter text-base sm:text-lg lg:text-xl xl:text-2xl text-black hover:underline"
            >
              Our Story
            </Link>
            <Link
              to="/recipes"
              className="font-inter text-base sm:text-lg lg:text-xl xl:text-2xl text-black hover:underline"
            >
              Recipes
            </Link>
          </nav>

          <button
            className="px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full text-white font-inter text-lg sm:text-xl lg:text-2xl xl:text-3xl transition-all hover:scale-105"
            style={{ backgroundColor: currentDonut.buttonColor }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                currentDonut.buttonHoverColor)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = currentDonut.buttonColor)
            }
          >
            Contact
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-8 lg:px-12 pb-8 lg:pb-16">
        <div className="max-w-[1512px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1">
              <h2 className="font-gorditas text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-tight text-[#0C0B0B]">
                {currentDonut.name.split(" ")[0]}
                <br />
                {currentDonut.name.split(" ")[1]}
              </h2>

              <p className="font-inter text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white max-w-[688px] leading-relaxed">
                {currentDonut.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 pt-4">
                <button
                  className="px-10 sm:px-12 lg:px-[43px] py-5 sm:py-6 lg:py-[25px] rounded-full text-white font-inter text-xl sm:text-2xl lg:text-3xl xl:text-[32px] transition-all hover:scale-105 w-full sm:w-auto"
                  style={{ backgroundColor: currentDonut.buttonColor }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      currentDonut.buttonHoverColor)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      currentDonut.buttonColor)
                  }
                >
                  Order Now
                </button>
                <button className="px-10 sm:px-12 lg:px-[39px] py-5 sm:py-6 lg:py-[25px] rounded-full text-black font-inter text-xl sm:text-2xl lg:text-3xl xl:text-[32px] border-4 border-[#070707] bg-transparent transition-all hover:scale-105 hover:bg-white/10 w-full sm:w-auto">
                  View Menu
                </button>
              </div>

              {/* Donut Thumbnails */}
              <div className="flex gap-3 sm:gap-4 pt-8 sm:pt-12 lg:pt-16 justify-center lg:justify-start">
                {donuts.map((donut, index) => (
                  <button
                    key={donut.id}
                    onClick={() => setActiveDonut(index)}
                    className={`rounded-full transition-all hover:scale-110 ${
                      activeDonut === index
                        ? "ring-4 ring-white scale-110"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={donut.thumbnail}
                      alt={donut.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content - Donut Image */}
            <div className="relative flex items-center justify-center order-1 lg:order-2 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-full transition-all duration-700 ease-in-out"
                style={{
                  background: `radial-gradient(circle, ${currentDonut.glowColor} 0%, transparent 70%)`,
                  filter: "blur(80px)",
                  transform: "scale(0.8)",
                }}
              />

              {/* Main Donut Image */}
              <img
                src={currentDonut.mainImage}
                alt={currentDonut.name}
                className="relative z-10 w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] h-auto object-contain transition-all duration-700 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
