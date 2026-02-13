import { type Employee } from '../types/data.types';

export const MOCK_EMPLOYEES: Employee[] = [
    {
        "id": 1,
        "name": "John Smith",
        "email": "john.smith@company.com",
        "department": "Engineering",
        "role": "Senior Developer",
        "salary": 95000,
        "joinDate": "2021-03-15",
        "isActive": true,
        "skills": [
            "React",
            "TypeScript",
            "Node.js",
            "GraphQL"
        ],
        "address": {
            "city": "San Francisco",
            "state": "CA",
            "country": "USA"
        },
        "projects": 3,
        "lastReview": "2024-01-15",
        "performanceRating": 4.5
    },
    {
        "id": 2,
        "name": "Emily Johnson",
        "email": "emily.johnson@company.com",
        "department": "Marketing",
        "role": "Marketing Manager",
        "salary": 88000,
        "joinDate": "2020-07-22",
        "isActive": true,
        "skills": [
            "SEO",
            "Content Marketing",
            "Analytics",
            "Social Media"
        ],
        "address": {
            "city": "New York",
            "state": "NY",
            "country": "USA"
        },
        "projects": 5,
        "lastReview": "2024-02-10",
        "performanceRating": 4.8
    },
    {
        "id": 3,
        "name": "Michael Chen",
        "email": "michael.chen@company.com",
        "department": "Engineering",
        "role": "Lead Architect",
        "salary": 125000,
        "joinDate": "2019-01-10",
        "isActive": true,
        "skills": [
            "System Design",
            "AWS",
            "Kubernetes",
            "Python",
            "Java"
        ],
        "address": {
            "city": "Seattle",
            "state": "WA",
            "country": "USA"
        },
        "projects": 8,
        "lastReview": "2024-01-05",
        "performanceRating": 5.0
    },
    {
        "id": 4,
        "name": "Sarah Williams",
        "email": "sarah.williams@company.com",
        "department": "Sales",
        "role": "Sales Representative",
        "salary": 65000,
        "joinDate": "2022-05-18",
        "isActive": true,
        "skills": [
            "Customer Relations",
            "Negotiation",
            "CRM",
            "Cold Calling"
        ],
        "address": {
            "city": "Chicago",
            "state": "IL",
            "country": "USA"
        },
        "projects": 2,
        "lastReview": "2024-03-01",
        "performanceRating": 3.8
    },
    {
        "id": 5,
        "name": "David Martinez",
        "email": "david.martinez@company.com",
        "department": "HR",
        "role": "HR Specialist",
        "salary": 72000,
        "joinDate": "2021-11-03",
        "isActive": true,
        "skills": [
            "Recruitment",
            "Employee Relations",
            "Benefits Administration"
        ],
        "address": {
            "city": "Austin",
            "state": "TX",
            "country": "USA"
        },
        "projects": 1,
        "lastReview": "2024-02-20",
        "performanceRating": 4.2
    },
    {
        "id": 6,
        "name": "Jessica Brown",
        "email": "jessica.brown@company.com",
        "department": "Finance",
        "role": "Financial Analyst",
        "salary": 78000,
        "joinDate": "2020-09-14",
        "isActive": true,
        "skills": [
            "Excel",
            "Financial Modeling",
            "SQL",
            "Tableau"
        ],
        "address": {
            "city": "Boston",
            "state": "MA",
            "country": "USA"
        },
        "projects": 4,
        "lastReview": "2024-01-25",
        "performanceRating": 4.3
    },
    {
        "id": 7,
        "name": "James Wilson",
        "email": "james.wilson@company.com",
        "department": "Engineering",
        "role": "Junior Developer",
        "salary": 68000,
        "joinDate": "2023-02-01",
        "isActive": true,
        "skills": [
            "JavaScript",
            "React",
            "HTML",
            "CSS"
        ],
        "address": {
            "city": "Denver",
            "state": "CO",
            "country": "USA"
        },
        "projects": 1,
        "lastReview": "2024-02-15",
        "performanceRating": 3.5
    },
    {
        "id": 8,
        "name": "Linda Garcia",
        "email": "linda.garcia@company.com",
        "department": "Operations",
        "role": "Operations Manager",
        "salary": 92000,
        "joinDate": "2019-06-20",
        "isActive": true,
        "skills": [
            "Project Management",
            "Process Optimization",
            "Logistics"
        ],
        "address": {
            "city": "Miami",
            "state": "FL",
            "country": "USA"
        },
        "projects": 6,
        "lastReview": "2024-01-30",
        "performanceRating": 4.6
    },
    {
        "id": 9,
        "name": "Robert Lee",
        "email": "robert.lee@company.com",
        "department": "Engineering",
        "role": "DevOps Engineer",
        "salary": 105000,
        "joinDate": "2020-03-12",
        "isActive": true,
        "skills": [
            "Docker",
            "Jenkins",
            "AWS",
            "Terraform",
            "Monitoring"
        ],
        "address": {
            "city": "Portland",
            "state": "OR",
            "country": "USA"
        },
        "projects": 5,
        "lastReview": "2024-02-05",
        "performanceRating": 4.7
    },
    {
        "id": 10,
        "name": "Maria Rodriguez",
        "email": "maria.rodriguez@company.com",
        "department": "Marketing",
        "role": "Content Strategist",
        "salary": 75000,
        "joinDate": "2021-08-09",
        "isActive": false,
        "skills": [
            "Content Writing",
            "Strategy",
            "Copywriting",
            "Brand Management"
        ],
        "address": {
            "city": "Los Angeles",
            "state": "CA",
            "country": "USA"
        },
        "projects": 3,
        "lastReview": "2023-12-10",
        "performanceRating": 4.0
    },
    {
        "id": 11,
        "name": "Christopher Taylor",
        "email": "christopher.taylor@company.com",
        "department": "Sales",
        "role": "Sales Director",
        "salary": 135000,
        "joinDate": "2018-04-15",
        "isActive": true,
        "skills": [
            "Team Leadership",
            "Sales Strategy",
            "Client Management",
            "Forecasting"
        ],
        "address": {
            "city": "Dallas",
            "state": "TX",
            "country": "USA"
        },
        "projects": 7,
        "lastReview": "2024-01-12",
        "performanceRating": 4.9
    },
    {
        "id": 12,
        "name": "Patricia Anderson",
        "email": "patricia.anderson@company.com",
        "department": "HR",
        "role": "HR Manager",
        "salary": 98000,
        "joinDate": "2019-10-22",
        "isActive": true,
        "skills": [
            "Leadership",
            "Policy Development",
            "Training",
            "Compliance"
        ],
        "address": {
            "city": "Phoenix",
            "state": "AZ",
            "country": "USA"
        },
        "projects": 4,
        "lastReview": "2024-02-28",
        "performanceRating": 4.5
    },
    {
        "id": 13,
        "name": "Daniel Thomas",
        "email": "daniel.thomas@company.com",
        "department": "Finance",
        "role": "Senior Accountant",
        "salary": 82000,
        "joinDate": "2020-12-01",
        "isActive": true,
        "skills": [
            "Accounting",
            "Tax",
            "Audit",
            "QuickBooks"
        ],
        "address": {
            "city": "Philadelphia",
            "state": "PA",
            "country": "USA"
        },
        "projects": 2,
        "lastReview": "2024-01-18",
        "performanceRating": 4.1
    },
    {
        "id": 14,
        "name": "Nancy Jackson",
        "email": "nancy.jackson@company.com",
        "department": "Engineering",
        "role": "QA Engineer",
        "salary": 72000,
        "joinDate": "2022-01-20",
        "isActive": true,
        "skills": [
            "Testing",
            "Selenium",
            "Automation",
            "Bug Tracking"
        ],
        "address": {
            "city": "San Diego",
            "state": "CA",
            "country": "USA"
        },
        "projects": 3,
        "lastReview": "2024-02-22",
        "performanceRating": 3.9
    },
    {
        "id": 15,
        "name": "Matthew White",
        "email": "matthew.white@company.com",
        "department": "Operations",
        "role": "Supply Chain Analyst",
        "salary": 70000,
        "joinDate": "2021-05-30",
        "isActive": true,
        "skills": [
            "Supply Chain",
            "Data Analysis",
            "Vendor Management"
        ],
        "address": {
            "city": "Houston",
            "state": "TX",
            "country": "USA"
        },
        "projects": 2,
        "lastReview": "2024-03-05",
        "performanceRating": 3.7
    },
    {
        "id": 16,
        "name": "Jennifer Harris",
        "email": "jennifer.harris@company.com",
        "department": "Marketing",
        "role": "Digital Marketing Specialist",
        "salary": 71000,
        "joinDate": "2022-07-11",
        "isActive": true,
        "skills": [
            "Google Ads",
            "Facebook Ads",
            "Email Marketing",
            "Analytics"
        ],
        "address": {
            "city": "Atlanta",
            "state": "GA",
            "country": "USA"
        },
        "projects": 4,
        "lastReview": "2024-02-14",
        "performanceRating": 4.0
    },
    {
        "id": 17,
        "name": "Kevin Martin",
        "email": "kevin.martin@company.com",
        "department": "Engineering",
        "role": "Full Stack Developer",
        "salary": 90000,
        "joinDate": "2020-11-05",
        "isActive": true,
        "skills": [
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "TypeScript"
        ],
        "address": {
            "city": "Minneapolis",
            "state": "MN",
            "country": "USA"
        },
        "projects": 5,
        "lastReview": "2024-01-20",
        "performanceRating": 4.4
    },
    {
        "id": 18,
        "name": "Lisa Thompson",
        "email": "lisa.thompson@company.com",
        "department": "Sales",
        "role": "Account Executive",
        "salary": 73000,
        "joinDate": "2021-09-17",
        "isActive": false,
        "skills": [
            "Account Management",
            "Sales",
            "Presentations",
            "Client Relations"
        ],
        "address": {
            "city": "Nashville",
            "state": "TN",
            "country": "USA"
        },
        "projects": 2,
        "lastReview": "2023-11-20",
        "performanceRating": 3.6
    },
    {
        "id": 19,
        "name": "Steven Moore",
        "email": "steven.moore@company.com",
        "department": "Finance",
        "role": "Finance Director",
        "salary": 145000,
        "joinDate": "2018-02-28",
        "isActive": true,
        "skills": [
            "Financial Planning",
            "Budgeting",
            "Strategy",
            "Leadership"
        ],
        "address": {
            "city": "San Francisco",
            "state": "CA",
            "country": "USA"
        },
        "projects": 9,
        "lastReview": "2024-01-08",
        "performanceRating": 4.9
    },
    {
        "id": 20,
        "name": "Karen Clark",
        "email": "karen.clark@company.com",
        "department": "HR",
        "role": "Recruiter",
        "salary": 65000,
        "joinDate": "2022-10-12",
        "isActive": true,
        "skills": [
            "Sourcing",
            "Interviewing",
            "LinkedIn",
            "ATS"
        ],
        "address": {
            "city": "Raleigh",
            "state": "NC",
            "country": "USA"
        },
        "projects": 1,
        "lastReview": "2024-02-25",
        "performanceRating": 3.8
    },
    {
        "id": 21,
        "name": "Paul Lewis",
        "email": "paul.lewis@company.com",
        "department": "Engineering",
        "role": "Backend Developer",
        "salary": 87000,
        "joinDate": "2021-04-07",
        "isActive": true,
        "skills": [
            "Python",
            "Django",
            "PostgreSQL",
            "Redis"
        ],
        "address": {
            "city": "Columbus",
            "state": "OH",
            "country": "USA"
        },
        "projects": 4,
        "lastReview": "2024-02-12",
        "performanceRating": 4.2
    },
    {
        "id": 22,
        "name": "Barbara Walker",
        "email": "barbara.walker@company.com",
        "department": "Operations",
        "role": "Operations Coordinator",
        "salary": 68000,
        "joinDate": "2022-03-25",
        "isActive": true,
        "skills": [
            "Coordination",
            "Scheduling",
            "Communication",
            "MS Office"
        ],
        "address": {
            "city": "Indianapolis",
            "state": "IN",
            "country": "USA"
        },
        "projects": 2,
        "lastReview": "2024-03-02",
        "performanceRating": 3.9
    },
    {
        "id": 23,
        "name": "Mark Hall",
        "email": "mark.hall@company.com",
        "department": "Marketing",
        "role": "Brand Manager",
        "salary": 95000,
        "joinDate": "2019-12-16",
        "isActive": true,
        "skills": [
            "Brand Strategy",
            "Marketing",
            "Design",
            "Campaign Management"
        ],
        "address": {
            "city": "Charlotte",
            "state": "NC",
            "country": "USA"
        },
        "projects": 6,
        "lastReview": "2024-01-22",
        "performanceRating": 4.5
    },
    {
        "id": 24,
        "name": "Susan Allen",
        "email": "susan.allen@company.com",
        "department": "Engineering",
        "role": "Mobile Developer",
        "salary": 92000,
        "joinDate": "2020-08-19",
        "isActive": true,
        "skills": [
            "React Native",
            "iOS",
            "Android",
            "Mobile UI"
        ],
        "address": {
            "city": "San Jose",
            "state": "CA",
            "country": "USA"
        },
        "projects": 3,
        "lastReview": "2024-02-08",
        "performanceRating": 4.3
    },
    {
        "id": 25,
        "name": "George Young",
        "email": "george.young@company.com",
        "department": "Sales",
        "role": "Business Development Manager",
        "salary": 98000,
        "joinDate": "2019-07-30",
        "isActive": true,
        "skills": [
            "Partnership",
            "Strategy",
            "Networking",
            "Negotiation"
        ],
        "address": {
            "city": "Detroit",
            "state": "MI",
            "country": "USA"
        },
        "projects": 5,
        "lastReview": "2024-01-28",
        "performanceRating": 4.6
    },
    {
        "id": 26,
        "name": "Betty Hernandez",
        "email": "betty.hernandez@company.com",
        "department": "Finance",
        "role": "Payroll Specialist",
        "salary": 62000,
        "joinDate": "2021-12-14",
        "isActive": true,
        "skills": [
            "Payroll",
            "ADP",
            "Tax Compliance",
            "Excel"
        ],
        "address": {
            "city": "El Paso",
            "state": "TX",
            "country": "USA"
        },
        "projects": 1,
        "lastReview": "2024-02-18",
        "performanceRating": 4.0
    },
    {
        "id": 27,
        "name": "Donald King",
        "email": "donald.king@company.com",
        "department": "Engineering",
        "role": "Data Engineer",
        "salary": 102000,
        "joinDate": "2020-02-11",
        "isActive": true,
        "skills": [
            "Spark",
            "Hadoop",
            "Python",
            "SQL",
            "Data Pipelines"
        ],
        "address": {
            "city": "Seattle",
            "state": "WA",
            "country": "USA"
        },
        "projects": 6,
        "lastReview": "2024-01-16",
        "performanceRating": 4.7
    },
    {
        "id": 28,
        "name": "Dorothy Wright",
        "email": "dorothy.wright@company.com",
        "department": "HR",
        "role": "Training Coordinator",
        "salary": 67000,
        "joinDate": "2022-06-08",
        "isActive": false,
        "skills": [
            "Training",
            "Facilitation",
            "E-Learning",
            "Development"
        ],
        "address": {
            "city": "Memphis",
            "state": "TN",
            "country": "USA"
        },
        "projects": 2,
        "lastReview": "2023-10-15",
        "performanceRating": 3.5
    },
    {
        "id": 29,
        "name": "Jason Lopez",
        "email": "jason.lopez@company.com",
        "department": "Operations",
        "role": "Facilities Manager",
        "salary": 75000,
        "joinDate": "2020-05-23",
        "isActive": true,
        "skills": [
            "Facilities Management",
            "Vendor Relations",
            "Safety",
            "Budgeting"
        ],
        "address": {
            "city": "Baltimore",
            "state": "MD",
            "country": "USA"
        },
        "projects": 3,
        "lastReview": "2024-02-01",
        "performanceRating": 4.1
    },
    {
        "id": 30,
        "name": "Sandra Hill",
        "email": "sandra.hill@company.com",
        "department": "Marketing",
        "role": "Social Media Manager",
        "salary": 72000,
        "joinDate": "2021-10-19",
        "isActive": true,
        "skills": [
            "Social Media",
            "Community Management",
            "Content Creation",
            "Analytics"
        ],
        "address": {
            "city": "Las Vegas",
            "state": "NV",
            "country": "USA"
        },
        "projects": 4,
        "lastReview": "2024-02-16",
        "performanceRating": 4.2
    },
    {
        "id": 31,
        "name": "Kenneth Scott",
        "email": "kenneth.scott@company.com",
        "department": "Engineering",
        "role": "Security Engineer",
        "salary": 110000,
        "joinDate": "2019-11-27",
        "isActive": true,
        "skills": [
            "Security",
            "Penetration Testing",
            "Compliance",
            "Infrastructure"
        ],
        "address": {
            "city": "New York",
            "state": "NY",
            "country": "USA"
        },
        "projects": 5,
        "lastReview": "2024-01-10",
        "performanceRating": 4.8
    },
    {
        "id": 32,
        "name": "Ashley Green",
        "email": "ashley.green@company.com",
        "department": "Sales",
        "role": "Inside Sales Rep",
        "salary": 61000,
        "joinDate": "2023-01-16",
        "isActive": true,
        "skills": [
            "Sales",
            "Outbound Calling",
            "CRM",
            "Lead Generation"
        ],
        "address": {
            "city": "Milwaukee",
            "state": "WI",
            "country": "USA"
        },
        "projects": 1,
        "lastReview": "2024-02-27",
        "performanceRating": 3.6
    },
    {
        "id": 33,
        "name": "Andrew Adams",
        "email": "andrew.adams@company.com",
        "department": "Finance",
        "role": "Budget Analyst",
        "salary": 76000,
        "joinDate": "2021-03-09",
        "isActive": true,
        "skills": [
            "Budgeting",
            "Forecasting",
            "Excel",
            "Analysis"
        ],
        "address": {
            "city": "Albuquerque",
            "state": "NM",
            "country": "USA"
        },
        "projects": 3,
        "lastReview": "2024-02-11",
        "performanceRating": 4.0
    },
    {
        "id": 34,
        "name": "Donna Baker",
        "email": "donna.baker@company.com",
        "department": "Engineering",
        "role": "UI/UX Designer",
        "salary": 85000,
        "joinDate": "2020-10-06",
        "isActive": true,
        "skills": [
            "Figma",
            "User Research",
            "Prototyping",
            "Design Systems"
        ],
        "address": {
            "city": "San Francisco",
            "state": "CA",
            "country": "USA"
        },
        "projects": 7,
        "lastReview": "2024-01-26",
        "performanceRating": 4.6
    },
    {
        "id": 35,
        "name": "Joshua Nelson",
        "email": "joshua.nelson@company.com",
        "department": "Operations",
        "role": "Logistics Coordinator",
        "salary": 66000,
        "joinDate": "2022-04-21",
        "isActive": true,
        "skills": [
            "Logistics",
            "Shipping",
            "Inventory",
            "Tracking"
        ],
        "address": {
            "city": "Tucson",
            "state": "AZ",
            "country": "USA"
        },
        "projects": 2,
        "lastReview": "2024-03-03",
        "performanceRating": 3.8
    },
    {
        "id": 36,
        "name": "Carol Carter",
        "email": "carol.carter@company.com",
        "department": "Marketing",
        "role": "Marketing Coordinator",
        "salary": 64000,
        "joinDate": "2022-11-29",
        "isActive": true,
        "skills": [
            "Campaign Support",
            "Event Planning",
            "Marketing Tools"
        ],
        "address": {
            "city": "Fresno",
            "state": "CA",
            "country": "USA"
        },
        "projects": 2,
        "lastReview": "2024-02-24",
        "performanceRating": 3.7
    },
    {
        "id": 37,
        "name": "Ryan Mitchell",
        "email": "ryan.mitchell@company.com",
        "department": "Engineering",
        "role": "Machine Learning Engineer",
        "salary": 118000,
        "joinDate": "2019-08-13",
        "isActive": true,
        "skills": [
            "Python",
            "TensorFlow",
            "ML",
            "AI",
            "Data Science"
        ],
        "address": {
            "city": "Boston",
            "state": "MA",
            "country": "USA"
        },
        "projects": 6,
        "lastReview": "2024-01-14",
        "performanceRating": 4.9
    },
    {
        "id": 38,
        "name": "Michelle Perez",
        "email": "michelle.perez@company.com",
        "department": "Sales",
        "role": "Regional Sales Manager",
        "salary": 105000,
        "joinDate": "2019-05-07",
        "isActive": true,
        "skills": [
            "Sales Management",
            "Team Building",
            "Territory Planning",
            "Revenue Growth"
        ],
        "address": {
            "city": "Sacramento",
            "state": "CA",
            "country": "USA"
        },
        "projects": 8,
        "lastReview": "2024-01-19",
        "performanceRating": 4.7
    },
    {
        "id": 39,
        "name": "Brian Roberts",
        "email": "brian.roberts@company.com",
        "department": "HR",
        "role": "Compensation Analyst",
        "salary": 74000,
        "joinDate": "2021-07-14",
        "isActive": true,
        "skills": [
            "Compensation",
            "Market Analysis",
            "Excel",
            "Data Analysis"
        ],
        "address": {
            "city": "Long Beach",
            "state": "CA",
            "country": "USA"
        },
        "projects": 2,
        "lastReview": "2024-02-13",
        "performanceRating": 4.1
    },
    {
        "id": 40,
        "name": "Deborah Turner",
        "email": "deborah.turner@company.com",
        "department": "Finance",
        "role": "Controller",
        "salary": 128000,
        "joinDate": "2018-09-04",
        "isActive": true,
        "skills": [
            "Financial Management",
            "Accounting",
            "Auditing",
            "Leadership"
        ],
        "address": {
            "city": "Kansas City",
            "state": "MO",
            "country": "USA"
        },
        "projects": 7,
        "lastReview": "2024-01-07",
        "performanceRating": 4.8
    },
    {
        "id": 41,
        "name": "Joseph Phillips",
        "email": "joseph.phillips@company.com",
        "department": "Engineering",
        "role": "Frontend Developer",
        "salary": 82000,
        "joinDate": "2021-06-22",
        "isActive": true,
        "skills": [
            "React",
            "Vue",
            "CSS",
            "JavaScript",
            "Responsive Design"
        ],
        "address": {
            "city": "Mesa",
            "state": "AZ",
            "country": "USA"
        },
        "projects": 4,
        "lastReview": "2024-02-09",
        "performanceRating": 4.0
    },
    {
        "id": 42,
        "name": "Laura Campbell",
        "email": "laura.campbell@company.com",
        "department": "Operations",
        "role": "Process Analyst",
        "salary": 71000,
        "joinDate": "2022-08-03",
        "isActive": false,
        "skills": [
            "Process Improvement",
            "Analysis",
            "Documentation",
            "Lean"
        ],
        "address": {
            "city": "Virginia Beach",
            "state": "VA",
            "country": "USA"
        },
        "projects": 1,
        "lastReview": "2023-09-22",
        "performanceRating": 3.4
    },
    {
        "id": 43,
        "name": "Thomas Parker",
        "email": "thomas.parker@company.com",
        "department": "Marketing",
        "role": "SEO Specialist",
        "salary": 69000,
        "joinDate": "2022-02-17",
        "isActive": true,
        "skills": [
            "SEO",
            "Google Analytics",
            "Keyword Research",
            "Link Building"
        ],
        "address": {
            "city": "Atlanta",
            "state": "GA",
            "country": "USA"
        },
        "projects": 3,
        "lastReview": "2024-02-21",
        "performanceRating": 3.9
    },
    {
        "id": 44,
        "name": "Charles Evans",
        "email": "charles.evans@company.com",
        "department": "Engineering",
        "role": "Product Manager",
        "salary": 115000,
        "joinDate": "2019-03-26",
        "isActive": true,
        "skills": [
            "Product Strategy",
            "Roadmap Planning",
            "Agile",
            "Stakeholder Management"
        ],
        "address": {
            "city": "Oakland",
            "state": "CA",
            "country": "USA"
        },
        "projects": 9,
        "lastReview": "2024-01-11",
        "performanceRating": 4.7
    },
    {
        "id": 45,
        "name": "Margaret Edwards",
        "email": "margaret.edwards@company.com",
        "department": "Sales",
        "role": "Customer Success Manager",
        "salary": 79000,
        "joinDate": "2020-12-10",
        "isActive": true,
        "skills": [
            "Customer Success",
            "Retention",
            "Account Management",
            "Communication"
        ],
        "address": {
            "city": "Minneapolis",
            "state": "MN",
            "country": "USA"
        },
        "projects": 5,
        "lastReview": "2024-01-29",
        "performanceRating": 4.4
    },
    {
        "id": 46,
        "name": "Daniel Collins",
        "email": "daniel.collins@company.com",
        "department": "Finance",
        "role": "Investment Analyst",
        "salary": 91000,
        "joinDate": "2020-07-08",
        "isActive": true,
        "skills": [
            "Investment Analysis",
            "Portfolio Management",
            "Risk Analysis",
            "Excel"
        ],
        "address": {
            "city": "Tulsa",
            "state": "OK",
            "country": "USA"
        },
        "projects": 4,
        "lastReview": "2024-02-06",
        "performanceRating": 4.3
    },
    {
        "id": 47,
        "name": "Angela Stewart",
        "email": "angela.stewart@company.com",
        "department": "HR",
        "role": "Benefits Coordinator",
        "salary": 63000,
        "joinDate": "2023-03-14",
        "isActive": true,
        "skills": [
            "Benefits Administration",
            "HRIS",
            "Communication"
        ],
        "address": {
            "city": "Wichita",
            "state": "KS",
            "country": "USA"
        },
        "projects": 1,
        "lastReview": "2024-03-04",
        "performanceRating": 3.6
    },
    {
        "id": 48,
        "name": "Anthony Sanchez",
        "email": "anthony.sanchez@company.com",
        "department": "Engineering",
        "role": "Cloud Architect",
        "salary": 130000,
        "joinDate": "2018-11-20",
        "isActive": true,
        "skills": [
            "AWS",
            "Azure",
            "Cloud Architecture",
            "Microservices",
            "System Design"
        ],
        "address": {
            "city": "New Orleans",
            "state": "LA",
            "country": "USA"
        },
        "projects": 10,
        "lastReview": "2024-01-04",
        "performanceRating": 5.0
    },
    {
        "id": 49,
        "name": "Melissa Morris",
        "email": "melissa.morris@company.com",
        "department": "Operations",
        "role": "Quality Assurance Manager",
        "salary": 89000,
        "joinDate": "2020-01-15",
        "isActive": true,
        "skills": [
            "Quality Management",
            "Six Sigma",
            "ISO Standards",
            "Auditing"
        ],
        "address": {
            "city": "Cleveland",
            "state": "OH",
            "country": "USA"
        },
        "projects": 5,
        "lastReview": "2024-01-24",
        "performanceRating": 4.5
    },
    {
        "id": 50,
        "name": "Justin Rogers",
        "email": "justin.rogers@company.com",
        "department": "Marketing",
        "role": "Product Marketing Manager",
        "salary": 97000,
        "joinDate": "2019-09-18",
        "isActive": true,
        "skills": [
            "Product Marketing",
            "Go-to-Market",
            "Positioning",
            "Messaging"
        ],
        "address": {
            "city": "Tampa",
            "state": "FL",
            "country": "USA"
        },
        "projects": 6,
        "lastReview": "2024-01-17",
        "performanceRating": 4.6
    },
    {
        "id": 51,
        "name": "Stephanie Reed",
        "email": "stephanie.reed@company.com",
        "department": "Engineering",
        "role": "API Developer",
        "salary": 94000,
        "joinDate": "2020-04-29",
        "isActive": true,
        "skills": [
            "REST",
            "GraphQL",
            "API Design",
            "Node.js",
            "Documentation"
        ],
        "address": {
            "city": "Honolulu",
            "state": "HI",
            "country": "USA"
        },
        "projects": 5,
        "lastReview": "2024-02-03",
        "performanceRating": 4.4
    },
    {
        "id": 52,
        "name": "Raymond Cook",
        "email": "raymond.cook@company.com",
        "department": "Sales",
        "role": "Enterprise Sales Executive",
        "salary": 120000,
        "joinDate": "2019-02-12",
        "isActive": true,
        "skills": [
            "Enterprise Sales",
            "Contract Negotiation",
            "Strategic Selling"
        ],
        "address": {
            "city": "Anaheim",
            "state": "CA",
            "country": "USA"
        },
        "projects": 7,
        "lastReview": "2024-01-21",
        "performanceRating": 4.8
    },
    {
        "id": 53,
        "name": "Cynthia Morgan",
        "email": "cynthia.morgan@company.com",
        "department": "Finance",
        "role": "Revenue Analyst",
        "salary": 77000,
        "joinDate": "2021-11-23",
        "isActive": true,
        "skills": [
            "Revenue Recognition",
            "Financial Reporting",
            "Excel",
            "SQL"
        ],
        "address": {
            "city": "Aurora",
            "state": "CO",
            "country": "USA"
        },
        "projects": 3,
        "lastReview": "2024-02-19",
        "performanceRating": 4.2
    },
    {
        "id": 54,
        "name": "Jeffrey Bell",
        "email": "jeffrey.bell@company.com",
        "department": "Engineering",
        "role": "Systems Engineer",
        "salary": 96000,
        "joinDate": "2020-06-16",
        "isActive": true,
        "skills": [
            "Linux",
            "Networking",
            "Troubleshooting",
            "Scripting"
        ],
        "address": {
            "city": "Riverside",
            "state": "CA",
            "country": "USA"
        },
        "projects": 4,
        "lastReview": "2024-02-07",
        "performanceRating": 4.1
    },
    {
        "id": 55,
        "name": "Amy Murphy",
        "email": "amy.murphy@company.com",
        "department": "HR",
        "role": "Employee Relations Specialist",
        "salary": 70000,
        "joinDate": "2022-09-06",
        "isActive": true,
        "skills": [
            "Conflict Resolution",
            "Employee Relations",
            "Investigation",
            "Mediation"
        ],
        "address": {
            "city": "Corpus Christi",
            "state": "TX",
            "country": "USA"
        },
        "projects": 2,
        "lastReview": "2024-02-26",
        "performanceRating": 3.9
    }
];
