import Centered from "@/components/centered";
import Container from "@/components/container";
import Grid from "@/components/grid";
import Title from "@/components/title";

export default function InitialScreen(props: { onClick: () => void }) {
  const { onClick } = props;

  return (
    <Container background="backgrounds/background.jpg" onClick={onClick}>
      <Grid rows={2} columns={1}>
        <Centered>
          <Title text="Dating with Strahd" />
        </Centered>
        <Centered>
          <p className="text-white text-2xl font-serif select-none animate-pulse">
            Click anywhere to continue
          </p>
        </Centered>
      </Grid>
    </Container>
  );
}
