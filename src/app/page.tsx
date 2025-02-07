"use client";
import "./globals.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#272727]">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 bg-[#3a464b]">
        <div className="text-white font-bold text-xl">CAIO 👋</div>
        <nav className="flex gap-6">
          {/* Shiplog button hidden for now */}
          <a
            href="https://notebook-mvp.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80"
          >
            Notebook 🛠️
          </a>
        </nav>
      </header>

      {/* Main content */}
      <main className="px-8 pt-20">
        {/* To highlight text, wrap it in a span with highlight-yellow or highlight-blue class */}
        <h1 className="text-white font-bold text-5xl max-w-2xl leading-tight">
          A <span className="highlight-yellow">low-code</span>, no-nonsense
          framework for building{" "}
          <span className="highlight-blue">AI agents</span> for your team.
        </h1>

        <h2 className="text-white font-bold text-2xl mt-6">
          Designed for businesses like yours
        </h2>

        {/* Buttons row */}
        <div className="flex justify-center gap-4 mt-20">
          <a
            href="https://www.youtube.com/watch?v=kGfkL9LS3PU"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#97EFE9] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            ▶️ See us in action
          </a>

          <a
            href="https://book.vimcal.com/p/sahilsinha/30minutes-cd55c"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-transparent text-[#97EFE9] font-semibold rounded-lg border-2 border-[#97EFE9] hover:bg-[#97EFE9] hover:text-black transition-all"
          >
            📆 Grab some time to learn more
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-20 max-w-6xl mx-auto"></div>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          {/* Row 1: Text Left, Image Right */}
          <div className="flex items-start gap-12 mb-20">
            <div className="flex-1">
              <h3 className="text-white font-bold text-2xl">
                Load and transform your data
              </h3>
              <p className="text-gray-300 mt-2">
                Agents are only as good as the data they act on. Where most
                no-code agent builders leave the data transformation up to you,
                CAIO lets you configure the data transformations necessary to
                power your agents
              </p>
            </div>
            <div className="flex-1 relative h-[300px]">
              <Image
                src="/import_demo.gif"
                alt="Import Demo"
                fill
                className="rounded-lg object-contain"
              />
            </div>
          </div>

          {/* Row 2: Image Left, Text Right */}
          <div className="flex items-start gap-12 mb-20">
            <div className="flex-1 relative h-[300px]">
              <Image
                src="/notebook.gif"
                alt="Notebook Demo"
                fill
                className="rounded-lg object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-2xl">
                Configure your agent
              </h3>
              <p className="text-gray-300 mt-2">
                A powerful and flexible framework for designing your own agents.
                You can start by editing an existing agent template, or start
                designing from scratch.
              </p>
            </div>
          </div>

          {/* Row 3: Text Left, Image Right */}
          <div className="flex items-start gap-12 mb-20">
            <div className="flex-1">
              <h3 className="text-white font-bold text-2xl">
                Deploy to your team + manage your agents
              </h3>
              <p className="text-gray-300 mt-2">
                Stay on top of how many agents you have in your organisation -
                what they&apos;re up to, what access/permissions they have, what
                tools they&apos;re using, how much do they cost, and how much time or
                money have they saved you?
              </p>
            </div>
            <div className="flex-1 relative h-[300px]">
              <Image
                src="/manage_agents.gif"
                alt="Manage Agent Demo"
                fill
                className="rounded-lg object-contain"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
