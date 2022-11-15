import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'

const initialValues = {
    name: '',
    email: '',
    channel: ''
}

// const validate = (values) => {
//     const errors = {}
    
//     if (!values.name) {
//         errors.name = "Required"
//     }

//     if (!values.email){
//         errors.email = "Required"
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
//         errors.email = "Wrong format"
//     }

//     if (!values.channel){
//         errors.channel = "Required"
//     }

//     return errors
// }

const validationSchema = Yup.object({
    name:Yup.string().required('Required!'),
    email: Yup.string().email('Wrong format').required('Required!'),
    channel: Yup.string().required('Reqired!')
})

const YoutubeForm = () => {
    const {values, errors, touched,handleChange, handleBlur,handleSubmit} = useFormik({
        initialValues,
        onSubmit: (values) => console.log('form data', values),
        //validate
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
                        value={values.name}
                        onChange={handleChange}
                        onBlur = {handleBlur}
                    />
                    {touched.name && errors.name? <div className='error'>{errors.name}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id='email' 
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur = {handleBlur}
                    />
                    {touched.email && errors.email? <div className='error'>{errors.email}</div> : null}
                </div>

                <div className="form-control">
                    <label htmlFor="channel">channel</label>
                    <input 
                        type="text" 
                        id='channel' 
                        name='channel'
                        value={values.channel}
                        onChange={handleChange}
                        onBlur = {handleBlur}
                    />
                    {touched.channel && errors.channel? <div className='error'>{errors.channel}</div> : null}
                </div>

                <button>Submit</button>
            </form>
        </div>
    );
};

export default YoutubeForm;