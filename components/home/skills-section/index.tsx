import clsx from "clsx"

export default function Skills() {
    return (
        <section className="flex flex-col w-full h-screen bg-background p-20 space-y-10">
            <h1 className={"text-8xl font-bold"}>Skills</h1>
            <section className="flex flex-col h-full w-full space-y-10">
                <div className="flex border-b-2 p-5">
                    <div className="mt-auto mb-auto p-4 w-[40%]">
                        <h1 className={clsx("text-5xl font-bold")}>Languages</h1>
                    </div>
                    <div className="mt-auto mb-auto w-[40%]">
                        <h1 className="text-4xl font-bold">
                            Lua 
                            <div className="bg-white size-3 ml-4 mr-4 rounded-lg inline-flex"></div> 
                            Javascript
                            <div className="bg-white size-3 ml-4 mr-4 rounded-lg inline-flex"></div> 
                            Python
                            <div className="bg-white size-3 ml-4 mr-4 rounded-lg inline-flex"></div> 
                            C#
                            <div className="bg-white size-3 ml-4 mr-4 rounded-lg inline-flex"></div> 
                            C++
                        </h1>
                        <h1 className="text-4xl font-bold">
                            Zig
                            <div className="bg-white size-3 ml-4 mr-4 rounded-lg inline-flex"></div> 
                            Typescript
                            <div className="bg-white size-3 ml-4 mr-4 rounded-lg inline-flex"></div> 
                            Java
                            <div className="bg-white size-3 ml-4 mr-4 rounded-lg inline-flex"></div> 
                            PHP
                        </h1>
                    </div> 
                </div>
                <div className="flex border-b-2 p-5">
                    <div className="mt-auto mb-auto p-4 w-[40%]">
                        <h1 className={clsx("text-5xl font-bold")}>Tools</h1>
                    </div>
                    <div className="mt-auto mb-auto w-[45%]">
                        <h1 className="text-4xl font-bold">
                            ExpressJS
                            <div className="bg-white size-3 ml-4 mr-4 rounded-lg inline-flex"></div> 
                            React
                            <div className="bg-white size-3 ml-4 mr-4 rounded-lg inline-flex"></div> 
                            Vue
                            <div className="bg-white size-3 ml-4 mr-4 rounded-lg inline-flex"></div> 
                            JQuery
                            <div className="bg-white size-3 ml-4 mr-4 rounded-lg inline-flex"></div> 
                            Figma
                        </h1>
                        <h1 className="text-4xl font-bold">
                            Tailwind
                            <div className="bg-white size-3 ml-4 mr-4 rounded-lg inline-flex"></div> 
                            Webpack
                            <div className="bg-white size-3 ml-4 mr-4 rounded-lg inline-flex"></div> 
                            Framer Motion
                        </h1>
                    </div> 
                </div>
                <div className="flex border-b-2 p-5">
                    <div className="mt-auto mb-auto p-4 w-[40%]">
                        <h1 className={clsx("text-5xl font-bold")}>Frameworks</h1>
                    </div>
                    <div className="mt-auto mb-auto w-[45%]">
                        <h1 className="text-4xl font-bold">
                            NextJS
                            <div className="bg-white size-3 ml-4 mr-4 rounded-lg inline-flex"></div> 
                            Nuxt
                            <div className="bg-white size-3 ml-4 mr-4 rounded-lg inline-flex"></div> 
                            ASP.Net
                            <div className="bg-white size-3 ml-4 mr-4 rounded-lg inline-flex"></div> 
                            Laravel
                        </h1>
                        <h1 className="text-4xl font-bold">
                            Angular
                        </h1>
                    </div> 
                </div>
                <div className="flex border-b-2 p-5">
                    <div className="mt-auto mb-auto p-4 w-[40%]">
                        <h1 className={clsx("text-5xl font-bold")}>Speaks</h1>
                    </div>
                    <div className="mt-auto mb-auto w-[40%]">
                        <h1 className="text-4xl font-bold">
                            Arabic 
                            <div className="bg-white size-3 ml-4 mr-4 rounded-lg inline-flex"></div> 
                            English
                        </h1>
                    </div> 
                </div>
            </section>
        </section>
    )
}