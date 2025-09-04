type Lang = "nl" | "en";

const ns1Through19s: Record<Lang, string[]> = {
    nl: [
        "één",
        "twee",
        "drie",
        "vier",
        "vijf",
        "zes",
        "zeven",
        "acht",
        "negen",
        "tien",
        "elf",
        "twaalf",
        "dertien",
        "veertien",
        "vijftien",
        "zestien",
        "zeventien",
        "tachtien",
        "negentien",
    ],
    en: [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ],
};

const ns20Through90s: Record<Lang, string[]> = {
    nl: [
        "twintig",
        "dertig",
        "veertig",
        "vijftig",
        "zestig",
        "zeventig",
        "tachtig",
        "negentig",
    ],
    en: [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ],
};

// Note the spaces!
const hundred = {
    nl: "honderd",
    en: " hundred ",
};

// Note the spaces!
const thousand = {
    nl: "duizend",
    en: " thousand",
};

function convertUnder20(input: number, lang: Lang): string {
    const converted = ns1Through19s[lang][input - 1];

    if (!converted) {
        throw new Error("Input must be between 0 and 20");
    }

    return converted;
}

function convertUnder100(input: number, lang: Lang): string {
    if (input <= 20) {
        return convertUnder20(input, lang);
    }

    const nth = Math.floor(input / 10);
    const remainder = convertUnder20(Math.floor(input % 10), lang);

    if (lang === "nl") {
        return (remainder + "en" + ns20Through90s[lang][nth - 2]).replace(
            "drieen",
            "drieën",
        );
    } else {
        return `${ns20Through90s[lang][nth - 2]}-${remainder}`;
    }
}

function convertUnder1000(input: number, lang: Lang): string {
    if (input <= 99) {
        return convertUnder100(input, lang);
    }

    const remainder = Math.floor(input % 100);
    const hundreds = Math.floor(input / 100);
    // Edge case: in Dutch we don't say "one hundred" but just "hundred"
    const hundredsString =
        lang === "nl" && hundreds === 1 ? "" : convertUnder1000(hundreds, lang);

    if (remainder) {
        const remainderString = convertUnder1000(remainder, lang);

        return hundredsString + hundred[lang] + remainderString;
    } else {
        return hundredsString + hundred[lang];
    }
}

function convertUnder1000000(input: number, lang: Lang): string {
    if (input <= 999) {
        return convertUnder1000(input, lang);
    }

    const remainder = Math.floor(input % 1_000);
    const thousands = Math.floor(input / 1_000);
    // Edge case: in Dutch we don't say "one thousand" but just "thousand"
    const thousandsString =
        lang === "nl" && thousands === 1 ? "" : convertUnder1000(thousands, lang);

    if (remainder) {
        const remainderString = convertUnder1000(remainder, lang);

        return thousandsString + thousand[lang] + " " + remainderString;
    } else {
        return thousandsString + thousand[lang];
    }
}

export default function (
    input: number,
    lang: Lang = "nl",
): string {
    const negativePrefix =
        input < 0 ? (lang === "nl" ? "min " : "negative ") : "";

    // Special case 0:
    if (input === 0) {
        return negativePrefix + (lang === "nl" ? "nul" : "zero");
    }

    const absoluteValue = Math.abs(input);

    const converted = convertUnder1000000(absoluteValue, lang);

    return negativePrefix + converted;
}
