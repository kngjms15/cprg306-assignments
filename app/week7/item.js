


export default function Item({ name, quantity, category, onSelect }) {
    return (
      <div className="bg-white hover:bg-blue-300 transition duration-300 ease-in-out cursor-pointer rounded-lg shadow-lg p-4 flex flex-col justify-between my-4"
        onClick={() => onSelect(name)}>
        
        <h3 className="text-xl font-semibold">{name}</h3>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
      </div>
    );
  }
  
  