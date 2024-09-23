import Image from "next/image"
import "./style.css";

export default function TechnologiesBar() {
    return (
        <section className="flex flex-col w-full justify-center items-center p-10 space-y-12">
            <div className="wrapper">
                <Image width={70} height={70} alt="C#" src="/icons/languages/icons8-c.svg" className="item item1" />
                <Image width={70} height={70} alt="Typescript" src="/icons/languages/icons8-typescript.svg" className="item item3" />
                <Image width={70} height={70} alt="Python" src="/icons/languages/icons8-python.svg" className="item item4" />
                <Image width={70} height={70} alt="Nodejs" src="/icons/languages/icons8-node-js.svg" className="item item2" />
                <Image width={70} height={70} alt="Java" src="/icons/languages/icons8-java.svg" className="item item5" />
                <Image width={70} height={70} alt="Docker" src="/icons/tech/icons8-docker.svg" className="item item6" />
                <Image width={70} height={70} alt="Express.js" src="/icons/tech/icons8-express-js.svg" className="item item7" />
                <Image width={70} height={70} alt="Next.js" src="/icons/tech/icons8-nextjs.svg" className="item item8" />
                <Image width={70} height={70} alt="Prisma" src="/icons/tech/icons8-prisma-orm.svg" className="item item9" />
                <Image width={70} height={70} alt="Jquery" src="/icons/tech/icons8-jquery.svg" className="item item10" />
                <Image width={70} height={70} alt="Postgres" src="/icons/tech/icons8-postgres.svg" className="item item11" />
            </div>
        </section>
    )
}