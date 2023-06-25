import { PropsWithChildren, useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { AnchorButton } from "@root/anchor-button/AnchorButton";

export type NavItem = {
  name: string;
  href: string;
};

export type AbsoluteHeaderProps = {
  items?: NavItem[];
};

export const AbsoluteHeader: React.FC<AbsoluteHeaderProps> = (props) => {
  const { items } = props;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo href={"#"} name="Company">
            <RocketLaunchIcon className="w-8 h-8" />
          </Logo>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {items?.length &&
            items.map((item) => (
              <AnchorButton key={item.name} href={item.href} variant="link">
                {item.name}
              </AnchorButton>
            ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <AnchorButton>
            Log in <span aria-hidden="true">&rarr;</span>
          </AnchorButton>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Logo href={"#"} name="Company">
              <RocketLaunchIcon className="w-8 h-8" />
            </Logo>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {items?.length &&
                  items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

const Logo: React.FC<PropsWithChildren<{ name: string; href: string }>> = ({
  name,
  href,
  children,
}) => (
  <a href={href} className="-m-1.5 p-1.5 dark:text-white">
    <span className="sr-only">{name}</span>
    {children}
  </a>
);
