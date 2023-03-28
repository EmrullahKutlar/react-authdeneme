import About from "./pages/About/About.page";
import Auth from "./pages/Auth/Auth.page";
import Contact from "./pages/Contact/Contact.page";
import Home from "./pages/Home/Home.page";
import Navigation from "./pages/Navigation/Navigation.page";
import AuthProvider from "./components/authProvider/authProvider.component";

const routes = [
  {
    path: "/",
    element: <Navigation />,
    auth: true,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Auth />,
  },
];

const authMap = (routes) =>
  routes.map((route) => {
    // eğer route içinde auth varsa onu kontrol et ve provider komponentini ekle
    if (route?.auth) {
      route.element = <AuthProvider>{route.element}</AuthProvider>;
      // provider komponent gelcek useri kontrol etcek yoksa başka bir sayfaya yönlendirecek
    }
    // eğer route içinde children varsa onları da kontrol et
    if (route?.children) {
      route.children = authMap(route.children);
    }

    return route;

    // kullanıcı giriş yapmışsa login sayfasına giremesin
    // if (route.userNotAccess) {
    //   const user = useSelector(stateUser);
    //   if (user.user) {
    //     route.element = <Navigate to="/"></Navigate>;
    //   }
    //   return route;
    // }
  });

export default authMap(routes);
