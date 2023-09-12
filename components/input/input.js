import classes from "./input.module.css";
import cardClasses from "../homepage/single-card.module.css";
import Image from "next/image";

function Input({
  label,
  name,
  value,
  onChange,
  type,
  accept,
  submit,
  image,
  requestedImage,
  editImage,
}) {
  return (
    <div className={classes.inputContainer}>
      <div className={classes.input}>
        <label htmlFor={name}>{label}</label>
        <input
          value={value}
          onChange={onChange}
          name={name}
          id={name}
          type={type}
          accept={accept}
        ></input>
      </div>
      {/* {requestedImage && !editImage && (
        <Image
          alt="ai generated image"
          width={475}
          height={475}
          src={requestedImage}
        ></Image>
      )}
      {image && (
        <div>
          <Image
            alt="user uploaded image for qulaity improvements"
            width={475}
            height={475}
            src={image}
          />
          {editImage && (
            <Image
              src={editImage}
              width={475}
              height={475}
              alt="ai generated image"
            />
          )}
        </div>
      )} */}

      {requestedImage && !editImage ? (
        <Image
          src={requestedImage}
          width={475}
          height={475}
          alt="ai generated photo"
        />
      ) : (
        image && (
          <div>
            <Image
              src={image}
              height={475}
              width={475}
              alt=" user uploaded image"
            />
            {editImage && (
              <Image
                height={475}
                width={475}
                alt="ai edited image"
                src={editImage}
              />
            )}
          </div>
        )
      )}

      <button className={`${cardClasses.cardBtn} btn`} onClick={submit}>
        {" "}
        submit
      </button>
    </div>
  );
}

export default Input;
