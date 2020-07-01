import Head from "next/head";
import { useRouter } from "next/router";

export default function () {
  const router = useRouter();

  function start() {
    router.push({ pathname: "/dialogue", query: { index: 0 } });
  }

  return (
    <>
      <div className="container fullscreen border">
        <Head>
          <title>Vampire Simulator</title>
        </Head>
        <img className="fill" src="/background.jpg" />
        <div className="container-overlay">
          <h1 className="purple shadow">Vampire Simulator</h1>
          <div className="button-container flex even">
            <div className="button flex center button-load">
              <span>Load</span>
            </div>
            <div className="button flex center start" onClick={start}>
              <span>Start</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import "./pages/global.scss";

        img {
          object-fit: cover;
        }
        .container-overlay {
          position: absolute;
          top: 100px;
          width: 100%;
        }
        .button-container {
          margin-top: 20%;
        }
        h1 {
          text-align: center;
          font-size: 85px;
          font-family: Segoe Script;
        }
        .button.load {
          color: grey;
          border-color: grey;
        }
        .button:hover {
          // &.load {
          //     background-color: red;
          // }
          &.start {
            background-color: turquoise;
          }
        }
      `}</style>
    </>
  );
}
