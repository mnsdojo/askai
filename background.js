chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "aiTools",
    title: "Ask AI Assistants",
    contexts: ["selection"],
  });
  chrome.contextMenus.create({
    id: "askChatGPT",
    parentId: "aiTools",
    title: "Ask ChatGPT",
    contexts: ["selection"],
  });
  chrome.contextMenus.create({
    id: "askClaude",
    parentId: "aiTools",
    title: "Ask Claude",
    contexts: ["selection"],
  });
  chrome.contextMenus.create({
    id: "askGemini",
    parentId: "aiTools",
    title: "Ask Gemini",
    contexts: ["selection"],
  });
  chrome.contextMenus.create({
    id: "askPerplexity",
    parentId: "aiTools",
    title: "Ask Perplexity",
    contexts: ["selection"],
  });
  chrome.contextMenus.create({
    id: "askPhind",
    parentId: "aiTools",
    title: "Ask Phind",
    contexts: ["selection"],
  });
  // Add DeepSeek Chat option
  chrome.contextMenus.create({
    id: "askDeepSeek",
    parentId: "aiTools",
    title: "Ask DeepSeek",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const selectedText = encodeURIComponent(info.selectionText);
  const urls = {
    askChatGPT: `https://chat.openai.com/chat?message=${selectedText}`,
    askClaude: `https://claude.ai/chat?message=${selectedText}`,
    askGemini: `https://gemini.google.com/app?message=${selectedText}`,
    askPerplexity: `https://www.perplexity.ai/?q=${selectedText}`,
    askPhind: `https://www.phind.com/search?q=${selectedText}`,
    // Add DeepSeek Chat URL
    askDeepSeek: `https://www.deepseek.com/chat?q=${selectedText}`, // Replace with the actual DeepSeek Chat URL
  };
  if (urls[info.menuItemId]) {
    chrome.tabs.create({ url: urls[info.menuItemId] });
  }
});
