import React from 'react';
import { Formik, Form,  Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

const initialValues = {
    name: '',
    email: '',
    channel: ''
}


const validationSchema = Yup.object({
    name:Yup.string().required('Required!'),
    email: Yup.string().email('Wrong format').required('Required!'),
    channel: Yup.string().required('Reqired!')
})

const submit = (values) => console.log('form data', values)

const YoutubeForm = () => {
    

    //console.log({values})
    //console.log({errors})
    return (
        <Formik initialValues={initialValues} onSubmit={submit} validationSchema={validationSchema}>
            <Form>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <Field 
                        type="text" 
                        id='name' 
                        name='name' 
                    />
                    <ErrorMessage name='name'/>
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <Field 
                        type="email" 
                        id='email' 
                        name='email'
                    />
                    <ErrorMessage name='email'/>
                </div>

                <div className="form-control">
                    <label htmlFor="channel">channel</label>
                    <Field 
                        type="text" 
                        id='channel' 
                        name='channel'
                    />
                    <ErrorMessage name='channel'/>
                </div>

                <button>Submit</button>
            </Form>
        </Formik>
    );
};

export default YoutubeForm;