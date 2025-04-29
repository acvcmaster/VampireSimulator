import Head from "next/head";
import { useRouter } from "next/router";

export default function () {
  const router = useRouter();

  const { badEnd } = router.query;
  console.log(router.query, badEnd)

  function restart() {
    router.push("/");
  }

  return (
    <>
      <div className="container fullscreen border">
        <Head>
          <title>Vampire Simulator</title>
        </Head>
        <img className="fill cover blurred" src="/background.jpg" />
        <div className="container overlay fill flex center">
          <div className="container text flex center">
            <span className={`shadow ${badEnd ? "red" : "purple"}`}>
              {badEnd ? "Bad end!" : "Happy ending!"}
            </span>
          </div>
          <div className="container buttons flex even">
            <div className="button flex center" onClick={restart}>
              <span>{badEnd ? "Try again" : "Hooray!"}</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import "./pages/global.scss";

        .container.overlay {
          flex-direction: column;
        }
        .container.text {
          width: 100%;
          font-size: 85px;
          font-family: Segoe Script;
        }
        .container.buttons {
          margin-top: 10%;
          width: 100%;
        }
      `}</style>
    </>
  );
}
