"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Clock,
  User,
  MapPin,
  CreditCard,
  ExternalLink,
  BookOpen,
  Target,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { CursoDosBlock as CursoDosBlockType } from "@/types/blocks";

const iconMap = {
  calendar: Calendar,
  clock: Clock,
  user: User,
  creditcard: CreditCard,
};

export const CursoDosBlockComponent: React.FC<CursoDosBlockType> = (props) => {
  const {
    header,
    quickInfo,
    mainContent,
    syllabus,
    requirements,
    paymentMethods,
    location,
    enrollmentLink,
  } = props;

  return (
    <section
      id="lightroom"
      className="bg-black px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Decorative elements - Different arrangement */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-red-600/15 blur-[90px] rounded-full" />
        <div className="absolute bottom-20 left-10 w-[450px] h-[450px] bg-red-800/12 blur-[110px] rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-[250px] h-[250px] bg-red-700/15 blur-[70px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with different styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-light px-4 py-1.5 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            {header?.badge || "TALLER INTENSIVO"}
          </div>

          {/* Main Title with different layout */}
          <div className="mb-8">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-thin text-white uppercase tracking-tight mb-2">
                {header?.title || "LIGHTROOM"}
              </h1>
              <div className="w-24 h-0.5 bg-gradient-to-r from-red-500 to-red-700 mb-3" />
              <h2 className="text-2xl md:text-4xl font-extralight text-red-500 uppercase mb-4">
                {header?.subtitle || "CLASSIC"}
              </h2>
            </div>
          </div>

          <p className="text-light text-gray-100 max-w-2xl mx-auto text-lg">
            {header?.description ||
              "Domina el revelado digital profesional con Adobe Lightroom Classic en nuestro taller intensivo"}
          </p>
        </motion.div>

        {/* Key Information Cards - Different layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {quickInfo?.map((info, index) => {
            const IconComponent =
              iconMap[info.icon as keyof typeof iconMap] || Calendar;

            const cardContent = (
              <Card className="bg-black/70 backdrop-blur-sm border border-red-900/40 rounded-xl p-6 text-center group hover:border-red-500/60 transition-all">
                <IconComponent className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                <p className="text-gray-300 text-sm">{info.description}</p>
              </Card>
            );

            return info.link ? (
              <Link
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cardContent}
              </Link>
            ) : (
              <div key={index}>{cardContent}</div>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-8">
          {/* Left Column - Location and Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Location Card */}
            <Card className="bg-black/70 backdrop-blur-sm border-2 border-red-900/50 rounded-xl p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-red-500/20">
                  <MapPin className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-white font-bold text-lg">Ubicación</h3>
              </div>

              <div className="rounded-lg overflow-hidden border border-red-900/30 bg-black/50 mb-4">
                <div className="aspect-video bg-gray-800">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        location?.mapEmbed ||
                        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.8632238895534!2d-117.04283130321045!3d32.52979980000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94995f2c5f93d%3A0x672b777eab390451!2sEspacio%20Observatorio!5e0!3m2!1ses-419!2smx!4v1760061778512!5m2!1ses-419!2smx" width="100%" height="100%" style="border: 0;" allowfullscreen loading="lazy"></iframe>',
                    }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    {location?.venue || "Observatorio"}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {location?.address ||
                      "Antiguo Cine Bujazan, Av. Constitución 1337, Zona Centro, 22000 Tijuana, B.C."}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Main Content Card with Vertical Tabs */}
            <Card className="bg-black/70 backdrop-blur-sm border-2 border-red-900/50 rounded-xl p-6">
              <Tabs defaultValue="info" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 bg-black/50 border border-red-900/30 p-1 rounded-lg">
                  <TabsTrigger
                    value="info"
                    className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-300 hover:text-white transition-all flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4" />
                    Información
                  </TabsTrigger>
                  <TabsTrigger
                    value="details"
                    className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-300 hover:text-white transition-all flex items-center gap-2"
                  >
                    <Target className="w-4 h-4" />
                    Temario
                  </TabsTrigger>
                  <TabsTrigger
                    value="Pago"
                    className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-300 hover:text-white transition-all flex items-center gap-2"
                  >
                    <CreditCard className="w-4 h-4" />
                    Pago
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="info" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="bg-black/50 rounded-lg border border-red-900/30 p-4">
                        <h4 className="text-white font-semibold mb-2">
                          Duración
                        </h4>
                        <p className="text-gray-300">
                          {mainContent?.duration || "3 semanas intensivas"}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {mainContent?.durationDetails ||
                            "Del 22 de Noviembre al 6 de Diciembre"}
                        </p>
                      </div>

                      <div className="bg-black/50 rounded-lg border border-red-900/30 p-4">
                        <h4 className="text-white font-semibold mb-2">
                          Incluye
                        </h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          {mainContent?.includes?.map(
                            (include: { item: string }, index: number) => (
                              <li key={index}>• {include.item}</li>
                            ),
                          ) || (
                            <>
                              <li>• Material didáctico completo</li>
                              <li>• Archivos RAW para práctica</li>
                              <li>• Acceso a recursos exclusivos</li>
                              <li>• Certificado de participación</li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-black/50 rounded-lg border border-red-900/30 p-4">
                        <h4 className="text-white font-semibold mb-2">
                          Inversión
                        </h4>
                        <p className="text-2xl font-bold text-red-500 mb-1">
                          {mainContent?.price || "$6,000.00 MXN"}
                        </p>
                        <p className="text-gray-300 text-sm">
                          Inscríbete con $3,000.00
                          <br />
                          El resto a pagar a lo largo del curso
                        </p>
                      </div>

                      <div className="bg-black/50 rounded-lg border border-red-900/30 p-4">
                        <h4 className="text-white font-semibold mb-2">
                          Docente
                        </h4>
                        <p className="text-gray-300">
                          {mainContent?.instructorName || "Mtro. Caneck Leyva"}
                        </p>
                        <a
                          href={
                            mainContent?.instructorLink ||
                            "https://www.caneckleyva.com"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-400 hover:text-red-400 transition-colors flex items-center gap-1 mt-1"
                        >
                          Consulta el trabajo del docente
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="details" className="space-y-6">
                  <div className="bg-black/50 rounded-lg border border-red-900/30 p-6">
                    <h3 className="text-white font-semibold text-lg mb-4 text-center">
                      Temario del Taller
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-4">
                        {syllabus?.slice(0, 3).map((item, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-3 bg-black/30 rounded-lg"
                          >
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm font-bold">
                                {index + 1}
                              </span>
                            </div>
                            <p className="text-gray-300 text-sm">{item.item}</p>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-4">
                        {syllabus?.slice(3, 5).map((item, index) => (
                          <div
                            key={index + 3}
                            className="flex items-start gap-3 p-3 bg-black/30 rounded-lg"
                          >
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm font-bold">
                                {index + 4}
                              </span>
                            </div>
                            <p className="text-gray-300 text-sm">{item.item}</p>
                          </div>
                        ))}
                        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                          <p className="text-red-400 text-sm text-center">
                            + Ejercicios prácticos y proyectos reales
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/50 rounded-lg border border-red-900/30 p-6">
                    <h3 className="text-white font-semibold text-lg mb-4">
                      Requisitos
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                      <div className="space-y-2">
                        {requirements?.slice(0, 2).map((req, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                            <span>{req.requirement}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        {requirements?.slice(2, 4).map((req, index) => (
                          <div
                            key={index + 2}
                            className="flex items-center gap-2"
                          >
                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                            <span>{req.requirement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="Pago" className="space-y-6">
                  <div className="bg-black/50 rounded-lg border border-red-900/30 p-6">
                    <h3 className="text-white font-bold text-xl mb-6 text-center">
                      Pago
                    </h3>

                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-red-400 font-semibold mb-3">
                            Transferencias:{" "}
                            {paymentMethods?.bankTransfer?.bankName ||
                              "Santander"}
                          </h4>
                          <div className="space-y-2 text-gray-300 text-sm">
                            <p>
                              <strong>Titular:</strong>{" "}
                              {paymentMethods?.bankTransfer?.accountHolder ||
                                "Caneck Leyva López"}
                            </p>
                            <p>
                              <strong># de Cuenta:</strong>{" "}
                              {paymentMethods?.bankTransfer?.accountNumber ||
                                "20-00636037-5"}
                            </p>
                            <p>
                              <strong>CLABE:</strong>{" "}
                              {paymentMethods?.bankTransfer?.clabe ||
                                "014028200063603759"}
                            </p>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-red-400 font-semibold mb-3">
                            Depósitos en Oxxo:{" "}
                            {paymentMethods?.bankTransfer?.bankName ||
                              "Santander"}
                          </h4>
                          <div className="space-y-2 text-gray-300 text-sm">
                            <p>
                              <strong>Número de tarjeta:</strong>
                            </p>
                            <p className="font-mono">
                              {paymentMethods?.oxxo?.cardNumber ||
                                "5579 0990 1896 2458"}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-red-900/30 pt-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-red-400 font-semibold mb-3">
                              PayPal:
                            </h4>
                            <div className="space-y-2 text-gray-300">
                              <a
                                href={
                                  paymentMethods?.paypal?.link ||
                                  "https://www.paypal.me/ifntijuana"
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-red-400 transition-colors flex items-center gap-1 text-sm"
                              >
                                {paymentMethods?.paypal?.link ||
                                  "www.paypal.me/ifntijuana"}
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-red-400 font-semibold mb-3">
                              Zelle:
                            </h4>
                            <div className="space-y-2 text-gray-300 text-sm">
                              <p>
                                <strong>Correo:</strong>{" "}
                                {paymentMethods?.zelle?.email ||
                                  "valeystudio@gmail.com"}
                              </p>
                              <p>
                                <strong>Nombre:</strong>{" "}
                                {paymentMethods?.zelle?.name ||
                                  "Leyva Lopez Services"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </motion.div>
        </div>

        {/* CTA Section with different styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 border-t border-red-900/50 pt-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            ¿Listo para dominar Lightroom Classic?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a nuestro taller intensivo y transforma tu flujo de trabajo
            fotográfico
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={enrollmentLink || "https://goo.gl/t7v3kE"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-6 text-lg">
                Inscribirme Ahora
              </Button>
            </a>
            <Button
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-6 text-lg"
            >
              Más Información
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 border-t border-red-900/50 pt-12"
        ></motion.div>
      </div>
    </section>
  );
};
