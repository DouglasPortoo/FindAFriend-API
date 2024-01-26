import { app } from "../../../app";
import { authenticate } from "./authenticate";
import { register } from "./register";

export async function orgsRoutes(){
  app.post('/orgs',register)
  app.post('/session',authenticate)
}