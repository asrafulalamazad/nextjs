"use client"
import React, {useEffect, useState} from 'react';
import Menu from "@/components/Menu";

const Page = ({searchParams}) => {
    const [data, setData] = useState([])

    useEffect(()=>{

        (  async ()=>{
            let response = await fetch('https://dummyjson.com/products')
            let jsonData = await response.json();
            setData(jsonData["products"])
        })()

    },[])




    return (
        <div>
            <Menu/>
            <h1>{searchParams.name}</h1>
            <h1>{searchParams.price}</h1>
            <h1 className="my-text">Products Page csr</h1>

            {
                data.map((item, index)=>{
                    return(
                        <div key = {index}>
                            <table className="table">
                                <th className="th">
                                    <th className="td">ID </th>
                                    <th className="td">Title</th>
                                    <th className ="td">Description</th>
                                    <th className ="td">Image</th>
                                </th>
                                <tr className="th">
                                    <td className="td">{index}</td>
                                    <td className="td">{item['title']}</td>
                                    <td className ="td">{item['description']}</td>
                                    <td className ="td"><img src="{item['images']}"/></td>
                                </tr>
                            </table>
                        </div>
                    )

                })
            }
        </div>
    );
};

export default Page;