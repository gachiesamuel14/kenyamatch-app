"use client";

import { useEffect, useState } from "react";

const mockProfiles = [
  { id: 1, name: "Amina", age: 24, county: "Nairobi", distance: "2.3 km", bio: "Coffee lover, techie, loves hiking in Ngong.", interests: ["Music", "Travel", "Food"] },
  { id: 2, name: "Brian", age: 28, county: "Kiambu", distance: "5.1 km", bio: "Entrepreneur, church guy, looking for something real.", interests: ["Business", "Faith", "Sports"] },
  { id: 3, name: "Faith", age: 22, county: "Nairobi", distance: "1.8 km", bio: "Student at UoN, Sheng queen, foodie.", interests: ["Movies", "Cooking", "Nightlife"] },
  { id: 4, name: "David", age: 30, county: "Mombasa", distance: "12 km", bio: "Coastal vibes, professional, family-oriented.", interests: ["Beach", "Work", "Family"] },
];

export default function Discover() {
  const [location, setLocation] = useState<string>("Requesting location...");
  const [error, setError] = useState("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation(`Lat: ${pos.coords.latitude.toFixed(4)}, Lng: ${pos.coords.longitude.toFixed(4)}`);
        },
        () => setError("Location permission denied. Using mock nearby profiles.")
      );
    } else {
      setError("Geolocation not supported.");
    }
  }, []);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Discover Nearby</h1>
        <p className="text-gray-600 mt-2">Location: {location}</p>
        {error && <p className="text-amber-600 text-sm mt-1">{error}</p>}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProfiles.map((profile) => (
          <div key={profile.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48 bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white text-6xl">
              {profile.name[0]}
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold">{profile.name}, {profile.age}</h2>
                <span className="text-sm bg-rose-100 text-rose-700 px-2 py-1 rounded-full">{profile.distance}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{profile.county} County</p>
              <p className="text-gray-700 mt-3">{profile.bio}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {profile.interests.map((i) => (
                  <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full">{i}</span>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                <button className="flex-1 border border-gray-300 py-2 rounded-full text-gray-600 hover:bg-gray-50">Pass</button>
                <button className="flex-1 bg-rose-600 text-white py-2 rounded-full hover:bg-rose-700">Like</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-sm text-blue-800">
        <strong>MVP Note:</strong> This uses mock data + browser Geolocation API. For production, integrate Supabase/Firebase for real profiles, distance calculation (haversine), matching algorithm, and real-time chat.
      </div>
    </div>
  );
}
