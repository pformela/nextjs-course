const handler = (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    console.log(email);

    res.status(201).json({ message: "Signed up!", email });
  }

  res.status(200).json({ message: "This works!" });
};

export default handler;
