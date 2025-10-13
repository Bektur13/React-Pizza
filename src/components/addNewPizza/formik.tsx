import React from 'react';
import { useForm } from 'react-hook-form';

const FormikExample = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => alert(JSON.stringify(data));

    return (
        <div onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")}placeholder="First Name" />
            <input {...register("lastName")}placeholder="Last Name" />
            <select {...register("category")}>
                <option value="">Select...</option>
                <option value="A">Category A</option>
                <option value="B">Category B</option>
            </select>

            <input type="submit" />
        </div>
    )
}

export default FormikExample;