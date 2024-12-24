<script setup>
const productLinks = [
  { text: 'Frequently Asked Questions', url: '#' },
  { text: 'Pricing', url: '#' },
  { text: 'Dashboard', url: '#' },
  { text: 'Contact Us', url: '#' }
];

const formGeneratorLinks = [
  { text: 'Form Generator', url: '#' },
  { text: 'Contact Form Generator', url: '#' },
  { text: 'Survey Form Generator', url: '#' },
  { text: 'RSVP Form Generator', url: '#' },
  { text: 'All Form Generators', url: '#' }
];

const integrationLinks = [
  { text: 'Google Sheets', url: '#' },
  { text: 'Mailchimp', url: '#' },
  { text: 'Airtable', url: '#' },
  { text: 'Discord', url: '#' },
  { text: 'Slack', url: '#' },
  { text: 'Notion', url: '#' },
  { text: 'Twilio', url: '#' },
  { text: 'All Apps & Integrations', url: '#' }
];

const resourceLinks = [
  { text: 'Documentation', url: '#' },
  { text: 'Affiliate Program', url: '#' },
  { text: 'Press Kit', url: '#' },
  { text: 'Formcarry Blog', url: '#' },
  { text: 'System Status', url: '#' }
];

const socialLinks = [
  { icon: 'twitter', url: '#' },
  { icon: 'facebook', url: '#' },
  { icon: 'github', url: '#' }
];
</script>

<template>
    <div style="text-align: center;">
        <img alt=":)" src="/formcarry_app_logo88a8.png" style="width: 80px; aspect-ratio: auto 80 / 80; height: 80px; display: block; margin: 0 auto;">
        <h2 style="font-size: 16px;">Built with <span style=" color: rgb(246, 40, 95);;">❤</span> love.</h2>
    </div>
    <hr style="margin: 2rem 0; border: none; border-top: 1px solid #eee;">
  
<footer class="footer">
    <div class="footer-content">
        <div class="footer-section">
            <h3>Product</h3>
            <ul>
                <li v-for="link in productLinks" :key="link.text">
                    <a :href="link.url">{{ link.text }}</a>
                </li>
            </ul>
            <h3>Form Generator</h3>
            <ul>
                <li v-for="link in formGeneratorLinks" :key="link.text">
                    <a :href="link.url">{{ link.text }}</a>
                </li>
            </ul>
        </div>

        <div class="footer-section">
            <h3>Guides</h3>
            <ul>
                <li>How to add a contact form to your Shopify website</li>
                <li>How to build a simple HTML contact form</li>
                <li>How to create a file upload form</li>
                <li>How to upload files from your HTML form using Base64 Encoding</li>
                <li>How to create email templates</li>
            </ul>
            <h3>Form Code Examples</h3>
            <ul>
                <li>HTML Contact Form</li>
                <li>React Contact Form</li>
                <li>NextJS Contact Form</li>
                <li>Vue Contact Form</li>
                <li>Jekyll Contact Form</li>
                <li>Gridsome Contact Form</li>
                <li>Gatsby Contact Form</li>
                <li>AlpineJS Contact Form</li>
                <li>All Form Examples</li>
            </ul>
        </div>

        <div class="footer-section">
            <h3>Integrations</h3>
            <ul>
                <li v-for="link in integrationLinks" :key="link.text">
                    <a :href="link.url">{{ link.text }}</a>
                </li>
            </ul>
        </div>

        <div class="footer-section">
            <h3>Resources</h3>
            <ul>
                <li v-for="link in resourceLinks" :key="link.text">
                    <a :href="link.url">{{ link.text }}</a>
                </li>
            </ul>
        </div>
    </div>

    <div class="footer-bottom card" style="background-color: rgb(247, 249, 252); border-radius: 10px; padding: 1rem;">
        <p style="font-size:14px;color: rgb(83, 84, 121);">formcarry, all rights reserved</p>
        <div class="footer-links">
            <a href="#" class="footer-link"style="font-size:14px;color: rgb(83, 84, 121);">Terms of Service</a>
            <a href="#" class="footer-link"style="font-size:14px;color: rgb(83, 84, 121);">Privacy Policy</a>
        </div>
        <div class="social-links">
       
            <a href="https://twitter.com/formcarry" target="_blank" title="Twitter">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.2911 8.9507C26.4428 9.32592 25.5433 9.57234 24.6222 9.68182C25.5931 9.10119 26.3197 8.18739 26.6667 7.1107C25.7556 7.65293 24.7567 8.03293 23.7156 8.23848C23.0162 7.49024 22.0893 6.994 21.0788 6.82691C20.0684 6.65982 19.0311 6.83125 18.1281 7.31454C17.2251 7.79783 16.5071 8.56591 16.0857 9.49936C15.6643 10.4328 15.5631 11.4793 15.7978 12.4763C13.9501 12.3837 12.1426 11.9035 10.4925 11.067C8.8425 10.2305 7.38682 9.05631 6.22001 7.6207C5.807 8.33009 5.58996 9.13651 5.59112 9.95737C5.59112 11.5685 6.41112 12.9918 7.65779 13.8251C6.92002 13.8019 6.19849 13.6027 5.55334 13.244V13.3018C5.55356 14.3748 5.92486 15.4147 6.60428 16.2452C7.2837 17.0757 8.22943 17.6457 9.28112 17.8585C8.59625 18.0441 7.87813 18.0714 7.18112 17.9385C7.47764 18.8621 8.05557 19.6698 8.834 20.2486C9.61243 20.8274 10.5524 21.1483 11.5222 21.1663C10.5583 21.9233 9.45465 22.4829 8.27432 22.8131C7.09399 23.1433 5.86015 23.2377 4.64334 23.0907C6.76745 24.4567 9.24011 25.1819 11.7656 25.1796C20.3133 25.1796 24.9878 18.0985 24.9878 11.9574C24.9878 11.7574 24.9822 11.5551 24.9733 11.3574C25.8832 10.6998 26.6684 9.88517 27.2922 8.95182L27.2911 8.9507Z" fill="#6C6F93"></path>
                </svg>
            </a>
            <a href="https://facebook.com/formcarry" target="_blank" title="Facebook">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0001 4.88867C9.86345 4.88867 4.88901 9.86312 4.88901 15.9998C4.88901 21.5453 8.95234 26.142 14.2646 26.9764V19.2109H11.4423V15.9998H14.2646V13.552C14.2646 10.7676 15.9223 9.22978 18.4612 9.22978C19.6768 9.22978 20.9479 9.44645 20.9479 9.44645V12.1798H19.5479C18.1668 12.1798 17.7368 13.0364 17.7368 13.9153V15.9998H20.8179L20.3257 19.2109H17.7368V26.9764C23.0479 26.1431 27.1112 21.5442 27.1112 15.9998C27.1112 9.86312 22.1368 4.88867 16.0001 4.88867Z" fill="#6C6F93"></path>
                </svg>
            </a>
            <a href="https://github.com/formcarry" target="_blank" title="Github">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0001 4.88867C9.86123 4.88867 4.88901 9.86089 4.88901 15.9998C4.88775 18.3323 5.62102 20.606 6.9848 22.4983C8.34858 24.3906 10.2736 25.8054 12.4868 26.542C13.0423 26.6387 13.2501 26.3053 13.2501 26.0131C13.2501 25.7498 13.2357 24.8753 13.2357 23.9442C10.4446 24.4587 9.72234 23.2642 9.50012 22.6387C9.37456 22.3187 8.83345 21.3331 8.36123 21.0687C7.97234 20.8609 7.41679 20.3464 8.34679 20.3331C9.22234 20.3187 9.84679 21.1387 10.0557 21.472C11.0557 23.152 12.6535 22.6798 13.2912 22.3887C13.389 21.6665 13.6801 21.1809 14.0001 20.9031C11.5279 20.6253 8.94456 19.6665 8.94456 15.4165C8.94456 14.2076 9.37456 13.2087 10.0835 12.4298C9.97234 12.152 9.58345 11.0131 10.1946 9.48534C10.1946 9.48534 11.1246 9.19423 13.2501 10.6253C14.1546 10.3743 15.0892 10.2479 16.0279 10.2498C16.9723 10.2498 17.9168 10.3742 18.8057 10.6242C20.9301 9.17978 21.8612 9.48645 21.8612 9.48645C22.4723 11.0142 22.0835 12.1531 21.9723 12.4309C22.6801 13.2087 23.1112 14.1942 23.1112 15.4165C23.1112 19.6809 20.5146 20.6253 18.0423 20.9031C18.4446 21.2498 18.7923 21.9165 18.7923 22.9587C18.7923 24.4442 18.7779 25.6387 18.7779 26.0142C18.7779 26.3053 18.9868 26.652 19.5423 26.5409C21.7479 25.7962 23.6645 24.3787 25.0222 22.4877C26.38 20.5968 27.1106 18.3277 27.1112 15.9998C27.1112 9.86089 22.139 4.88867 16.0001 4.88867Z" fill="#6C6F93"></path>
                </svg>
            </a>
        </div> 
    </div>
</footer>

</template>

<style scoped>

.footer {
  padding: 4rem 2rem 2rem;
  background-color: #fff;
  color: #333;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.footer-section h3 {
    font-size: 16px;
  font-weight: 600;
  margin-bottom: 1rem;
  color: rgb(14, 11, 61); 
    
    line-height: 32px;
    letter-spacing: -0.01em;
    margin: 0px;
   
    font-family: Inter, Helvetica, Arial, sans-serif;
    word-break: normal;
    text-decoration: none;
    text-transform: none;
    white-space: normal;
    cursor: inherit;
    appearance: none;
}


.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}


.footer-section li {
    
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.01em;
    margin: 0px;
    font-weight: 400;
    font-family: Inter, Helvetica, Arial, sans-serif;
  margin-bottom: 0.5rem;
  color: #666;
}

.footer-section a {
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.footer-section a:hover {
  color: #333;
}

.footer-bottom {
  max-width: 1200px;
  margin: 2rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #666;
}

.footer-links {
  display: flex;
  gap: 1rem;
}

.footer-link {
  color: #666;
  text-decoration: none;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: #666;
  text-decoration: none;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>