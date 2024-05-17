import "./categoryList.css";

interface Props {
    categories: string[],
    clickCallback: (category: string) => void
}

function CategoryList({ categories, clickCallback }: Props) {
    return (
        <nav className="categorylist">
            { categories.map(category => {
                return(<button className="categorylist__item" onClick={() => clickCallback(category)} key={category}>{category}</button>);
            })}
        </nav>
    );
}

export default CategoryList;