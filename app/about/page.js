import React from 'react';
import css from "../page.module.css"
import Menu from "@/components/Menu";

const Page = () => {
    return (
        <div>
            <Menu/>
            <h2 className={css.myHeadline}>About Page</h2>
        </div>
    );
};

export default Page;