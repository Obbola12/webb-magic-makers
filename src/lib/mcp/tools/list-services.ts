import { defineTool } from "@lovable.dev/mcp-js";
import { services } from "../company";

export default defineTool({
  name: "list_services",
  title: "Lista tjänster",
  description:
    "Lista UmeGolvs tjänster (golvslipning, lackning & oljning, trägolvsättning) med beskrivning och vad som ingår.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});
