// components/cursos-privados.tsx
"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  Laptop,
  Home,
  Clock,
  Mail,
  Phone,
  GraduationCap,
  VideoIcon,
} from "lucide-react";
import { motion } from "framer-motion";

export function CursosPrivadosSection() {
  return (
    <section
      id="asesorias"
      className="bg-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Decorative elements - Unique arrangement */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-red-600/15 blur-[90px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-red-800/12 blur-[110px] rounded-full" />
        <div className="absolute top-1/2 right-10 w-[280px] h-[280px] bg-red-700/15 blur-[70px] rounded-full" />
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-light px-4 py-1.5 rounded-full mb-6">
            <GraduationCap className="w-4 h-4" />
            INSTITUTO DE FOTOGRAFÍA DEL NOROESTE
          </div>

          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-thin text-white uppercase tracking-tight mb-2">
              CURSOS PRIVADOS
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-4" />
            <h2 className="text-xl md:text-2xl font-extralight text-red-500 uppercase">
              PERSONALIZADOS
            </h2>
          </div>

          <p className="text-light text-gray-100 max-w-2xl mx-auto text-lg">
            Educación fotográfica de élite adaptada a tus necesidades
            específicas
          </p>
        </motion.div>

        {/* Main Pricing Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-black/70 backdrop-blur-sm border-2 border-red-900/50 rounded-xl p-6">
            <Tabs defaultValue="presencial" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-black/50 border border-red-900/30 p-1 rounded-lg">
                <TabsTrigger
                  value="presencial"
                  className="text-gray-300 hover:text-white data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all flex items-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  Modalidad Presencial
                </TabsTrigger>
                <TabsTrigger
                  value="virtual"
                  className="text-gray-300 hover:text-white data-[state=active]:bg-red-600 data-[state=active]:text-white transition-all flex items-center gap-2"
                >
                  <Laptop className="w-4 h-4" />
                  Modalidad Virtual
                </TabsTrigger>
              </TabsList>

              <TabsContent value="presencial" className="space-y-6">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-red-500/20 px-4 py-2 rounded-full mb-4">
                    <Clock className="w-4 h-4 text-red-500" />
                    <span className="text-red-500 font-medium">
                      12 HORAS TOTALES
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Clases personalizadas en nuestro estudio o ubicación
                    preferida
                  </p>
                </div>

                <div className="grid gap-6">
                  {[
                    { students: "1 estudiante", price: "$10,000.00 MXN" },
                    { students: "2 estudiantes", price: "$9,000.00 MXN" },
                    { students: "3 estudiantes", price: "$8,000.00 MXN" },
                    { students: "4 estudiantes", price: "$7,000.00 MXN" },
                    { students: "5+ estudiantes", price: "$6,000.00 MXN" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="bg-black/50 border border-red-900/30 rounded-lg p-6 hover:border-red-500/40 transition-all group">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Users className="w-5 h-5 text-red-500" />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold">
                                {item.students}
                              </h3>
                              <p className="text-gray-400 text-sm">
                                Precio por estudiante
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-red-500">
                              {item.price}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-6">
                  <p className="text-red-400 text-sm text-center">
                    * Clases a domicilio tienen un costo extra dependiendo la
                    ubicación
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="virtual" className="space-y-6">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-red-500/20 px-4 py-2 rounded-full mb-4">
                    <Clock className="w-4 h-4 text-red-500" />
                    <span className="text-red-500 font-medium">
                      12 HORAS TOTALES
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Sesiones en vivo desde la comodidad de tu hogar u estudio
                  </p>
                </div>

                <div className="grid gap-6">
                  {[
                    { students: "1 estudiante", price: "$7,000.00 MXN" },
                    { students: "2 estudiantes", price: "$6,000.00 MXN" },
                    { students: "3 estudiantes", price: "$5,000.00 MXN" },
                    { students: "4 estudiantes", price: "$4,500.00 MXN" },
                    { students: "5+ estudiantes", price: "$4,000.00 MXN" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="bg-black/50 border border-red-900/30 rounded-lg p-6 hover:border-red-500/40 transition-all group">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                              <VideoIcon className="w-5 h-5 text-red-500" />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold">
                                {item.students}
                              </h3>
                              <p className="text-gray-400 text-sm">
                                Precio por estudiante
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-red-500">
                              {item.price}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </motion.div>

        {/* Asesorías Únicas Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Asesorías Únicas
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Consultoría especializada para proyectos específicos o dudas
              técnicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="bg-black/70 backdrop-blur-sm border-2 border-red-500/50 rounded-xl p-8 h-full group hover:border-red-500/80 transition-all">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Home className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">
                    Asesoría Presencial
                  </h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-red-500" />
                    <span className="text-gray-300">Por hora</span>
                  </div>
                  <p className="text-3xl font-bold text-red-500 mb-4">
                    $1,200.00 MXN
                  </p>
                  <p className="text-gray-300 text-sm">
                    Sesiones individuales de consultoría técnica especializada
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="bg-black/70 backdrop-blur-sm border-2 border-red-900/50 rounded-xl p-8 h-full group hover:border-red-500/60 transition-all">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Laptop className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">
                    Asesoría Virtual
                  </h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-red-500" />
                    <span className="text-gray-300">Por hora</span>
                  </div>
                  <p className="text-3xl font-bold text-red-500 mb-4">
                    $800.00 MXN
                  </p>
                  <p className="text-gray-300 text-sm">
                    Consultoría en línea para resolver dudas específicas desde
                    cualquier ubicación
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <Card className="bg-black/70 backdrop-blur-sm border-2 border-red-500/50 rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Contáctanos
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Agenda tu curso personalizado o solicita más información
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-black/50 rounded-lg border border-red-900/30">
                  <div className="p-3 rounded-full bg-red-500/20">
                    <Mail className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:curso@leyvafotografia.com"
                      className="text-gray-300 hover:text-red-400 transition-colors"
                    >
                      curso@leyvafotografia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-black/50 rounded-lg border border-red-900/30">
                  <div className="p-3 rounded-full bg-red-500/20">
                    <Phone className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Teléfono</h3>
                    <a
                      href="tel:+526647200826"
                      className="text-gray-300 hover:text-red-400 transition-colors"
                    >
                      +52 664 720 0826
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-4">
                <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-6 text-lg font-semibold transition-all">
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar Correo
                </Button>
                <Button
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-6 text-lg font-semibold transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar Ahora
                </Button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-red-900/50">
              <p className="text-gray-400 text-sm text-center">
                Todos nuestros cursos incluyen material didáctico, certificado
                de participación y seguimiento personalizado del instructor
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
