import React from 'react';

interface TabssProps {
    tabList: string[];
    selectedTab: string;
    handleSelect: (chip: string) => void;
}

const Tabs = (props: TabssProps): JSX.Element => {
    const {tabList, selectedTab, handleSelect} = props;

    const handleToggle = (e: React.MouseEvent<HTMLButtonElement>): void => {
        handleSelect(e.currentTarget.value);
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
        </div>
    );
};

export default Tabs;
