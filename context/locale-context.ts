"use client";

import { Dispatch, SetStateAction, createContext, useContext } from "react";

import { ValidLocale } from "@/i18n";

export const LocaleContext = createContext<ValidLocale>("fr-FR");
export const SetLocaleContext = createContext<
  Dispatch<SetStateAction<ValidLocale>>
>((value) => {
  console.log("Default function:", value);
});

export function useLocaleContext() {
  return useContext(LocaleContext);
}

export function useSetLocaleContext() {
  return useContext(SetLocaleContext);
}
