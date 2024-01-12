export interface FormFieldConfig {
    type: string,
    label: string,
    name: string,
    placeholder: string,
    defaultValue: string,
    isLabelAfterElement?: boolean,
    options?: { _id: string, name: string }[],
    validations?: {
        required?: boolean,
        errorMessage?: string,
        minLength?: number
    }
}

export interface PlotFormsProps {
    formConfig: {
        config: FormFieldConfig[],
        submit: {
            handler: any,
            label: string,
        }
    },
    data?: any
}