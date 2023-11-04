import React from 'react';
import style from "./page.module.css"

const Page = () => {
    return (
        <div>
          <h1 className="my-text" >Welcome to Web Application with nextJS</h1>
          <h1 className={style.myHeadline}> Home Page</h1>
        </div>
    );
};

export default Page;