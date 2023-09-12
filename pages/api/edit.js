import Replicate from "replicate";



const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

async function handler(req, res) {
  if (req.method === "POST") {
    const { data, title } = req.body;

    if (title === "Generate your AI photos now for free") {
      try {
        const output = await replicate.run(
          "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
          {
            input: {
              prompt: data,
            },
          }
        );

        res.status(200).json({
          message: "Your requested image is generated successfully!",
          image: output,
        });
      } catch (error) {
        res.status(422).json({
          message: "Your requested image cannot be generated at the moment!",
          image: "",
        });
      }
    }
    if (title === "Restore your photos now for free") {
      try {
        const output = await replicate.run(
          "tencentarc/gfpgan:9283608cc6b7be6b65a8e44983db012355fde4132009bf99d976b2f0896856a3",
          {
            input: {
              img: data,
            },
          }
        );

        res.status(200).json({
          message: "Your image is sucessfully restored!",
          image: output,
        });
      } catch (error) {
        res.status(422).json({
          message: "Your image cannot be restored at the moment!",
          image: "",
        });
      }
    }
    if (title === "Remove backgrounds using AI now for free") {
      try {
        const output = await replicate.run(
          "cjwbw/rembg:fb8af171cfa1616ddcf1242c093f9c46bcada5ad4cf6f2fbe8b81b330ec5c003",
          {
            input: {
              image: data,
            },
          }
        );

        res.status(200).json({
          message: "Image background successfully removed!",
          image: output,
        });
      } catch (error) {
        res.status(422).json({
          message: "Image background cannot be removed at the moment!",
          image: "",
        });
      }
    }
  }
}

export default handler;
