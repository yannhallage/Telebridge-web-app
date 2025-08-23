import { PlusIcon } from "lucide-react"
import { Accordion as AccordionPrimitive } from "radix-ui"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "./ui/accordion"

const items = [
  {
    id: "1",
    title: "Comment obtenir l’application  Telebridge App ?",
    content:
      " Telebridge App remplace l’application Assistant Votre téléphone et vous permet de filtrer vos notifications, de recevoir des appels et d’utiliser vos applications mobiles sur votre PC",
  },
  {
    id: "2",
    title: "Qu’est-ce que mon Android ou mon iPhone peut synchroniser et contrôler depuis mon PC Windows ?",
    content:
      "Vous pouvez utiliser Telebridge App pour effectuer des tâches pratiques sur votre smartphone à partir de votre PC Windows, telles que Passer et prendre des appels téléphoniques sur les réseaux cellulaires",
  },
  {
    id: "3",
    title: "Que se passe-t-il si je ne veux plus que mon smartphone soit couplé à Telebridge App ?",
    content:
      "Accédez simplement à Paramètres > Mes appareils dans Telebridge App sur votre PC et supprimez votre appareil couplé de la liste. Vous pouvez les recoupler à tout moment. Lorsque le couplage est supprimé, votre contenu personnel ne reste pas stocké sur votre PC.",
  },
  {
    id: "4",
    title: "Telebridge App ne fonctionne pas. Où puis-je trouver de l’aide ?",
    content:
      "Commencez par la page de résolution des problèmes. Vous la trouverez ici ",
  },
]

export default function AccordionFromOrigin() {
  return (
    <div className="space-y-4 mt-3">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">Questions fréquemment posées</h2>
      <Accordion type="single" collapsible className="w-full" defaultValue="3">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="py-2">
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger
                className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                {item.title}
                <PlusIcon
                  size={16}
                  className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                  aria-hidden="true" />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="text-muted-foreground pb-2">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
