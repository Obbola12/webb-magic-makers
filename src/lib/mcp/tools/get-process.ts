import { defineTool } from "@lovable.dev/mcp-js";
import { processSteps } from "../company";

export default defineTool({
  name: "get_process",
  title: "Hämta arbetsprocess",
  description:
    "Hämta UmeGolvs arbetsprocess steg för steg: kontakt, offert, utförande och färdigställande.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(processSteps, null, 2) }],
    structuredContent: { steps: processSteps },
  }),
});
