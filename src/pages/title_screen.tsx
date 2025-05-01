import Button from "@/components/button";
import Centered from "@/components/centered";
import Container from "@/components/container";
import Grid, { GridSize } from "@/components/grid";
import Title from "@/components/title";
import { useEffect, useRef, useState } from "react";

export default function TitleScreen() {
  const [loading, setLoading] = useState<boolean>(true);
  const audioElementRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!loading && !!audioElementRef?.current?.src) {
      audioElementRef?.current?.play();
    }
  }, [loading, audioElementRef?.current?.src]);

  //   {/* <audio
  //   className="invisible"
  //   ref={audioElementRef}
  //   src={"audio/bgm/cobble_village.mp3"}
  //   autoPlay
  //   onLoadedData={() => setLoading(false)}
  // ></audio> */}

  return (
    <Container background="backgrounds/background.jpg">
      <Grid rows={2} columns={1}>
        <Centered>
          <Title text="Dating with Strahd" />
        </Centered>
        <Grid rows={1} columns={2}>
          <Centered>
            <Button text="Load" disabled onClick={() => {}} />
          </Centered>
          <Centered>
            <Button text="Play" onClick={() => {}} />
          </Centered>
        </Grid>
      </Grid>
    </Container>
  );
}
