export default function Item({name, quantity, category}) {
    return (
        
        <div className="bg-slate-600 flex justify-center items-center">
            <ul className="bg-gray-300 h-16 p-4 w-96 m-4 text-center rounded-lg">
                <li>
                    {name}, {quantity}, {category}
                </li>
            </ul>
        </div>
    );
}   

