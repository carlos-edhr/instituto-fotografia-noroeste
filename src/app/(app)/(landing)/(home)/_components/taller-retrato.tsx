// components/taller-retrato.tsx
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
  Camera,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function TallerRetratoSection() {
  return (
    <section
      id="retrato"
      className="bg-black px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Decorative elements - Unique arrangement */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-red-600/20 blur-[80px] rounded-full" />
        <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-red-800/15 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-[250px] h-[250px] bg-red-700/18 blur-[70px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with unique styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-light px-4 py-1.5 rounded-full mb-6">
            <Camera className="w-4 h-4" />
            TALLER ESPECIALIZADO
          </div>

          {/* Main Title with unique layout */}
          <div className="mb-8">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-thin text-white uppercase tracking-tight mb-3">
                RETRATO
              </h1>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-red-500" />
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-red-500" />
              </div>
              <h2 className="text-xl md:text-3xl font-extralight text-red-500 uppercase">
                FOTOGRAFÍA PROFESIONAL
              </h2>
            </div>
          </div>

          <p className="text-light text-gray-100 max-w-2xl mx-auto text-lg">
            Domina las técnicas avanzadas de iluminación y producción para crear
            retratos impactantes en estudio y exterior
          </p>
        </motion.div>

        {/* Main Content Grid - Different layout */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Left Sidebar - Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Instructor Highlight Card */}
            <Card className="bg-black/70 backdrop-blur-sm border border-red-500/30 rounded-xl p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Docente</h3>
                <p className="text-gray-300 mb-3">Mtro. Caneck Leyva</p>
                <Link
                  href="https://www.caneckleyva.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-red-400 hover:text-red-300 transition-colors"
                >
                  Ver portafolio
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </Card>

            {/* Investment Card */}
            <Card className="bg-black/70 backdrop-blur-sm border-2 border-red-900/50 rounded-xl p-6">
              <div className="text-center mb-4">
                <CreditCard className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Inversión</h3>
                <p className="text-3xl font-bold text-red-500 mb-2">
                  $7,000.00 MXN
                </p>
                <p className="text-gray-300 text-sm">
                  Inscríbete con $3,000.00
                  <br />
                  El resto a pagar a lo largo del curso
                </p>
              </div>
              <Link
                href="https://goo.gl/t7v3kE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-4 rounded-lg font-semibold transition-all">
                  Inscribirse Ahora
                </Button>
              </Link>
            </Card>

            {/* Schedule Card */}
            <Card className="bg-black/70 backdrop-blur-sm border border-red-900/40 rounded-xl p-5">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-red-500" />
                  <div>
                    <h4 className="text-white font-semibold">Inicio</h4>
                    <p className="text-gray-300 text-sm">18 DE OCTUBRE 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-red-500" />
                  <div>
                    <h4 className="text-white font-semibold">Horario</h4>
                    <p className="text-gray-300 text-sm">
                      SÁBADOS | 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
                <div className="pt-3 border-t border-red-900/30">
                  <p className="text-gray-400 text-sm">
                    <strong>Duración:</strong> 3 semanas
                    <br />
                    <strong>Cierre:</strong> 1 de Noviembre
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Content Tabs - Different styling */}
            <Card className="bg-black/70 backdrop-blur-sm border-2 border-red-900/50 rounded-xl p-6">
              <Tabs defaultValue="temario" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-black/50 border border-red-900/30 p-1 rounded-lg">
                  <TabsTrigger
                    value="temario"
                    className="data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all flex items-center gap-2"
                  >
                    <Lightbulb className="w-4 h-4" />
                    Temario
                  </TabsTrigger>
                  <TabsTrigger
                    value="Pago"
                    className="data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all flex items-center gap-2"
                  >
                    <CreditCard className="w-4 h-4" />
                    Pago
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="temario" className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-white font-bold text-xl mb-2">
                      Temario del Taller
                    </h3>
                    <p className="text-gray-400 text-sm">
                      6 sesiones intensivas de teoría y práctica
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      {[1, 2, 3].map((num) => (
                        <div
                          key={num}
                          className="flex items-start gap-4 p-4 bg-black/50 rounded-lg border border-red-900/30 group hover:border-red-500/40 transition-all"
                        >
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                              <span className="text-white font-bold text-sm">
                                {num}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {num === 1 && "Propiedades de la Luz"}
                            {num === 2 &&
                              "Metodología para la producción del retrato"}
                            {num === 3 &&
                              "Manejo de iluminación artificial en exterior"}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      {[4, 5, 6].map((num) => (
                        <div
                          key={num}
                          className="flex items-start gap-4 p-4 bg-black/50 rounded-lg border border-red-900/30 group hover:border-red-500/40 transition-all"
                        >
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                              <span className="text-white font-bold text-sm">
                                {num}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {num === 4 && "Práctica de retrato en exterior"}
                            {num === 5 && "Práctica de retrato en estudio"}
                            {num === 6 &&
                              "Revelado digital y revisión de proyectos"}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements Section */}
                  <div className="bg-black/50 rounded-lg border border-red-900/30 p-6 mt-6">
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-red-500" />
                      Lo que aprenderás
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-gray-300 text-sm">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                          Técnicas profesionales de iluminación
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                          Dirección de modelos y composición
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                          Trabajo en estudio y locación
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                          Flujo de trabajo profesional
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                          Revelado digital especializado
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                          Análisis y crítica de proyectos
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="Pago" className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-white font-bold text-xl mb-2">Pago</h3>
                    <p className="text-gray-400 text-sm">
                      Realiza tu pago mediante cualquiera de estos métodos
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Payment Methods Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-black/50 rounded-lg border border-red-900/30 p-4">
                          <h4 className="text-red-400 font-semibold mb-3">
                            Transferencias: Santander
                          </h4>
                          <div className="space-y-2 text-gray-300 text-sm">
                            <p>
                              <strong>Titular:</strong> Caneck Leyva López
                            </p>
                            <p>
                              <strong># de Cuenta:</strong> 20-00636037-5
                            </p>
                            <p>
                              <strong>CLABE:</strong> 014028200063603759
                            </p>
                          </div>
                        </div>

                        <div className="bg-black/50 rounded-lg border border-red-900/30 p-4">
                          <h4 className="text-red-400 font-semibold mb-3">
                            PayPal
                          </h4>
                          <div className="space-y-2 text-gray-300">
                            <a
                              href="https://www.paypal.me/ifntijuana"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-300 hover:text-red-400 transition-colors flex items-center gap-1 text-sm"
                            >
                              www.paypal.me/ifntijuana
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-black/50 rounded-lg border border-red-900/30 p-4">
                          <h4 className="text-red-400 font-semibold mb-3">
                            Depósitos en Oxxo: Santander
                          </h4>
                          <div className="space-y-2 text-gray-300 text-sm">
                            <p>
                              <strong>Número de tarjeta:</strong>
                            </p>
                            <p className="font-mono text-lg">
                              5579 0990 1896 2458
                            </p>
                          </div>
                        </div>

                        <div className="bg-black/50 rounded-lg border border-red-900/30 p-4">
                          <h4 className="text-red-400 font-semibold mb-3">
                            Zelle
                          </h4>
                          <div className="space-y-2 text-gray-300 text-sm">
                            <p>
                              <strong>Correo:</strong> valeystudio@gmail.com
                            </p>
                            <p>
                              <strong>Nombre:</strong> Leyva Lopez Services
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Notice */}
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-center">
                      <p className="text-red-400 text-sm">
                        ⚠️ Después de realizar tu pago, envía el comprobante al
                        instructor para confirmar tu inscripción
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
            {/* Location Map - Prominent placement */}
            <Card className="bg-black/70 backdrop-blur-sm border-2 border-red-900/50 rounded-xl overflow-hidden">
              <div className="p-6 pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-red-500/20">
                    <MapPin className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      Ubicación del Taller
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Observatorio | Antiguo Cine Bujazan
                    </p>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-gray-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.8632238895534!2d-117.04283130321045!3d32.52979980000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94995f2c5f93d%3A0x672b777eab390451!2sEspacio%20Observatorio!5e0!3m2!1ses-419!2smx!4v1760061778512!5m2!1ses-419!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="p-4 bg-black/50 border-t border-red-900/30">
                <p className="text-gray-300 text-sm text-center">
                  Av. Constitución 1337, Zona Centro, 22000 Tijuana, B.C.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Final CTA Section - Unique styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 border-t border-red-900/50 pt-12"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Domina el Arte del Retrato Profesional
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Aprende de un maestro con más de 15 años de experiencia y lleva tu
              fotografía de retrato al siguiente nivel
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="https://goo.gl/t7v3kE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-6 text-lg">
                  Reservar Mi Lugar
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-6 text-lg"
              >
                Contactar al Instructor
              </Button>
            </div>

            <p className="text-gray-400 text-sm mt-6">
              Cupo limitado a 12 participantes • Incluye sesiones prácticas con
              modelos profesionales
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
