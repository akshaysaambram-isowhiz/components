import { StarIcon } from "lucide-react";

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    name: "Briar Martin",
    location: "San Francisco, USA",
    testimonial:
      "I've rented cars from Radiant for years and they never disappoint. Their service is top-notch and the cars are always in great condition.",
    rating: 5,
    review: "Absolutely love the convenience and quality of service!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    name: "Avery Johnson",
    location: "Barcelona, Spain",
    testimonial:
      "Radiant has transformed the way I travel. Their app is so easy to use, and I love the variety of cars available. It makes planning trips a breeze.",
    rating: 4,
    review: "A great experience overall. Would definitely recommend.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    name: "Jordan Lee",
    location: "New York, USA",
    testimonial:
      "Radiant has been a game-changer for my business trips. The convenience of picking up a car right at the airport is unbeatable, and their customer service is always helpful.",
    rating: 5,
    review: "Fantastic service every time I book!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
    name: "Avery Johnson",
    location: "Los Angeles, USA",
    testimonial:
      "I highly recommend Radiant to anyone looking for a reliable car rental service. Their prices are competitive, and the quality of their vehicles is excellent.",
    rating: 4,
    review: "Good value for money and friendly staff.",
  },
];

export default function TestimonialPage() {
  return (
    <div className="h-full p-2">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Testimonials</h1>
        <p className="text-muted-foreground text-xs">
          Check out what our customers have to say about Radiant!
        </p>
      </div>
      <div className="h-full overflow-y-scroll">
        <style>
          {`
          @keyframes marqueeScroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee-inner {
            animation: marqueeScroll 25s linear infinite;
          }
          .marquee-reverse {
            animation-direction: reverse;
          }`}
        </style>

        <div className="marquee-row relative mx-auto w-full max-w-5xl overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20"></div>
          <div className="marquee-inner flex min-w-[200%] transform-gpu pt-5 pb-2">
            {[...data, ...data].map((card, index) => (
              <TestimonialCard key={index} card={card} />
            ))}
          </div>
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 md:w-40"></div>
        </div>

        <div className="marquee-row relative mx-auto w-full max-w-5xl overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20"></div>
          <div className="marquee-inner marquee-reverse flex min-w-[200%] transform-gpu pt-5 pb-2">
            {[...data, ...data].map((card, index) => (
              <TestimonialCard key={index} card={card} />
            ))}
          </div>
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 md:w-40"></div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ card }: Readonly<{ card: (typeof data)[number] }>) {
  return (
    <div className="bg-card-foreground mx-2 w-72 shrink-0 rounded-lg p-4 shadow transition-all duration-200 hover:shadow-lg">
      <div className="flex gap-2">
        <img className="size-11 rounded-full" src={card.image} alt="User" />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p className="text-background">{card.name}</p>
            <svg
              className="mt-0.5"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"
                fill="#2196F3"
              />
            </svg>
          </div>
          <span className="items-start text-xs text-slate-500">
            {card.location}
          </span>
        </div>
      </div>

      <p className="py-4 text-sm text-gray-800">{card.testimonial}</p>

      <div className="mt-2 flex justify-start gap-1">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <StarIcon key={index} className="size-4 fill-amber-400" />
          ))}
      </div>

      <p className="mt-2 max-w-90 text-gray-500">"{card.review}"</p>
    </div>
  );
}
