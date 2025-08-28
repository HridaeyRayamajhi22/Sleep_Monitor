import Link from "next/link"

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16">
            {/* Hero Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent mb-6">
                        About SleepMonitor
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Your ultimate companion for achieving better sleep, improved health, and enhanced daily productivity through intelligent sleep tracking and analysis.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <div className="bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-700">
                    <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">
                        Our Mission
                    </h2>
                    <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
                        At SleepMonitor, we aim to help individuals straighten up their sleep schedules, positively impact their days, and become healthier and more productive through better sleep hygiene and data-driven insights.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                    Why Choose SleepMonitor?
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-teal-400 transition-all duration-300">
                        <div className="mb-4">
                            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-400 mb-3">Comprehensive Tracking</h3>
                        <p className="text-gray-300">
                            Monitor your sleep patterns, duration, quality, and cycles with precision. Identify areas of improvement with detailed analytics and visualizations.
                        </p>
                    </div>
                    
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-teal-400 transition-all duration-300">
                        <div className="mb-4">
                            <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-400 mb-3">Personalized Insights</h3>
                        <p className="text-gray-300">
                            Receive tailored recommendations and actionable advice to improve your sleep quality based on your unique patterns and lifestyle.
                        </p>
                    </div>
                    
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-teal-400 transition-all duration-300">
                        <div className="mb-4">
                            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-400 mb-3">Smart Reminders</h3>
                        <p className="text-gray-300">
                            Get intelligent notifications for optimal bedtimes and wake-up times based on your sleep cycles and daily schedule.
                        </p>
                    </div>
                    
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-teal-400 transition-all duration-300">
                        <div className="mb-4">
                            <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-400 mb-3">Community Support</h3>
                        <p className="text-gray-300">
                            Connect with other users, share experiences, and get motivation from a community dedicated to improving sleep health.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/2">
                        <div className="bg-gradient-to-br from-blue-500 to-teal-400 p-1 rounded-2xl">
                            <div className="bg-gray-800 rounded-2xl p-6 h-full">
                                <h2 className="text-3xl font-bold text-blue-400 mb-6">Our Story</h2>
                                <p className="text-gray-300 mb-4">
                                    SleepMonitor began with a simple observation: so many people struggle with sleep, yet few have the tools to understand and improve their sleep patterns.
                                </p>
                                <p className="text-gray-300">
                                    Founded by a team of sleep enthusiasts and data scientists, our mission is to make advanced sleep tracking accessible to everyone. We believe that quality sleep is the foundation of a healthy, productive life, and we're committed to helping you achieve it.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 h-full">
                            <h3 className="text-2xl font-semibold text-teal-400 mb-4">Our Vision</h3>
                            <p className="text-gray-300">
                                We envision a world where everyone understands their sleep patterns and has the knowledge and tools to optimize their rest. Better sleep leads to better days, and we're here to make that connection clear and achievable for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to action section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl p-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Sleep Smart?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join SleepMonitor today and take the first step towards improving your mental and physical health through better sleep.
                    </p>
                    <Link 
                        href='/sign-up' 
                        className="inline-block bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg"
                    >
                        Get Started Now
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default AboutPage