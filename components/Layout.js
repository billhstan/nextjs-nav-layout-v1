import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

function Layout({children}) {
  return (
    <>
    <Head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Experiment navigation bar and layout</title>
    </Head>
    <div className="flex flex-col h-screen">
      <Header></Header>
      <main className="flex-1 overflow-y-auto p-5">
           {children}
      </main>
      <Footer></Footer>
      </div>
    </>
  
  
  
)}

export default Layout;