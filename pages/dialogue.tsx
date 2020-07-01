import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

type DialogueScreenModel = {
  index: number;
  message: string;
  image: string;
  background: string;
  options: { message: string; index: number; badEnd?: boolean }[];
};

export default function () {
  const router = useRouter();

  const { index } = router.query;

  const [dialogue, setDialogue] = useState<DialogueScreenModel | null>(null);

  // run this function whenever index changes
  useEffect(() => {
    if (index !== undefined)
      fetch(`dialogue/${index}.json`)
        .then((data) => data.json())
        .then(setDialogue);
  }, [index]);

  function changeDialogueIndex(newIndex: number, badEnd: boolean) {
    router.push(
      newIndex == -1
        ? {
            pathname: "/end",
            query: badEnd ? { badEnd: true } : {},
          }
        : {
            pathname: "/dialogue",
            query: { index: newIndex },
          }
    );
  }

  // re-rendered when any local variable changes
  return (
    <>
      <div className="container fullscreen border">
        <Head>
          <title>Vampire Simulator</title>
        </Head>
        <img className="fill cover blurred" src={dialogue?.background} />
        <div className="container overlay fill flex center">
          <div className="container img">
            <img className="fill" src={dialogue?.image} />
          </div>
          <div className="container text flex center">
            <span>{dialogue?.message}</span>
          </div>
          <div className="container buttons flex even">
            {dialogue?.options.map(({ index, message, badEnd }) => (
              <div
                className="button flex center option"
                onClick={() => changeDialogueIndex(index, badEnd)}
              >
                <span>{message}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @import "./pages/global.scss";

        .container.overlay {
          flex-wrap: wrap;
        }

        .container.img {
          width: 50%;
          height: 50%;
          img {
            object-fit: contain;
          }
        }

        .container.text {
          width: calc(50% - 80px);
          height: calc(50% - 80px);
          padding: 40px;
          span {
            color: white;
            font-size: 40px;
          }
        }

        .container.buttons {
          width: 100%;
          height: 50%;
        }
      `}</style>
    </>
  );
}
