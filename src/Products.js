import {useState} from "react";



function Products(){

    let [products,setProducts]=useState([
        {
            PId:1,
            name:"pencil",
            price:10
        },
        {
            PId:2,
            name:"pen",
            price:30
        },
        {
            PId:3,
            name:"eraser",
            price:5
        },
        {
            PId:4,
            name:"scale",
            price:10
        },
        {
            PId:5,
            name:"ink",
            price:60
        },
        {
            PId:6,
            name:"note",
            price:55
        }
    ])

    return(
        <div>
            <h1>Products data</h1>
            <tbody>
                <tr>
                    <th>Pro Id</th>
                    <th>name</th>
                    <th>price</th>
                </tr>
                {products.map(function(pro,index){
                return(
                    <tr key={index}>
                        <td>{pro.PId}</td>
                        <td>{pro.name}</td>
                        <td>{pro.price}</td>
                    </tr>
                )
            })}
            </tbody>
        </div>
    )
}

export default Products;