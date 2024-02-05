import Link from '../../../node_modules/next/link';

export default function Video() {
  return (
    <div className="bg-stone-800">
      <header>
        <video
          className="w-full"
          src="video/banner-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </header>
      <main className="w-full bg-stone-800 md:p-10 ">
        <section>
          <iframe
            className="w-full h-[250px] mt-10 md:h-[500px] lg:h-[700px] lg:w-3/4 lg:mx-auto xl:w-4/6"
            src="https://www.youtube.com/embed/7BdbnSJhuBg?si=n3VgtvkNIWjyhDVb"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </section>
        <section>
          <iframe
            className="w-full h-[250px] mt-20 md:h-[500px] lg:h-[700px] lg:w-3/4 lg:mx-auto xl:w-4/6"
            src="https://www.youtube.com/embed/POx5nY7AL_E?si=mG8f6djGOvpXub7J"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </section>
        <section>
          <iframe
            className="w-full h-[250px] mt-20 md:h-[500px] lg:h-[700px] lg:w-3/4 lg:mx-auto xl:w-4/6"
            src="https://www.youtube.com/embed/oo862phRd88?si=QzNuCCHEyZV56h2Y"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </section>
        <section>
          <iframe
            className="w-full h-[250px] mt-20 md:h-[500px] lg:h-[700px] lg:w-3/4 lg:mx-auto xl:w-4/6"
            src="https://www.youtube.com/embed/5rn6cCw7t0o?si=Q-5I59SfzG9FGotl"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </section>
        <section>
          <iframe
            className="w-full h-[250px] mt-20 md:h-[500px] lg:h-[700px] lg:w-3/4 lg:mx-auto xl:w-4/6"
            src="https://www.youtube.com/embed/o9IQa_iuNH4?si=QNbFK2yGZGa0tr55"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </section>
        <section>
          <iframe
            className="w-full h-[250px] mt-20 md:h-[500px] lg:h-[700px] lg:w-3/4 lg:mx-auto xl:w-4/6"
            src="https://www.youtube.com/embed/ioPzxs4etSQ?si=G-zWlt3Aw9Q2yt0F"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </section>
        <video
          src="video/miss.mp4"
          className=" w-5/6 pb-10 lg:w-1/4 mx-auto mt-20"
          controls
        ></video>
      </main>
    </div>
  );
}
