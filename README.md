# REL test

Installeer natuurlijk met `npm install`, en voer uit dmv `npm run test`. Zie test-cases voor de in- en output!

## "manual" versie:

Dit is, neem ik aan, wat jullie zoeken. Ik was ruim binnen de tijd hiermee klaar. Je ziet best wat uitzonderingen voor het Nederlands; dat is omdat iedere taal nou eenmaal nét anders in elkaar zit.

## De LLM-versie:

... Oftewel: deze opdracht is eigenlijk gewoon natural language processing :)  

Daar hebben we tegenwoordig natuurlijk nieuw speelgoed voor. Ik had nog nooit een LLM-API gebruikt, laat staan "prompt-engineering", dus ook gewoon grappig om eens te doen als gotcha. Door een environment-variable `MISTRAL_API_KEY` in te stellen kan je ook dit uitproberen. Een API-key voor gratis gebruik kan je hier aanmaken: https://console.mistral.ai/api-keys

## Kleine opmerking

Er zitten kleine afwijkingen in de input uit de PDF en mijn versie. Ikzelf heb gekozen om geen hoofdletters te gebruiken. Dat laat ik altijd liever aan de caller over. Verder heb ik de vrijheid genomen om een integer als input te nemen en kommagetallen even buiten beschouwing te laten. Ook de punt in de input heb ik even gelaten voor wat het is. 

## Wat zou ik normaal gesproken doen?

Taal is moeilijk, LLMs zijn energieslurpers en niet heel erg betrouwbaar. Dit is logica die ik eigenlijk niet zelf zou schrijven. Ik zou hier gewoon een tried-and-tested library voor gebruiken.

## Opdracht

Input: `143.235`
Output: `Honderddrieënveertigduizend tweehonderdvijfendertig`

* Er moet rekening gehouden worden met meerdere talen, minstens Nederlands en Engels.
* Honderdduizendtallen dienen minimaal ondersteund te zijn. Miljoen- en miljardtallen zijn mooi meegenomen.
* De functie is bij voorkeur goed testbaar in een unit test.
* Het is natuurlijk niet de bedoeling dat je een reeds bestaande oplossing van het internet plukt, maar voel je vrij om specifieke JavaScript features te Googlen. Niet iedereen kan alles onthouden!