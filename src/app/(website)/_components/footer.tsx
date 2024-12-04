import Link from 'next/link'
import { Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">InstaEngage</h3>
            <p className="text-sm text-muted-foreground">Boost your Instagram engagement with smart automation and AI-powered conversations.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-2">Stay updated with our latest features and news.</p>
            <form className="flex">
              <input type="email" placeholder="Enter your email" className="px-4 py-2 w-full text-foreground bg-background border border-border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary" />
              <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} InstaEngage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

