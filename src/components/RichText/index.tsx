import {
  DefaultNodeTypes,
  SerializedLinkNode,
} from "@payloadcms/richtext-lexical";
import {
  JSXConvertersFunction,
  LinkJSXConverter,
  RichText as ConvertRichText,
} from "@payloadcms/richtext-lexical/react";

// Función para enlaces internos (simplificada)
const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!;
  if (typeof value !== "object") {
    throw new Error("Expected value to be an object");
  }
  const slug = value.slug;
  return relationTo === "posts" ? `/posts/${slug}` : `/${slug}`;
};

const jsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  // Por ahora no incluimos bloques embebidos para simplificar
});

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  enableGutter?: boolean;
  enableProse?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function RichText(props: Props) {
  const { className, enableProse = true, enableGutter = true, ...rest } = props;

  if (!props.data) {
    return null;
  }

  return (
    <ConvertRichText
      converters={jsxConverters}
      className={`payload-richtext ${enableGutter ? "container" : ""} ${enableProse ? "prose prose-lg max-w-none" : ""} ${className || ""}`}
      {...rest}
    />
  );
}
