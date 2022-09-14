import React from 'react';

interface ToggleSwitchProps {
    id: string;
    isOn: boolean;
    handleToggle: () => void;
}

function ToggleSwitch(props: ToggleSwitchProps): JSX.Element {
    const {id, isOn, handleToggle} = props;

    return (
        <div className="c-toggleSwitch">
            <input className="c-toggleSwitch__input" id={id} type="checkbox" checked={isOn} onChange={handleToggle} />

            <div className="c-toggleSwitch__body">
                <label className="c-toggleSwitch__label" htmlFor={id}>
                    <span className="c-toggleSwitch__label_button" />
                </label>
            </div>
        </div>
    );
}

export default ToggleSwitch;
