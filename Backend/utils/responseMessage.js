const responseData = [
  { code: "OK001", message: "Snappy User is Created" },
  {
    code: "OK002",
    message: "Logged in successfully",
  },
  {
    code: "OK003",
    message: "Loggout  successfully",
  },
  {
    code: "OK004",
    message: "Snappy Profile Completed",
  },
  {
    code: "OK005",
    message:
      "Verification Code is sent to your email address.Check your emaile Inbox or Spam",
  },
  {
    code: "OK006",
    message: "The OTP is Verified",
  },
  {
    code: "OK007",
    message: "Your Snapp has been Created",
  },
  {
    code: "OK008",
    message: "You have been Connected",
  },
  {
    code: "OK009",
    message: "Your Connection has been removed",
  },
  {
    code: "OK010",
    message: "Liked the snapp",
  },
  {
    code: "OK011",
    message: "your like has been removed",
  },
  {
    code: "OK012",
    message: "Comment is added to the snapp",
  },
  {
    code: "OK013",
    message: "Added to your Bookmarks",
  },
  {
    code: "OK014",
    message: "Removed from your Bookmarks",
  },
  {
    code: "OK015",
    message: "Your reply is added",
  },
  {
    code: "OK016",
    message: "Notification is created",
  },
  {
    code: "OK017",
    message: "Notification is readed",
  },
  {
    code: "OK018",
    message: "Notification is Cleared",
  },
  {
    code: "OK019",
    message: "Notification is fetched",
  },
  {
    code: "OK020",
    message: "Notification is removed",
  },
  {
    code: "OK021",
    message: "User Details Updated",
  },
  {
    code: "OK022",
    message:
      "User Password has been Changed. You have been redirected to login screen",
  },
  {
    code: "OK023",
    message: "Server Is Up and running you can procceed to app",
  },
  { code: "ER999", message: "Something went wrong" },
  { code: "ER001", message: "Requested Page not found" },
  { code: "ER002", message: "UserName already Exists" },
  { code: "ER003", message: "Email Does Not have any account" },
  { code: "ER004", message: "InCorrect Password" },
  {
    code: "ER005",
    message: "There is an issue while sending mail. Please try again.",
  },
  {
    code: "ER006",
    message: "The OTP you have got is Expired.Please, generate a new OTP",
  },
  {
    code: "ER007",
    message:
      "Oops! It looks like you entered the wrong OTP. Please verify your email or request a new",
  },
  {
    code: "ER008",
    message:
      "Oops! You have reached your snap limit.However, you can create a new Snapp by deleting the existing Snapp.",
  },
  {
    code: "ER009",
    message: "Your old Password is Wrong",
  },
  { code: "ER901", message: "Please Autheticate" },
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
