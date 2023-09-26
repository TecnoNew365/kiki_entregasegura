"use client"
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "¿En qué áreas está disponible el servicio de entrega de Kiki?",
    answer:
      "Actualmente, Kiki ofrece su servicio de entrega en la provincia de Pinar del Río. En próximas versiones se habilitaran otras zonas.",
  },
  {
    question: "¿Cuáles son los métodos de pago aceptados en Kiki?",
    answer:
      "En Kiki, aceptamos hasta el momento Transfermovil. También ofrecemos la opción de pago en efectivo cuando el monto no supere los $ 10 000. Puedes seleccionar tu método de pago preferido al finalizar tu pedido.",
  },
  {
    question: "¿Qué hago si tengo algún problema con mi pedido o necesito realizar cambios?",
    answer:
      "Si tienes algún problema con tu pedido o necesitas realizar cambios, te recomendamos ponerse en contacto con nuestro equipo de atención al cliente de Kiki lo antes posible. Puedes comunicarte con ellos a través de la sección \"Ayuda\" de la aplicación o encontrar la información de contacto en nuestro sitio web.",
  },
  {
    question: "¿Cómo puedo saber en que estado se encuentra mi pedido?",
    answer:
      "Una vez que hayas realizado tu pedido en Kiki, podrás rastrear su estado en tiempo real desde la aplicación. Te proporcionaremos actualizaciones sobre el mismo, incluyendo la preparación, recogida y entrega. También recibirás notificaciones cuando tu pedido esté en camino y cuando haya sido entregado.",
  },
];

export default function Faqs() {
  return (
    <div className="bg-transparent" id="faqs">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Preguntas frecuentes
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
