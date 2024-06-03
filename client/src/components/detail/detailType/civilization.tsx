import { Civilization } from "@/types/civilizations";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface ICardProps {
  element: Civilization;
}

function CivilizationEntityCard({ element }: ICardProps) {
  const { name, type, expansion, army_type, team_bonus, civilization_bonus } =
    element;

  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    const loadImage = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let src: any = "";
      try {
        const formattedName = name.toLowerCase().replace(/\s+/g, "-");
        src = await import(
          `../../../../images/civilizations/icons/civ-icon-${formattedName}.png`
        );
        setImageSrc(src.default);
      } catch (error) {
        if (!src) {
          src = await import("../../../assets/aoe2-icon.svg");
          setImageSrc(src.default);
        }
      }
    };

    loadImage();
  }, [name]);
  return (
    <Card isHoverable={true} className="py-4  w-full max-w-[600px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <p className="text-tiny uppercase font-bold">{name}</p>
        <small className="text-default-500">
          Type: {type || "Civilization"}
        </small>
        <h4 className="font-bold text-large">Expansion: {expansion}</h4>
        <p className="text-small">Army Type: {army_type}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex flex-col items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={imageSrc}
          width="180px"
          height="180px"
        />
        <div className="mt-4 flex flex-col text-center gap-2">
          <div>
            <h5 className="font-bold mt-2">Army Type: </h5>
            <p>{army_type}</p>
          </div>
          <div>
            {" "}
            <h5 className="font-bold mt-2">Team Bonus:</h5>
            <p>{team_bonus}</p>
          </div>

          <div>
            <h5 className="font-bold mt-2">Civilization Bonuses:</h5>
            <ul>
              {civilization_bonus.map((bonus, index) => (
                <li key={index}>{bonus}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default CivilizationEntityCard;
