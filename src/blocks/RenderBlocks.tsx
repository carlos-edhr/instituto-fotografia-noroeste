"use client";

import React from "react";
import { HeroBlockComponent } from "./Hero/Component";
import { ContentBlockComponent } from "./Content/Component";
import { MediaBlockComponent } from "./Media/Component";
import type { HeroBlock, ContentBlock, MediaBlock } from "@/types/blocks";
import { CursoUnoBlockComponent } from "./CursoUno/Component";
import { CursoDosBlockComponent } from "./CursoDos/Component";
import { CursoTresBlockComponent } from "./CursoTres/Component";
// import type {
//   CursoUnoBlock,
//   CursoDosBlock,
//   CursoTresBlock,
// } from "@/types/blocks";
import { GaleriaBlockComponent } from "./Galeria/Component";

type Block = HeroBlock | ContentBlock | MediaBlock;

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blocks: (Block | any)[]; // Permitir any temporalmente para flexibilidad
}

// Función helper para verificar si un bloque es del tipo esperado
const isBlockOfType = <T extends Block>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  block: any,
  type: string,
): block is T => {
  return block?.blockType === type;
};

export const RenderBlocks: React.FC<Props> = ({ blocks }) => {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No hay bloques para mostrar</p>
      </div>
    );
  }

  return (
    <div className="blocks-container">
      {blocks.map((block, index) => {
        // Manejar bloques potencialmente nulos o undefined
        if (!block || typeof block !== "object") {
          console.warn(`Bloque inválido en índice ${index}:`, block);
          return null;
        }

        const key = block.id || `block-${index}`;

        try {
          switch (block.blockType) {
            case "hero":
              if (isBlockOfType<HeroBlock>(block, "hero")) {
                return <HeroBlockComponent key={key} {...block} />;
              }
              break;

            case "content":
              if (isBlockOfType<ContentBlock>(block, "content")) {
                return <ContentBlockComponent key={key} {...block} />;
              }
              break;

            case "media":
              if (isBlockOfType<MediaBlock>(block, "media")) {
                return <MediaBlockComponent key={key} {...block} />;
              }
              break;

            case "curso-uno":
              return <CursoUnoBlockComponent key={key} {...block} />;
            case "curso-dos":
              return <CursoDosBlockComponent key={key} {...block} />;
            case "curso-tres":
              return <CursoTresBlockComponent key={key} {...block} />;
            case "galeria":
              return <GaleriaBlockComponent key={key} {...block} />; // ← Agregué key aquí
            default:
              console.warn(`Tipo de bloque desconocido: ${block.blockType}`);
              return null;
          }
        } catch (error) {
          console.error(`Error renderizando bloque ${block.blockType}:`, error);
          return null;
        }

        return null;
      })}
    </div>
  );
};
