import React, { useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "./ui/textarea";

function converterParaEPUB(texto: string): string {
  const paragrafos = texto.split("\n");
  const resultado: string[] = [];

  for (let i = 0; i < paragrafos.length; i++) {
    const paragrafo = paragrafos[i].trim();

    if (paragrafo !== "") {
      let paragrafoEPUB = "<p>";

      if (paragrafo.includes("_")) {
        const palavras = paragrafo.split(" ");

        for (let j = 0; j < palavras.length; j++) {
          if (palavras[j].includes("_")) {
            const palavraItalico = palavras[j].replace(/_/g, "");
            paragrafoEPUB += "<em>" + palavraItalico + "</em>";
          } else {
            paragrafoEPUB += palavras[j];
          }

          if (j !== palavras.length - 1) {
            paragrafoEPUB += " ";
          }
        }
      } else {
        paragrafoEPUB += paragrafo;
      }

      paragrafoEPUB += "</p>\n";
      resultado.push(paragrafoEPUB);
    }
  }

  return resultado.join("");
}

const EbookConverter: React.FC = () => {
  const [texto, setTexto] = useState("");
  const [resultado, setResultado] = useState("");

  const handleConverterEPUB = () => {
    const textoEPUB = converterParaEPUB(texto);
    setResultado(textoEPUB);
    console.log(textoEPUB);
  };

  const { toast } = useToast();
  const handleCopiarResultado = () => {
    navigator.clipboard.writeText(resultado);
    toast({
      description: "O resultado foi copiado para a área de transferência!"
    });
  };

  return (
    <section className="flex flex-col w-full sm:container gap-4 p-4">
      <div className="inline space-y-2">
        <Textarea
          id="texto"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <Button onClick={handleConverterEPUB}>Converter para EPUB</Button>
      </div>
      <div className="inline space-y-2">
        <Textarea id="resultado" value={resultado} readOnly />
        <Button onClick={handleCopiarResultado}>Copiar Resultado</Button>
      </div>
    </section>
  );
};

export default EbookConverter;
