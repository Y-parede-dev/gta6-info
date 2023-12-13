"use client";
import YouTube from "react-youtube";
import { useEffect, useState } from "react";

export const VideoPlayer = (params) => {
    console.log(params)
    const [paramsVideo, setParamsVideo] = useState({
        opts:{
        width:'100%',
        height:'100%',
        playsinline:0
        },
        className:"-z-10 blur-md fixed w-full h-full object-fill",
        classNameParent:`z-10 w-screen  h-screen bg-orange-300/10`,
        classNameContainer:"-z-10 fixed w-screen h-screen",
    })
    const onReady = (e) => {
        const player = e.target;
            player.playVideo();
    };
    const onError = (error) => {
        console.log(error)
    }
    useEffect(()=>{
        if(params.opts){
            setParamsVideo((prevData)=>({...prevData,opts:{...params.opts}}))
        }else{
            return  (
                setParamsVideo((prevData)=>({
                    ...prevData,
                    opts:{
                        height: '100%',
                        width: '100%',
                        playsinline:1}}))
            )
        }
    },[])
    useEffect(()=>{
        if(params.CNameCust){
            setParamsVideo((prevData)=>({...prevData,className:JSON.stringify(params.CNameCust)}))
        }
    },[])
    useEffect(()=>{
        if(params.CNameContainer){
            setParamsVideo((prevData)=>({...prevData,classNameContainer:JSON.stringify(params.CNameContainer)}))
        }
    },[])
    useEffect(()=>{
        if(params.CNameParent){
            setParamsVideo((prevData)=>({...prevData,classNameParent:JSON.stringify(params.CNameParent)}))
        }
    },[])
    // useEffect(()=>{
    //     setParamsVideo((prevData)=>({...prevData,className: paramsVideo.className.replace(("&quot;",'/'))}))
    //     setParamsVideo((prevData)=>({...prevData,classNameContainer: paramsVideo.classNameContainer.replace(("&quot;",'/'))}))
    //     setParamsVideo((prevData)=>({...prevData,classNameParent: paramsVideo.classNameParent.replace(("&quot;",'/'))}))
    // },[])
    //     // }
    // };
    return (
        <div className={paramsVideo.classNameContainer}>
            <div className={paramsVideo.classNameParent}>

                <YouTube className={paramsVideo.className} 
                    videoId={params.videoId}
                    onReady={onReady}
                    onError={onError}
                    onEnd={onReady}
                    opts={paramsVideo.opts}
                />
            </div>
        </div>
        )
}