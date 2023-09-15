import Image from 'next/image'

export default function Home() {
  return (
    <nav className="relative container mx-auto bg-red-900 p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <Image src="/next.svg" alt="" width={144} height={144} />
        </div>
        <div className="hidden md:flex lg:space-x-12 sm:space-x-2">
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
    </nav>
  )
}
