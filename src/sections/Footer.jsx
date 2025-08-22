import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      
      <div className="flex flex-wrap gap-2">
        <a 
          href="https://merchant.razorpay.com/policy/R8P9vAdzG2wuQB/terms" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Terms & Conditions
        </a>
        <span>|</span>
        <a 
          href="https://merchant.razorpay.com/policy/R8P9vAdzG2wuQB/privacy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Privacy Policy
        </a>
        <span>|</span>
        <a 
          href="https://merchant.razorpay.com/policy/R8P9vAdzG2wuQB/refund" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Refund & Cancellation
        </a>
        <span>|</span>
        <a 
          href="https://merchant.razorpay.com/policy/R8P9vAdzG2wuQB/shipping" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Shipping Policy
        </a>
        <span>|</span>
        <a 
          href="https://merchant.razorpay.com/policy/R8P9vAdzG2wuQB/contact_us" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Contact Us
        </a>
      </div>

      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index} target="_blank" rel="noopener noreferrer">
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>

      <p>© 2025 Shivam. All rights reserved.</p>
    </section>
  );
};

export default Footer;
