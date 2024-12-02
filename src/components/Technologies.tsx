import { technologies } from "../constants/index";
// @ts-ignore
import { Icon } from "react-3d-icons";

function Technologies() {
  return (
    <div className="flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-h1 py-10">Technologies</h1>
        <p className="text-p pb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-6 lg:flex-row justify-center gap-12 px-6">
          {technologies.map((technologie) => (
            <div key={technologie.id} className="flex justify-center -z-10">
              <div style={{ height: "150px", width: "150px" }}>
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
