import React from 'react';
import { FaLock, FaGoogle, FaBolt, FaUserFriends, FaDesktop, FaMobile, FaTabletAlt } from 'react-icons/fa';

const Landingpage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Gradient Orbs */}
      <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      {/* Hero Section */}
      <div className="container relative mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-center">
          <div className="backdrop-blur-sm bg-white/5 p-8 rounded-3xl mb-8">
            <div className="space-y-2 mb-6">
              <h2 className="text-4xl md:text-5xl font-light text-gray-600 italic">
                Do you know...
              </h2>
              <h1 className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-amber-500">
                Gossip?
              </h1>
            </div>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl">
              Connect instantly, chat securely. Share moments with friends and family in real-time, 
              all with the peace of mind of end-to-end encryption.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition duration-300 shadow-lg">
                Get Started
              </button>
              <button className="flex items-center gap-2 bg-white text-gray-700 px-8 py-3 rounded-full font-semibold border border-gray-100 hover:bg-gray-50 transition duration-300 shadow-lg">
                <FaGoogle className="text-xl" />
                Sign up with Google
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container relative mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="backdrop-blur-lg bg-white/30 p-8 rounded-2xl shadow-lg border border-white/50 text-center transform hover:scale-105 transition duration-300">
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaBolt className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-700">
              Experience real-time messaging with zero lag. Stay connected instantly with your contacts.
            </p>
          </div>
          <div className="backdrop-blur-lg bg-white/30 p-8 rounded-2xl shadow-lg border border-white/50 text-center transform hover:scale-105 transition duration-300">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaLock className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">End-to-End Encrypted</h3>
            <p className="text-gray-700">
              Your conversations are protected with state-of-the-art encryption. Only you and your recipients can read them.
            </p>
          </div>
          <div className="backdrop-blur-lg bg-white/30 p-8 rounded-2xl shadow-lg border border-white/50 text-center transform hover:scale-105 transition duration-300">
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <FaUserFriends className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">User Friendly</h3>
            <p className="text-gray-700">
              Simple and intuitive interface. Start chatting with just one click using Google Sign-in.
            </p>
          </div>
        </div>
      </div>

      {/* Cross Platform Section */}
      <div className="container relative mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Chat Anywhere, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Anytime</span>
          </h2>
          <p className="text-xl text-gray-700">
            Stay connected across all your devices with seamless synchronization
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* Desktop */}
          <div className="backdrop-blur-lg bg-white/30 p-6 rounded-2xl shadow-lg border border-white/50 transform hover:scale-105 transition duration-300 flex flex-col">
            <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <FaDesktop className="text-4xl text-gray-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
              <FaDesktop className="text-blue-600" /> Web App
            </h3>
            <p className="text-gray-700">
              Access Gossip from any browser. No downloads needed.
            </p>
          </div>

          {/* Mobile */}
          <div className="backdrop-blur-lg bg-white/30 p-6 rounded-2xl shadow-lg border border-white/50 transform hover:scale-105 transition duration-300 flex flex-col">
            <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-24 h-full flex items-center justify-center">
                  <div className="absolute w-12 h-20 border-4 border-gray-400 rounded-xl"></div>
                  <FaMobile className="text-4xl text-gray-400" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
              <FaMobile className="text-blue-600" /> Mobile App
            </h3>
            <p className="text-gray-700">
              Take conversations on the go with our mobile app.
            </p>
          </div>

          {/* Tablet */}
          <div className="backdrop-blur-lg bg-white/30 p-6 rounded-2xl shadow-lg border border-white/50 transform hover:scale-105 transition duration-300 flex flex-col">
            <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-32 h-full flex items-center justify-center">
                  <div className="absolute w-24 h-18 border-4 border-gray-400 rounded-xl"></div>
                  <FaTabletAlt className="text-4xl text-gray-400" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
              <FaTabletAlt className="text-blue-600" /> Tablet
            </h3>
            <p className="text-gray-700">
              Perfect for your iPad or Android tablet.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 mb-6">
            Your conversations sync instantly across all devices
          </p>
          <div className="inline-flex items-center gap-2 backdrop-blur-lg bg-white/50 px-6 py-2 rounded-full border border-white/50">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-gray-700">Real-time synchronization</span>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative">
        <div className="container mx-auto px-6 py-16 text-center">
          <div className="backdrop-blur-lg bg-gradient-to-r from-blue-600/90 to-blue-700/90 p-12 rounded-2xl shadow-xl border border-blue-400/50">
            <h2 className="text-4xl font-bold mb-4 text-white">Ready to start gossiping?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join millions of users who trust Gossip for their daily conversations.
            </p>
            <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-500 hover:to-amber-600 transition duration-300 shadow-lg">
              Start Chatting Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
