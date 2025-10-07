import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { DotIcon } from "lucide-react";

export default function App() {
  return (
    <div
      className={
        "h-screen w-screen dark:bg-neutral-900 bg-gray-200 flex justify-center items-center"
      }
    >
      <div className={"flex flex-row gap-2.5 items-center justify-center"}>
        <div>
          <img
            src="./photo.webp"
            alt="me bro"
            className={"w-20 aspect-square rounded-md hover:animate-spin"}
          />
        </div>
        <div>
          <div
            className={"text-3xl font-bold flex items-center justify-between"}
          >
            <h1>Olivier Deschênes</h1>
            <div>
              <div className={"flex flex-row items-center gap-2.5"}>
                <a href="https://x.com/_odeschenes">
                  <SiX className={"w-5"} />
                </a>
                <a href="https://github.com/olivier-deschenes">
                  <SiGithub className={"w-5"} />
                </a>
                <a href="https://www.linkedin.com/in/odeschenes/">
                  <img src="./LI-In-Bug.webp" alt="" className={"w-6"} />
                </a>
              </div>
            </div>
          </div>
          <div className={"flex gap-1.5"}>
            <div>
              <span className={"font-bold"}>M.Sc</span>{" "}
              <a
                href={
                  "https://www.hec.ca/programmes/maitrises/maitrise-gestion-operations-logistique/index.html"
                }
                className={
                  "font-thin underline decoration-neutral-500/60 dark:decoration-neutral-200/40"
                }
              >
                HEC Montréal 🇨🇦
              </a>
            </div>
            <DotIcon />
            <div>
              <span className={"font-bold"}>M.Sc</span>{" "}
              <a
                href={
                  "https://www.nhh.no/en/study-programmes/msc-in-economics-and-business-administration/energy-natural-resources-and-the-environment/"
                }
                className={
                  "font-thin underline decoration-neutral-500/60 dark:decoration-neutral-200/40"
                }
              >
                NHH Norwegian School of Economics 🇳🇴
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
