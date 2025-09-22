import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-800">
            [YourLogo]
          </a>
          <nav>
            <ul className="flex space-x-6 text-sm font-medium">
              <li>
                <a
                  href="#features"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-24 pt-32 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Transform Your Business with{" "}
            <span className="text-indigo-600">[Product Name]</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Tired of manual data entry? Struggling with disorganized projects?
            Discover how our platform can help you streamline your workflow and
            boost productivity.
          </p>
          <button className="bg-gradient-to-r from-indigo-700 to-indigo-500 transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
            Get Started Today
          </button>
          <p className="mt-4 text-sm text-gray-500">
            No credit card required. Free 14-day trial.
          </p>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-white py-12 px-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider">
            Trusted by innovative teams at
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-8 lg:space-x-12">
            <img
              src="https://placehold.co/120x40/cbd5e0/4a5568?text=Company+A"
              alt="Company A Logo"
              className="h-8"
            />
            <img
              src="https://placehold.co/120x40/cbd5e0/4a5568?text=Company+B"
              alt="Company B Logo"
              className="h-8"
            />
            <img
              src="https://placehold.co/120x40/cbd5e0/4a5568?text=Company+C"
              alt="Company C Logo"
              className="h-8"
            />
            <img
              src="https://placehold.co/120x40/cbd5e0/4a5568?text=Company+D"
              alt="Company D Logo"
              className="h-8"
            />
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Problem with Your Workflow
            </h2>
            <ul className="space-y-4 text-lg text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-red-500 text-2xl">❌</span>
                <span>
                  You're wasting valuable time on manual, repetitive tasks that
                  could be automated.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-500 text-2xl">❌</span>
                <span>
                  Your team's communication is scattered across different apps,
                  leading to lost information.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-500 text-2xl">❌</span>
                <span>
                  You lack a clear overview of project progress, making it hard
                  to meet deadlines.
                </span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The [Product Name] Solution
            </h2>
            <ul className="space-y-4 text-lg text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 text-green-500 text-2xl">✅</span>
                <span>
                  Automate your workflows with powerful, no-code automations.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-500 text-2xl">✅</span>
                <span>
                  Centralize all your communication and files in one
                  collaborative space.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-500 text-2xl">✅</span>
                <span>
                  Visualize project status with intuitive dashboards and
                  real-time reports.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Key Features Designed for Your Success
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <svg
                  className="h-10 w-10 text-indigo-600 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-8 0V3a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-gray-800">
                  Task Automation
                </h3>
              </div>
              <p className="text-gray-600">
                Eliminate manual work by automating repetitive tasks, so your
                team can focus on what truly matters.
              </p>
            </div>
            <div className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <svg
                  className="h-10 w-10 text-indigo-600 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M10 20v-2m4 2v-2m-3 2v-2m0 0a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m-3 2v-2m0 0a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m-3 2v-2"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-gray-800">
                  Real-time Collaboration
                </h3>
              </div>
              <p className="text-gray-600">
                Work together seamlessly with real-time editing, comments, and
                project updates in a shared workspace.
              </p>
            </div>
            <div className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <svg
                  className="h-10 w-10 text-indigo-600 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4m-4 4l4-4m-4-4l4 4"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-gray-800">
                  Intuitive Reporting
                </h3>
              </div>
              <p className="text-gray-600">
                Gain valuable insights with easy-to-read dashboards and
                customizable reports to track your performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://placehold.co/80x80/6a6ff8/f0f4f9?text=JS"
                  alt="John Smith"
                  className="rounded-full w-20 h-20 mr-4 border-2 border-indigo-200"
                />
                <div>
                  <p className="font-semibold text-lg">Jane Doe</p>
                  <p className="text-sm text-gray-500">
                    Marketing Director, TechCorp
                  </p>
                </div>
              </div>
              <p className="italic text-gray-700">
                &quot;[Product Name] has completely transformed our project
                management. We've increased our team's productivity by 30% and
                communication has never been smoother. It's an essential tool
                for us now.&quot;
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://placehold.co/80x80/6a6ff8/f0f4f9?text=AD"
                  alt="Alex Davis"
                  className="rounded-full w-20 h-20 mr-4 border-2 border-indigo-200"
                />
                <div>
                  <p className="font-semibold text-lg">Alex Rodriguez</p>
                  <p className="text-sm text-gray-500">Founder, Startup Hub</p>
                </div>
              </div>
              <p className="italic text-gray-700">
                &quot;The reporting feature is a game-changer. I can now see
                exactly where we are on any project and make data-driven
                decisions. The team loves it, and so do I.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <h3 className="text-3xl font-bold mb-2">Basic</h3>
              <p className="text-gray-500 mb-6">
                For individuals and small teams
              </p>
              <p className="text-5xl font-extrabold text-gray-900 mb-4">
                $29
                <span className="text-lg font-normal text-gray-500">/mo</span>
              </p>
              <ul className="text-left text-gray-600 space-y-3 mb-8">
                <li>✅ 5 Projects</li>
                <li>✅ 10GB Storage</li>
                <li>✅ Standard Support</li>
                <li>❌ Advanced Reporting</li>
              </ul>
              <button className="w-full bg-gradient-to-r from-indigo-700 to-indigo-500 transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md text-white font-semibold py-3 px-8 rounded-lg shadow-md focus:outline-none">
                Start Free Trial
              </button>
            </div>
            {/* Pro Plan */}
            <div className="bg-indigo-600 p-8 rounded-xl shadow-lg text-white relative transform scale-105">
              <span className="bg-yellow-400 text-yellow-800 text-xs font-bold py-1 px-3 rounded-full absolute top-0 left-1/2 -mt-4 -ml-6">
                Most Popular
              </span>
              <h3 className="text-3xl font-bold mb-2">Pro</h3>
              <p className="text-indigo-200 mb-6">For growing teams</p>
              <p className="text-5xl font-extrabold mb-4">
                $69<span className="text-lg font-normal">/mo</span>
              </p>
              <ul className="text-left space-y-3 mb-8">
                <li>✅ Unlimited Projects</li>
                <li>✅ 100GB Storage</li>
                <li>✅ Priority Support</li>
                <li>✅ Advanced Reporting</li>
              </ul>
              <button className="w-full bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-xl focus:outline-none">
                Get Started
              </button>
            </div>
            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <h3 className="text-3xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-500 mb-6">For large organizations</p>
              <p className="text-5xl font-extrabold text-gray-900 mb-4">
                Custom
              </p>
              <ul className="text-left text-gray-600 space-y-3 mb-8">
                <li>✅ Everything in Pro</li>
                <li>✅ Dedicated Account Manager</li>
                <li>✅ Custom Integrations</li>
                <li>✅ 24/7 Phone Support</li>
              </ul>
              <button className="w-full bg-gradient-to-r from-indigo-700 to-indigo-500 transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md text-white font-semibold py-3 px-8 rounded-lg shadow-md focus:outline-none">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Streamline Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Stop waiting and start growing your business today. Join the
            thousands of professionals who are already seeing incredible
            results.
          </p>
          <button className="cta-button text-white font-semibold py-4 px-12 rounded-full text-xl shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-10 px-6">
        <div className="container mx-auto text-center">
          <div className="flex flex-wrap justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-white transition-colors">
              About Us
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Blog
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
          <p className="text-sm">© 2024 [Company Name]. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
