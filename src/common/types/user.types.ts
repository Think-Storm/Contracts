export enum UserRole {
    Developer = "Developer",
    SeniorDeveloper = "Senior Developer",
    LeadDeveloper = "Lead Developer",
    FullStackDeveloper = "Full Stack Developer",
    FrontendDeveloper = "Frontend Developer",
    BackendDeveloper = "Backend Developer",
    MobileDeveloper = "Mobile Developer",
    Designer = "Designer",
    UIDesigner = "UI Designer",
    UXDesigner = "UX Designer",
    GraphicDesigner = "Graphic Designer",
    Manager = "Manager",
    ProjectManager = "Project Manager",
    TechnicalManager = "Technical Manager",
    ProductOwner = "Product Owner",
    ScrumMaster = "Scrum Master",
    AgileCoach = "Agile Coach",
    Tester = "Tester",
    QAEngineer = "QA Engineer",
    AutomationTester = "Automation Tester",
    SecurityTester = "Security Tester",
    DevOps = "DevOps",
    SRE = "SRE",
    CloudEngineer = "Cloud Engineer",
    DataScientist = "Data Scientist",
    DataEngineer = "Data Engineer",
    DataAnalyst = "Data Analyst",
    MLEngineer = "ML Engineer",
    BusinessAnalyst = "Business Analyst",
    SystemAnalyst = "System Analyst",
    SolutionArchitect = "Solution Architect",
    TechnicalArchitect = "Technical Architect",
    SecurityEngineer = "Security Engineer",
    DatabaseAdministrator = "Database Administrator",
    NetworkEngineer = "Network Engineer",
    TechnicalWriter = "Technical Writer",
    ProductManager = "Product Manager",
    Marketing = "Marketing",
    Sales = "Sales",
    CustomerSupport = "Customer Support",
    Other = "Other",
}

export type User = {
    id: number;
    email: string;
    username: string;
    password: string;
    passwordSalt: string;
    passwordChangedAt?: Date;
    createdAt: Date;
    lastUpdatedAt: Date;
};
