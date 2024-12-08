import { technologies } from "../constants/index";
// @ts-ignore
import { Icon } from "react-3d-icons";

function Technologies() {
  return (
    <div className="p-5 pt-[64px] ssm:p-container flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-h1">Technologies</h1>
        <p className="text-p pb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-6 lg:flex-row justify-center gap-12 ">
          {technologies.map((technologie) => (
            <div key={technologie.id} className="flex justify-center -z-10">
              <div>
                <Icon
                  spin={true}
                  file={technologie.logo}
                  color={technologie.color}
                  scale={10}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
