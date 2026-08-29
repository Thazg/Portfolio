# Nguyen Tam Thang — Portfolio

Personal portfolio for Nguyen Tam Thang, a Computer Science student and AI systems developer at Ho Chi Minh City University of Technology (HCMUT). The site focuses on verifiable engineering work, particularly the Enterprise Knowledge Intelligence Platform, alongside technical skills, education, and contact information.

[Live site](https://nguyentamthang.vercel.app/) · [LinkedIn](https://www.linkedin.com/in/thangnguyen0512/) · [Facebook](https://www.facebook.com/ntt0512/)

![Portfolio home page](./public/portfolio.png)

## Highlights

- Responsive layout for mobile, tablet, and desktop screens
- Evidence-focused sections for projects, skills, education, and contact information
- Focused motion and reveal interactions with reduced-motion support
- Accessible navigation, keyboard focus states, and readable content widths
- Contact form with shared client/server validation and email delivery through Resend
- Next.js image and font optimization with a production-ready App Router setup

## Technology

| Area | Tools |
| --- | --- |
| Framework | Next.js 16, React 19, TypeScript |
| Styling | Tailwind CSS 4, CSS design tokens |
| Motion | Framer Motion |
| Forms | React Hook Form, Zod |
| UI | Radix UI primitives, Lucide React |
| Email | Resend |
| Deployment | Vercel |

## Project structure

```text
.
├── public/                  # Images and static assets
├── src/
│   ├── app/                 # App Router pages, layout, styles, and API routes
│   │   └── api/contact/     # Contact form email endpoint
│   ├── components/
│   │   ├── animations/      # Shared motion components
│   │   ├── layout/          # Navigation and footer
│   │   └── ui/              # Reusable interface primitives
│   ├── data/                # Portfolio content and links
│   ├── lib/                 # Shared utilities
│   └── sections/            # Home page sections
├── package.json
└── next.config.ts
```

Most portfolio content is maintained in [`src/data/portfolio.ts`](./src/data/portfolio.ts). Page composition lives in [`src/app/page.tsx`](./src/app/page.tsx), while each major section has its own component in [`src/sections`](./src/sections).

## Run locally

### Requirements

- Node.js 20 or newer
- npm

### Setup

```bash
git clone https://github.com/Thazg/Portfolio.git
cd Portfolio
npm install
```

Create a `.env.local` file if you want the contact form to send email:

```env
RESEND_API_KEY=your_resend_api_key
EMAIL_ADDRESS=your_destination_email
EMAIL_FROM="Portfolio Contact <hello@your-verified-domain.com>"
```

Then start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint checks |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |

## Contact form configuration

The contact form posts to `/api/contact`. The same Zod schema validates input in the browser and on the server, field lengths are limited, and a honeypot rejects common form bots. Messages are sent as plain text through Resend to avoid injecting user-provided HTML. `EMAIL_FROM` is optional during local testing but should use a verified sender domain in production.

## Deployment

The project is ready for Vercel deployment. Import the repository, add `RESEND_API_KEY` and `EMAIL_ADDRESS` to the project environment, and deploy from the `main` branch.

## Contact

- Portfolio: [nguyentamthang.vercel.app](https://nguyentamthang.vercel.app/)
- LinkedIn: [thangnguyen0512](https://www.linkedin.com/in/thangnguyen0512/)
- Facebook: [Nguyen Tam Thang](https://www.facebook.com/ntt0512/)
