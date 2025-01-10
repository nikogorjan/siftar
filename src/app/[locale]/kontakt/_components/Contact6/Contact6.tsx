// components/Contact6.tsx

"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  RadioGroup,
  RadioGroupItem,
  Input,
  Label,
  Checkbox,
  Textarea,
  Button,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import "../../../../../../dist/output.css";
import { useTranslations } from "next-intl";

type Contact6Props = React.ComponentPropsWithoutRef<"section"> & {};

export const Contact6: React.FC<Contact6Props> = () => {
  const tContactForm = useTranslations("contactForm");

  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");

  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const [selectedItem, setSelectedItem] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");

  const [messageInput, setMessageInput] = useState("");
  const [acceptTerms, setAcceptTerms] = useState<boolean | "indeterminate">(
    false
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      firstNameInput,
      lastNameInput,
      emailInput,
      phoneInput,
      selectedItem,
      selectedRadio,
      messageInput,
      acceptTerms,
    });
    // Tukaj dodajte logiko za pošiljanje podatkov, npr. API klic
    // Po uspešni rezervaciji lahko dodate sporočilo o uspehu
  };

  const selectItems = [
    { value: "first-choice", label: tContactForm("selectItems.firstChoice") },
    { value: "second-choice", label: tContactForm("selectItems.secondChoice") },
    { value: "third-choice", label: tContactForm("selectItems.thirdChoice") },
  ];

  const radioItems = [
    { value: "first-choice", label: tContactForm("radioItems.firstChoice") },
    { value: "second-choice", label: tContactForm("radioItems.secondChoice") },
    { value: "third-choice", label: tContactForm("radioItems.thirdChoice") },

    { value: "other", label: tContactForm("radioItems.other") },
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
        {/* Kontaktni Podatki */}
        <div>
          <div className="rb-6 mb-6 md:mb-8">
            <h2 className="rb-5 mb-5 text-5xl font-bold neue md:mb-6 md:text-7xl lg:text-8xl">
              {tContactForm("heading")}
            </h2>
            <p className="md:text-md neue">{tContactForm("description")}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 py-2">
            <div className="flex items-center gap-4">
              <BiEnvelope className="size-6 flex-none" />
              <p className="neue">{tContactForm("email")}</p>
            </div>
            <div className="flex items-center gap-4">
              <BiPhone className="size-6 flex-none" />
              <p className="neue">{tContactForm("phone")}</p>
            </div>
            <div className="flex items-center gap-4">
              <BiMap className="size-6 flex-none" />
              <p className="neue">{tContactForm("address")}</p>
            </div>
          </div>
        </div>

        {/* Kontaktni Obrazec */}
        <form
          className="grid grid-cols-1 grid-rows-[auto_auto] gap-6"
          onSubmit={handleSubmit}
        >
          {/* Ime in Priimek */}
          <div className="grid grid-cols-2 gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="firstName" className="mb-2 neue mb2 ">
                {tContactForm("fields.firstName")}
              </Label>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={firstNameInput}
                onChange={(e) => setFirstNameInput(e.target.value)}
                required
                className="neue gray-border border-gray-50"
              />
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="lastName" className="mb-2 neue mb2">
                {tContactForm("fields.lastName")}
              </Label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={lastNameInput}
                onChange={(e) => setLastNameInput(e.target.value)}
                required
                className="neue gray-border border-gray-50"
              />
            </div>
          </div>

          {/* Email in Telefonska Številka */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2 neue mb2">
                {tContactForm("fields.email")}
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                required
                className="neue gray-border border-gray-50 "
              />
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="phone" className="mb-2 neue mb2">
                {tContactForm("fields.phone")}
              </Label>
              <Input
                type="text"
                id="phone"
                name="phone"
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
                required
                className="neue gray-border border-gray-50"
              />
            </div>
          </div>

          {/* Katera Najbolj Opisuje Vas */}
          <div className="grid w-full items-center py-3 md:py-4">
            <Label className="mb-3 md:mb-4 neue mb2">
              {tContactForm("fields.describeYou")}
            </Label>
            <RadioGroup
              className="grid grid-cols-2 gap-x-6 gap-y-3.5"
              onValueChange={setSelectedRadio}
            >
              {radioItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={item.value} id={item.value} />
                  <Label htmlFor={item.value} className="neue  ml-2 mb2">
                    {item.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Sporočilo */}
          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2 neue mb2">
              {tContactForm("fields.message")}
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder={tContactForm("fields.message")}
              className="min-h-[11.25rem] overflow-auto neue gray-border border-gray-50"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              required
            />
          </div>

          {/* Gumb za Pošiljanje */}
          <div>
            <Button type="submit" className="neue">
              {tContactForm("button.title")}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

Contact6.displayName = "Contact6";

export default Contact6;
