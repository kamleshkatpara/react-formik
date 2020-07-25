import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name: '',
    email: '',
    channel: ''
};

const onSubmit = values => {
    console.log('Form Data', values);
};

const validationSchema = Yup.object({
    name: Yup.string().required('Please enter name'),
    email: Yup.string().email('Invalid Email Format').required('Please enter email address'),
    channel: Yup.string().required('Please enter channel name')
});

function YoutubeForm() {

    return (
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            <Form>
                
                <div className='form-control'>
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage className='error' name="name" component='div' />
                </div>

                <div className='form-control'>
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage className="error" name="email" component='div'/>
                </div>

                <div className='form-control'>
                <label htmlFor="channel">Channel</label>
                <Field type="text" id="channel" name="channel" />
                <ErrorMessage className="error" name="channel" component='div' />
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm;
