import React from 'react'
import Footer from '../Footer';
import Header from '../Header'
import Sidebar from '../Sidebar'
import { useRouter } from 'next/router'
import BannerGames from '../Banner/bannerGames'
import BannerIndex from '../Banner'
import BannerAbout from '../Banner/bannerAbout'


export default function Layout({children}: {children:any;}) {
  const router = useRouter();
  return (
    <>
        <div className="banner-section-outer">
          <Header />
          <Sidebar />
          {router.pathname == '/games' && <BannerGames/>}
          {router.pathname == '/' && <BannerIndex/>}
          {router.pathname == '/about' && <BannerAbout/>}

        </div>
        {children}
        <Footer/>
    </>
  )
}
