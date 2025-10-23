import { ComponentData } from "@/types/component";

export const componentCategories = {
  layout: "Layout & Structure",
  content: "Content Blocks",
  forms: "Forms & Inputs",
  navigation: "Navigation",
  ui: "UI Elements"
};

export const availableComponents: ComponentData[] = [
  // Layout & Structure
  {
    id: "header-1",
    type: "header",
    category: "layout",
    name: "Header with Logo",
    preview: "Professional header",
    html: `<header class="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700">
  <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <div class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">YourBrand</div>
    <nav class="hidden md:flex gap-6">
      <a href="#" class="text-gray-300 hover:text-white transition-colors">Home</a>
      <a href="#" class="text-gray-300 hover:text-white transition-colors">About</a>
      <a href="#" class="text-gray-300 hover:text-white transition-colors">Services</a>
      <a href="#" class="text-gray-300 hover:text-white transition-colors">Contact</a>
    </nav>
    <button class="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all">Get Started</button>
  </div>
</header>`,
    editable: true
  },
  {
    id: "hero-1",
    type: "hero",
    category: "layout",
    name: "Hero Section",
    preview: "Eye-catching hero",
    html: `<section class="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20 px-6">
  <div class="max-w-4xl mx-auto text-center">
    <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">Build Something Amazing</h1>
    <p class="text-xl text-gray-300 mb-8">Create beautiful websites with our powerful visual constructor</p>
    <div class="flex gap-4 justify-center flex-wrap">
      <button class="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-bold text-lg hover:shadow-2xl transition-all">Start Building</button>
      <button class="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-bold text-lg border border-white/20 hover:bg-white/20 transition-all">Learn More</button>
    </div>
  </div>
</section>`,
    editable: true
  },
  {
    id: "features-grid",
    type: "features",
    category: "content",
    name: "Features Grid",
    preview: "3-column features",
    html: `<section class="py-16 px-6 bg-gray-900">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-4xl font-bold text-center text-white mb-12">Amazing Features</h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div class="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-purple-500 transition-all">
        <div class="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg mb-4"></div>
        <h3 class="text-xl font-bold text-white mb-2">Fast & Efficient</h3>
        <p class="text-gray-400">Build websites in minutes, not hours</p>
      </div>
      <div class="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-purple-500 transition-all">
        <div class="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg mb-4"></div>
        <h3 class="text-xl font-bold text-white mb-2">Easy to Use</h3>
        <p class="text-gray-400">Drag, drop, and customize with ease</p>
      </div>
      <div class="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-purple-500 transition-all">
        <div class="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg mb-4"></div>
        <h3 class="text-xl font-bold text-white mb-2">Fully Responsive</h3>
        <p class="text-gray-400">Perfect on all devices and screens</p>
      </div>
    </div>
  </div>
</section>`,
    editable: true
  },
  {
    id: "footer-1",
    type: "footer",
    category: "layout",
    name: "Footer",
    preview: "Professional footer",
    html: `<footer class="bg-gray-900 border-t border-gray-800 py-12 px-6">
  <div class="max-w-6xl mx-auto">
    <div class="grid md:grid-cols-4 gap-8 mb-8">
      <div>
        <h4 class="text-white font-bold mb-4">About</h4>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Company</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Team</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Careers</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4">Products</h4>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Features</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white transition-colors">API</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4">Resources</h4>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Blog</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Docs</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Support</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4">Legal</h4>
        <ul class="space-y-2">
          <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Terms</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
      <p>© 2024 YourBrand. All rights reserved.</p>
    </div>
  </div>
</footer>`,
    editable: true
  },
  
  // Content Blocks
  {
    id: "card-1",
    type: "card",
    category: "content",
    name: "Content Card",
    preview: "Info card",
    html: `<div class="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl border border-gray-700 max-w-md">
  <h3 class="text-2xl font-bold text-white mb-3">Card Title</h3>
  <p class="text-gray-400 mb-4">This is a beautiful card component with gradient background and modern styling.</p>
  <button class="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all">Learn More</button>
</div>`,
    editable: true
  },
  {
    id: "cta-1",
    type: "cta",
    category: "content",
    name: "Call to Action",
    preview: "CTA section",
    html: `<section class="py-16 px-6 bg-gradient-to-r from-purple-900 to-blue-900">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
    <p class="text-xl text-gray-200 mb-8">Join thousands of users building amazing websites</p>
    <button class="px-8 py-4 bg-white text-purple-900 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">Start Free Trial</button>
  </div>
</section>`,
    editable: true
  },
  
  // Forms & Inputs
  {
    id: "form-contact",
    type: "form",
    category: "forms",
    name: "Contact Form",
    preview: "Full contact form",
    html: `<form class="max-w-2xl mx-auto p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700">
  <h3 class="text-2xl font-bold text-white mb-6">Contact Us</h3>
  <div class="space-y-4">
    <div>
      <label class="block text-gray-300 mb-2">Name</label>
      <input type="text" placeholder="Your name" class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all" />
    </div>
    <div>
      <label class="block text-gray-300 mb-2">Email</label>
      <input type="email" placeholder="your@email.com" class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all" />
    </div>
    <div>
      <label class="block text-gray-300 mb-2">Message</label>
      <textarea placeholder="Your message..." rows="4" class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 outline-none transition-all resize-none"></textarea>
    </div>
    <button type="submit" class="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-bold hover:shadow-lg transition-all">Send Message</button>
  </div>
</form>`,
    editable: true
  },
  {
    id: "input-1",
    type: "input",
    category: "forms",
    name: "Text Input",
    preview: "Input field",
    html: `<input type="text" placeholder="Enter text..." class="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white w-full max-w-md focus:ring-2 focus:ring-purple-500 outline-none transition-all" />`,
    editable: true
  },
  
  // Navigation
  {
    id: "nav-menu",
    type: "nav",
    category: "navigation",
    name: "Navigation Menu",
    preview: "Horizontal nav",
    html: `<nav class="flex gap-6 p-4 bg-gray-800 rounded-lg">
  <a href="#" class="text-white hover:text-purple-400 font-medium transition-colors">Home</a>
  <a href="#" class="text-white hover:text-purple-400 font-medium transition-colors">About</a>
  <a href="#" class="text-white hover:text-purple-400 font-medium transition-colors">Services</a>
  <a href="#" class="text-white hover:text-purple-400 font-medium transition-colors">Contact</a>
</nav>`,
    editable: true
  },
  
  // UI Elements
  {
    id: "button-primary",
    type: "button",
    category: "ui",
    name: "Primary Button",
    preview: "Gradient button",
    html: `<button class="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all">Click Me</button>`,
    editable: true
  },
  {
    id: "button-secondary",
    type: "button",
    category: "ui",
    name: "Secondary Button",
    preview: "Solid button",
    html: `<button class="px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-all">Click Me</button>`,
    editable: true
  },
  {
    id: "heading-1",
    type: "heading",
    category: "ui",
    name: "Large Heading",
    preview: "H1 heading",
    html: `<h1 class="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Amazing Heading</h1>`,
    editable: true
  },
  {
    id: "text-1",
    type: "text",
    category: "ui",
    name: "Paragraph",
    preview: "Text block",
    html: `<p class="text-gray-300 text-lg max-w-2xl">This is a paragraph of text. You can edit this content to say whatever you want. Perfect for descriptions and content blocks.</p>`,
    editable: true
  }
];
