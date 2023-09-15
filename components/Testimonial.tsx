
export default function Testimonial() {
  return (
    <div className="w-full g-main  h-96 my-24 flex flex-col items-center justify-center gap-8">
      <h2 className="title text-center max-w-4xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s
      </h2>
      <div className="flex items-center gap-4">
        <div className="rounded-full w-12 h-12 bg-black overflow-hidden"></div>
        <div className="flex flex-col tracking-wider">
          <label className="text-gray-600 font-bold text-base">
            John Doe
          </label>
          <label className="text-gray-400 font-normal text-sm">
            CEO, Company
          </label>
        </div>
      </div>
    </div>
  );
}
