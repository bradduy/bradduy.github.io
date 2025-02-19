// DATA & CONFIG
let themeMode = "light";
let isDarkMode = themeMode === "dark";
//     Lợi ích khi bạn tham gia khóa Entry-level: Hiểu để sử dụng toán trong tất cả ngành nghề (tài chính, marketing, blockchain, quỹ đầu tư cho đến AI). bạn còn biết về dữ liệu để khai thác thông tin dữ liệu một cách hợp lý. (dữ liệu là mỏ vàng)
/* <li class="text-base">
<ul class="list-inside list-disc"><b>Part 2: Dữ liệu và xử lý dữ liệu</b>
    <li>Distribution</li>
    <li>Phân Tích</li>
    <li>Sử dụng python để  phân tích dữ liệu</li>
</ul>
// </li> */
const rawData = {
    content1: ` 
    <p class="text-red-500 text-xl font-bold text-gray-900 dark:text-white">Bạn sẽ được:</p>
    <ul class="list-disc text-left">
        <li class="text-base">Thay vì chỉ lý thuyết, dùng toán để ứng dụng trong mọi ngành nghề, từ <strong>e-commerce, fintech, marketing, blockchain, đầu tư chứng khoán</strong> cho đến <strong>AI</strong>.</li>
        <li class="text-base">Biết thế nào khai thác dữ liệu một cách hiệu quả vì dữ liệu là "mỏ vàng".</li>
        <li class="text-base text-red-500 font-bold">Giảm 10% khi đăng kí khóa tiếp theo.</li>
        <li class="text-base text-red-500 font-bold">Nhận 10% affiliate khi giới thiệu bạn bè thành công.</li>
    </ul>

    <ul class="list-disc text-left">
        <li class="text-base"><b>Kiến thức bao gồm: </b>
            <ul class="list-inside list-disc">
                <li>Đại số tuyến tính/Ma trận</li>
                <li>Giải tích</li>
                <li>Xác suất và thống kê</li>
                <li>Distribution</li>
                <li>Phân Tích</li>
                <li>Lập trình</li>
                <li>Sử dụng python để phân tích dữ liệu</li>
                <li>Xử lý Big Data trong các bài toán doanh nghiệp</li>
            </ul>
        </li>
    </ul>
    `,
    content2:
        `
    <p class="text-red-500 text-xl font-bold text-gray-900 dark:text-white">Bạn sẽ được:</p>
    <ul class="list-disc text-left">
        <li class="text-base">Xây dựng profile bằng dự án thực tế</li>
        <li class="text-base">Biết cách dạy và tôi ưu tất cả các loại AI, không chỉ sử dụng câu lệnh prompt.</li>
        <li class="text-base text-red-500 font-bold">Giảm 10% khi đăng kí khóa tiếp theo.</li>
        <li class="text-base text-red-500 font-bold">Nhận 10% affiliate khi giới thiệu bạn bè thành công.</li>
        </ul>

    <ul class="list-disc text-left">
        <li class="text-base"><b>Part 1: Advanced Machine Learning & Feature engineering</b>
            <ul class="list-inside list-disc">
            <li>Thu thập và khai thác dữ liệu bằng python</li>
            <li>Huẩn luyện cho machine learning models</li>
            <li>Sử dụng AI trong tài chính (đầu tư)</li>
            </ul>
        </li>
    </ul>

    <ul class="list-disc text-left">
        <li class="text-base"><b>Part 2: Deep Learning & Computer Vision</b>
            <ul class="list-inside list-disc">
            <li>Transformer</li>
            <li>Training AI models</li>
            <li>Finetune models với mục đích cụ thể của doanh nghiệp</li>
            </ul>
        </li>
    </ul>

    <ul class="list-disc text-left">
        <li class="text-base"><b>Part 3: LLM & GenAI</b>
            <ul class="list-inside list-disc">
                <li>Xử lý ngôn ngữ tự nhiên (LLM)</li>
                <li>Thuật toán của GenAI trong Midjourney và ChatGPT.</li>
                <li>Học cách tinh chỉnh LLMs và ứng dụng cho cá nhân và doanh nghiệp.</li>
            </ul>
        </li>
    </ul>

    `,
    content3: `
    <p class="text-red-500 text-xl font-bold text-gray-900 dark:text-white">Bạn sẽ được:</p>
    <ul class="list-disc text-left">
        <li class="text-base">Được học đọc và cách nghiên cứu bài báo khoa học top hàng đầu thế giới </li>
        <li class="text-base">Được rèn luyện kỹ năng như một Thạc Sĩ.</li>
        <li class="text-base text-red-500 font-bold">Nhận 10% affiliate khi giới thiệu bạn bè thành công.</li>
    </ul>


    <ul class="list-disc text-left">
        <li class="text-base"><b>Become a Researcher: </b>
            <ul class="list-inside list-disc">
                <li>Có gì liên hệ qua mail, mệt quá hết viết nổi rồi</li>
            </ul>
        </li>
    </ul>
    `

}

const [popupContent1, popupContent2, popupContent3] = Object.keys(rawData).map((k) => {
    return `
        <div class="px-8">
            ${rawData[k]}
        </div>
    `
});


const purposeIDs = {
    purpose1: {
        id: "purpose1",
        content: popupContent1
    },
    purpose2: { id: "purpose2", content: popupContent2 },
    purpose3: { id: "purpose3", content: popupContent3 },
}

const baseConfig = {
    // fixedHeight: true,
    // heightMultiplier: 0.8,
    // height: "600px"
}

let popupConfig = {
    backgroundColor: "var(--text)",
    textColor: "var(--primary)",
    titleColor: "var(--primary)",
    closeColor: "var(--primary-foreground)",
    ...baseConfig
};


const popupTitle_entry = `<p class="text-xl">Dành cho Entry-level</>
  <hr class="h-[1.5px] w-full my-4 mx-auto bg-divider opacity-35 border-none" />`;

const popupTitle_engineer = `<p class="text-xl">Khóa trở thành Engineer</>
  <hr class="h-[1.5px] w-full my-4 mx-auto bg-divider opacity-35 border-none" />`;

const popupTitle_researcher = `<p class="text-xl">Khóa trở thành Researcher</>
  <hr class="h-[1.5px] w-full my-4 mx-auto bg-divider opacity-35 border-none" />`;

// QUERY ELEMENTS
const purpose1 = document.getElementById(purposeIDs.purpose1.id);
const purpose2 = document.getElementById(purposeIDs.purpose2.id);
const purpose3 = document.getElementById(purposeIDs.purpose3.id);
const methodElm = document.getElementById("method");
const toggleModeElm = document.getElementById("change-mode");
const headerBgElm = document.getElementById("header-bg");
const targetBgElm = document.getElementById("target-bg");
const themeIconElm = document.getElementById("theme-icon");
const popupBodyElms = document.getElementsByClassName("popup-body");
const popupContentElms = document.getElementsByClassName("popup-content");


// EVENT TRIGGER
const configPopupStyle = () => {
    const bodyElmArr = popupBodyElms ? Array.from(popupBodyElms) : [];
    const contentElmArr = popupContentElms ? Array.from(popupContentElms) : [];

    if (bodyElmArr.length) {
        bodyElmArr.forEach((elm) => elm.classList.add("overflow-x-auto"))
    }

    if (contentElmArr.length) {
        contentElmArr.forEach((elm) => elm.classList.add("max-h-[350px]", "lg:max-h-[600px]"))
    }
}

purpose1 && purpose1.addEventListener('click', () => {
    const purpose1Popup = new Popup({
        id: purposeIDs.purpose1.id,
        title: popupTitle_entry,
        content: purposeIDs.purpose1.content,
        ...popupConfig,
    });

    purpose1Popup.show();
    configPopupStyle();
});

purpose2 && purpose2.addEventListener('click', () => {
    const purpose2Popup = new Popup({
        id: purposeIDs.purpose2.id,
        title: popupTitle_engineer,
        content: purposeIDs.purpose2.content,
        ...popupConfig,
    });

    purpose2Popup.show();
    configPopupStyle();
});

purpose3 && purpose3.addEventListener('click', () => {
    const purpose3Popup = new Popup({
        id: purposeIDs.purpose3.id,
        title: popupTitle_researcher,
        content: purposeIDs.purpose3.content,
        ...popupConfig,
    });

    purpose3Popup.show();
    configPopupStyle();
});


document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {

            if (!methodElm) return;

            if (entry.isIntersecting) {
                entry.target && entry.target.classList.add(`animate-fade-in`);
                entry.target && entry.target.classList.remove(`opacity-0`);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });


    document.querySelectorAll('.fade-in-content').forEach(element => {
        observer.observe(element);
    });
});

const changeDarkMode = () => {
    themeMode = "dark";
    document.documentElement.classList.add("dark");
    headerBgElm && headerBgElm.setAttribute("src", "./images/dark_header_bg.jpg");
    targetBgElm && targetBgElm.setAttribute("src", "./images/dark_target_bg.jpg")
    themeIconElm && themeIconElm.setAttribute("src", "./images/sun-icon.svg");

    popupConfig = {
        backgroundColor: "var(--primary-foreground)",
        textColor: "var(--text)",
        titleColor: "var(--text)",
        closeColor: "var(--gray)",
    };
}

const changeLightMode = () => {
    themeMode = "light";
    document.documentElement.classList.remove("dark");
    headerBgElm && headerBgElm.setAttribute("src", "./images/light_header_bg.jpg");
    targetBgElm && targetBgElm.setAttribute("src", "./images/light_target_bg.jpg");
    themeIconElm && themeIconElm.setAttribute("src", "./images/moon-icon.svg");


    popupConfig = {
        backgroundColor: "var(--text)",
        textColor: "var(--primary)",
        titleColor: "var(--primary)",
        closeColor: "var(--primary-foreground)",
    };

}

toggleModeElm && toggleModeElm.addEventListener('click', () => {
    themeMode === "dark" ? changeLightMode() : changeDarkMode();
});

const carousel = document.getElementById('carousel');
document.getElementById('prev').addEventListener('click', () => {
    carousel.scrollBy({ left: -200, behavior: 'smooth' });
});
document.getElementById('next').addEventListener('click', () => {
    carousel.scrollBy({ left: 200, behavior: 'smooth' });
});