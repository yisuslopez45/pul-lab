interface Props {
  title: string;
  imageUrl: string;
}

const Card = ({ title, imageUrl }: Props) => {
  return (
    <div className="max-w-lg  rounded overflow-hidden  shadow transition-shadow duration-200 cursor-pointer">
      <div className="bg-lila-600 rounded-t-2xl" >
        {imageUrl && (
          <img
            className="w-full h-48 object-cover bg-transparent"
            src={imageUrl}
            alt={title}
          />
        )}
      </div>
      <div className="px-3 py-2">
        <h2 className="font-bold text-xl mb-2 text-gray-800 text-center">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Card;
