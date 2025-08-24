import * as React from "react"
import {
  ArrowUpRightIcon,
  Phone,
  CircleDashed,
  FileInputIcon,
  FolderPlusIcon,
  SearchIcon,
} from "lucide-react"
import { Contact } from 'lucide-react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { getContacts } from "@/services//contactsService";

// import  { useEffect, useState } from "react";


export default function SearchDialogContact() {
  const [open, setOpen] = React.useState(false)
  const [contactsData, setContactsData] = React.useState([]);


  const contacts = [
    { name: "T Gene", number: "0707880905" },
    { name: "Yann H", number: "0102030405" },
    { name: "Drexx", number: "0555444333" },
    { name: "Aline", number: "0745123456" },
  ]

  React.useEffect(() => {
    const fetchContacts = async () => {
      const data = await getContacts();
      setContactsData(data);
    };
    fetchContacts();
  }, []);

  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down);
  }, [])


  return (
    <>
      <button
        className="border-input bg-background text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-9 w-fit rounded-md border px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
        onClick={() => setOpen(true)}>
        <span className="flex grow items-center">
          <SearchIcon
            className="text-muted-foreground/80 -ms-1 me-3"
            size={16}
            aria-hidden="true" />
          <span className="text-muted-foreground/70 font-normal">Contacts</span>
        </span>
        <kbd
          className="bg-background text-muted-foreground/70 ms-12 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
          ⌘K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Rechercher un contact..."
          className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
        />
        <CommandList>
          <CommandEmpty>Aucun contact trouvé.</CommandEmpty>
          <CommandGroup heading="Contacts">
            {contacts.map((contact, index) => (
              <CommandItem key={index} className="flex items-center gap-2">
                <CircleDashed size={16} className="opacity-60" />
                <div className="flex flex-col">
                  <span className="font-medium">{contact.name}</span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Phone size={14} className="opacity-60" /> {contact.number}
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
