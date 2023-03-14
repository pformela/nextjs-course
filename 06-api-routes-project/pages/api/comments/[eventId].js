const handler = (req, res) => {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
  }

  if (req.method === "GET") {
  }

  res.status(200).json({ message: "This works!" });
};

export default handler;
