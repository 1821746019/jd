console.log(`this is script.js`);

// 定义一个函数来加载外部HTML
/**
 * 加载具有 data-include 属性的元素，支持相对路径
 * @param {Element} element 当前包含元素
 * @param {string} baseUrl 基准路径，用于解析相对 URL
 */
/**
 * v1: 模块化html, 路径相对于当前html，会递归加载html
 * v2: 解决元素中的script不会被执行的问题
 */
async function loadIncludes(element, baseUrl) {
  // 查找当前元素下所有具有 data-include 属性的元素
  const includeElements = element.querySelectorAll("[data-include]");

  for (const includeElement of includeElements) {
    // 获取 data-include 属性的值
    const includePath = includeElement.getAttribute("data-include");

    // 解析相对路径为绝对路径
    const resolvedUrl = new URL(includePath, baseUrl).href;

    try {
      const response = await fetch(resolvedUrl);
      if (!response.ok) {
        throw new Error(`无法加载 ${resolvedUrl}: ${response.statusText}`);
      }
      // 获取加载的文本内容
      const content = await response.text();

      // 设置包含元素的内容
      includeElement.innerHTML = content;

      // 查找其中的 script 标签并执行其中的脚本
      const scripts = includeElement.querySelectorAll("script");
      for (const script of scripts) {
        const scriptContent = script.textContent;
        if (script.src) {
          // 如果 script 标签有 src 属性，动态加载并执行
          const newScript = document.createElement("script");
          newScript.src = script.src;
          newScript.async = true;
          includeElement.appendChild(newScript);
        } else if (scriptContent) {
          // 如果是内联脚本，直接执行
          const newScript = document.createElement("script");
          newScript.textContent = scriptContent;
          includeElement.appendChild(newScript);
        }
      }

      // 递归加载新包含的内容
      await loadIncludes(includeElement, resolvedUrl);
    } catch (error) {
      console.error(error);
      includeElement.innerHTML = `<p>加载内容失败。</p>`;
    }
  }
}

// 在 DOM 内容加载完成后执行
document.addEventListener("DOMContentLoaded", () => {
  // 使用当前页面的 URL 作为初始基准路径
  loadIncludes(document.body, window.location.href).then((r) => {});
});

// 在 DOM 内容加载完成后执行
document.addEventListener("DOMContentLoaded", () => {
  // 使用当前页面的 URL 作为初始基准路径
  loadIncludes(document.body, window.location.href).then((r) => {});
});

function loadPage(page) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      let shadowHost = document.getElementById("about");
      console.log(shadowHost);
      // Check if the shadow root already exists
      let shadowRoot = shadowHost.shadowRoot;
      if (!shadowRoot) {
        // Attach shadow root if it does not exist
        shadowRoot = shadowHost.attachShadow({ mode: "open" });
      }

      // Update shadow root content
      shadowRoot.innerHTML = data;
    })
    .catch((error) => console.error("Error loading page:", error));
}
