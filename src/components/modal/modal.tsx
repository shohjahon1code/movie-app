import React, { useContext, useEffect, useState } from "react";
import MuImodal from "@mui/material/Modal";
import { useInfoStore } from "@/store";
import { FaTimes, FaPlay } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";
import { BsVolumeMute, BsVolumeDown } from "react-icons/bs";
import { AiOutlinePauseCircle, AiFillLike } from "react-icons/ai";
import { Element } from "@/interfaces/app.interface";
import ReactPlayer from "react-player";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";
import { AuthContext } from "@/context/auth.context";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = () => {
  const { setModal, modal, currentMovie } = useInfoStore();
  const base_url = process.env.NEXT_PUBLIC_API_DOMAIN as string;
  const api_key = process.env.NEXT_PUBLIC_API_KEY as string;
  const [trailer, setTrailer] = useState<string>("");
  const [muted, setMuted] = useState<boolean>(true);
  const [playing, setPlaying] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useContext(AuthContext)
  const router = useRouter()

  const notify = () => toast.success("Film added to MY LIST");

  const api = `${base_url}${currentMovie.media_type === "tv" ? "tv" : "movie"
    }/${currentMovie.id}/videos?api_key=${api_key}&language=en-US`;

  const handleClose = () => {
    setModal(false);
  };

  const handlePlaying = () => {
    setPlaying((prev) => !prev);
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(api);
      const data = await res.json();
      console.log(data);

      if (data?.results) {
        const index = data.results.findIndex(
          (el: Element) => el.type === "Trailer"
        );
        setTrailer(data?.results[index]?.key);
      }
    };
    fetchMovie();

    //eslint-disable-next-line
  }, [currentMovie]);


  const addProductList = async () => {
    try {
      setLoading(true)
      const docRef = await addDoc(collection(db, 'list'), {
        userId: user?.uid,
        product: currentMovie
      })
      notify()
      setLoading(false)
      router.replace(router.asPath)
    } catch (error) {
      console.log('Error addding document')
      setLoading(false)
    }
  }

  return (
    <MuImodal
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl  overflow-y-scroll scrollbar-hide"
      open={modal}
      onClose={handleClose}
    >
      <>
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818]"
        >
          <FaTimes />
        </button>
        <div className="relative pt-[55%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width={"100%"}
            height={"100%"}
            muted={muted}
            playing={playing}
            style={{ position: "absolute", top: 0, left: 0 }}
          />

          <div className="absolute bottom-10 flex w-full items-center justify-between px-8">
            <div className="flex space-x-2">
              <button
                onClick={handlePlaying}
                className="flex items-center py-2 gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e5e5e5]"
              >
                {playing ? (
                  <AiOutlinePauseCircle className="h-7 w-7 text-black" />
                ) : (
                  <FaPlay className="h-7 w-7 text-black" />
                )}

                {playing ? "Pause" : "Play"}
              </button>
              <button className="modalButton" onClick={addProductList}>
                {loading ? '...' : <BiPlus />}
                <ToastContainer />
              </button>
              <button className="modalButton">
                <AiFillLike />
              </button>
              <button
                onClick={() => setMuted((prev) => !prev)}
                className="modalButton"
              >
                {muted ? <BsVolumeMute /> : <BsVolumeDown />}
              </button>
            </div>
          </div>
        </div>

        <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">
                {currentMovie?.vote_average * 10}% Match
              </p>
              <p className="font-light">{currentMovie?.first_air_date}</p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5  text-xs">
                HD
              </div>
            </div>
            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <p className="w-5/6">{currentMovie?.overview}</p>
              <div className="flex flex-col space-y-3 text-sm">
                <div>
                  <span className="text-[gray]">Original language: </span>
                  {currentMovie?.original_language}
                </div>
                <div>
                  <span className="text-[gray]">Total votes: </span>
                  {currentMovie?.vote_count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuImodal>
  );
};

export default Modal;
