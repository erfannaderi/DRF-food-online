import React, {useState, useEffect} from 'react';

function Category() {
    const [categories, setCategories] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        async function fetchData(baseurl) {
            try {
                const response = await fetch(baseurl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCategories(data.result);
                setNextPage(data.links.next);
                setPreviousPage(data.links.previous);
                setTotalCount(data.count);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData('http://127.0.0.1:8000/API/Menu/Categories/');
    }, []);  // Empty dependency array to run the effect only once on mount

    return (
        <div>
            <h1>Categories</h1>
            <p>Total Count: {totalCount}</p>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        <div>
                            <h3>{category.category_name}</h3>
                            <p>Description: {category.description}</p>
                            <p>Created At: {category.created_at}</p>
                            <p>Updated At: {category.updated_at}</p>
                            {/* Add other fields as needed */}
                            {category.vendor && (
                                <div>
                                    <h4>Vendor Details:</h4>
                                    <p>Vendor Name: {category.vendor.vendor_name}</p>
                                    <p>Vendor License: <img src={category.vendor.vendor_license} alt="Vendor License"/>
                                    </p>
                                    {/* Add other vendor details as needed */}
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
            <div>
                {previousPage && <a href={previousPage}>Previous</a>}
                {nextPage && <a href={nextPage}>Next</a>}
            </div>
        </div>
    );
}

export default Category;
