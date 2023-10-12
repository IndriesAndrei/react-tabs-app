import { useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";
import DifferentContent from "./DifferentContent";

export default function Tabbed({content}) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="tabs">
                <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
                <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
                <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
                <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
            </div>

            {activeTab <= 2 ? (
                // different key so each tab has different state, and will re-render and the likes will be different
                <TabContent item={content.at(activeTab)} key={content.at(activeTab).summary} />
            ) : (
                <DifferentContent />
            )}
        </div>
    );
}