# Ändra e-postadress tillbaka till info@umegolv.se

## Vad som ska göras
Byta ut `umegolv@outlook.com` mot `info@umegolv.se` på alla ställen där den visas.

## Tekniska detaljer
Följande filer uppdateras:
- `src/lib/mcp/company.ts` — e-postfältet i företagsdatan.
- `src/routes/__root.tsx` — e-postlänken (mailto) och adressen i sidfoten.
- `src/routes/kontakt.tsx` — e-postvärdet och mailto-länken på kontaktsidan.

Efter ändringarna görs en byggkontroll så inga fel uppstått.
