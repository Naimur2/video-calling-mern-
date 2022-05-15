import React from "react";

const SocketContext = React.createContext({
    socket: null,
    message: null,
    setSocket: () => {},
    sendMessage: () => {},
    setMessage: () => {},
    callToUser: () => {},
    endCall: () => {},
    callDetails: null,
    setCallDetails: () => {},
    showCallingModal:false,
    setShowCallingModal:()=>{},
    localStream: null,
    remoteStream: null,
    setRemoteStream: () => {},
    setLocalStream: () => {},
    peer: null,
    peerId: null,
    setPeerId: () => {},
    setPeer: () => {},
    isBusy: false,
    setIsBusy: () => {},
    isRejected: false,
    setIsRejected: () => {},
    isEndCall:null,
    setIsEndCall:()=>{},
    localCall:null,
    setLocalCall:()=>{},
    notAvailable:false,
    setNotAvailable:()=>{},
    setLocalStreamInfo:()=>{},
    setRemoteStreamInfo:()=>{},
    updateState:()=>{},
    notAnswered:false,
    clearState:()=>{},
    isAccepted:false,
    setIsAccepted:()=>{},
    callStatus:null,
});

export default SocketContext;
