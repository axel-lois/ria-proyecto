import { GeneralElementType } from "@/types/general";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface ICardProps {
  element: GeneralElementType;
  handleNavigateEntity: (entity: GeneralElementType) => void;
}

function EntityCard({ element, handleNavigateEntity }: ICardProps) {
  const { name, type, expansion } = element;
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    const loadImage = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let src: any = "";
      try {
        const formattedName = name.toLowerCase().replace(/\s+/g, "-");
        switch (type) {
          case "Civilization":
            src = await import(
              `../../../images/civilizations/icons/civ-icon-${formattedName}.png`
            );
            break;
          case "Structure":
            src = await import(
              `../../../images/structures/icons/struct-icon-${formattedName}.png`
            );
            break;
          case "Unit":
            src = await import(
              `../../../images/units/icons/${formattedName}.png`
            );
            break;
          default:
            src = "https://nextui.org/images/hero-card-complete.jpeg";
            break;
        }
        setImageSrc(src.default);
      } catch (error) {
        if (!src) {
          src = await import("../../assets/aoe2-icon.svg");
          setImageSrc(src.default);
        }
      }
    };

    loadImage();
  }, [name, type]);

  const navigateEntity = () => {
    handleNavigateEntity(element);
  };

  return (
    <Card
      onPress={navigateEntity}
      isPressable={true}
      isHoverable={true}
      className="py-4 w-[30%] max-w-[350px]"
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <p className="text-tiny uppercase font-bold">{name}</p>
        <small className="text-default-500">Type: {type || ""}</small>
        <h4 className="font-bold text-large">Expansion: {expansion}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={imageSrc}
          width="180px"
          height="180px"
        />
      </CardBody>
    </Card>
  );
}

export default EntityCard;
