// import React from 'react'
import {Link} from "react-router-dom"

const Start = () => {
  return (
    <div className="w-full pt-8 bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] flex flex-col justify-between h-screen ">
     <img className="w-14 ml-8" src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoid2VhcmVcL2ZpbGVcLzhGbTh4cU5SZGZUVjUxYVh3bnEyLnN2ZyJ9:weare:F1cOF9Bps96cMy7r9Y2d7affBYsDeiDoIHfqZrbcxAw?width=1200&height=417" alt="" />
      <div className="bg-white px-5 py-4">
        <h2 className="text-black text-3xl font-bold capitalize pb-5">get started with uber</h2>
        <Link to={"/login"} className="flex items-center justify-center text-center w-full px-5 py-2 text-xl bg-black rounded-sm text-white font-bold">continue</Link>
      </div>
    </div>
  )
}

export default Start