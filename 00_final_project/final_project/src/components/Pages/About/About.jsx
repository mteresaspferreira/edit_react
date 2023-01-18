import TitleSection from "../Homepage/TitleSection/TitleSection";

const About = () => {
  return (
    <section style={{ background: "#ffffff" }}>
      <TitleSection titleName="About" />
      <div className="main-content d-flex flex-direction-row">
        <p>About page</p>
      </div>
    </section>
  );
};

export default About;
