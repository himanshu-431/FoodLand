import ItemList from "./ItemList"

const RestaurantCategory = ({data, showItems, setIndex}) => {

  const handleClick = () => {
    setIndex();
  }

  return (
    <div>
        <div className="ResCat">
            {/* Accordian Header */}
            <div className="Accordian_Header" onClick={handleClick}>
              <span>{data.title} ({data.itemCards.length}) </span>
              <span>🔽</span>
            </div>
            {/* Accordian Body */}
        {showItems && <ItemList items={data.itemCards} />}
        </div>
    </div>
  )
}

export default RestaurantCategory;