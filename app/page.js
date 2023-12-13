"use client";
import Image from 'next/image';
import { VideoPlayer } from './components/getUrlYoutube/VideoHomePage';
import styles from './page.module.css';
export default function Home() {
  //text-slate-50 blnc pas mal
  return (
    <main className="grid h-screen w-screen grid-cols-2 grid-auto-flow items-left gap-96 justify-between p-24">
      <div className='bg-slate-800/70 p-10 h-full align-middle rounded-xl'>
          <h2 className={`text-5xl text-slate-50`}><span className={`text-7xl ${styles.colorTextLinearG}`} data-content='P' >P</span>rochainement</h2>
          <p>Le site 1er sur l'information de GTA IV, vous trouverais </p>
        </div>
        <div className='bg-slate-800/70 p-10 h-full align-middle rounded-xl'>
          <h2 className={`text-5xl text-slate-50 `}><span className={`text-7xl ${styles.colorTextLinearG}`} data-content='P' >E</span>n attendant tu peux</h2>
          <ul className='py-5 flex flex-col justify-evenly h-full'>
          <li>
              <VideoPlayer 
                CNameContainer="z-10"
                CNameCust="bg-green-100 flex justify-center items-center"
                CNameParent='w-auto h-auto'
                videoId='QdBZY2fkU-0'
                opts={{
                  width: "360",
                  height:"240",
                  playsinline:0}}/>
            </li>
            <li className='py-1 text-2xl pl-2 text-orange-500'>
              
              Regarde, et partage le trailer de GTA VI
            </li>
            
            <li>
              <div className='bg-indigo-500/20  p-4 rounded'>
                <p>BLOC DE PARTAGE</p>
                <ul className='flex flex-row justify-between'>
                  <li>🥙 FB</li>
                  <li>🖼 Insta</li>
                  <li>✖ Twiter</li>
              </ul>
              </div>
            </li>
          </ul>
        </div>
    </main>
  )
}
