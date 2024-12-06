import { PAGE_ICON } from "@/constants/pages";
import React from "react";

type Props = {
  page: string;
  slug?: string;
};

const MainBreadCrumb = ({ page, slug }: Props) => {
  return (
    <div className="flex flex-col items-start w-full">
      {page === 'Home' && (
        <div className="flex justify-center w-full mb-6">
          <div className=" bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl p-6 w-full max-w-2xl text-center ">
            <p className="text-indigo-200 text-lg mb-2">Welcome back</p>
            <h2 className="capitalize text-4xl font-medium text-white">{slug} !</h2>
          </div>
        </div>
      )}
      <span className="bg-gradient-to-r from-indigo-900 to-purple-900 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl py-4 px-6 inline-flex gap-x-3 items-center">
        {PAGE_ICON[page.toUpperCase()] && (
          <span className="text-indigo-300">
            {PAGE_ICON[page.toUpperCase()]}
          </span>
        )}
        <h2 className="font-semibold text-2xl capitalize text-white">{page}</h2>
      </span>
    </div>
  )
};

export default MainBreadCrumb;

