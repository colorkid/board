import * as yup from "yup";

export const validationSchema = yup.object({
    title: yup
        .string()
        .min(4, 'Title should be of minimum 4 characters length')
        .required('Title is required'),
});
