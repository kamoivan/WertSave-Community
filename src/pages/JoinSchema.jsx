import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

const participationTypes = [
  "member",
  "financial-support",
  "communication",
  "marketing",
  "other",
];

export const joinSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, "Veuillez saisir votre nom complet.")
      .max(100, "Votre nom ne peut pas dépasser 100 caractères."),

    email: z
      .string()
      .trim()
      .email("Veuillez saisir une adresse email valide.")
      .max(150, "Cette adresse email est trop longue."),

    phone: z
      .string()
      .optional()
      .or(z.literal(""))
      .refine(
        (value) => !value || isValidPhoneNumber(value),
        "Veuillez saisir un numéro de téléphone valide.",
      ),

    interests: z
      .array(z.enum(participationTypes))
      .min(1, "Choisissez au moins une forme de participation.")
      .max(participationTypes.length),

    otherDetails: z
      .string()
      .trim()
      .max(500, "Votre description ne peut pas dépasser 500 caractères.")
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.interests.includes("other") &&
      (!data.otherDetails || data.otherDetails.length < 5)
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["otherDetails"],
        message: "Décrivez votre proposition en quelques mots.",
      });
    }
  });

export const joinDefaultValues = {
  fullName: "",
  email: "",
  phone: "",
  interests: [],
  otherDetails: "",
};
