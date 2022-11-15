import React from 'react';
import { useFormik } from 'formik';
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

const YoutubeForm = () => {
    const {values, errors, touched,handleChange, handleBlur,handleSubmit, getFieldProps} = useFormik({
        initialValues,
        onSubmit: (values) => console.log('form data', values),
        validationSchema

    })

    console.log({values})
    console.log({errors})
    return (
        <div>
            <form action="" onSubmit={handleSubmit} >
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id='name' 
                        name='name' 
                        {... getFieldProps('name')}
                    />
                    {touched.name && errors.name? <div className='error'>{errors.name}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id='email' 
                        name='email'
                        {... getFieldProps('email')}
                    />
                    {touched.email && errors.email? <div className='error'>{errors.email}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor="channel">channel</label>
                    <input 
                        type="text" 
                        id='channel' 
                        name='channel'
                        {... getFieldProps('channel')}
                    />
                    {touched.channel && errors.channel? <div className='error'>{errors.channel}</div> : null}
                </div>

                <button>Submit</button>
            </form>
        </div>
    );
};

export default YoutubeForm;