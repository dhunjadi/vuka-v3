import React from 'react';

interface TabsProps {
    tabList: string[];
    selectedTab: string;
    buttons?: JSX.Element;
    handleSelect?: (chip: string) => void;
}

const Tabs = ({tabList, selectedTab, buttons, handleSelect}: TabsProps): JSX.Element => {
    const handleToggle = (e: React.MouseEvent<HTMLButtonElement>): void => {
        handleSelect && handleSelect(e.currentTarget.value);
    };

    return (
        <div className="c-tabs">
            {tabList.map((tab, i) => (
                <button
                    key={i}
                    className={`c-tabs__tab cursor-p ${selectedTab === tab && 'c-tabs__tab--active'}`}
                    value={tab}
                    onClick={(e) => handleToggle(e)}
                >
                    {tab}
                </button>
            ))}
            {buttons}
        </div>
    );
};

export default Tabs;

Tabs.defaultProps = {
    tabList: [],
    selectedTab: undefined,
    buttons: undefined,
    handleSelect: undefined,
};
