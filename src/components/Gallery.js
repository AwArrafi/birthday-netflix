import React, { useState } from "react";
import Modal from "./Modal";
import "./Gallery.css";

// Import gambar dari folder assets
import alin1 from "../assets/alin1.jpg";
// import alin2 from "../assets/alin2.jpg";
import alin3 from "../assets/alin3.jpg";
import alin4 from "../assets/alin4.jpg";
import alin5 from "../assets/alin5.jpg";
import alin6 from "../assets/alin6.jpg";
import alin7 from "../assets/alin7.jpg";
import alin8 from "../assets/alin8.jpg";
import video1 from "../assets/video1.mp4";
import alin9 from "../assets/alin9.jpg";
import alin10 from "../assets/alin10.jpg";
import alin11 from "../assets/alin11.jpg";
import alin12 from "../assets/alin12.jpg";
import alin13 from "../assets/alin13.mp4";
import alin14 from "../assets/alin14.jpg";
import alin15 from "../assets/alin15.jpg";
import alin16 from "../assets/alin16.mp4";
import alin17 from "../assets/alin17.jpg";
import alin18 from "../assets/alin18.jpg";

function Gallery() {
  const [modalSrc, setModalSrc] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const openModal = (src, title, description, video = false) => {
    setModalSrc(src);
    setModalTitle(title);
    setModalDescription(description);
    setIsVideo(video);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalSrc("");
    setIsVideo(false);
  };

  return (
    <div>
      <section className="gallery">
        <div
          className="item"
          onClick={() =>
            openModal(
              alin1,
              "Bromo With Bebeh",
              "Photoshoot ala-ala bromo kita, nanti nikah gini jugakah hahay"
            )
          }
        >
          <img src={alin1} alt="Foto 1" />
        </div>
        <div
          className="item"
          onClick={() =>
            openModal(
              alin17,
              "Surabaya",
              "Hujan-hujanan bersama bidut, sabar ya nanti kita akan memiliki mobil kita sendiri hehe"
            )
          }
        >
          <img src={alin17} alt="Foto 2" />
        </div>
        <div
          className="item"
          onClick={() =>
            openModal(
              alin3,
              "GBK Menyala",
              "Habis mam bersama bidut di gbk dan berjalan-berjalan di mall wkwkwkwk"
            )
          }
        >
          <img src={alin3} alt="Foto 3" />
        </div>
        <div
          className="item"
          onClick={() =>
            openModal(
              alin4,
              "Bromo Bergaya",
              "Foto si cantikku bergaya di bromo haha luv"
            )
          }
        >
          <img src={alin4} alt="Foto 4" />
        </div>
        <div
          className="item"
          onClick={() =>
            openModal(
              alin5,
              "Konser Undip",
              "Menemani cantikku konser Progresif festival atau apala itu aku lupa hehe"
            )
          }
        >
          <img src={alin5} alt="Foto 5" />
        </div>
        <div
          className="item"
          onClick={() =>
            openModal(
              alin6,
              "SOD Surabaya",
              "Bernyanyi-bernyanyi di sod volume sekian, jadi kapan nih kita konser lagi hahay"
            )
          }
        >
          <img src={alin6} alt="Foto 6" />
        </div>
        <div
          className="item"
          onClick={() =>
            openModal(
              alin7,
              "PhotoBox",
              "Photobox bidut yang ku colong hehe jaman jaman masih gundul tapi aku tetap ganteng 😎"
            )
          }
        >
          <img src={alin7} alt="Foto 7" />
        </div>
        <div
          className="item"
          onClick={() =>
            openModal(
              video1,
              "Cafe Kucing",
              "Aku, Bidut, dan Kucing kala itu :D",
              true
            )
          }
        >
          <video src={video1} muted />
        </div>
        <div
          className="item"
          onClick={() =>
            openModal(
              alin8,
              "Semarang Kota Lama",
              "Pertama kali membeli bunga untuk bidut ❤️"
            )
          }
        >
          <img src={alin8} alt="Foto 8" />
        </div>
        <div
          className="item"
          onClick={() =>
            openModal(
              alin9,
              "SOD Semarang",
              "Konser Semarang di sod volume sekian, jadi kapan nih kita konser lagi hahay 2"
            )
          }
        >
          <img src={alin9} alt="Foto 9" />
        </div>
        <div
          className="item"
          onClick={() =>
            openModal(
              alin10,
              "SOD Semarang",
              "Bersama tangan gemas yang akan ku gandeng selamanya hahay"
            )
          }
        >
          <img src={alin10} alt="Foto 10" />
        </div>
        <div
          className="item"
          onClick={() =>
            openModal(
              alin11,
              "Photobox Surabaya",
              "Bergaya kali jadi macam geng"
            )
          }
        >
          <img src={alin11} alt="Foto 11" />
        </div>
        <div
          className="item"
          onClick={() =>
            openModal(alin12, "Bromo lagee", "Cantikknya sayangku 😍😍")
          }
        >
          <img src={alin12} alt="Foto 12" />
        </div>
        <div
          className="item"
          onClick={() =>
            openModal(
              alin13,
              "Stasiun Tawang Semarang",
              "Pelukan pertama kalinya dan selamanya hahay",
              true
            )
          }
        >
          <video src={alin13} alt="Video 13" />
        </div>
        <div
          className="item"
          onClick={() =>
            openModal(
              alin14,
              "GBK",
              "Bermain sepatu roda dengan bidutku tapi dia banyak jatuhnya hahay"
            )
          }
        >
          <img src={alin14} alt="Foto 14" />
        </div>
        <div
          className="item"
          onClick={() =>
            openModal(
              alin15,
              "Bromo With Luv ❤️",
              "Yuk jalan-jalan lagi bidut hehehe"
            )
          }
        >
          <img src={alin15} alt="Foto 15" />
        </div>
        <div
          className="item"
          onClick={() =>
            openModal(
              alin16,
              "Alun-alun Semarang",
              "Bermain di alun-alun semarang saat date awal-awal dengan bidut hahay",
              true
            )
          }
        >
          <video src={alin16} alt="Video 16" />
        </div>
        <div
          className="item"
          onClick={() =>
            openModal(
              alin18,
              "Photoshoot With Bidut",
              "Kapan kita photoshoot lagi ya kan kita sudah makin cakep 😏😏"
            )
          }
        >
          <img src={alin18} alt="Foto 14" />
        </div>
      </section>
      {modalOpen && (
        <Modal
          src={modalSrc}
          isVideo={isVideo}
          closeModal={closeModal}
          title={modalTitle}
          description={modalDescription}
        />
      )}
    </div>
  );
}

export default Gallery;
