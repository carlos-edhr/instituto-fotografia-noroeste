// components/sign-in-view.tsx
"use client";
import Link from "next/link";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Camera, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const SignInView = () => {
  const router = useRouter();
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const [showPassword, setShowPassword] = useState(false);

  const login = useMutation(
    trpc.auth.login.mutationOptions({
      onError: (error) => {
        toast.error(error.message);
      },
      onSuccess: async () => {
        await queryClient.invalidateQueries(trpc.auth.session.pathFilter());
        router.push("/admin");
      },
    }),
  );

  const form = useForm<z.infer<typeof loginSchema>>({
    mode: "all",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    login.mutate(values);
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[10%] top-[15%] h-60 w-60 rounded-full bg-red-600/10 blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, -60, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[15%] top-[25%] h-40 w-40 bg-red-800/15 blur-2xl rounded-full"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[20%] left-[20%] h-32 w-32 bg-red-500/20 blur-xl rounded-full"
        />
      </div>

      <div className="w-full max-w-md z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black/80 backdrop-blur-xl rounded-2xl border border-red-900/30 shadow-2xl p-8 relative overflow-hidden"
        >
          {/* Subtle texture overlay */}
          {/* <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          /> */}

          <div className="flex flex-col items-center mb-8 relative z-10">
            <div className="relative w-60 h-20 mb-6">
              <Image
                src="/img/logo-1.png"
                alt="Instituto de Fotografía del Noroeste"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-red-500"></div>
              <Camera className="w-5 h-5 text-red-500" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-red-500"></div>
            </div>

            <h1 className="text-2xl md:text-3xl font-light text-white text-center tracking-wide">
              Bienvenido de vuelta
            </h1>
            <p className="text-gray-400 text-center mt-2 text-sm">
              Accede a tu cuenta para continuar
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-6 relative z-10"
            >
              <FormField
                name="email"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="text-white font-light tracking-wide">
                      Correo electrónico
                    </FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          {...field}
                          className={cn(
                            "bg-black/50 border-red-900/50 text-white rounded-lg py-6 px-4 pr-10 backdrop-blur-sm",
                            "placeholder:text-gray-500 focus:border-red-500 transition-all duration-300",
                            fieldState.error && "border-red-500",
                            !fieldState.error &&
                              fieldState.isDirty &&
                              "border-red-400",
                          )}
                          placeholder="tu@email.com"
                        />
                      </FormControl>
                      {!fieldState.error && fieldState.isDirty && (
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <CheckCircle2 className="h-5 w-5 text-green-400" />
                        </div>
                      )}
                    </div>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                name="password"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="text-white font-light tracking-wide">
                      Contraseña
                    </FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          className={cn(
                            "bg-black/50 border-red-900/50 text-white rounded-lg py-6 px-4 pr-16 backdrop-blur-sm",
                            "placeholder:text-stone-500 focus:border-red-500 transition-all duration-300",
                            fieldState.error && "border-red-500",
                            !fieldState.error &&
                              fieldState.isDirty &&
                              "border-red-400 bg-white text-black",
                          )}
                          placeholder="••••••••"
                        />
                      </FormControl>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 gap-1">
                        {/* {!fieldState.error && fieldState.isDirty && (
                          <CheckCircle2 className="h-5 w-5 text-red-400" />
                        )} */}
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <Button
                disabled={login.isPending}
                type="submit"
                size="lg"
                className={cn(
                  "mt-4 rounded-lg bg-gradient-to-r from-red-600 to-red-800 text-white",
                  "text-lg font-light tracking-wide py-6 hover:from-red-700 hover:to-red-900",
                  "transition-all duration-300 border border-red-500/20 shadow-lg",
                  "hover:shadow-red-500/20 disabled:opacity-50",
                )}
              >
                {login.isPending ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Iniciando sesión...
                  </div>
                ) : (
                  "Iniciar sesión"
                )}
              </Button>
            </form>
          </Form>

          <div className="mt-6 text-center relative z-10">
            <p className="text-gray-400 text-sm">
              ¿No tienes cuenta?{" "}
              <Link
                href="/sign-up"
                className="text-red-400 font-light hover:text-red-300 transition-colors underline"
              >
                Regístrate
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
