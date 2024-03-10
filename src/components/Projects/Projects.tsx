import { FC } from "react";
import IconCake from "../Icons/IconCake";
import IconGroup from "../Icons/IconGroup";
import IconProject from "../Icons/IconProject";

const Projects: FC = () => {
  return (
    <section className=" bg-main flex justify-evenly p-10">
      <div className="flex flex-col items-center gap-3">
        <span className="fill-white">
          <IconCake width={100} />
        </span>

        <h4 className="text-3xl text-white font-bold">21</h4>
        <h3 className="text-xl text-white">Godine postojanja</h3>
      </div>
      <div className="flex flex-col items-center gap-3">
        <span className="fill-white">
          <IconProject width={100} />
        </span>

        <h4 className="text-3xl text-white font-bold">3</h4>

        <h3 className="text-xl text-white">Projekata godisnje</h3>
      </div>
      <div className="flex flex-col items-center gap-3">
        <span className="fill-white">
          <IconGroup width={100} />
        </span>

        <h4 className="text-3xl text-white font-bold">20 +</h4>
        <h3 className="text-xl text-white">Aktivnih clanova</h3>
      </div>
    </section>
  );
};

export default Projects;
