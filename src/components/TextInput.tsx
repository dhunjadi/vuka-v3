import React from 'react';

export type inputType = 'text' | 'password' | 'textArea';

interface TabsProps {
    type: inputType;
    value: string;
    placeholder?: string;
    light?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextInput = (props: TabsProps): JSX.Element => {
    const {type, value, placeholder, light, onChange} = props;

    if (type === 'text' || type === 'password') {
        return (
            <div className={`c-textInput ${light && 'c-textInput--light'}`}>
                <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
            </div>
        );
    }

    return (
        <div className={`c-textInput ${light && 'c-textInput--light'}`}>
            <textarea cols={30} rows={10} placeholder={placeholder} value={value} onChange={onChange}></textarea>
        </div>
    );
};

export default TextInput;

TextInput.defaultProps = {
    placeholder: undefined,
    light: false,
};
