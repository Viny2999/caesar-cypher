# Caesar Cypher

Token Gerado em [CodeNation](https://www.codenation.dev/).

Faz Request na API da CodeNation e decifra a frase dentro do campo `"cifrado"` e insere no `"decifrado"` e depois criptografa com sha1 e insere no campo `"resumo_criptografico"`.

## Exemplo da Response

```javascript
    {
        numero_casas: 4,
        token: "1d5c9b1e31a18f6e49ca1cd6dd32d462b881b7bf",
        cifrado: "fijsvi csy qevvc e tivwsr csy wlsyph jmvwx qeoi xliq ywi e gsqtyxiv amxl wpsa mrxivrix xs wii als xlic vieppc evi. ampp jivvipp",
        decifrado: "before you marry a person you should first make them use a computer with slow internet to see who they really are. will ferrell",
        resumo_criptografico: "e16f58ac03e4421e734deed5390b58ec5c9ef6ea",
    }
```