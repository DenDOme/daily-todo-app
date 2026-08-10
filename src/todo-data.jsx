const WEEKS = [
  {
    week: 1,
    theme: "Polish what exists — GitHub + profiles",
    days: [
      {
        id: 1,
        day: 1,
        label: "Monday",
        blocks: [
          { time: "1.5h", category: "project", task: "Rewrite Market_Place_MERN README in English: one-line pitch, tech stack, architecture diagram, setup instructions, live demo link" },
          { time: "1.5h", category: "apply", task: "Set up Upwork profile: title, overview paragraph, add 3 project screenshots as portfolio pieces" },
          { time: "1h", category: "interview", task: "JS fundamentals: explain useState vs useRef, what triggers a re-render — write answers in your own words" },
          { time: "1h", category: "visibility", task: "Fix GitHub About section on Market_Place_MERN: description + 8 topic tags (mern, microservices, docker, rabbitmq, redis, react, nodejs, jwt)" },
        ]
      },
      {
        id: 2,
        day: 2,
        label: "Tuesday",
        blocks: [
          { time: "1.5h", category: "project", task: "Take screenshots of Market_Place_MERN UI (products, cart, checkout). Add them to README. Verify live demo works end-to-end." },
          { time: "1.5h", category: "apply", task: "Set up Fiverr gig: 'I will build React web apps and fix frontend bugs'. Write gig description, add tags, set packages (Basic/Standard/Premium)." },
          { time: "1h", category: "interview", task: "JS: closures and the event loop. Find 2 YouTube explanations, then explain both back in your own words without looking." },
          { time: "1h", category: "visibility", task: "LinkedIn: update headline to 'Frontend Developer | React · Node.js · Open to junior roles & freelance'. Add Market_Place_MERN as a featured project." },
        ]
      },
      {
        id: 3,
        day: 3,
        label: "Wednesday",
        blocks: [
          { time: "1.5h", category: "project", task: "Write basic tests for AuthService: at least test /register and /login endpoints with Jest + Supertest. Even 5 passing tests is enough today." },
          { time: "1.5h", category: "apply", task: "Send first 5 Upwork proposals on small React/frontend jobs (bug fixes, UI updates, small features). Keep proposals under 150 words, direct and specific." },
          { time: "1h", category: "interview", task: "LeetCode: Two Sum (easy). Then Valid Anagram. Time yourself — aim for under 15 min each." },
          { time: "1h", category: "visibility", task: "Draft outline for blog post: 'How I built a microservices marketplace with MERN + RabbitMQ'. Just bullet points, not the full post yet." },
        ]
      },
      {
        id: 4,
        day: 4,
        label: "Thursday",
        blocks: [
          { time: "1.5h", category: "project", task: "Continue AuthService tests. Add test for /logout and one protected route check (invalid token should return 401). Push to GitHub." },
          { time: "1.5h", category: "apply", task: "Search LinkedIn for 'Junior Frontend Developer' + 'Junior React Developer' remote jobs. Apply to 5 with a tailored cover note (2-3 sentences max)." },
          { time: "1h", category: "interview", task: "React: explain useEffect — when does it run, how does the dependency array work? What's the cleanup function for? Write it without googling first." },
          { time: "1h", category: "visibility", task: "Polish your GitHub profile README: ensure it shows your top 3 projects with live links, your tech stack badges, and says you're open to work." },
        ]
      },
      {
        id: 5,
        day: 5,
        label: "Friday",
        blocks: [
          { time: "1.5h", category: "project", task: "Fix or improve the frontend: one real UX issue you know exists (loading states, empty state UI, error handling). Push the fix." },
          { time: "1.5h", category: "apply", task: "5 more Upwork proposals. This time try a different job type: full-stack MERN or Node.js backend jobs, not just frontend." },
          { time: "1h", category: "interview", task: "LeetCode: Contains Duplicate + Best Time to Buy and Sell Stock. Practice explaining your solution out loud after solving." },
          { time: "1h", category: "visibility", task: "Write 3 LinkedIn posts for the next 3 weeks (schedule them or save as drafts). Topics: what you built in Market_Place_MERN, a lesson learned, why you're switching to IT." },
        ]
      },
      {
        id: 6,
        day: 6,
        label: "Saturday",
        blocks: [
          { time: "1.5h", category: "project", task: "Start TypeScript: convert one small file in ProductService (e.g. a route or model) from JS to TS. Just one file — feel the difference." },
          { time: "1.5h", category: "apply", task: "Upwork: 5 more proposals. Review your first week of proposals — did any get viewed? Rewrite the ones that got 0 views." },
          { time: "1h", category: "interview", task: "System design basics: read or watch 'what is an API gateway and why use one'. Then explain it back in plain English as if to a non-technical person." },
          { time: "1h", category: "visibility", task: "Publish the first LinkedIn post from your drafts. Pin it to your profile if it does well." },
        ]
      },
      {
        id: 7,
        day: 7,
        label: "Sunday",
        blocks: [
          { time: "1h", category: "project", task: "Weekly review: what did you build/fix? Is the demo still working? Did you push code every day? Note any blockers for next week." },
          { time: "1h", category: "apply", task: "Weekly review: how many applications sent? How many Upwork proposals? Any responses? What needs to change?" },
          { time: "1h", category: "interview", task: "Rest or light review — re-read your own notes from the week. No new problems today." },
          { time: "2h", category: "visibility", task: "Write and publish the dev.to blog post outline from Thursday as a full article. Doesn't need to be long — 400-600 words is enough for post #1." },
        ]
      },
    ]
  },
  {
    week: 2,
    theme: "Tests + first proposals in motion",
    days: [
      {
        id: 8,
        day: 8,
        label: "Monday",
        blocks: [
          { time: "1.5h", category: "project", task: "Add tests to ProductService: test GET /products (list), POST /products (create), GET /products/:id. Aim for 8+ passing tests total across both services." },
          { time: "1.5h", category: "apply", task: "Apply to 5 junior roles. Focus on companies that list React + Node or MERN. Don't apply to pure Angular/Vue jobs — stay where your stack matches." },
          { time: "1h", category: "interview", task: "JS: how does Promise work? Explain async/await vs .then(). Write a real example from your own project that uses async/await." },
          { time: "1h", category: "visibility", task: "Post your second LinkedIn post (from last week's drafts). Engage with 3-5 posts by other devs in your feed — comment something real, not just 'great post'." },
        ]
      },
      {
        id: 9,
        day: 9,
        label: "Tuesday",
        blocks: [
          { time: "1.5h", category: "project", task: "Start a .env.example file for every service in Market_Place_MERN. Anyone cloning the repo right now has no idea what env vars are needed — fix that." },
          { time: "1.5h", category: "apply", task: "Upwork: 5 proposals. Try one proposal for a job slightly above your experience level — stretch proposal. The worst they can say is no." },
          { time: "1h", category: "interview", task: "LeetCode: Maximum Subarray + Climbing Stairs. These introduce dynamic thinking — don't rush, understand the pattern." },
          { time: "1h", category: "visibility", task: "Add 'open to work' green banner on LinkedIn profile. Update 'About' section to mention your diploma project and 5 hrs/day of active learning." },
        ]
      },
      {
        id: 10,
        day: 10,
        label: "Wednesday",
        blocks: [
          { time: "1.5h", category: "project", task: "Improve error handling in the API Gateway: if a downstream service is down, return a clean JSON error instead of crashing. Test it manually." },
          { time: "1.5h", category: "apply", task: "Apply to 5 remote jobs. Try: remoteok.com, weworkremotely.com, and LinkedIn. Mix of junior and 'mid' level — you're closer to mid than you think." },
          { time: "1h", category: "interview", task: "React: build a tiny component from scratch in 20 min — a search input that filters a list of items using useState. No libraries, just React." },
          { time: "1h", category: "visibility", task: "Comment on 5 GitHub issues in repos you use (MERN-related, RabbitMQ, Docker). Even asking a clarifying question counts as engagement." },
        ]
      },
      {
        id: 11,
        day: 11,
        label: "Thursday",
        blocks: [
          { time: "1.5h", category: "project", task: "Add a proper loading state and error state to the frontend product listing page if it doesn't have one. Skeleton loaders or a simple spinner — push it." },
          { time: "1.5h", category: "apply", task: "Upwork: 5 proposals. Look specifically for 'fix my React app' or 'debug my Node.js API' type jobs — these are fastest to close as a new freelancer." },
          { time: "1h", category: "interview", task: "What is CORS and why does it happen? Explain it. Then explain how you solved it in your own API Gateway (you definitely have CORS config in there)." },
          { time: "1h", category: "visibility", task: "Post third LinkedIn post. Topic: 'What I learned building an API Gateway from scratch.' Keep it concrete and short — 150-200 words max." },
        ]
      },
      {
        id: 12,
        day: 12,
        label: "Friday",
        blocks: [
          { time: "1.5h", category: "project", task: "Convert one more file to TypeScript. Then write a clear comment in the PR/commit: why TypeScript, what it caught. This becomes an interview talking point." },
          { time: "1.5h", category: "apply", task: "Apply to 5 jobs. Today, specifically look for Turkish companies hiring remote junior devs — Glassdoor TR, Kariyer.net, LinkedIn Turkey filter." },
          { time: "1h", category: "interview", task: "LeetCode: Valid Parentheses + Reverse Linked List. Stacks and linked lists appear in almost every junior interview." },
          { time: "1h", category: "visibility", task: "Reach out to 3 people on LinkedIn who work as junior devs or recently got their first IT job. Ask one specific question — not 'can you help me', something real." },
        ]
      },
      {
        id: 13,
        day: 13,
        label: "Saturday",
        blocks: [
          { time: "1.5h", category: "project", task: "Write a second blog post (dev.to or Hashnode): 'My first week adding tests to a Node.js microservices project'. Honest and short — 400 words." },
          { time: "1.5h", category: "apply", task: "Review all Upwork proposals sent so far. Rewrite any that got 0 views with a completely different opening sentence. Volume + iteration is the game here." },
          { time: "1h", category: "interview", task: "Mock interview yourself: open your Market_Place_MERN, pretend you're in an interview and explain the whole architecture out loud in English. Time it: 5 min max." },
          { time: "1h", category: "visibility", task: "Push your blog post live. Share it on LinkedIn. This is content that works for you passively — every post compounds." },
        ]
      },
      {
        id: 14,
        day: 14,
        label: "Sunday",
        blocks: [
          { time: "1h", category: "project", task: "Week 2 review: are tests running cleanly? Is the live demo still working? What's the next biggest gap in the project?" },
          { time: "1h", category: "apply", task: "Count: total applications sent in 2 weeks. Should be 30-40 job apps + 40-50 Upwork proposals. If lower, next week you increase volume, no exceptions." },
          { time: "1h", category: "interview", task: "Rest. Or re-read your interview notes and write down the 3 questions you still feel shaky on. Those become next week's focus." },
          { time: "2h", category: "visibility", task: "Plan week 3 content: 3 LinkedIn post drafts + one blog post topic. Having this ready means you never skip a visibility day." },
        ]
      },
    ]
  },
  {
    week: 3,
    theme: "Volume up — applications, proposals, first response",
    days: [
      {
        id: 15,
        day: 15,
        label: "Monday",
        blocks: [
          { time: "1.5h", category: "project", task: "Start a small new project: a clean, single-purpose tool (e.g. a Pomodoro timer, expense tracker, or URL shortener). Full TypeScript this time. This shows growth." },
          { time: "1.5h", category: "apply", task: "15 applications this week total (3/day Mon-Fri). Start with LinkedIn Easy Apply — it's fast and builds habit." },
          { time: "1h", category: "interview", task: "What is indexing in a database and why does it matter? How does Redis caching help? Write the answer — these come up in interviews constantly." },
          { time: "1h", category: "visibility", task: "Post your 4th LinkedIn post. Milestone update: 'I've been coding 5 hours a day for 2 weeks. Here's what changed.' Honest content performs." },
        ]
      },
      {
        id: 16,
        day: 16,
        label: "Tuesday",
        blocks: [
          { time: "1.5h", category: "project", task: "Continue small project. Get the core feature working end-to-end even if it's ugly. Working > pretty at this stage." },
          { time: "1.5h", category: "apply", task: "3 job applications + 5 Upwork proposals. For Upwork today: only apply to jobs posted in the last 24 hours. Recency = better conversion." },
          { time: "1h", category: "interview", task: "LeetCode: Merge Two Sorted Lists + Binary Search. These are classic interview warmups." },
          { time: "1h", category: "visibility", task: "Follow 20 developers on LinkedIn/X who post about React, Node, or MERN. Engage with their content genuinely this week." },
        ]
      },
      {
        id: 17,
        day: 17,
        label: "Wednesday",
        blocks: [
          { time: "1.5h", category: "project", task: "Add authentication to your small project (JWT or session). Even a simple login/logout flow. Auth is in every job spec — this reinforces it." },
          { time: "1.5h", category: "apply", task: "3 job apps. Today: reach out to 2 Turkish tech companies directly via LinkedIn message. Short, specific, no desperation — 'I built X, curious if you're hiring.' " },
          { time: "1h", category: "interview", task: "React: explain the difference between controlled and uncontrolled components. Build a simple form both ways in 20 min." },
          { time: "1h", category: "visibility", task: "Post 5th LinkedIn post. Topic: 'Why I added TypeScript to my Node.js project mid-build.' Short, specific, shows reasoning." },
        ]
      },
      {
        id: 18,
        day: 18,
        label: "Thursday",
        blocks: [
          { time: "1.5h", category: "project", task: "Deploy the small project (Vercel frontend + Railway backend). Add it to GitHub with English README and the About section filled in." },
          { time: "1.5h", category: "apply", task: "3 job apps + 5 Upwork proposals. Check: have you gotten any Upwork responses yet? If yes — reply within 1 hour, always. Speed signals professionalism." },
          { time: "1h", category: "interview", task: "System design: how would you design a simple chat app? (You built one — explain it.) What would you do differently now? This is a real interview question." },
          { time: "1h", category: "visibility", task: "Publish your third blog post. Topic: lessons from adding TypeScript, or lessons from the RTChatApp_MERN build." },
        ]
      },
      {
        id: 19,
        day: 19,
        label: "Friday",
        blocks: [
          { time: "1.5h", category: "project", task: "Polish the small project: add real error states, loading states, mobile responsiveness. Make it something you'd actually show in an interview screen share." },
          { time: "1.5h", category: "apply", task: "3 job apps. Today, apply to 3 jobs that feel slightly too senior for you. Write the best cover note you can. Sometimes juniors get mid roles by showing hunger and quality." },
          { time: "1h", category: "interview", task: "LeetCode: Product of Array Except Self + Find Minimum in Rotated Sorted Array. These are popular mid-level screens that juniors get too." },
          { time: "1h", category: "visibility", task: "Add the new small project to your LinkedIn featured section and GitHub profile. Two projects visible > one." },
        ]
      },
      {
        id: 20,
        day: 20,
        label: "Saturday",
        blocks: [
          { time: "1.5h", category: "project", task: "Go back to Market_Place_MERN: add one feature or fix one known bug you've been ignoring. Document it in the commit message clearly." },
          { time: "1.5h", category: "apply", task: "Upwork only: 10 proposals today. Saturday is a good day for clients to be browsing. Get ahead for the week." },
          { time: "1h", category: "interview", task: "Full mock interview: pick 5 common interview questions from a list (Google 'junior React interview questions'), answer all 5 out loud and time yourself." },
          { time: "1h", category: "visibility", task: "Post 6th LinkedIn post. Milestone: 3 weeks in. Post a brief honest update — what's working, what's hard. Authenticity gets engagement." },
        ]
      },
      {
        id: 21,
        day: 21,
        label: "Sunday",
        blocks: [
          { time: "1h", category: "project", task: "Week 3 review: you should have 2 deployed projects, tests on the main project, TypeScript in at least one file. What's still missing?" },
          { time: "1h", category: "apply", task: "Count totals: job applications, Upwork proposals, responses received. If you got any interviews scheduled — that's a big win. Prep for them next week." },
          { time: "1h", category: "interview", task: "Write down every interview question you felt shaky on this week. This list = next week's interview prep focus." },
          { time: "2h", category: "visibility", task: "Plan week 4 content + rest. You've been going hard. Rest is part of the system — don't skip sleep or workouts for an extra hour of LeetCode." },
        ]
      },
    ]
  },
  {
    week: 4,
    theme: "Close out Month 1 — review, refine, keep momentum",
    days: [
      {
        id: 22,
        day: 22,
        label: "Monday",
        blocks: [
          { time: "1.5h", category: "project", task: "Write a proper architecture diagram for Market_Place_MERN using draw.io (free, browser-based). Export as PNG and embed in README. This is what mid-level candidates have — stand out." },
          { time: "1.5h", category: "apply", task: "3 job apps + 5 Upwork proposals. If you've had any Upwork responses: close one. Even if it's a $30 job — first review is the goal." },
          { time: "1h", category: "interview", task: "What is the difference between SQL and NoSQL? Why did you choose MongoDB for your project? Have a real answer — not 'it's easier'." },
          { time: "1h", category: "visibility", task: "Post 7th LinkedIn post. Topic: 'The thing I didn't expect when building with microservices.' Real insight from your own build." },
        ]
      },
      {
        id: 23,
        day: 23,
        label: "Tuesday",
        blocks: [
          { time: "1.5h", category: "project", task: "Add a proper 'Technologies used and why' section to your README. Not just a list — one sentence per tech explaining why you chose it. This shows engineering thinking." },
          { time: "1.5h", category: "apply", task: "3 job apps focused on companies with Glassdoor ratings above 3.8. Company quality matters — you don't want your first IT job to burn you out." },
          { time: "1h", category: "interview", task: "LeetCode review: redo Two Sum and Valid Anagram from week 1 but faster. Measure improvement. Speed + confidence both matter." },
          { time: "1h", category: "visibility", task: "Reach out to 3 more people on LinkedIn. This time: recruiters at tech companies, not just developers. Introduce yourself briefly, link your GitHub." },
        ]
      },
      {
        id: 24,
        day: 24,
        label: "Wednesday",
        blocks: [
          { time: "1.5h", category: "project", task: "Stress test the live demo: log in, add to cart, checkout, log out. On mobile. On a slow connection (Chrome throttling). Note and fix anything broken." },
          { time: "1.5h", category: "apply", task: "3 job apps + 5 Upwork proposals. For Upwork: try one proposal where you offer a free 30-min consultation call as the hook. This works well for first clients." },
          { time: "1h", category: "interview", task: "Explain Docker to a non-technical person in 3 sentences. Then explain why you used Docker in your project. Both versions matter in interviews." },
          { time: "1h", category: "visibility", task: "Post 8th LinkedIn post. Topic: a specific bug you solved (the Rostelecom DPI issue, RabbitMQ ACCESS-REFUSED, or MongoDB Atlas IP whitelist). Specific = credible." },
        ]
      },
      {
        id: 25,
        day: 25,
        label: "Thursday",
        blocks: [
          { time: "1.5h", category: "project", task: "If you've gotten any interview callbacks: prepare to demo Market_Place_MERN live. Practice screen sharing + talking through the code for 5 min without hesitation." },
          { time: "1.5h", category: "apply", task: "3 job apps. Today target startups specifically — they move faster on junior hires, give more responsibility early, and care more about projects than degrees." },
          { time: "1h", category: "interview", task: "Behavioral questions: prepare answers for 'tell me about yourself', 'why are you switching to IT', 'what's your biggest technical challenge you've solved'. Write them out." },
          { time: "1h", category: "visibility", task: "Update your Upwork profile bio using any positive feedback or new projects from this month. Freshen it up — Upwork's algorithm favors active profiles." },
        ]
      },
      {
        id: 26,
        day: 26,
        label: "Friday",
        blocks: [
          { time: "1.5h", category: "project", task: "Final push: ensure all repos have English README, live demo links, and topic tags. Your GitHub should look clean and intentional to any visitor." },
          { time: "1.5h", category: "apply", task: "3 job apps. End the week with a strong application — your best cover note, best-matched job. Treat it like a portfolio piece of writing." },
          { time: "1h", category: "interview", task: "Full mock technical interview: explain your architecture, solve one medium LeetCode problem, answer one behavioral question. Record yourself on your phone. Watch it back." },
          { time: "1h", category: "visibility", task: "Post 9th LinkedIn post: Month 1 wrap-up. What you shipped, what you learned, what's next. This post builds trust and signals consistency to recruiters." },
        ]
      },
      {
        id: 27,
        day: 27,
        label: "Saturday",
        blocks: [
          { time: "2h", category: "project", task: "Month 1 project review: write a personal document listing what you built, what tests exist, what TypeScript covers, what's still missing. This is your Month 2 starting point." },
          { time: "1.5h", category: "apply", task: "Upwork: 10 proposals. Saturday surge. By end of month 1 you should have at minimum 1 response or 1 interview. If not — the proposal text needs a full rewrite next week." },
          { time: "1h", category: "interview", task: "Rest from LeetCode. Review behavioral answers. Practice the 'tell me about yourself' until it's natural and under 2 minutes." },
          { time: "30m", category: "visibility", task: "Plan Month 2 content calendar: 8 LinkedIn posts, 2 blog posts. Topics can be vague now, just placeholders." },
        ]
      },
      {
        id: 28,
        day: 28,
        label: "Sunday",
        blocks: [
          { time: "1h", category: "project", task: "Full month review: GitHub green? Readme clean? Tests passing? Live demo working? Check every box. Fix the ones that aren't checked." },
          { time: "1h", category: "apply", task: "Total count: should be 60-80 job apps + 80-100 Upwork proposals. Any interviews? Any Upwork responses? Write down what you'll do differently in Month 2." },
          { time: "1h", category: "interview", task: "Rest. Seriously. Consistent effort over time beats burnout. You've done a full month — that's more than most people do in 6 months." },
          { time: "2h", category: "visibility", task: "Rest or light planning. No content creation today. Recharge for Month 2 which is when things start to compound." },
        ]
      },
    ]
  },
];

export default WEEKS;
