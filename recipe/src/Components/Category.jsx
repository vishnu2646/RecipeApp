import React from 'react'
import categoryData from '../data/CategoryData'

const Category = () => {
    return (
        <div className='category-list mt-5'>
            <h2 className="section-heading">Category</h2>
            <table className='table table-borderless'>
                <tbody>
                    {
                        categoryData ? 
                            categoryData.map((category, index) => (
                                <tr key={index}>
                                    <td>
                                        {category.name}
                                    </td>
                                    <td>
                                        {category.count}
                                    </td>
                                </tr>
                            ))
                        :<></>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Category