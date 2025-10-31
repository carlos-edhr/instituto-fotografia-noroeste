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
} from "lucide-react";
import { motion } from "framer-motion";
import type { CursoUnoBlock as CursoUnoBlockType } from "@/types/blocks";

export const CursoUnoBlockComponent: React.FC<CursoUnoBlockType> = (props) => {
  const {
    header,
    courseInfo,
    syllabus,
    requirements,
    paymentMethods,
    location,
    additionalInfo,
    enrollmentLink,
  } = props;

  return (
    <section
      id="iluminacion"
      className="bg-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-800/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-700/10 blur-[80px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-light px-4 py-1.5 rounded-full mb-6">
            {header?.badge || "CURSO PROFESIONAL"}
          </div>
          {/* Main Title - Styled like image.png */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-thin text-white uppercase tracking-tight my-1">
              {header?.title || "ILUMINACIÓN"}
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-4" />
            <h2 className="text-2xl md:text-4xl font-extralight text-red-500 uppercase">
              {header?.subtitle || "NIVEL 2"}
            </h2>
          </div>

          <p className="text-light text-gray-100 max-w-2xl mx-auto">
            {header?.description ||
              "Domina las técnicas avanzadas de iluminación fotográfica y lleva tus habilidades al siguiente nivel con nuestro curso especializado"}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Course Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-black/70 backdrop-blur-sm border-2 border-red-900/50 rounded-xl p-6 h-full">
              <Tabs defaultValue="info" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 bg-black/50 border border-red-900/30 p-1 rounded-lg">
                  <TabsTrigger
                    value="info"
                    className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-300 hover:text-white transition-all flex items-center gap-2"
                  >
                    Información
                  </TabsTrigger>
                  <TabsTrigger
                    value="details"
                    className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-300 hover:text-white transition-all flex items-center gap-2"
                  >
                    Temario
                  </TabsTrigger>
                  <TabsTrigger
                    value="Pago"
                    className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-300 hover:text-white transition-all flex items-center gap-2"
                  >
                    Pago
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="info" className="space-y-6">
                  <div className="grid gap-6">
                    <div className="flex items-center gap-4 p-4 bg-black/50 rounded-lg border border-red-900/30">
                      <div className="p-2 rounded-full bg-red-500/20">
                        <Calendar className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">
                          Fecha de Inicio
                        </h3>
                        <p className="text-gray-300">
                          {courseInfo?.startDate || "29 DE OCTUBRE 2025"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-black/50 rounded-lg border border-red-900/30">
                      <div className="p-2 rounded-full bg-red-500/20">
                        <Clock className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Horario</h3>
                        <p className="text-gray-300">
                          {courseInfo?.schedule || "MIÉRCOLES | 6:00 PM - 9:00 PM"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-black/50 rounded-lg border border-red-900/30">
                      <div className="p-2 rounded-full bg-red-500/20">
                        <User className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Instructor</h3>
                        <a
                          href={courseInfo?.instructor?.link || "https://www.caneckleyva.com"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-red-400 transition-colors flex items-center gap-1"
                        >
                          {courseInfo?.instructor?.name || "CANECK LEVVA"}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-black/50 rounded-lg border border-red-900/30">
                      <div className="p-2 rounded-full bg-red-500/20">
                        <CreditCard className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Inversión</h3>
                        <p className="text-2xl font-bold text-red-500">
                          {courseInfo?.price || "$6,000.00 MXN"}
                        </p>
                        <p className="text-sm text-gray-400">
                          {courseInfo?.paymentDescription ||
                            "Inscríbete con $3,000.00 El resto a pagar a lo largo del curso"}
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="details" className="space-y-4">
                  <div className="bg-black/50 rounded-lg border border-red-900/30 p-6">
                    <h3 className="text-white font-semibold text-lg mb-4">
                      Temario del Curso
                    </h3>
                    <ul className="space-y-4 text-gray-300">
                      {syllabus?.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-sm font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <span>{item.item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-black/50 rounded-lg border border-red-900/30 p-6">
                    <h3 className="text-white font-semibold text-lg mb-4">
                      Requisitos
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      {requirements?.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{req.requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="Pago" className="space-y-4">
                  <div className="bg-black/50 rounded-lg border border-red-900/30 p-6">
                    <h3 className="text-white font-bold text-xl mb-6 text-center">
                      Pago
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-red-400 font-semibold mb-3">
                          Transferencias: {paymentMethods?.bankTransfer?.bankName || "Santander"}
                        </h4>
                        <div className="space-y-2 text-gray-300">
                          <p>
                            <strong>Titular:</strong> {paymentMethods?.bankTransfer?.accountHolder || "Caneck Leyva López"}
                          </p>
                          <p>
                            <strong># de Cuenta:</strong> {paymentMethods?.bankTransfer?.accountNumber || "20-00636037-5"}
                          </p>
                          <p>
                            <strong>CLABE:</strong> {paymentMethods?.bankTransfer?.clabe || "014028200063603759"}
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-red-900/30 pt-4">
                        <h4 className="text-red-400 font-semibold mb-3">
                          Depósitos en Oxxo: {paymentMethods?.bankTransfer?.bankName || "Santander"}
                        </h4>
                        <div className="space-y-2 text-gray-300">
                          <p>
                            <strong>Número de tarjeta:</strong> {paymentMethods?.oxxo?.cardNumber || "5579 0990 1896 2458"}
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-red-900/30 pt-4">
                        <h4 className="text-red-400 font-semibold mb-3">
                          PayPal:
                        </h4>
                        <div className="space-y-2 text-gray-300">
                          <a
                            href={paymentMethods?.paypal?.link || "https://www.paypal.me/ifntijuana"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-red-400 transition-colors flex items-center gap-1"
                          >
                            {paymentMethods?.paypal?.link || "www.paypal.me/ifntijuana"}
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      <div className="border-t border-red-900/30 pt-4">
                        <h4 className="text-red-400 font-semibold mb-3">
                          Zelle:
                        </h4>
                        <div className="space-y-2 text-gray-300">
                          <p>
                            <strong>Correo:</strong> {paymentMethods?.zelle?.email || "valeystudio@gmail.com"}
                          </p>
                            <p>
                            <strong>Nombre:</strong> {paymentMethods?.zelle?.name || "Leyva Lopez Services"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <a
                href={enrollmentLink || "https://docs.google.com/forms/d/e/1FAIpQLSdUTHwozSYrhiSyvZEMlwGHnOPACZDLzW18Eu9TrvXII2Fa5w/viewform"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full mt-8 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white text-lg py-6 rounded-lg font-semibold transition-all">
                  Inscribirse al Curso
                </Button>
              </a>
            </Card>
          </motion.div>

          {/* Location and Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Location Map */}
            <Card className="bg-black/70 backdrop-blur-sm border-2 border-red-900/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-red-500/20">
                  <MapPin className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-white font-bold text-xl">
                  Ubicación del Curso
                </h3>
              </div>

              <div className="rounded-lg overflow-hidden border border-red-900/30 bg-black/50">
                <div
                  className="aspect-video bg-gray-800 flex items-center justify-center"
                  dangerouslySetInnerHTML={{
                    __html: location?.mapEmbed || '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.366977773557!2d-116.9304915!3d32.489619399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d939fdebea43a9%3A0x7a575067983e700e!2sAurora%20Offices%20%2B%20Coworking!5e0!3m2!1ses-419!2smx!4v1760048976848!5m2!1ses-419!2smx" width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy"></iframe>',
                  }}
                />
              </div>

              <div className="mt-4 p-4 bg-black/50 rounded-lg border border-red-900/30">
                <h4 className="text-white font-semibold mb-2">Dirección</h4>
                <p className="text-gray-300 text-sm">
                  {location?.address ||
                    "Ave, Paseo del Río, Cto. Río Tijuana #6672, Tercera Etapa, 22226 Tijuana, B.C."}
                </p>
              </div>
            </Card>

            {/* Additional Information */}
            <Card className="bg-black/70 backdrop-blur-sm border-2 border-red-500/50 rounded-xl p-6">
              <h3 className="text-white font-bold text-xl mb-4">
                Información Adicional
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-red-900/30">
                  <span className="text-gray-300">Duración total</span>
                  <span className="text-white font-semibold">
                    {additionalInfo?.duration || "6 semanas"}
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-red-900/30">
                  <span className="text-gray-300">Sesiones</span>
                  <span className="text-white font-semibold">
                    {additionalInfo?.sessions || "6 sesiones"}
                  </span>
                </div>

                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300">Incluye</span>
                  <span className="text-white font-semibold">
                    {additionalInfo?.includes || "Material didáctico"}
                  </span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm text-center">
                  ⚠️ Cupo limitado - Reserva tu lugar con anticipación
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 border-t border-red-900/50 pt-12"
        >
          {/* Puedes agregar más contenido aquí si lo deseas */}
        </motion.div>
      </div>
    </section>
  );
};