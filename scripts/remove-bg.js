import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Get command line arguments for input and output
const args = process.argv.slice(2);
const inputPath = args[0] || "public/why_choose_solar.png";
const outputPath = args[1] || "public/why_choose_solar_nobg.png";

const apiKey = "WQwx1WVsCo52vnn96YjVjNaG"; // Provided API key

async function removeBg(blob) {
  const formData = new FormData();
  formData.append("size", "auto");
  formData.append("image_file", blob);

  console.log(`Sending request to remove.bg for ${inputPath}...`);
  const response = await fetch("https://api.remove.bg/v1.0/removebg", {
    method: "POST",
    headers: { "X-Api-Key": apiKey },
    body: formData,
  });

  if (response.ok) {
    return await response.arrayBuffer();
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
}

async function main() {
  try {
    if (!fs.existsSync(inputPath)) {
      console.error(`Error: Input file not found at ${inputPath}`);
      process.exit(1);
    }

    const fileBlob = await fs.openAsBlob(inputPath);
    const rbgResultData = await removeBg(fileBlob);
    
    fs.writeFileSync(outputPath, Buffer.from(rbgResultData));
    console.log(`Success! Background removed and saved to ${outputPath}`);
  } catch (error) {
    console.error("Failed to remove background:", error);
  }
}

main();
