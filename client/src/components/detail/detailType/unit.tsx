import { Unit } from "@/types/units";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface ICardProps {
  element: Unit;
}

function UnitEntityCard({ element }: ICardProps) {
  const {
    name,
    description,
    expansion,
    age,
    cost,
    build_time,
    reload_time,
    movement_rate,
    line_of_sight,
    hit_points,
    range,
    attack,
    armor,
    accuracy,
  } = element;

  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    const loadImage = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let src: any = "";
      try {
        const formattedName = name.toLowerCase().replace(/\s+/g, "-");
        src = await import(
          `../../../../images/units/icons/${formattedName}.png`
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
    <Card isHoverable={true} className="py-4 w-full max-w-[600px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <p className="text-tiny uppercase font-bold">{name}</p>
        <small className="text-default-500">Expansion: {expansion}</small>
        <h4 className="font-bold text-large">Age: {age}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex flex-col items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={imageSrc}
          width="180px"
          height="180px"
        />
        <div className="mt-4 flex flex-col text-center gap-1">
          <div>
            <h5 className="font-bold mt-2">Description:</h5>
            <p>{description}</p>
          </div>
          <div>
            <h5 className="font-bold mt-2">Cost:</h5>
            <ul>
              {Object.entries(cost).map(([resource, amount], index) => (
                <li key={index}>
                  {resource}: {amount}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-bold mt-2">Build Time:</h5>
            <p>{build_time}</p>
          </div>
          <div>
            <h5 className="font-bold mt-2">Reload Time:</h5>
            <p>{reload_time}</p>
          </div>
          <div>
            <h5 className="font-bold mt-2">Movement Rate:</h5>
            <p>{movement_rate}</p>
          </div>
          <div>
            <h5 className="font-bold mt-2">Line of Sight:</h5>
            <p>{line_of_sight}</p>
          </div>
          <div>
            <h5 className="font-bold mt-2">Hit Points:</h5>
            <p>{hit_points}</p>
          </div>
          <div>
            <h5 className="font-bold mt-2">Range:</h5>
            <p>{range}</p>
          </div>
          <div>
            <h5 className="font-bold mt-2">Attack:</h5>
            <p>{attack}</p>
          </div>
          <div>
            <h5 className="font-bold mt-2">Armor:</h5>
            <p>{armor}</p>
          </div>
          <div>
            <h5 className="font-bold mt-2">Accuracy:</h5>
            <p>{accuracy}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default UnitEntityCard;
