import VectorImage from '../images/Vector.png';
function Footer() {
  // Navigation section

  const navigation = {
    About: [
      { name: 'How it works', href: '#' },
      { name: 'Featured', href: '#' },
      { name: 'Partnership', href: '#' },
      { name: 'Business Relation', href: '#' },
    ],
    Community: [
      { name: 'Events', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Podcast', href: '#' },
      { name: 'Invite a Friend', href: '#' },
    ],
    Socials: [
      { name: 'Discord', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'Facebook', href: '#' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            {/* Facebook icon path */}
          </svg>
        ),
      },
      {
        name: 'Instagram',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            {/* Instagram icon path */}
          </svg>
        ),
      },
      {
        name: 'X',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            {/* X icon path */}
          </svg>
        ),
      },
    ],
  };

// Navigation section


// Footer section
  return (
    <>
      <footer className="bg-Ash" aria-labelledby="footer-heading h-[480px]">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-4 pb-2 pt-2 sm:pt-24 lg:px-8 lg:pt-32 mt-10">
          <div className="xl:grid xl:grid-cols-3 xl:gap-4">
          <div className="space-y-2">
            <div className="flex items-center mb-4">
          <img src={VectorImage} alt="Vector Logo" className="w-7 h-7 " />
          <h1 className="text-3xl  font-medium text-basegreen">Alpha Store</h1>
          </div>
              <p className="text-sm leading-6 text-Black mb-[290px]">
                   Our vision is to provide convenience <br /> and help increase your sales business.
               </p>

              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="text-Black hover:text-Black">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-Black ml-16">About</h3>
                  <ul role="list" className="mt-6 space-y-4 ml-16">
                    {navigation.About.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-Black hover:text-Black">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-Black ml-16">Community</h3>
                  <ul role="list" className="mt-6 space-y-4 ml-16">
                    {navigation.Community.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-Black hover:text-Black">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-Black ml-16">Socials</h3>
                  <ul role="list" className="mt-6 space-y-4 ml-16">
                    {navigation.Socials.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-Black hover:text-Black">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[1320px] mx-auto">
  <div className="absolute w-full border-t border-blue mt-20"></div>
</div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex justify-between">
          <p className="text-xs leading-5 text-Black">&copy; 2024 Alpha Store, Inc. All rights reserved.</p>
         <div className="flex">
         <p className="text-xs leading-5 text-Black mr-4">Privacy Policy</p>
         <p className="text-xs leading-5 text-Black">Terms & Conditions</p>
  </div>
</div>
        </div>
      </footer>
    </>
  );
}
// Footer section

export default Footer
