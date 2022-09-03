import React from 'react'

const Nutritions = () => {
    return (
        <div className='nutritions'>
            <h3>nutritions</h3>
            <div className="box">
                <table className='table table-borderless'>
                    <tbody>
                        <tr>
                            <td>Calories</td>
                            <th>329</th>
                        </tr>
                        <tr>
                            <td>Sugar</td>
                            <th>10.5g</th>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <th>22.5g</th>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <th>02g</th>
                        </tr>
                        <tr>
                            <td>Carbs</td>
                            <th>18g</th>
                        </tr>
                        <tr>
                            <td>Food Fat</td>
                            <th>0.1</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Nutritions