import React from 'react';
import style from "./page.module.css"
import Menu from "@/components/Menu";

const Page = () => {
    return (
        <div>
            <Menu/>
          <h1 className="my-text" >Welcome to Web Application with nextJS</h1>
          <h1 className={style.myHeadline}> Home Page</h1>
        </div>
    );
};

export default Page;