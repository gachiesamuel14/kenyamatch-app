export default function Signup() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Join KenyaMatch</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input className="mt-1 w-full border rounded-lg px-4 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email or Phone</label>
          <input className="mt-1 w-full border rounded-lg px-4 py-2" placeholder="+254... or email" />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input type="password" className="mt-1 w-full border rounded-lg px-4 py-2" />
        </div>
        <button type="submit" className="w-full bg-rose-600 text-white py-3 rounded-full font-semibold hover:bg-rose-700">
          Create Account
        </button>
      </form>
      <p className="text-center mt-4 text-sm">
        Already have an account? <a href="/login" className="text-rose-600 font-medium">Login</a>
      </p>
    </div>
  );
}
