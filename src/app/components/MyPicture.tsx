import Image from "next/image"

export default function MyPicture() {
  return (
    <section className="w-full mx-auto">
      <Image
        src="/images/Tudor.jpg"
        className="border-4 border-black dark:border-sky-700 
      drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        width={150}
        height={150}
        alt="Author picture"
        priority={true}
      />
    </section>
  )
}