# Uppdatera e-postadress till umegolv@outlook.com

## Vad som ska göras
Byta ut den nuvarande e-postadressen `info@umegolv.se` mot `umegolv@outlook.com` på alla ställen där den visas.

## Tekniska detaljer
Följande filer innehåller den gamla adressen och ska uppdateras:
- `src/lib/mcp/company.ts` — företagsdata som används av MCP-verktyg och kan visas på sidan.
- `src/routes/__root.tsx` — sidfotens kontaktuppgifter.
- `src/routes/kontakt.tsx` — kontaktsidans e-postlänk och ev. mailto-länk.

Efter ändringarna görs en snabb byggkontroll för att säkerställa att inga syntaxfel uppstått.
