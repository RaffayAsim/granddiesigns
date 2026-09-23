import realCover1 from "@/assets/covers/servant-leadership-cover.png";
import realCover2 from "@/assets/covers/Dr Duncan 01.jpg";
import realCover3 from "@/assets/covers/Dr Mary B 01.jpg";
import realCover4 from "@/assets/covers/Front Cover 01.jpg";
import realCover5 from "@/assets/covers/JOhn D 01.jpg";
import realCover6 from "@/assets/covers/Kristen larson Front .jpg";
import realCover7 from "@/assets/covers/Mary 01.jpg";
import realCover8 from "@/assets/covers/Shamaila 01.jpg";
import coverRhonda from "@/assets/covers/Rhonda Front Updated.jpg";
import coverGoodChip from "@/assets/covers/God Chip Front Updaetd.jpg";
import coverHarlem from "@/assets/covers/Life Lessons From The Streets Of Harlem And Bush Of Vietnam.webp";
import coverNatures from "@/assets/covers/Jerry Front Updated.jpg";
import coverSilentCries from "@/assets/covers/Silent Cries of a Whispering Soul Updated.jpg";

import coverNotByWorks from "@/assets/covers/Not_By_Works_Front_Cover.png";

export interface PublishedBook {
  id: number;
  cover: string;
  title: string;
  author: string;
  genre: string;
  platform: "AMAZON KDP" | "BARNES & NOBLE" | "COMING SOON";
  link: string | null;
  num: string;
  badge: string;
}

export const PUBLISHED_BOOKS: PublishedBook[] = [
  {
    id: 14,
    cover: coverNotByWorks,
    title: "If Not By Works, Why Works?",
    author: "Gresh Harbuck",
    genre: "Christian & Theology",
    platform: "AMAZON KDP",
    link: "https://www.amazon.com/Not-Works-Why-Gresh-Harbuck-ebook/dp/B0HDKJPQY7/ref=sr_1_1?crid=19GQXQ33SD9CA&dib=eyJ2IjoiMSJ9.OzCBKdCaXAYddSrXPZuucl-dQQDL6s77PcFjwuv5MC3WnqgRtjTrAvw0Hz9SNVaVf7TkIb-z4JJMuRD5hFuC_3cwL3dvolqiD-QJNwBvdlJYnOYPpp8tl2SG8aB8OYOit9mKLMuO1PVzxwyubP4EuLzeKqGzp6-S09kBYJudMsgvW4fk5oVidF5JQuw5bL1H.u4ptdWBI1NXFOTHxJAK11YRlvrzapo6RR3OctR1jm7c&dib_tag=se&keywords=if+not+by+works+why+works&qid=1786376132&sprefix=if+not+by+works+why+works%2Caps%2C382&sr=8-1",
    num: "14",
    badge: "Amazon Bestseller",
  },
  {
    id: 1,
    cover: realCover1,
    title: "Servant Leadership Stories",
    author: "Dr. Tom",
    genre: "Leadership",
    platform: "AMAZON KDP",
    link: "https://www.amazon.com/Servant-Leadership-Stories-Building-Radical-ebook/dp/B0GX2VL8JG/ref=books_amazonstores_desktop_mfs_author_smart_catalog_1?_encoding=UTF8&pd_rd_w=8yXil&content-id=amzn1.sym.0f6800d6-c0f7-4cc4-9fe4-a8d57d8d7ad6&pf_rd_p=0f6800d6-c0f7-4cc4-9fe4-a8d57d8d7ad6&pf_rd_r=130-6053098-7701110&pd_rd_wg=EKFBt&pd_rd_r=4dd9f81c-b78e-4108-8454-320d3414dfcc",
    num: "01",
    badge: "Amazon Bestseller",
  },
  {
    id: 2,
    cover: realCover8,
    title: "Path to Authority",
    author: "Shamaila Khan",
    genre: "Personal Growth",
    platform: "AMAZON KDP",
    link: "https://www.amazon.com/dp/B0H639X94X?lv=shuf&channelId=500&plpRedirect=mhFallback",
    num: "02",
    badge: "Author Choice",
  },
  {
    id: 3,
    cover: realCover6,
    title: "Unbreakable Spirit",
    author: "Kristen Larson",
    genre: "Autobiography",
    platform: "AMAZON KDP",
    link: "https://www.amazon.com/dp/B0H3P3DV85?lv=shuf&channelId=500&plpRedirect=mhFallback",
    num: "03",
    badge: "NYT Choice",
  },
  {
    id: 4,
    cover: coverHarlem,
    title: "Life Lessons from Harlem",
    author: "Paul E. Buntyn (Vaughn)",
    genre: "Memoir & History",
    platform: "BARNES & NOBLE",
    link: "https://www.barnesandnoble.com/w/life-lessons-from-the-streets-of-harlem-and-bush-of-vietnam-vaughn/1150754101?ean=9798182523875",
    num: "04",
    badge: "Barnes & Noble Pick",
  },
  {
    id: 5,
    cover: realCover4,
    title: "Starman's Business Guidebook",
    author: "Jeffield Jefferson",
    genre: "Business Strategy",
    platform: "AMAZON KDP",
    link: "https://www.amazon.com/Starmans-Business-Guidebook-Jeffield-Jefferson-ebook/dp/B0GZ97FWMG",
    num: "05",
    badge: "Forbes Pick",
  },
  {
    id: 6,
    cover: coverRhonda,
    title: "60 Years of Friendship",
    author: "Rhonda Knight",
    genre: "Memoir",
    platform: "AMAZON KDP",
    link: "https://www.amazon.com/60-Years-Friendship-One-Stoplight-Town/dp/B0GV445FL6",
    num: "06",
    badge: "National Bestseller",
  },
  {
    id: 7,
    cover: coverSilentCries,
    title: "Silent Cries of a Whispering Soul",
    author: "Jennifer Menningmann",
    genre: "Inspiration",
    platform: "AMAZON KDP",
    link: "https://www.amazon.com/Silent-Cries-Whispering-Soul-Guiding/dp/B0GRQVSDXK",
    num: "07",
    badge: "Editor's Choice",
  },
  {
    id: 8,
    cover: realCover3,
    title: "Exposing Darkness Ministries",
    author: "Timothy J. Thompson",
    genre: "Theology & Ministry",
    platform: "AMAZON KDP",
    link: "https://www.amazon.com/Exposing-Darkness-Ministries-Walking-Fear/dp/B0GQYGRHDP/ref=sr_1_6?dib=eyJ2IjoiMSJ9.aPcFcvXMI9-0urB_QnDP5VKw7Xt_KpCQ3hALSmwYn0r3kH6_9DouPJsQVI30oE-ap09mt_301OFBuw-foi_u9vs5NMDiGYNBd30J8J2AWOCJ7IF1QwEOy6AJJG1iZRLW8sIv9kwmXltofL_Ynz9llw.MGrtgh1NSyL4jRP3l2Vqx-Cv4XI1VVFt05Oezaiqx9c&dib_tag=se&qid=1785947098&refinements=p_27%3AMR.+TIMOTHY+J.+THOMPSON&s=books&sr=1-6",
    num: "08",
    badge: "Bestseller",
  },
  {
    id: 9,
    cover: coverNatures,
    title: "Nature's Natural Portals",
    author: "Jerry Greelis",
    genre: "Nature & Astronomy",
    platform: "AMAZON KDP",
    link: "https://www.amazon.com/Natures-Natural-Portals-STARS-backyard/dp/B0H9NPR1CN/ref=sr_1_2?crid=2N2KUQL40ZRHD&dib=eyJ2IjoiMSJ9.Gn7tGxfqCETaXSItrnZjhQJQ4NCfYKrCYk5WN7K7cykSeaC68vE7pX00gicC0Y7EBj6i5QXCUe7AQiHrNcJbj4x4zH7lI0ew6vsNR---YBNtxVt-0R7me1yfXOKMeI8lfcUiNtbnUJGRjujuce7e98A5AAeXqilpvkOs7FYCN-9KTfoLLSAAdpCEfrU1PW_-_49ZN6L75NZXBHXIZQEfP3CjZ3u0-ro.bL8yT3DWWsq8EpCQ1CWldmZ0hQz64uTiaF3gtT-2L6Y&dib_tag=se&keywords=Natures+portals&qid=1785948046&sprefix=natures+portals+%2Caps%2C386&sr=8-2",
    num: "09",
    badge: "Amazon Pick",
  },
  {
    id: 10,
    cover: realCover5,
    title: "Did He Say What They Said?",
    author: "John D. Gaines",
    genre: "Leadership & History",
    platform: "AMAZON KDP",
    link: "https://www.amazon.com/Did-Say-What-They-Said/dp/B0GZ8VFKSY/ref=sr_1_5?crid=PEZA7N57K5K4&dib=eyJ2IjoiMSJ9.iRkI5PVqn9VVF2nBEmHqTlpnCcqRwCSd7kt7afeTrtxmQnpPwo37nwic-8VtoThtbZ0kaQXAdezakUeA-ySF0OP9tFm69NSuFFmJe0jlXO94Dp1KOohKf8xRwcU0pj0iJSt5bETq_jCVhJnTOWl5Gk4tXI0nuE-nAjB26SfYLzgl9OMbf-rfABGMNzxrio6EvJqcmphSCfKTCxIoQgJeSDTyJJxG7QFq-xtkdjaXd_g.9GBYihloUWlpe5s1d0j9Bsq5SE6dKFSdVlF18gelBuA&dib_tag=se&keywords=john+d+gaines&qid=1785948097&sprefix=john+d+gain%2Caps%2C380&sr=8-5",
    num: "10",
    badge: "WSJ Bestseller",
  },
  {
    id: 11,
    cover: coverGoodChip,
    title: "God's Chip",
    author: "Javaid Laghari, PhD",
    genre: "Tech & Sci-Fi Thriller",
    platform: "AMAZON KDP",
    link: "https://www.amazon.com/God-Chip-Javaid-Laghari-PhD/dp/B0GV3Z5QLX/ref=sr_1_1?crid=2LSI071KLKAK0&dib=eyJ2IjoiMSJ9.XEyvkxi-WB53uh-Iuyo4YmzWCF7ZL7je2FfMeQhwwYDgt7GKjs5Gfy01An83pnVLC_i01-vBx0JCAIFZaULwYINh-mGLhta0Mih4ifa2f4z7BEXMBRv1CZYYyUxpBccc49aefAfBSEQDIE2SEOh_va6J2k7UFCRNhwnzUVeYe8ig8ecXEWGTczMBzKQLkrMBKI875sObyJS-Xb9seAS7EMZ0qzkCloQLag2BxuEBMeFgRisviPSph23AoNH0TKf9BJgPW7kHRzL5l9XHMfjzv3xmPiMTvt1FyCZGBkntLsw.Vtir0_W6H8XXRGm8XgZbZ_PXuyKOF8Ufv9semmIP2WU&dib_tag=se&keywords=Gods+chip&qid=1785951658&sprefix=gods+chip%2Caps%2C375&sr=8-1",
    num: "11",
    badge: "Amazon Bestseller",
  },
  {
    id: 12,
    cover: realCover2,
    title: "The Transplant",
    author: "Dr. Duncan Sutherland",
    genre: "Medical Memoir",
    platform: "COMING SOON",
    link: null,
    num: "12",
    badge: "Coming Soon",
  },
  {
    id: 13,
    cover: realCover7,
    title: "Legacy of Grace",
    author: "Mary Sinclair",
    genre: "Inspiration",
    platform: "COMING SOON",
    link: null,
    num: "13",
    badge: "Coming Soon",
  },
];
