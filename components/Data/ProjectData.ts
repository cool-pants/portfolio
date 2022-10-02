

const git = (repo: string):string => {
    return "https://github.com/cool-pants/"+repo
}

const projects = [
    {
        id: 1,
        key: "Mello",
        desc: "A trello clone made using Supabase, NuxtJS and Typescript. Using SCSS as style scripting.",
        link: git("mello"),
        tags: ["Vue", "Typescript", "Supabase", "NuxtJS"]
    },
    {
        id: 2,
        key: "Stumble",
        desc: "A backend clone for Bumble. Made using Golang, PostgreSQL.",
        link: git("dating-API-golang"),
        tags: ["RestAPI", "PostgreSQL", "Go"]
    },
    {
        id: 3,
        key: "Bamboo",
        desc: "A notepad clone made using C# and WPF. Native text editing functionality using windows API and enhanced UI rendering using WPF.",
        link: git("Bamboo"),
        tags: ["C#", "WPF"]
    },
    {
        id: 4,
        key: "Synthwave",
        desc: "A programmable synth made using waveforms and python. The codebase contains various waveform generators, Envelopes, Oscillators, Composers and Modifiers. Everything can be combined to generate a .wav file programmatically.",
        link: git("synth"),
        tags: ["Python", "Music"]
    },
    {
        id: 5,
        key: "Sahaay [Deprecated]",
        desc: "A backend for a ticket based grievance system. Deprecated due to problems of scalability and over-engineering.",
        link: git("sahaay"),
        tags: ["Python", "Django ORM", "FastAPI", "NGINX", "Docker", "Prometheus", "PostgreSQL", "Cassandra"]
    },
    {
        id: 6,
        key: "Stockify",
        desc: "A stock predictor algorithm using Sentiment analysis and web scraping. Tells which sector to invest in given a desired profit margin. Also gets the probability of a sector to gain or lose based on live news data.",
        link: git("stockify"),
        tags: ["Python", "Sentiment Analysis", "AI/ML"]
    },
    {
        id: 7,
        key: "NewSearch",
        desc: "A news Search application made using Java Springboot and News API.",
        link: git("NewSearch"),
        tags: ["Java", "Springboot"]
    }
]

export default projects;