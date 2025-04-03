import Image from 'next/image';
import { Darker_Grotesque } from 'next/font/google';


const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  weight: ['700', '700'],
});
export default function Home() {
  return (
    <>
      <header className="relative">
        <video
          className='w-full'
          src='video/gdbanner.mp4'
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </header>
      <main>
        <section className='relative'>
          <video
            className='absolute w-[36%] top-[19.02%] left-[3.4%]'
            src='video/festime-animacion.mp4'
            autoPlay
            muted
            loop
            playsInline
          ></video>
          <Image
            src='/festime.png'
            alt='logo'
            width={1500}
            height={1500}
            loading='lazy'
            className='w-full'
          ></Image>
        </section>
        <section
          style={{
            background: 'linear-gradient(to right,rgb(29, 29, 29),rgb(40, 40, 40))',
          }}
          className='relative p-10'
        >
          <h2
            className={`${darkerGrotesque.className} text-white text-6xl px-5 pb-16`}
          >
            Youtube Thumbnails
          </h2>
          <div className='flex justify-center'>
            <Image
              src='/thubmnails.jpg'
              alt='thubmnails'
              width={1000}
              height={1000}
              loading='lazy'
              className=''
            ></Image>
          </div>
        </section>
        <section>
          <Image
            src='/eterna.png'
            alt='logo'
            width={1500}
            height={1500}
            loading='lazy'
            className='w-full'
          ></Image>
        </section>
        <section>
          <Image
            src='/planifica.png'
            alt='logo'
            width={1500}
            height={1500}
            loading='lazy'
            className='w-full'
          ></Image>
        </section>
        <section>
          <Image
            src='/embarazo.png'
            alt='logo'
            width={1500}
            height={1500}
            loading='lazy'
            className='w-full'
          ></Image>
        </section>
        <section>
          <Image
            src='/harmony.jpg'
            alt='logo'
            width={1500}
            height={1500}
            loading='lazy'
            className='w-full'
          ></Image>
        </section>
        <section>
          <Image
            src='/contraportada.jpg'
            alt='logo'
            width={1500}
            height={1500}
            loading='lazy'
            className='w-full'
          ></Image>
        </section>
        <section>
          <Image
            src='/contenido.jpg'
            alt='logo'
            width={1500}
            height={1500}
            loading='lazy'
            className='w-full'
          ></Image>
        </section>
        <section>
          <Image
            src='/lori.png'
            alt='logo'
            width={1500}
            height={1500}
            loading='lazy'
            className='w-full'
          ></Image>
        </section>
        <section>
          <Image
            src='/congreso.png'
            alt='congreso'
            width={1500}
            height={1500}
            loading='lazy'
            className='w-full'
          ></Image>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
