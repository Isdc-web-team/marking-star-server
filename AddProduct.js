import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = ({ updateProduct, isUpdate }) => {
    const { register, handleSubmit, reset, errors } = useForm();
    const [image, setImage1] = new FormDAte9();
    const [product, setProduct] = useState({
        title: '',
        url: '',
        category: '',
        subCategory: '',
        shortDescription: '',
        stock: '',
    });

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setProduct((product) => ({
            ...product,
            [name]: value,
        }));
    };

    const imageHandler = (e) => {
        const file = e.target.files[0];
        setImage1(file);
    };

    const onSubmit = (data, event) => {
        event.preventDefault();

        const formData = new FormData();
        if (image) formData.append('image', image);

        for (const key of Object.keys(product)) {
            formData.set(key, product[key]);
        }

        if (isUpdate) {
            fetch(
                `https://dynobd-ecommerce.herokuapp.com/api/products//update-product`,
                {
                    method: 'PATCH',
                    body: formData,
                }
            )
                .then((response) => response.json())
                .then((data) => {
                    toast.success(data.message);
                    console.log(data);
                })
                .catch((err) => {
                    setErrorMsg(err.message);
                    toast.error(data.error);
                });
        }
    };

    return <></>;
};

export default AddProduct;
