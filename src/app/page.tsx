"use client";

import { handleSignIn, handleSignOut } from "../lib/auth";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { fetchProtectedData } from "../lib/api";

export default function HomePage() {
  const { data: session } = useSession();
  const [backendData, setBackendData] = useState(null);

  const loadData = async () => {
    if (!session?.accessToken) return;
    const data = await fetchProtectedData(session.accessToken as string);
    setBackendData(data);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100 p-6">
      {session ? (
        <div className="max-w-xl w-full text-center space-y-6">
          <h2 className="text-2xl font-bold">{`Welcome, ${session?.user?.name}!`}</h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={loadData}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-lg transition"
            >
              Call backend API
            </button>
            <button
              onClick={handleSignOut}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-lg transition"
            >
              Sign Out
            </button>
          </div>

          {backendData && (
            <div className="mt-6 bg-gray-800 p-6 rounded-xl shadow-xl overflow-x-auto">
              <pre className="text-left text-gray-100">
                {JSON.stringify(backendData, null, 2)}
              </pre>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={handleSignIn}
          className="px-8 py-4 text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg transition"
        >
          Sign in with Google
        </button>
      )}
    </main>
  );
}
