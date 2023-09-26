
export default function Testimonial() {
  return (
    <div className="w-full g-main  h-96 my-24 flex flex-col items-center justify-center gap-8">
      <h2 className="title text-center max-w-4xl">
        En "Kiki", entendemos la importancia de la convivencia y la calidad en el servicio de entrega.
        Nuestra aplicación permite explorar una amplia variedad de restaurantes, tiendas y mercados, y realizar pedidos con faciidad.
        ¡Todo al alcance de tus dedos!

      </h2>
      <div className="flex items-center gap-4">
        <div className="rounded-full w-12 h-12 bg-black overflow-hidden"></div>
        <div className="flex flex-col tracking-wider">
          <label className="text-gray-600 font-bold text-base">
            Equipo de trabajo
          </label>
          <label className="text-gray-400 font-normal text-sm">
            Kiki, <a href="http://localhost">A&A</a>
          </label>
        </div>
      </div>
    </div>
  );
}
