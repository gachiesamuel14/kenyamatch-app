export default function Profile() {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input className="mt-1 w-full border rounded-lg px-4 py-2" defaultValue="Your Name" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input type="number" className="mt-1 w-full border rounded-lg px-4 py-2" defaultValue={25} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">County</label>
            <select className="mt-1 w-full border rounded-lg px-4 py-2">
              <option>Nairobi</option>
              <option>Mombasa</option>
              <option>Kisumu</option>
              <option>Kiambu</option>
              <option>Nakuru</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <textarea className="mt-1 w-full border rounded-lg px-4 py-2" rows={4} defaultValue="Tell people about yourself..." />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Interests</label>
          <input className="mt-1 w-full border rounded-lg px-4 py-2" placeholder="Music, Travel, Tech..." />
        </div>
        <button className="w-full bg-rose-600 text-white py-3 rounded-full font-semibold hover:bg-rose-700">
          Save Profile
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-6">
        Photos, location sharing, and more will be connected to a real backend (Supabase recommended).
      </p>
    </div>
  );
}
