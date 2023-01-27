import {ChatInterface} from "../interfaces/ChatInterface";

export type Owner = "me" | "not-me";

export interface MessageProps {
    owner : Owner,
    chat : ChatInterface
}