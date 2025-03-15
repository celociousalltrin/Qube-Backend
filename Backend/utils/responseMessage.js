const responseData = [
  { code: "OK001", message: "Album Created Successfully" },
  { code: "OK002", message: "Song Created Successfully" },
  { code: "OK003", message: "Song deleted Successfully" },
  { code: "ER999", message: "Something Went Wrong" },
  {
    code: "ER902",
    message:
      "The Server is not Started Please Refresh the page and click the button for finding thta the sever is running or not",
  },
];

exports.responseMessage = (code) => {
  const info = responseData.find((o) => o.code === code);
  return info;
};
