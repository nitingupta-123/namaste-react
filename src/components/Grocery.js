const Grocery = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Grocery</h1>
            <h2 className="text-2xl text-gray-600 mb-6">List of items</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
                <li className="text-gray-700">Item 1</li>
                <li className="text-gray-700">Item 2</li>
                <li className="text-gray-700">Item 3</li>
            </ul>
        </div>
    );
};

export default Grocery;