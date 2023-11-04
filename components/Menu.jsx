import React from 'react';

import Link from "next/link";

const Menu = () => {
    return (
        <div>
                <Link href={"/"}>Home</Link><br/>
                <Link href={"/profile"}>Profile</Link><br/>
                <Link href={"/about"}>About</Link><br/>
                <Link href={"/product"}>Product</Link><br/>
                <Link href={"/products"}>Products</Link><br/>
                <Link href={"/products/server-site"}>Products</Link>

        </div>
    );
};

export default Menu;