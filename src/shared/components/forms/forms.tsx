import { FunctionComponent, useEffect, useState } from "react";

import { ErrorMessage, Field, Formik } from "formik";
import { FormFieldConfig, PlotFormsProps } from "./forms.interface";
import { createValidationSchema } from "./form.helper";

import './forms.css';

const PlotForms: FunctionComponent<PlotFormsProps> = ({ formConfig, data }) => {
    const { config: configs, submit } = formConfig;

    const getInitialValue = () => {
        return configs.reduce((result, config) => ({ ...result, [config.name]: data ? data[config.name] : (config.defaultValue || '') }), {});
    }

    const getFormikConfig = () => {
        return {
            initalValue: getInitialValue(),
            validator: createValidationSchema(configs),
            submit: submit
        }
    }

    const [formikConfig, setFormikConfig] = useState(getFormikConfig());

    const getField = ({ type, name, placeholder, label }: FormFieldConfig) => {
        return (
            <div>
                <label className="input-label">{label}</label>
                <Field type={type} name={name} placeholder={placeholder}></Field>
                <ErrorMessage component='div' name={name} className="error-message" />
            </div>
        );
    }

    const getSelectBox = ({ type, name, placeholder, label, options }: FormFieldConfig) => {
        return (
            <div>
                <label className="input-label">{label}</label>
                <Field as={type} name={name} placeholder={placeholder}>
                    <option value="" disabled hidden>{placeholder}</option>
                    {options?.map(option => (<option key={option._id} value={option._id}>{option.name}</option>))}
                </Field>
                <ErrorMessage component='div' name={name} className="error-message" />
            </div>)
    }

    const getRadioButton = ({ type, name, options, label }: FormFieldConfig) => {
        return (
            <div className="form-field-container">
                <label key={name} className="input-label">{label}</label>
                <div style={{ width: '250px', display: 'inline-block' }}>
                    {options?.map(option => (
                        <div key={option._id}>
                            <Field type={type} name={name} value={option._id} />{option.name}
                        </div>
                    ))}
                </div>

                <ErrorMessage component='div' name={name} className="error-message" />
            </div>)
    }


    const getFormField = (config: FormFieldConfig) => {
        switch (config.type) {
            case 'text':
            case 'email':
            case 'checkbox':
                return getField(config);
            case 'select':
                return getSelectBox(config);
            case 'radio':
                return getRadioButton(config);
            default:
                return <></>;
        }
    }


    useEffect(() => {
        setFormikConfig(getFormikConfig());
    }, [formConfig, data])

    return (
        <div className="form-container" >
            <Formik
                initialValues={formikConfig.initalValue}
                onSubmit={formikConfig.submit.handler}
                enableReinitialize
                validationSchema={formikConfig.validator}
            >
                {({ handleSubmit, errors, touched }) => (
                    <form className="form-card" onSubmit={handleSubmit}>
                        <h2 className="form-control">{data ? 'Edit' : 'Add'} User</h2>
                        <hr></hr>
                        {configs.map(config => (
                            <div key={config.name} className="form-control">
                                {getFormField(config)}
                            </div>
                        ))}
                        <div className="form-control">
                            <button type="submit" className="submit-button" disabled={Object.keys(touched).length === 0 || !!Object.keys(errors).length}>{submit.label}</button>
                        </div>
                    </form>
                )}

            </Formik>
        </div >
    );
}

export { PlotForms };
