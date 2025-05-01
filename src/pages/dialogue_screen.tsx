import Centered from "@/components/centered";
import Container from "@/components/container";
import Title from "@/components/title";
import { useEffect, useRef, useState } from "react";

export default function DialogueScreen(props: {
  dialogue: string;
  onChange: (reference: string) => void;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const audioElementRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!loading && !!audioElementRef?.current?.src) {
      audioElementRef?.current?.play();
    }
  }, [loading, audioElementRef?.current?.src]);

  // Fetch Dialogue

  // Fetch Scene

  return (
    <>
      <audio
        className="invisible"
        ref={audioElementRef}
        src={""}
        autoPlay
        onLoadedData={() => setLoading(false)}
      ></audio>
      <Container background="backgrounds/background.jpg">
        <Centered>
          <Title text="Dialogue screen!"></Title>
        </Centered>
      </Container>
    </>
  );
}
