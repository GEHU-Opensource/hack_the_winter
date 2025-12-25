interface Statement {
    title: string;
    link?: string;
    description?: string;
    isTheme?: boolean;
}

const currentStatements: Statement[] = [
    {
        title: "Web / App",
        description: "Any idea with a Web / App interface",
        isTheme: true,
    },
    {
        title: "Fintech",
        description: "Financial technology solutions",
        isTheme: true,
    },
    {
        title: "AR / VR",
        description: "Augmented & Virtual Reality innovations",
        isTheme: true,
    },
    {
        title: "Governance",
        description: "Build anything for the Government",
        isTheme: true,
    },
    {
        title: "Web3 / Blockchain",
        description: "Decentralized & blockchain solutions",
        isTheme: true,
    },
    {
        title: "AI / ML",
        description: "Artificial Intelligence & Machine Learning",
        isTheme: true,
    },
    {
        title: "IoT & Automation",
        description: "Internet of Things & automation solutions",
        isTheme: true,
    },
    {
        title: "Open Innovation",
        description: "Any innovative idea outside the themes",
        isTheme: true,
    },
];

const pastStatements: Statement[] = [
    {
        title: "AI CAPTCHA Solver",
        link: "https://docs.google.com/document/d/1WAGW9vfuDpJDFCwbo0tla_n1eNT21JCawRRw7OEapbo/preview",
    },
    {
        title: "Flowchart Maker",
        link: "https://docs.google.com/document/d/1clXvAPFvjHbGQ9VllL7_TkIIOvqPFIxIIStKboi3BbY/preview",
    },
    {
        title: "String Matching",
        link: "https://docs.google.com/document/d/1ocGHfb4R72NqaelWS9AAM-t3tTzuYUnAhSzcZDhrP5M/preview",
    },
    {
        title: "Contact Sharing",
        link: "https://docs.google.com/document/d/1rcRB_D3H2O6oOaDeTmL0tBMxcgE8rzYmqzeogimlLcI/preview",
    },
    {
        title: "Traffic Management",
        link: "https://docs.google.com/document/d/1bFQErWKMvuH0hOcysGD9PIeiPPULy90DVy8xYm5OV1Y/preview",
    },
];

export { currentStatements, pastStatements, type Statement };