import React from 'react';
import error404 from '@/images/error404.svg';
import { NavLink } from 'react-router-dom';

const Error404Page: React.FC = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="text-center">
          <h1 className="text-[60px] text-[#404040]">Oops!</h1>
          <p className="text-[30px] my-10 text-[#404040]">
            Sorry, page not found!
          </p>
          <NavLink className={'text-[20px] text-[#01509a]'} to="/">
            Return to home
          </NavLink>
        </div>
        <img src={error404} className="ml-[100px]" />
      </div>
    </>
  );
};

export default Error404Page;
