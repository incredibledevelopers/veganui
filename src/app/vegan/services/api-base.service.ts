import { environment } from "../../../environments/environment.dev";

export abstract class ApiBaseService{
    protected api = environment.api;
    protected host = environment.host;
}