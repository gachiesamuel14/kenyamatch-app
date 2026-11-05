export default function Login() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Login to KenyaMatch</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Email or Phone</label>
          <input type="text" className="mt-1 w-full border rounded-lg px-4 py-2" placeholder="you@example.com or +254..." />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input type="password" className="mt-1 w-full border rounded-lg px-4 py-2" />
        </div>
        <button type="submit" className="w-full bg-rose-600 text-white py-3 rounded-full font-semibold hover:bg-rose-700">
          Login
        </button>
      </form>
      <p className="text-center mt-4 text-sm">
        No account? <a href="/signup" className="text-rose-600 font-medium">Sign up</a>
      </p>
      <p className="text-xs text-gray-500 mt-6 text-center">
        Auth will be powered by Supabase / Firebase / NextAuth in production.
      </p>
    </div>
  );
}
