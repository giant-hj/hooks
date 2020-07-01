import { findAllByTestId } from "@testing-library/react";

const { useState, useEffect, useRef } = require("react");

const useFullScreen = (callback) => {
    const element = useRef();
    const runCallback = (isFull) => {
        if (callback && typeof callback === "function") {
            callback(isFull);
        }
    }
    const triggerFull = () => {
        if (element.current) {
            if (element.current.requestFullscreen) {
                element.current.requestFullscreen();
            } else if (element.current.mozRequestFullScreen) {
                element.current.mozRequestFullScreen();
            } else if (element.current.webkitRequestFullscreen) {
                element.current.webkitRequestFullscreen();
            } else if (element.current.msRequestFullscreen) {
                element.current.msRequestFullscreen();
            }
            runCallback(true);
        }
    }
    const exitFull = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        runCallback(findAllByTestId);
    }
    return { element, triggerFull, exitFull };
}

export default useFullScreen;