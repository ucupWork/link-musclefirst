import Image from 'next/image';
import {LinkCard} from "./icons"
import data from "../data/data.json"

export default async function HomePage() {

  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8 pb-10">
      <Image
        priority
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 text-xl lg:text-4xl xl:text-4xl text-center text-white uppercase" dangerouslySetInnerHTML={{ __html: data.name }}></h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
    </div>
  );
}
