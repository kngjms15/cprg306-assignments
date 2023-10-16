export default function Item({img, name, quantity, category}) {
    return (
        
        <div className="bg-slate-600 flex justify-center items-center">
            <ul className="bg-gray-300 h-16 p-4 w-96 m-4 text-center rounded-lg hover:bg-blue-300">
                <li>
                   {name}, {quantity}, {category}
                </li>
            </ul>
        </div>

    );
}   
