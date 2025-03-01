/* eslint-disable import/order */
/* eslint-disable padding-line-between-statements */
/* eslint-disable react/no-unknown-property */
// import { Link } from "@heroui/link";
// import { Snippet } from "@heroui/snippet";
// import { Code } from "@heroui/code";
// import { button as buttonStyles } from "@heroui/theme";

// import { siteConfig } from "@/config/site";
// import { GithubIcon } from "@/components/icons";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import { useEffect, useState } from "react";

function Model({
  path,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  opacity = 1,
}: {
  path: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  opacity?: number;
}) {
  const { scene } = useGLTF(path);

  // Aplica la opacidad a todos los materiales del modelo
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.transparent = true;
        child.material.opacity = opacity;
      }
    });
  }, [scene, opacity]);

  return (
    <primitive
      object={scene}
      position={[position[0], position[1], position[2]]}
      rotation={[rotation[0], rotation[1], rotation[2]]}
      scale={[scale[0], scale[1], scale[2]]}
    />
  );
}

export default function IndexPage() {
  const { scrollYProgress } = useScroll();
  const [scrollValue, setScrollValue] = useState(0);

  // Animaciones de las partes del modelo
  const titleAnimY = useTransform(scrollYProgress, [0, 0.09], [0, -100]);
  const titleAnimOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  // Caso superior
  const caseTopZ = useTransform(scrollYProgress, [0, 0.05, 0.1, 0.2, 0.4, 0.5], [20, 0, -40, -200, -200, 0]);
  const caseTopX_rot = useTransform(scrollYProgress, [0, 0.05, 0.4, 0.5], [0.2, 0, 0, -1]);
  const caseTopY_rot = useTransform(scrollYProgress, [0.5, 0.7], [0, 6.32]);
  const caseTopOpacity = useTransform(scrollYProgress, [0.1, 0.15, 0.4, 0.5], [1, 0, 0, 1]);
  const caseTopY_scale = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5], [1, 0.8, 0.8, 1]);  // Nueva escala
  
  // HAT
  const hatZ = useTransform(scrollYProgress, [0, 0.05, 0.1, 0.2, 0.4, 0.5], [20, 0, 0, -20, -20, 0]);
  const hatX_rot = useTransform(scrollYProgress, [0, 0.05, 0.4, 0.5], [0.2, 0, 0, -1]);
  const hatY_rot = useTransform(scrollYProgress, [0.1, 0.3, 0.4, 0.5, 0.7], [0, 0.1, 0.1, 0, 6.32]);  // Nueva rotación en Y
  
  // Raspberry Pi
  const rpiZ = useTransform(scrollYProgress, [0, 0.05, 0.1, 0.4, 0.5], [20, 0, 40, 40, 0]);
  const rpiY_rot = useTransform(scrollYProgress, [0.5, 0.7], [0, 6.32]);
  const rpiX_rot = useTransform(scrollYProgress, [0, 0.05, 0.4, 0.5], [0.2, 0, 0, -1]);
  const rpiY_scale = useTransform(scrollYProgress, [0.15, 0.2, 0.4, 0.5], [1, 1.5, 1.5, 1]);  // Nueva escala para Raspberry Pi
  
  // Caso inferior
  const caseBottomZ = useTransform(scrollYProgress, [0, 0.05, 0.1, 0.2, 0.4, 0.5], [20, 0, 60, 200, 200, 0]);
  const caseBottomX_rot = useTransform(scrollYProgress, [0, 0.05, 0.4, 0.5], [0.2, 0, 0, -1]);
  const caseBottomOpacity = useTransform(scrollYProgress, [0.1, 0.15, 0.4, 0.5], [1, 0, 0, 1]);
  const caseBottomY = useTransform(scrollYProgress, [0, 0.05, 0.1, 0.4, 0.5], [0, 0, -30, -30, 0]);
  const caseBottomZ_rot = useTransform(scrollYProgress, [0, 0.1, 0.4, 0.5,], [0, 0, 0,0]);  // Nueva rotación en Z
  const caseBottomY_rot = useTransform(scrollYProgress, [0.5, 0.7], [0, 6.32]);
  
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const textYPosition = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [100, 0, 0, -100]);

  useEffect(() => {
    // Escuchar los cambios de scroll en tiempo real
    const unsubscribe = scrollYProgress.onChange((value) => {
      setScrollValue(value);
    });

    // Limpia el efecto al desmontar
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-start gap-4 w-full h-full min-h-screen">
        <motion.div
          className="inline-block max-w-lg text-center justify-center"
          style={{
            transform: `translateY(${titleAnimY.get()}px)`,
            opacity: `${titleAnimOpacity.get()}`,
          }}
        >
          <span className={title()}>Conecta a tus dispositivos con&nbsp;</span>
          <span className={title({ color: "violet" })}>Rud1&nbsp;</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            Conexiones remotas rapidas y seguras con servicios VPN
          </div>
        </motion.div>
        <motion.div
          className="w-full h-screen"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: -1,
            width: "100%",
          }}
        >
          <Canvas
            camera={{ position: [0, 150, 0], fov: 70 }}
            inputMode="none"
            onInput={() => { }}
          >
            <ambientLight intensity={1} />
            <directionalLight intensity={2} position={[10, 10, 5]} />
            <motion.group>
              <Model
                opacity={caseTopOpacity.get()}
                path="/models/caseTOP.glb"
                position={[0, 0, caseTopZ.get()]}
                rotation={[caseTopX_rot.get(), caseTopY_rot.get(), 0]}
                scale={[1, caseTopY_scale.get(), 1]}  // Nueva escala
              />
              <Model
                opacity={1}
                path="/models/rpi.glb"
                position={[0, 0, rpiZ.get()]}
                rotation={[rpiX_rot.get(), rpiY_rot.get(), 0]}
                scale={[1, rpiY_scale.get(), 1]}  // Nueva escala
              />
              <Model
                opacity={1}
                path="/models/rpiHAT.glb"
                position={[0, 0, hatZ.get()]}
                rotation={[hatX_rot.get(), hatY_rot.get(), 0]}  // Nueva rotación en Y
              />
              <Model
                opacity={caseBottomOpacity.get()}
                path="/models/caseBOTTOM.glb"
                position={[0, caseBottomY.get(), caseBottomZ.get()]}
                rotation={[caseBottomX_rot.get(), caseBottomY_rot.get(), caseBottomZ_rot.get()]}  // Nueva rotación en Z
              />
            </motion.group>

            <OrbitControls
              enableRotate={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              target={[0, 0, 0]}
            />
          </Canvas>
        </motion.div>
        <motion.div
          style={{
            opacity: textOpacity.get(),
            transform: `translateY(${textYPosition.get()}px)`,
            position: "fixed",
            top: "35%",
            left: "10%",
            width: "100%",
            maxWidth: '40ch',
            display: 'flex',
            flexDirection: 'row',
            placeItems: 'center',
            gap: '12px'
          }}
        >
          <section className="flex flex-col gap-0 p-0 m-0">
            <p className="text-xl font-bold p-0 m-0">Hat 4G</p>
            <p className="mt-0 text-md">Para conexiones por medio de datos moviles con tarjetas SIM 4G, 3G y 2G</p>
          </section>
          <p className="mt-0 text-xl font-extrabold">_____________</p>
        </motion.div>
        <motion.div
          style={{
            opacity: textOpacity.get(),
            transform: `translateY(${textYPosition.get()}px)`,
            position: "fixed",
            top: "60%",
            right: "10%",
            width: "100%",
            maxWidth: '40ch',
            display: 'flex',
            flexDirection: 'row-reverse',
            placeItems: 'center',
            gap: '12px'
          }}
        >
          <section className="flex flex-col gap-0 p-0 m-0">
            <p className="text-xl font-bold p-0 m-0">Placa base controladora</p>
            <p className="mt-0 text-md">Basada en tecnología ARM con 1GB/4GB de RAM y 16GB/64GB de almacenamiento, 4 puertos USB, 1 puerto RJ45, pueto de alimentación USB-C y mas.</p>
          </section>
          <p className="mt-0 text-xl font-extrabold">_____________</p>
        </motion.div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    </DefaultLayout>
  );
}
