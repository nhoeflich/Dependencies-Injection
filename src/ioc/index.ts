import IoCContainer from "ioc-lite";
import { Logger } from "../services/logger";
import { HTTP } from "../services/http";
import { Users } from "../services/users";
import { ApiConfig } from "src/types";

type IoCResources = {
  logger: typeof Logger;
  http: typeof HTTP;
  users: typeof Users;
  apiConfig: ApiConfig;
};

export const createIoCContainer = () => {
  const ioc = new IoCContainer<IoCResources>();

  ioc.registerClass("logger", Logger);
  ioc.registerClass("http", HTTP);
  ioc.registerClass("users", Users);

  return ioc;
};
