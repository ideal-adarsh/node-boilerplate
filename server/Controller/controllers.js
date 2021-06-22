export const getRoute = async (req, res) => {
  try {
    res.redirect("/about");
  } catch (error) {}
};
export const getAboutRoute = async (req, res) => {
  try {
    res.sendFile("C:/Users/hp/Desktop/node-imp/Client/views/about.html");
  } catch (error) {}
};
export const getHomeRoute = async (req, res) => {
  try {
    res.sendFile("C:/Users/hp/Desktop/node-imp/Client/views/index.html");
  } catch (error) {}
};
