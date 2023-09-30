"use client";
import Image from "next/image";
import "./home.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => e.preventDefault());
    function ctrlShiftKey(e, keyCode) {
      return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
    }
    document.onkeydown = (e) => {
      if (e.code === 123 || e.ctrlKey) return false;
    };
    // var elem = document.documentElement;
    // function openFullscreen() {
    //   if (elem.requestFullscreen) {
    //     elem.requestFullscreen();
    //   } else if (elem.webkitRequestFullscreen) {
    //     /* Safari */
    //     elem.webkitRequestFullscreen();
    //   } else if (elem.msRequestFullscreen) {
    //     /* IE11 */
    //     elem.msRequestFullscreen();
    //   }
    // }
    // function closeFullscreen() {
    //   if (document.exitFullscreen) {
    //     document.exitFullscreen();
    //   } else if (document.webkitExitFullscreen) {
    //     /* Safari */
    //     document.webkitExitFullscreen();
    //   } else if (document.msExitFullscreen) {
    //     /* IE11 */
    //     document.msExitFullscreen();
    //   }
    // }
    // openFullscreen();
  }, []);
  return (
    <main>
      <h1>WELCOME Learners</h1>
      <p className="subtitle">Let's learn AI...</p>
    </main>
  );
}
