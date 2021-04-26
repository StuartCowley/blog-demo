import React from 'react';
import { useForm } from '../hooks/useForm';

const Contact = () => {
    const [{ name, email, message }, setInput, resetInput] = useForm({
        name: '',
        email: '',
        message: '',
    });

    return (
        <form onSubmit={resetInput}>
            <input
                name="name"
                type="text"
                value={name}
                placeholder="Name"
                onChange={setInput}
            />
            <input
                name="email"
                type="email"
                value={email}
                placeholder="e-mail"
                onChange={setInput}
            />
            <input
                name="message"
                type="text"
                value={message}
                placeholder="Message"
                onChange={setInput}
            />
            <button type="submit">submit</button>
        </form>
    );
};

export default Contact;
