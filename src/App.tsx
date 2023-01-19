import "./styles.css";
import styled from "styled-components";

//

import Bar from "./components/Bar";
import BarStacked from "./components/BarStacked";
import BarStackedVertical from "./components/BarStackedVertical";
import Line from "./components/Line";

const components = [
  ["💀 Death Count", Bar],
  ["👧🏿 | 👦🏿 Share of Characters", BarStacked],
  ["🤬 Cursed Words", BarStackedVertical],
  ["🍿 Movies Rank", Line]
];

const ChartWrapperInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 20px;
  margin-top: 24px;
  margin-bottom: 20px;

  .outer-wrapper {
    width: 90%;
    height: 500px;
  }

  .inner-wrapper {
    width: 100%;
    height: 85%;
    background-color: white;
  }

  h1 {
    font-family: "Rye", cursive;
    font-size: 20px;
    padding: 14px;
    border-radius: 8px;
    background-color: #ffd403;
    margin: 0 0 14px 0;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.42);
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.42);
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const links: Array<{ label: string; link: string }> = [
  { label: "Github", link: "https://github.com/zipluciano/tarantino-charts" },
  {
    label: "TanStack - React Charts",
    link: "https://react-charts.tanstack.com/docs/overview"
  },
  { label: "NPM Package", link: "https://www.npmjs.com/package/react-charts" }
];

export default function App() {
  return (
    <div>
      <nav>
        <p>Quentin Tarantino - Curious Data 🩸</p>
      </nav>
      <ChartWrapperInfo>
        {components.map(([label, Comp]) => {
          return (
            <div key={label + ""} className="outer-wrapper">
              <h1>{label + ""}</h1>
              <div className="inner-wrapper">
                <Comp />
              </div>
            </div>
          );
        })}
      </ChartWrapperInfo>
      <footer>
        {links.map(({ label, link }) => (
          <a href={link} target="_blank">
            {label}
          </a>
        ))}
      </footer>
    </div>
  );
}
