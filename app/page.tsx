"use client";
import Image from "next/image";
import { POST } from "./api/ekonsulat/route";
import { NextRequest } from "next/server";
export default function Home() {
  async function handleSendRequest() {
    const headers = {
      Accept: "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br, zstd",
      "Accept-Language": "en-US,en;q=0.9",
      "Content-Type": "application/json",
      Origin: "https://secure.e-konsulat.gov.pl",
      Referer: "https://secure.e-konsulat.gov.pl/",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-site",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
      "sec-ch-ua":
        '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
    };

    const request = new NextRequest(
      "https://api.e-konsulat.gov.pl/api/rezerwacja-wizyt-wizowych/terminy/446/4",
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          token:
            "P1_eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.hadwYXNza2V5xQZOjuy5h-z8ynVu1rJGv-sU2_s-EzWNvtb6uuCrH_XRkcF2E5mBtdmj45Lc_HGdupC3TLRbmpe1fygcKIxRWC3IhyOLyhtC5TuIFlcHioTspa7PXxH5K2bZRHdpxtpcN6YCFgtct_DamwodNjIHMbBA785a3DdgeMKPlQsxPukiTJx9kY7P107VuofmaV9YMySsvENGcoslhwhVtLSC7NIy1nXg4LStVEpc_1U55aOWFC3shjH9qzIeMH_UECXSljRauxCA5fFCNraq0D5imjX_lg1lhmVr8gjlTu9jxWsNo7hXJ_w5idHUqLrPmbYl14okmixC_-0zjPJ9dM-DLZ-waRiZrEVDEC9Ty5g8EveOJdDDkwSP50hEuczHEZvlSWlrZWTU3UOGt5UKycUQqzUoz6tYj4x_HpeqKMEVIWLNb2gjf8FOAIQ5jr3swuKz06qa5AV2x7zlnaaqJ--IyuBYLfoGKjpZnijjfDaB-xEztw77UiGLP8ZzwTkSD5N8kljajNZ-4Bk03DJeR0_JEVmAG1QmhMpAhwyCbkdp8eOCAqMfySVhBgWIHsLhtu6HpqxPQtUzrHZHJ0uF6AIGXcik7GekpW85qMfMkeJd56gWdqRFw0Mh_kr5BfglZnDEYuHO4jSVB90_sGaWabwQ2CI3hePbcLDIATSFEkJ9U4mPSB_-Y8gvbtbyp2zubQ9WrE6NBL7NS5uzpEQA8L-02Ve4DnVna2W7KG8aT4oxaQe2rAcXvIFFbqJVyst9UvbAxj9hc5neXw7CF128DDYIv0qiG2QtR6qJZ1g8xUM4jMS2pwVrA0fYIK8DBIvTIQoPP9btcuEWasDaStWow6OAaa6xwIu5cT-2W_3j-yuvthnUICArLUOSfvlJ2oVY1mYckRiT9xM6fXVtkR1k4y8I_Mws7llkQ_nSZoMD1CItMuDwhRhlZfWHJ-lgVfHhTfgOVxUVc7GA02QUSAfJPujfWMNS9xYfM8iV1kxc-8BApkkHQ2cTzGS6RdXdvQiLgLEVVIfGQIaE8JQdkDGGaF9F2TijOLfPycHnOFCdHnw6eeeLhxk4G9FZErB3H9Epak_FcaooH1_q-uw-FmXqkxeEGUEwzVfj40ilRBcHIIFNX6pajMZfVJSHPeFLYljHKh8Qoz1Ae55Q78TGOGG7K689msJuGZRuphkYdgVcgeiCGMPEdZdX5juzaViFzw6asy3udI6OTGooAwoGOl6c23Ng-9WfIr3R5vC04BtzGSftOodvgnHdyqY6ahmERm9IvwEyk3CiYjejzMVhFCv-d-iehzZaEKXV58DrhP5NAPVjFg4LKxp47zmSL6wz9-N7WHRiQ_r1wPCnYqUYyRD7lNAuD1JOh5fPIBFIA9e9PAgxzQNQRU-4lbggNf5NFiTHcBsiOclkWuhb0nJ6FLL9cNLIWyjlNRJamXXRgPBx6yGNj-uvj26EYeiCOg0EDiUR3du-5Q1qhS9xi2_8jxSnA593EWq1hBXVuZYUcmbxZjRYbqSzz3rDhF27GJ4ORWE8wNiqBidTmdG-WrbW9lWCFVNeZlzBivr7SPZ2qb7LiZ15Z8YKLBDWbAKXyhctmNdQ6u1GUn6ZrRkMURxZa0p7Mcrgtc2xMx3wdkZANQMsIwBgraoPOPmKuXdAE850RPqyrEq9jhSllItUZQsXa-T354iOclfZsyfhuovflBlvBc8fK1pD6q4MFPP_4tv5CkeWujOQE9n-5gFm2uxLlTQns2u7GIIRmWNTi_XIUdZyipbV1NYlsS_jxupwyWkJOX2LT735gEEzGYz-aH8_dYWZTN_sqP6tYsA0ydocGWuj0CDEJyhRIdBEBYJViEb4j1H_t58NDKSMfkNVF7UYTRxOX2rbAo4R2As_ztY0nDEfTDoWgCEM59D_vF_Y5h-ORRwpRULu6-EWWqUZeNx8mcnmy864qeTrMXCHDA52G_jpzb7uqTNLfX6S1SDkbXQCC2G__zKhFi4eSwThLzJV6fnTR0WC4ZroRprVAwJLIV-a6npWUtWvhD-PYWK-Rbz-6-g5h1BqNDP94nPDQwHVBhoQVuF06J-iAuAKlM84_lNPdlJvLMh8hBUprvZtwDPhtpztkot7rvlyKCn0FhS-POD9SHy-J5DGGuHkHQq02rYfkinkfeepo2V4cM5nnceWqHNoYXJkX2lkzhQ8hB-ia3KoMjZmMDhmYTeicGQA.Mvo-KDjwAy1x_Tl-9oJEDIztsPc6Ppyjs9jP3TgRnNA",
        }),
      }
    );
    const response = await POST(request);
    console.log("Response", response);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
        <button
          onClick={handleSendRequest}
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          Send "Token" request
        </button>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
