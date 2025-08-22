# Next15 Shop

A simple **Next.js 15** e-commerce application with public and protected pages.  
Users can view products, see product details, and add new products after login using **NextAuth.js** and **MongoDB**.

---

## Live Site

[Live Demo on Vercel](YOUR_VERCEL_URL_HERE)

---

## GitHub Repository

[GitHub Repo](YOUR_GITHUB_REPO_LINK_HERE)

---

## Features

- Landing Page with **Hero**, **Product Highlights**, and **Footer**
- Public Product List Page (`/products`)
- Product Details Page (`/products/[id]`)
- Login with **Google** (NextAuth.js)
- Protected Add Product Page (`/dashboard/add-product`) for authenticated users
- MongoDB backend to store products
- Responsive and modern UI using **Tailwind CSS + DaisyUI**

---

## Setup & Installation

1. Clone the repository:

```bash
git clone https://github.com/Imranfaraji/Next-shope
cd next15-task

2.Install dependencies:

npm install

3. Add environment variables in .env.local:

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
MONGODB_URI=your_mongodb_connection_string


4. Run the development server:

npm run dev


5. Open http://localhost:3000 in your browser.



6. Routes Summary
Route	Type	Description
/	Public	Landing page with Hero, Highlights, Footer
/login	Public	Login page using NextAuth (Google OAuth)
/products	Public	List all products
/products/[id]	Public	Show product details
/dashboard/add-product	Protected	Add a new product (login required)
/api/products	API	GET: fetch all products, POST: add new product
