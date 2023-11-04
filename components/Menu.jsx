"use client"
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const Menu = () => {
    const currentPath=usePathname();

    return (
        <div>
            <h1>{currentPath}</h1> <br/>
         {/*//   <h2>{{pathname:"currentPath",query:{name:"book",price:"300"}}}</h2>*/}
                <Link  className={currentPath==="/"?"active-link":"pending-link"}  href={"/"}>Home</Link><br/>
                <Link  className={currentPath==="/profile"?"active-link":"pending-link"} href={"/profile"}>Profile</Link><br/>
                <Link  className={currentPath==="/about"?"active-link":"pending-link"} href={"/about"}>About</Link><br/>
                <Link  className={currentPath==="/product"?"active-link":"pending-link"} href={"/product"}>Product</Link><br/>
                <Link  className={currentPath==="/products"?"active-link":"pending-link"}
                       href={{pathname:"/currentPath",query:{name:"book",price:"300"}}}>
                           Products</Link><br/>
                <Link  className={currentPath==="/products/server-site"?"active-link":"pending-link"} href={"/products/server-site"}>Products</Link>

        </div>
    );
};

export default Menu;