import { app } from "../../../app";
import { register } from "./register";

export async function orgsRoutes(){
  app.post('/orgs',register)
}