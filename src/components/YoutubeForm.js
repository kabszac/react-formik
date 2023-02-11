import React from 'react';
import { Formik, Form,  Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup'
import TextError from './TextError';

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments:'',
    address:'',
    phoneNumbers: ['', ''],
    phNumbers: ['']
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
                    <ErrorMessage name='name' component={TextError}/>
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <Field 
                        type="email" 
                        id='email' 
                        name='email'
                    />
                    <ErrorMessage name='email'>
                        {(error) => <div className='error'>{error}</div>}
                    </ErrorMessage>
                </div>

                <div className="form-control">
                    <label htmlFor="channel">channel</label>
                    <Field 
                        type="text" 
                        id='channel' 
                        name='channel'
                    />
                    <ErrorMessage name='channel'>
                        {(error) => <div className='error'>{error}</div>}
                    </ErrorMessage>
                </div>

                <div className="form-control">
                    <label htmlFor="comments">Comment</label>
                    <Field 
                        as='textarea' 
                        id='comments' 
                        name='comments'
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="address">Address</label>
                    <Field name='address'>
                        {
                            (props) =>  {
                                const {field, form, meta} = props
                                return(
                                    <div className="">
                                        <input type="text" name="" id="address" {...field}/>
                                        {meta.touched && meta.error? <div>{meta.error}</div>: null}
                                    </div>
                                )
                            }
                        }
                    </Field>   
                </div>

                <div className="form-control">
                    <label htmlFor="primaryPh"> Primary Phone Number</label>
                    <Field 
                        id='primaryPh' 
                        name='phoneNumbers[0]'
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="secondaryPh"> Secondary Phone Number</label>
                    <Field 
                        id='secondaryPh' 
                        name='phoneNumbers[1]'
                    />
                </div>

                
                <div className='form-control'>
                    <label>List of phone numbers</label>
                    <FieldArray name='phNumbers'>
                        {fieldArrayProps => {
                        const { push, remove, form } = fieldArrayProps
                        const { values } = form
                        const { phNumbers } = values
                        // console.log('fieldArrayProps', fieldArrayProps)
                        // console.log('Form errors', form.errors)
                        return (
                            <div>
                            {phNumbers.map((phNumber, index) => (
                                <div key={index}>
                                <Field name={`phNumbers[${index}]`} />
                                {index > 0 && (
                                    <button type='button' onClick={() => remove(index)}>
                                    -
                                    </button>
                                )}
                                </div>
                            ))}
                            <button type='button' onClick={() => push('')}>
                                +
                            </button>
                            </div>
                        )
                        }}
                    </FieldArray>
                </div>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    );
};

export default YoutubeForm;