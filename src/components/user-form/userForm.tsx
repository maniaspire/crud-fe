import { FunctionComponent } from "react";

import './userForm.css';
import { PlotForms, PlotFormsProps } from "../../shared/components/forms";

interface UserFormProps {

}

const UserForm: FunctionComponent<UserFormProps> = () => {

    const dummyData: PlotFormsProps = {
        formConfig: {
            config: [
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
                    type: 'text',
                    name: 'user',
                    label: 'Name',
                    placeholder: 'Enter your name',
                    defaultValue: '',
                    validations: {
                        required: true,
                        minLength: 5
                    }
                },
                {
                    type: 'checkbox',
                    name: 'notification',
                    label: 'Allow Notifications',
                    placeholder: '',
                    defaultValue: '',
                }, {
                    type: 'select',
                    name: 'profession',
                    label: 'Profession',
                    placeholder: 'Please select your profession',
                    defaultValue: '',
                    options: [{
                        _id: '1', name: 'Developer',
                    }, { _id: '2', name: 'Senior Developer' }],
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
                    options: [{
                        _id: '1', name: 'Developer',
                    }, { _id: '2', name: 'Senior Developer' },],
                    validations: {
                        required: true,
                    }
                },

            ],
            submit: {
                handler: (values: any) => { console.log(values) },
                label: "Submit"
            }
        },
        // data: { user: 'mani@gmail.com', email: 'mani@gmial.com', profession: '2', notification: true }
    }


    return <>
        <PlotForms {...dummyData}></PlotForms>
    </ >
};

export { UserForm };