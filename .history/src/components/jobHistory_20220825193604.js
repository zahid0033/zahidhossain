import React from "react";

function JobHistory() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid max-w-2xl mx-auto">
                <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                        <div className="w-px h-10 opacity-0 sm:h-full" />
                        <div>
                            <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full bg-white">
                                1
                            </div>
                        </div>
                        <div className="w-px h-full bg-gray-300" />
                    </div>
                    <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                        <div>
                            <p className="text-xl text-white font-semibold sm:text-base">
                                Read the recipe
                            </p>
                            <p className="text-sm text-gray-700">
                                All recipes are written using certain conventions, which define
                                the characteristics of common ingredients. The rules vary from
                                place to place.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                        <div className="w-px h-10 bg-gray-300 sm:h-full" />
                        <div>
                            <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full bg-white">
                                2
                            </div>
                        </div>
                        <div className="w-px h-full bg-gray-300" />
                    </div>
                    <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                        <div>
                            <p className="text-xl font-semibold sm:text-base">Heart attack</p>
                            <p className="text-sm text-gray-700">
                                A flower in my garden, a mystery in my panties. Heart attack
                                never stopped old Big Bear. I didn't even know we were calling
                                him Big Bear.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                        <div className="w-px h-10 bg-gray-300 sm:h-full" />
                        <div>
                            <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full bg-white">
                                3
                            </div>
                        </div>
                        <div className="w-px h-full opacity-0" />
                    </div>
                    <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                        <div>
                            <p className="text-xl font-semibold sm:text-base">Never stop</p>
                            <p className="text-sm text-gray-700">
                                The first mate and his Skipper too will do their very best to
                                make the others comfortable in their tropic island nest. Michael
                                Knight a young loner.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default JobHistory