export function SectionVideoBar() {
  return (
    <div className="max-w-5xl mx-auto mt-5 lg:mt-0 ">
      <div className="mx-6 grid grid-cols-2 justify-start items-start gap-5">
        {/* Левое видео */}
        <video 
          src="/video/Bar1.mp4"
          poster="/video/poster1.png"
          controls
          autoPlay={false}
          muted={false}
          loop={false}
          className=" w-[200px] h-[260px] lg:w-full lg:h-full rounded-xl block"
        ></video>

        {/* Правое видео с верхним отступом на больших экранах */}
        <video
           
          src="/video/Bar2.mp4"
          poster="/video/poster2.png"
          controls
          autoPlay={false}
          muted={false}
          loop={false}
          className="w-[200px] h-[260px] lg:w-full lg:h-full rounded-xl block mt-[60px] lg:mt-[120px]"
        ></video>
      </div>
    </div>
  )
}
