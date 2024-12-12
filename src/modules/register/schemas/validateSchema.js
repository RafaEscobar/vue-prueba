import * as yup from "yup";

export const schema = yup.object({
    name: yup.string()
        .max(12, "El nombre debe ser menor a 15 caracteres")
        .required("El nombre es obligatorio"),
    email: yup.string()
    .email("El correo elctrónico no tiene el formato valido")
    .max(20, "El correo electrónico no debe ser mayor a 20 caracteres")
    .min(6, "El correo electrónico no debe ser menor a 6 caracteres")
    .required("El correo electrónico es obligatorio")
});