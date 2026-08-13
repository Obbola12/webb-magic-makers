import { defineTool } from "@lovable.dev/mcp-js";
import { company } from "../company";

export default defineTool({
  name: "get_contact_info",
  title: "Hämta kontaktuppgifter",
  description:
    "Hämta UmeGolvs publika kontaktuppgifter: adress, telefonnummer, e-post och verksamhetsområde.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(company, null, 2) }],
    structuredContent: { company },
  }),
});
