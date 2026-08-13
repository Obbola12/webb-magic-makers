import { defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import getContactInfoTool from "./tools/get-contact-info";
import getProcessTool from "./tools/get-process";

export default defineMcp({
  name: "my-awesome-website-25",
  title: "My Awesome Website (25)",
  version: "0.1.0",
  instructions:
    "Verktyg för UmeGolv — golvslipning, lackning och trägolvsättning i Umeå. Använd `list_services` för tjänster, `get_contact_info` för kontaktuppgifter och `get_process` för arbetsgången.",
  tools: [listServicesTool, getContactInfoTool, getProcessTool],
});
