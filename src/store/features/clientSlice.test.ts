import {
  clientReducer,
  loginClientActionCreator,
  logoutClientActionCreator,
} from "./clientSlice";

describe("Given the clientReducer function", () => {
  describe("When it receives a client with a negative isLogged status and a loginClientAction", () => {
    test("Then it should return a client with email client@commerce.com, a token 'paintings123' and a positive isLogged status", () => {
      const currentClientState = {
        email: "",
        token: "",
        isLogged: false,
        shoppingCart: [],
        orders: [],
      };
      const client = {
        email: "client@commerce.com",
        token: "paintings123",
        isLogged: false,
        shoppingCart: [],
        orders: [],
      };
      const expectedClientState = {
        email: "client@commerce.com",
        token: "paintings123",
        isLogged: true,
        shoppingCart: [],
        orders: [],
      };

      const loginClientAction = loginClientActionCreator(client);
      const newClient = clientReducer(currentClientState, loginClientAction);

      expect(newClient).toStrictEqual(expectedClientState);
    });
  });

  describe("When it receives a client with a positive isLogged status and a logoutClientAction", () => {
    test("Then it should return a client with a negative isLogged status", () => {
      const currentClientState = {
        email: "client@commerce.com",
        token: "paintings123",
        isLogged: true,
        shoppingCart: [],
        orders: [],
      };
      const expectedClientState = {
        email: "",
        token: "",
        isLogged: false,
        shoppingCart: [],
        orders: [],
      };

      const logoutClientAction = logoutClientActionCreator();
      const newClient = clientReducer(currentClientState, logoutClientAction);

      expect(newClient).toStrictEqual(expectedClientState);
    });
  });
});
