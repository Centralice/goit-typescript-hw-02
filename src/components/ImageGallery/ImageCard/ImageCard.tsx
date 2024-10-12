import s from "./ImageCard.module.css";
import { Picture } from "../../App/App.types";

interface ImageCardProps {
  picture: Picture;
  onPictureClick: (link: string) => void;
};

const ImageCard = ({ picture, onPictureClick }: ImageCardProps) => {
  return (
    <div>
      <img
        className={s.img}
        src={picture.urls.small}
        alt={picture.alt_description}
        onClick={() => onPictureClick(picture.urls.regular)}
      />
    </div>
  );
};

export default ImageCard;
