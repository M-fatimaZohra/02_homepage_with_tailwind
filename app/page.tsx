import Image from "next/image";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
export default function Home() {
  return (
    <div>
      <Header></Header>
      <div id="home" className="block text-center">
        <Image
          className="w-full h-fit"
          src="/perfume.gif"
          width={1000}
          height={100}
          alt={"perfume"}
        ></Image>
      </div>
      <div
        id="about"
        className="block static w-full h-full bg-gray-100 py-12 px-6 text-center"
      >
        <br></br>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Crafting Perfumes with Passion
        </h1>
        <div className="text-gray-800 text-xs md:text-base">
        <p>
          At <strong>Hannah</strong>, we believe that a fragrance is more than
          just a scent—<strong>it&apos;s an experience</strong>, a journey that stirs
          emotions and captures moments in time. Our perfumes embody
          <strong>elegance, sophistication,</strong> and a sense of
          <strong>individuality</strong>, offering you a
          <strong>sensory escape</strong> from the everyday.
        </p>
        <br></br>
        <p>
          With a rich legacy of <strong>fine craftsmanship</strong>, each
          perfume is <strong>meticulously crafted</strong> by master perfumers
          who understand the delicate balance of
          <strong>nature and artistry</strong>. We are committed to using the
          <strong>finest ingredients</strong>, sourced from the most
          <strong>exotic corners of the world</strong>, to bring you fragrances
          that <strong>linger</strong> and leave a lasting impression.
        </p>
       <br></br>

        <p>
          Our journey began with a <strong>deep-rooted passion</strong> for
          perfumery and a vision to create
          <strong>unique, memorable scents</strong> that resonate with your
          personal style. Each bottle at <strong>Hannah</strong> tells its own
          story, a fusion of <strong>tradition and modern innovation</strong>.
          Whether you&apos;re drawn to
          <strong>floral, woody, or oriental notes</strong>, our collection is
          designed to <strong>celebrate your individuality</strong> and enhance
          your presence.
        </p>
        <br></br>
        <p>
          At <strong>Hannah</strong>, <strong>luxury</strong> is not just about
          exclusivity; it&apos;s about <strong>authenticity, creativity,</strong> and
          a relentless <strong>pursuit of perfection</strong>. We invite you to
          explore our world of fragrances, where every scent has the power to
          <strong>transform, inspire,</strong> and
          <strong>evoke cherished memories</strong>. Step into the realm of
          <strong>timeless elegance</strong> and allow your senses to be
          captivated by the magic of <strong>Hannah</strong>.
        </p>
        <br></br>
        </div>
      </div>
      <div
        id="product"
        className="block static w-full h-full text-gray-100 bg-gray-800 py-12 px-6 text-center"
      >
        <br></br>
        <br></br>
        <h1 className="text-4xl font-bold mb-6">Our Premium Perfumes</h1>
        <div>
          <table className="w-full bg-slate-400 p-5 text-left table-fixed ">
            <tbody>
              <tr className="flex flex-col sm:table-row">
                <td className="p-2 sm:p-3 m-2 sm:w-1/3 border-gray-700 border-8 border-double text-center">
                  <Image
                    className="border-4 border-double border-gray-700"
                    src="/1.png"
                    width={300}
                    height={300}
                    alt={"Perfume"}
                  />
                  <h2 className="text-xl sm:text-2xl">Blush Petals</h2>
                  <p className="text-xs md:text-base">
                    Blush Petals is a romantic blend of pink peony, fresh<br></br>
                    berries, and soft vanilla. Its delicate floral notes create<br></br>
                    an elegant fragrance perfect for everyday wear. A gentle<br></br>
                    embrace of femininity and charm.
                  </p>
                </td>

                <td className="p-2 sm:p-3 m-2 sm:w-1/3 border-gray-700 border-8 border-double text-center">
                  <Image
                    className="border-4 border-double border-gray-700"
                    src="/2.png"
                    width={300}
                    height={300}
                    alt={"Perfume"}
                  />
                  <h2 className="text-xl sm:text-2xl">Mocha Veil</h2>
                  <p className="text-xs md:text-base">
                    Mocha Veil envelops you in the rich aroma of freshly brewed<br></br>
                    coffee and bittersweet cacao. With hints of spiced cardamom<br></br>
                    and creamy tonka bean, it offers a cozy sophistication.
                  </p>
                </td>

                <td className="p-2 sm:p-3 m-2 sm:w-1/3 border-gray-700 border-8 border-double text-center">
                  <Image
                    className="border-4 border-double border-gray-700"
                    src="/3.png"
                    width={300}
                    height={300}
                    alt={"Perfume"}
                  />
                  <h2 className="text-xl sm:text-2xl">Citrine Dawn</h2>
                  <p className="text-xs md:text-base">
                    Citrine Dawn embodies the charm of a golden sunrise with<br></br>
                    zesty grapefruit and sweet honeysuckle. A lively scent for<br></br>
                    an uplifting start to the day.
                  </p>
                </td>
              </tr>

              <tr className="flex flex-col sm:table-row">
                <td className="p-2 sm:p-3 m-2 sm:w-1/3 border-gray-700 border-8 border-double text-center">
                  <Image
                    className="border-4 border-double border-gray-700"
                    src="/4.png"
                    width={300}
                    height={300}
                    alt={"Perfume"}
                  />
                  <h2 className="text-xl sm:text-2xl">Mystic Amber</h2>
                  <p className="text-xs md:text-base">
                    Mystic Amber features a luxurious blend of golden amber,<br></br>
                    spicy cinnamon, and velvety patchouli. A mysterious scent<br></br>
                    that leaves a lasting impression.
                  </p>
                </td>

                <td className="p-2 sm:p-3 m-2 sm:w-1/3 border-gray-700 border-8 border-double text-center">
                  <Image
                    className="border-4 border-double border-gray-700"
                    src="/5.png"
                    width={300}
                    height={300}
                    alt={"Perfume"}
                  />
                  <h2 className="text-xl sm:text-2xl">Sunrise Whisper</h2>
                  <p className="text-xs md:text-base">
                    Sunrise Whisper offers a refreshing blend of citrus and<br></br>
                    fresh green notes. With a touch of vanilla, it captures the<br></br>
                    essence of a perfect morning.
                  </p>
                </td>

                <td className="p-2 sm:p-3 m-2 sm:w-1/3 border-gray-700 border-8 border-double text-center">
                  <Image
                    className="border-4 border-double border-gray-700"
                    src="/6.png"
                    width={300}
                    height={300}
                    alt={"Perfume"}
                  />
                  <h2 className="text-xl sm:text-2xl">Scarlet Ember</h2>
                  <p className="text-xs md:text-base">
                    Scarlet Ember balances tangy pomegranate and blood orange<br></br>
                    with deep red rose and spicy cinnamon. A bold and<br></br>
                    captivating fragrance.
                  </p>
                </td>
              </tr>

              <tr className="flex flex-col sm:table-row">
                <td className="p-2 sm:p-3 m-2 sm:w-1/3 border-gray-700 border-8 border-double text-center">
                  <Image
                    className="border-4 border-double border-gray-700"
                    src="/10.png"
                    width={300}
                    height={300}
                    alt={"Perfume"}
                  />
                  <h2 className="text-xl sm:text-2xl">Rose Enigma</h2>
                  <p className="text-xs md:text-base">
                    Rose Enigma balances juicy raspberry and crisp green leaves<br></br>
                    with velvety rose petals. A complex floral fragrance perfect<br></br>
                    for signature wear.
                  </p>
                </td>

                <td className="p-2 sm:p-3 m-2 sm:w-1/3 border-gray-700 border-8 border-double text-center">
                  <Image
                    className="border-4 border-double border-gray-700"
                    src="/8.png"
                    width={300}
                    height={300}
                    alt={"Perfume"}
                  />
                  <h2 className="text-xl sm:text-2xl">Golden Nectar</h2>
                  <p className="text-xs md:text-base">
                    Golden Nectar radiates warmth with honeyed citrus and sweet<br></br>
                    apricot notes. A luxurious scent for exuding confidence.<br></br>
                  </p>
                </td>

                <td className="p-2 sm:p-3 m-2 sm:w-1/3 border-gray-700 border-8 border-double text-center">
                  <Image
                    className="border-4 border-double border-gray-700"
                    src="/9.png"
                    width={300}
                    height={300}
                    alt={"Perfume"}
                  />
                  <h2 className="text-xl sm:text-2xl">Midnight Ocean</h2>
                  <p className="text-xs md:text-base">
                    Midnight Ocean embodies the bittersweet mystery of the sea<br></br>
                    with fresh sea breeze and deep blue iris. Perfect for those<br></br>
                    seeking adventure.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="search" className="bg-gray-100 w-full h-full text-gray-800 md:m5 md:p3 p2 m3 text-center">
<h1 className="md:text-5xl text-3xl p-10"><strong>Want to explore more?</strong></h1>
<input type="text"  placeholder="Search🔍"  className="border-4 border-gray-800 border-solid p-4 m-5  md:p-6 md:m-10 w-7/12 md:h-5 h-2 bg-gray-200 rounded-full"></input><input type="submit" value={"search"} className="bg-zinc-300 px:3 md:px-4 p-1  border-solid border-4 border-gray-800 rounded-3xl hover:bg-gray-400"></input>
      </div>
<Footer></Footer>
    </div>
  );
}
