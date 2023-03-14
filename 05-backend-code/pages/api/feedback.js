import fs from "fs";
import path from "path";

export const buildFeedbackPath = () => {
  return path.join(process.cwd(), "data", "feedback.json");
};

export const extractFeedback = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);

  return data;
};

const handler = (req, res) => {
  if (req.method === "POST") {
    const { email, text } = req.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      text,
    };
    // Store that in a database or in a file
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));

    return res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else if (req.method === "GET") {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);

    return res.status(200).json({ feedback: data });
  }

  res.status(200).json({
    message: "This is a feedback API",
  });
};

export default handler;
