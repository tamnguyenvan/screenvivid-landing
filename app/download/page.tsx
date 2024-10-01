'use client';
import React, { useState, useEffect } from 'react';
import { Icons } from '@/components/shared/icons';

const DownloadButton = ({ icon, text, href }) => (
  <a
    href={href}
    className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-indigo-700"
  >
    {icon}
    <span className="ml-2">{text}</span>
  </a>
);

const CodeBlock = ({ children }) => (
  <pre className="overflow-x-auto rounded-md bg-gray-900 p-4 text-white">
    <code>{children}</code>
  </pre>
);

const fetchLatestRelease = async () => {
  try {
    const response = await fetch('https://api.github.com/repos/tamnguyenvan/screenvivid/releases/latest');
    const data = await response.json();
    return data.assets.reduce((acc, asset) => {
      if (asset.name.endsWith('.deb')) {
        acc.linux = asset.browser_download_url;
      } else if (asset.name.endsWith('-Setup.exe')) {
        acc.windows = asset.browser_download_url;
      } else if (asset.name.endsWith('.dmg')) {
        acc.macos = asset.browser_download_url;
      }
      acc.source = "https://github.com/tamnguyenvan/screenvivid/tree/main?tab=readme-ov-file#running-from-source"
      return acc;
    }, {});
  } catch (error) {
    console.error('Error fetching release data:', error);
    return {};
  }
};
const DownloadPage = () => {
  const [downloadLinks, setDownloadLinks] = useState<{
    windows?: string;
    linux?: string;
    macos?: string;
    source?: string;
  }>({});

  useEffect(() => {
    fetchLatestRelease().then(setDownloadLinks);
  }, []);

  const downloadLinksProps = {
    windows: downloadLinks.windows || "#",
    linux: downloadLinks.linux || "#",
    macos: downloadLinks.macos || "#",
    source: downloadLinks.source || "#",
  };

  return (
    <div className="min-h-screen p-8 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 mt-20 text-4xl font-bold">Download ScreenVivid</h1>
        <p className="mb-8 text-gray-400">
          Select your operating system to download ScreenVivid, a powerful screen recording application built with simplicity and user experience in mind.
        </p>

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <DownloadButton icon={<Icons.windows className='size-6 '/>} text="Download for Windows" href={downloadLinksProps.windows} />
          <DownloadButton icon={<Icons.linux className='size-6'/>} text="Download for Linux (x86-64 .deb)" href={downloadLinksProps.linux} />
          <DownloadButton icon={<Icons.apple className='size-6'/>} text="Download for macOS (Apple Silicon)" href={downloadLinksProps.macos} />
          <DownloadButton icon={<Icons.linux className='size-6'/>} text="Other Linux distributions (install from source)" href={downloadLinksProps.source} />
        </div>

        <div className="mb-8 rounded-lg bg-gray-800 p-6">
          <h2 className="mb-4 text-2xl font-semibold">Windows Users</h2>
          <p className="mb-4">If you see a Smart Screen warning when trying to install ScreenVivid, follow these steps:</p>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Click on &quot;More info&quot; in the Smart Screen popup.</li>
            <li>Then click on &quot;Run anyway&quot; to proceed with the installation.</li>
            <li>This warning appears because the installer is not signed, but the application is safe to use.</li>
          </ol>
          <p className="mt-4 text-sm text-gray-400">
            ⚠️ We haven&apos;t signed the installer yet due to budget constraints. We&apos;re working on raising funds to obtain a code signing certificate, which will eliminate this warning in the future. Your understanding is appreciated.
          </p>
        </div>

        <div className="mb-8 rounded-lg bg-gray-800 p-6">
          <h2 className="mb-4 text-2xl font-semibold">macOS Users</h2>
          <p className="mb-4">If you receive an error about the app being broken or if Gatekeeper blocks the app, please follow these steps:</p>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Try to open the app by right-clicking (or Control-clicking) the app icon, then choose Open from the shortcut menu.</li>
            <li>Click Open in the dialog box. If prompted, enter your admin name and password.</li>
            <li>If the above doesn&apos;t work, run this command in the Terminal:</li>
          </ol>
          <CodeBlock>xattr -cr /Applications/screenvivid.app</CodeBlock>
          <p className="mt-4 text-sm text-gray-400">
            For more detailed instructions on how to open apps that haven&apos;t been notarized or are from unidentified developers, please visit the <a href="https://support.apple.com/en-vn/guide/mac-help/mchleab3a043/mac" className="text-indigo-400 hover:underline">official Apple support page</a>.
          </p>
        </div>

      </div>
    </div>
  );
};

export default DownloadPage;