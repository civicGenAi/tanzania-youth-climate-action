import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Green Samia" className="h-16 w-auto mb-6 brightness-0 invert" />
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              A youth-led environmental conservation and climate action platform supported by the President's Office of Tanzania.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Our Projects", "Youth Network", "News & Stories"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-3">
              {["Join as a Youth", "Volunteer", "Partner with Us", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#involved" className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm">Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@greensamia.go.tz" className="text-background/70 hover:text-primary transition-colors text-sm">
                  info@greensamia.go.tz
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+255123456789" className="text-background/70 hover:text-primary transition-colors text-sm">
                  +255 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} Green Samia. All rights reserved.
            </p>
            <p className="text-background/50 text-sm">
              Supported by the President's Office of Tanzania
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
