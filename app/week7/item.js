


export default function Item({ name, quantity, category, onSelect }) {
    return (
      <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col justify-between"
        onClick={() => onSelect(name)}>
        
        <h3 className="text-xl font-semibold">{name}</h3>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
      </div>
    );
  }
  