import "./SettingsViewLayout.css";

import CategoryList from "../components/categoryList/categoryList";
import SettingsView from "../components/settingsView/settingsView";

function SettingsLayout() {
    const onCategoryChange = (category: string) => {
        console.log(category);
    }

    return (
        <div className="settings__layout">
            <CategoryList categories={["General", "Appearance", "Display All"]} clickCallback={onCategoryChange}/>
            <SettingsView />
        </div>
    )
}

export default SettingsLayout;