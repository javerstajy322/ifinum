import Page1 from "../../Container/FirstPage/FirstPage";
import Page2 from "../../Container/SecondPage/SecondPage";

const indexRoutes = [
  { path: "/", name: "Page1", component: Page1 },
  { path: "/adddata", name: "Page2", component: Page2 }
];

export default indexRoutes;
