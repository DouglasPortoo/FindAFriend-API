import { app } from "../../../app";
import { veryfyJwt } from "../../../middleware/verify-jtw";
import { registerAPet } from "./register";


export async function petsRoutes() {
  app.post('/org/pets', { onRequest: veryfyJwt }, registerAPet)
}