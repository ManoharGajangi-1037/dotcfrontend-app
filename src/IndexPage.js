import React from 'react';
import {Link } from 'react-router-dom';
const IndexPage=()=> {
    return (
        <div>
            <nav className="fixed right-0 top-0 w-full flex p-2 bg-white/90 backdrop-blur-sm z-50 font-['Raleway']">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <a href="/" className="flex-shrink-0">
                            <img className="min-w-32" src="/assets/img/otc-logo-1.svg" alt="Your Company" />
                        </a>
                        <div className="hidden md:block mx-auto flex items-baseline space-x-7">
                            <a href="#" className="hover:text-rose-600 rounded-md px-3 py-2 text-md text-black font-medium">
                                Explore
                            </a>
                            <a href="#" className="hover:text-rose-600 rounded-md px-3 py-2 text-md font-medium">
                                Learn
                            </a>
                            <a href="#" className="hover:text-rose-600 rounded-md px-3 py-2 text-md font-medium">
                                Marketplace
                            </a>
                            <a href="#" className="hover:text-rose-600 rounded-md px-3 py-2 text-md font-medium">
                                Earn
                            </a>
                            <a href="#" className="hover:text-rose-600 rounded-md px-3 py-2 text-md font-medium">
                                Brand
                            </a>
                        </div>

                        <div className="ml-auto flex items-baseline space-x-4">
                            {/* <a href="/deals" className="px-6 py-2 border border-rose-500 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-medium">
                                Launch app
                            </a> */}

<Link to="/deals" className="px-6 py-2 border border-rose-500 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-medium">
                    Launch app
                </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="h-20"></div>

            <div className="pt-2 md:pt-9 pb-5 md:pb-16 bg-white">
                <div className="h-96 w-full flex flex-col items-center justify-center bg-white" style={{ backgroundImage: "url('assets/img/hero-bg-1.png')", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                    <h2 className="text-4xl md:text-5xl font-['Alata'] font-medium px-2 md:px-80 text-center text-pretty leading-10 md:leading-[3.24rem]">
                        Best OTC deals, for large crypto orders.
                        Better prices than exchanges. High volume.
                    </h2>
                    <p className="text-slate-500 mt-8 text-lg px-4 md:px-96 text-center text-pretty">
                        On-chain OTC with huge seller base. OTC Desk is ideal for large crypto volumes worth $50,000 and above.
                    </p>
                </div>
            </div>

            <div className="py-12 md:py-16 w-full flex flex-col md:flex-row items-center justify-center bg-sky-700">
                <div className="grid grid-cols-3 gap-9 md:gap-28 text-white">
                    <div className="text-center col-span-3 md:col-span-1">
                        <h3 className="text-4xl font-semibold">
                            $123 billion
                        </h3>
                        <p className="mt-1 md:mt-3">
                            24 hrs trading volume
                        </p>
                    </div>
                    <div className="text-center col-span-3 md:col-span-1">
                        <h3 className="text-4xl font-semibold">
                            100+
                        </h3>
                        <p className="mt-1 md:mt-3">
                            cryptocurrencies listed
                        </p>
                    </div>
                    <div className="text-center col-span-3 md:col-span-1">
                        <h3 className="text-4xl font-semibold">
                            1000+
                        </h3>
                        <p className="mt-1 md:mt-3">
                            deals closed
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-10 md:mt-24 w-full flex flex-col px-7 md:px-36">
                <div className="grid grid-cols-2 gap-2 md:gap-9">
                    <div className="col-span-2 md:col-span-1">
                        <h2 className="text-4xl font-['Alata'] font-medium text-pretty text-gray-800 text-left pr-4 md:pr-24 leading-[2.4rem] md:leading-[2.61rem]">
                            Try your first OTC deal for zero gas fee. Start a deal now.
                        </h2>
                        <p className="text-slate-500 mt-5 text-base text-left text-pretty">
                            On-chain OTC with huge seller base. OTC Desk is ideal for large crypto volumes worth $50,000 and above.
                        </p>

                        <div className="flex items-baseline space-x-4 mt-7">
                            <a href="#" className="px-6 py-2 border border-rose-500 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-medium">
                                Start a deal
                            </a>
                        </div>
                    </div>

                    <div className="col-span-2 md:col-span-1 mt-12 md:mt-0 flex flex-col items-center justify-center">
                        <img className="min-w-32" src="/assets/img/hero-image-1.svg" alt="Your Company" />
                    </div>
                </div>
            </div>

            <div className="mt-24 w-full flex flex-col px-7 md:px-36">
                <h2 className="text-4xl font-['Alata'] font-medium text-pretty text-gray-800 text-left pr-24">
                    Popular cryptocurrencies
                </h2>

                <div className="md:border rounded-lg mt-7 p-0.5">
                    <table className="w-full table-fixed text-sm text-left text-black/80">
                        <thead className="text-xs text-zinc-500 uppercase bg-gray-50 rounded-xl">
                            <tr>
                                <th scope="col" className="py-5 px-6">Name</th>
                                <th scope="col" className="py-5 px-6">Last Price</th>
                                <th scope="col" className="py-5 px-6">24hrs Change</th>
                                <th scope="col" className="py-5 px-6">Volume (24h)</th>
                                <th scope="col" className="py-5 px-6">Market Cap</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white hover:bg-slate-50">
                                <td className="py-4 px-6 text-black font-medium">
                                    <span>
                                        Bitcoin
                                    </span>
                                    <small className="text-zinc-500 ml-1.5">
                                        BTC
                                    </small>
                                </td>
                                <td className="py-4 px-6">$20,000</td>
                                <td className="py-4 px-6 text-red-500">-2.5%</td>
                                <td className="py-4 px-6">$10B</td>
                                <td className="py-4 px-6">$600B</td>
                            </tr>
                            {/* Add the rest of the table rows */}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-5 md:mt-28 px-7 md:px-36 py-12 w-full flex flex-col bg-blue-900">
                <div className="grid grid-cols-2 gap-4 md:gap-12 md:gap-28 text-white">
                    <div className="col-span-2 md:col-span-1">
                        <h2 className="text-4xl font-['Alata'] font-medium text-pretty text-white text-left md:pr-4 md:leading-[2.7rem]">
                            Are you looking for better OTC deals? Decentralized OTC needed?
                        </h2>
                        <p className="text-white/80 mt-5 text-base text-left text-pretty">
                            On-chain OTC with huge seller base. OTC Desk is ideal for large crypto volumes worth $50,000 and above.
                        </p>
                        <button className="mt-9 px-7 py-2 bg-white hover:bg-white/90 text-black/80 rounded-xl font-medium text-blue-800 hover:text-blue-900">
                            Try dOTC now
                        </button>
                    </div>
                    <div className="flex justify-center text-center col-span-3 md:col-span-1 mt-12 md:mt-0">
                        <img src="/assets/img/hero-image-2.png" className="h-full" alt="Your Company" />
                    </div>
                </div>
            </div>

            <div className="bg-white px-8 md:px-36 py-24 pb-14">
                <div className="grid grid-cols-7 text-gray-600 text-sm mb-24">
                    <div className="col-span-7 md:col-span-2">
                        <img src="/assets/img/otc-logo-2.svg" className="h-12 mb-4" alt="Your Company" />
                        <a href="#">
                            Privacy policy
                        </a>
                        <span>.</span>
                        <a href="#">
                            Terms and conditions
                        </a>
                    </div>
                    {/* Add the rest of the grid columns */}
                </div>
            </div>
        </div>
    );
}

export default IndexPage;
