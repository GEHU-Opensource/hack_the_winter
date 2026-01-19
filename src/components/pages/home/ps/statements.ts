export interface Statement {
    title: string;
    link?: string;
    description?: string;
    isTheme?: boolean;
    openMode: "iframe" | "external";
}

export const currentStatements: Statement[] = [
    {
        title: "Business and Startups Themes",
        link: "https://www.overleaf.com/read/qyvwccbwtzsp#1c5d19",
        openMode: "external",
    },
    {
        title: "Core Themes",
        link: "https://www.overleaf.com/read/rvnbscbncqjs#28c5c0",
        openMode: "external",
    },
    {
        title: "Governance Themes",
        link: "https://www.overleaf.com/read/gghbzqrjrktd#a30709",
        openMode: "external",
    },
    {
        title: "Fintech Themes",
        link: "https://www.overleaf.com/read/wnpwtvthsrgg#50b660",
        openMode: "external",
    },
    {
        title: "Foundational Systems Themes (Only 1st year teams)",
        link: "https://www.overleaf.com/read/kngrqyzzmvtz#12f5e0",
        openMode: "external",
    },
    {
        title: "Let's do AI Themes",
        link: "https://www.overleaf.com/read/vmtfbmpgnmym#8ea592",
        openMode: "external",
    },
    {
        title: "IoT Themes",
        link: "https://www.overleaf.com/read/fgfmkhwqfmzx#351da3",
        openMode: "external",
    },
];

export const pastStatements: Statement[] = [
    {
        title: "AI CAPTCHA Solver",
        link: "https://docs.google.com/document/d/1WAGW9vfuDpJDFCwbo0tla_n1eNT21JCawRRw7OEapbo/preview",
        openMode: "iframe",
    },
    {
        title: "Flowchart Maker",
        link: "https://docs.google.com/document/d/1clXvAPFvjHbGQ9VllL7_TkIIOvqPFIxIIStKboi3BbY/preview",
        openMode: "iframe",
    },
    {
        title: "String Matching",
        link: "https://docs.google.com/document/d/1ocGHfb4R72NqaelWS9AAM-t3tTzuYUnAhSzcZDhrP5M/preview",
        openMode: "iframe",
    },
    {
        title: "Contact Sharing",
        link: "https://docs.google.com/document/d/1rcRB_D3H2O6oOaDeTmL0tBMxcgE8rzYmqzeogimlLcI/preview",
        openMode: "iframe",
    },
    {
        title: "Traffic Management",
        link: "https://docs.google.com/document/d/1bFQErWKMvuH0hOcysGD9PIeiPPULy90DVy8xYm5OV1Y/preview",
        openMode: "iframe",
    },
];