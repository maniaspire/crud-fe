import { FunctionComponent, useContext, useEffect, useState } from "react";

import './userForm.css';
import { PlotForms, PlotFormsProps } from "../../shared/components/forms";
import { Gender, WorkRoles } from "./user.constants";
import { UserInfo } from "./user.interface";
import { useHttp } from "../../core/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../core";

interface UserFormProps {
}

const UserForm: FunctionComponent<UserFormProps> = () => {
    const { getContextValue } = useContext(AppContext);
    console.log(getContextValue().user, getContextValue('user'))
    const { state } = useLocation();
    const navigate = useNavigate();
    const { post, update } = useHttp('user');

    const handleSubmit = async (values: UserInfo) => {
        try {
            await (state?.data ? update('', state.data?._id, values) : post('', values));
            navigate('/list-user');
        } catch (error) {
            console.log(error)
        }
    }


    const userFormConfig: PlotFormsProps = {
        formConfig: {
            config: [
                {
                    type: 'text',
                    name: 'username',
                    label: 'Username',
                    placeholder: 'Enter your name',
                    defaultValue: '',
                    validations: {
                        required: true,
                        minLength: 5
                    }
                },
                {
                    type: 'email',
                    name: 'email',
                    label: "Email",
                    placeholder: 'Please Enter Your Email',
                    defaultValue: '',
                    validations: {
                        required: true,
                        errorMessage: 'Invalid Mail Id'
                    }
                },
                {
                    type: 'select',
                    name: 'workRole',
                    label: 'Work Role',
                    placeholder: 'Please select your work role',
                    defaultValue: '',
                    options: WorkRoles,
                    validations: {
                        required: true,
                    }
                },
                {
                    type: 'radio',
                    name: 'gender',
                    label: 'Gender',
                    placeholder: '',
                    defaultValue: '',
                    options: Gender,
                    validations: {
                        required: true,
                    }
                },

            ],
            submit: {
                handler: handleSubmit,
                label: "Submit"
            }
        },
    }

    const [formConfig, setFormConfig] = useState<PlotFormsProps>(userFormConfig);

    useEffect(() => {
        setFormConfig(({ ...userFormConfig, data: state?.data }))
    }, [state])

    return <>
        <PlotForms formConfig={formConfig.formConfig} data={formConfig.data}></PlotForms>
    </ >
};

export { UserForm };