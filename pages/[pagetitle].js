import { useRouter } from "next/router";
import Input from "../components/input/input";
import { useState } from "react";
import axios from "axios";
function SinglePage() {
  const [prompt, setPrompt] = useState("");
  const [generateImage, setGenerateImage] = useState();
  const [restoreImage, setRestorImage] = useState();
  const [uploadImage, setUploadImage] = useState();

  function uploadImageHandler(e) {
    console.log(e.target.files);
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onload = () => {
      setUploadImage(reader.result);
    };
    reader.onerror = () => {
      console.log(reader.error);
    };
  }

  console.log(uploadImage);

  const router = useRouter();
  const { pagetitle } = router.query;

  async function getRes() {
    if (prompt) {
      try {
        const response = await axios.post("/api/edit", {
          data: prompt,
          title: pagetitle,
        });
        console.log(response);
        setGenerateImage(response.data.image[0]);
      } catch (error) {
        console.log(error);
      }
    }
    if (uploadImage && pagetitle === "Restore your photos now for free") {
      console.log("restore");
      try {
        const response = await axios.post("/api/edit", {
          data: uploadImage,
          title: pagetitle,
        });
        console.log(response);
        setRestorImage(response.data.image);
      } catch (error) {
        console.log(error);
      }
    }
    if (
      uploadImage &&
      pagetitle === "Remove backgrounds using AI now for free"
    ) {
      console.log("remove");
      try {
        const response = await axios.post("/api/edit", {
          data: uploadImage,
          title: pagetitle,
        });
        console.log(response);
        setRestorImage(response.data.image)
      } catch (error) {
        console.log(error);
      }
    }
  }
  async function sendRequest() {
    try {
      const response = await axios.post("/api/edit", {
        data: prompt,
        title: pagetitle,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  function checkInput() {
    if (pagetitle === "Generate your AI photos now for free") {
      return (
        <Input
          label="Enter Your Prompt to Generate an Image"
          type="text"
          name="generate image"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          submit={getRes}
          requestedImage={generateImage}
        />
      );
    }
    if (pagetitle === "Restore your photos now for free") {
      return (
        <Input
          label="Restore Your old photos now"
          type="file"
          accept="images*"
          name="restore image"
          onChange={uploadImageHandler}
          image={uploadImage}
          submit={getRes}
          editImage={restoreImage}
        />
      );
    }
    if (pagetitle === "Remove backgrounds using AI now for free") {
      return (
        <Input
          label="Remove backgrounds using AI now for free"
          type="file"
          name="remove background"
          accept="images*"
          onChange={uploadImageHandler}
          image={uploadImage}
          submit={getRes}
          requestedImage={restoreImage}
        />
      );
    }
  }

  console.log(pagetitle, "pagetitle");
  console.log("type", typeof pagetitle);

  return (
    <section className="section-center">
      <h1 className="title"> {pagetitle}</h1>
      {checkInput()}
    </section>
  );
}

export default SinglePage;
