import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center space-y-12 py-12">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
          Find Your Match in <span className="text-rose-600">Kenya</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Location-based dating for Kenyans. Connect with people nearby by county, interests, tribe, lifestyle, and more.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/signup"
            className="bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-700 transition"
          >
            Get Started Free
          </Link>
          <Link
            href="/discover"
            className="border-2 border-rose-600 text-rose-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-50 transition"
          >
            See Nearby
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="text-4xl mb-4">📍</div>
          <h3 className="text-xl font-semibold mb-2">Location Matching</h3>
          <p className="text-gray-600">GPS-powered discovery. Match by distance, county (Nairobi, Mombasa, Kisumu...), or town.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="text-4xl mb-4">❤️</div>
          <h3 className="text-xl font-semibold mb-2">Smart Filters</h3>
          <p className="text-gray-600">Filter by age, tribe, religion, interests, lifestyle, student/professional/church mode.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="text-4xl mb-4">💬</div>
          <h3 className="text-xl font-semibold mb-2">Real-time Chat</h3>
          <p className="text-gray-600">Match and chat instantly. Safety features, report system, and premium options.</p>
        </div>
      </div>

      <div className="bg-rose-600 text-white p-8 rounded-3xl mt-12">
        <h2 className="text-3xl font-bold mb-4">Localized for Kenya</h2>
        <p className="text-lg opacity-90">
          Sheng vibes, M-Pesa ready (coming soon), county-based matching, and community modes.
        </p>
      </div>
    </div>
  );
}
