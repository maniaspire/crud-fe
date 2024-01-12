import * as Yup from 'yup';
import { FormFieldConfig } from "./forms.interface";

export const createValidationSchema = (configs: FormFieldConfig[]) => {
    const validationSchema = configs.reduce((schemas, config) => {
        if (!config.validations) {
            return schemas;
        }
        const { errorMessage, minLength, required } = config.validations
        let schema;
        switch (config.type) {
            case 'number': {
                schema = Yup.number();
                break;
            }
            case 'email': {
                schema = Yup.string().email();
                break;
            }
            case 'checkbox': {
                schema = Yup.boolean().optional();
                break;
            }
            default: {
                schema = Yup.string();
            }
        }

        if (required && config.type !== 'checkbox') {
            schema = schema.required(errorMessage || `${config.label} is Required`);
        }
        if (minLength && ['email', 'text'].includes(config.type)) {
            schema = (schema as any).min(minLength, errorMessage || `Minimum ${minLength} characters are required`);
        }

        return { ...schemas, [config.name]: schema };
    }, {});

    return Yup.object().shape(validationSchema);

}