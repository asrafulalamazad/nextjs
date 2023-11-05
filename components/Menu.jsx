"use client"
import React from 'react';
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

const Menu = () => {
    const currentPath=usePathname();
    const Router =  useRouter();

    const GoTo=()=>{
        Router.replace("/profile")

    }
    const Refresh=()=>{
        Router.refresh();

    }
    const ProductsPage=()=>{
        Router.push("/products?name=book&price=300");
    }
    return (
        <div>
            <h1>{currentPath}</h1> <br/>
         {/*//   <h2>{{pathname:"currentPath",query:{name:"book",price:"300"}}}</h2>*/}
                <Link  className={currentPath==="/"?"active-link":"pending-link"}  href={"/"}>Home</Link><br/>
                <Link replace className={currentPath==="/profile"?"active-link":"pending-link"} href={"/profile"}>Profile</Link><br/>
                <Link replace className={currentPath==="/about"?"active-link":"pending-link"} href={"/about"}>About</Link><br/>
                <Link replace className={currentPath==="/product"?"active-link":"pending-link"} href={"/product"}>Product</Link><br/>
                <Link replace className={currentPath==="/products"?"active-link":"pending-link"}
                       href={{pathname:"/products",query:{name:"book",price:"300"}}}>
                           Products</Link><br/>

            <button onClick={GoTo}>Click </button>
            <button onClick={Refresh}>Refress </button>
            <button onClick={ProductsPage}>products page </button>


        </div>
    );
};

export default Menu;