import s from "./ImageCard.module.css";

interface Picture {
  urls: { small: string; regular: string };
  alt_description: string;
}

type Props = {
  picture: Picture;
  onPictureClick: (url: string) => void;
};

const ImageCard = ({ picture, onPictureClick }: Props) => {
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
