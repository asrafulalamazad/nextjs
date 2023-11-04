'use client'
import Menu from "@/components/Menu";
import {useSearchParams} from "next/navigation";


async function getData(){
    let response = await fetch('https://dummyjson.com/products')
    let jsonData = await response.json();

    return jsonData['products']
}


const Page = async () => {
     let data = await getData();
    const params= useSearchParams()

    return (
        <div>
            <Menu/>
            <h1>{params.get('name')}</h1>
            <h1>{params.get('price')}</h1>
            <h1 className="my-text">Products Page ssr </h1>

            {
                data.map((item, index)=>{
                    return(
                        <div key = {index}>
                            <table className="table">
                                <tr className="th">
                                    <th className="td">ID </th>
                                    <th className="td">Title</th>
                                    <th className ="td">Description</th>
                                    <th className ="td">Image</th>
                                </tr>
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