import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true, //xss
    secure: process.env.NODE_ENV === "production", // https only
    sameSite: "strict", //csrf
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 hari token maksimal
  });

  return token;
};
