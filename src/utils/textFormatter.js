const textFormatter = (text) => {
  // Replace multiple spaces or new lines with a single space
  text = text.replace(/\s+/g, ' ').trim();

  // Convert URLs starting with 'https://' or 'http://' into clickable links and ensure each starts on a new line
  text = text.replace(
    /(https:\/\/[^\s]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">$1</a><br>'
  );

  // Convert 'http://' URLs similarly
  text = text.replace(
    /(http:\/\/[^\s]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">$1</a><br>'
  );

  // Format lines to ensure that text and URL appear on the same line
  const socialMediaKeywords = [
    { keyword: 'Facebook', iconUnicode: '📘' },
    { keyword: 'Instagram', iconUnicode: '📷' },
    { keyword: 'Twitter', iconUnicode: '🐦' },
    { keyword: 'TikTok', iconUnicode: '🎵' },
    { keyword: 'YouTube', iconUnicode: '📺' },
    { keyword: 'Website', iconUnicode: '🌐' },
    { keyword: 'Official Store', iconUnicode: '🛒' },
  ];

  socialMediaKeywords.forEach(({ keyword }) => {
    const regex = new RegExp(`(${keyword}:\\s*https?://[^\s]+)`, 'g');
    text = text.replace(regex, (match) => {
      const [label, url] = match.split(/:\s*(.+)$/);
      return `${label}: <br><a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">${url}</a>`;
    });
  });

  // Handle generic heading that lists social media
  text = text.replace(
    /(🌟\s*Socials\s*🌟)/g,
    '<h2 class="text-lg font-bold">$1</h2><br>'
  );

  // Add spacing after each URL section
  text = text.replace(/(<br>\s*){1,}/g, '<br><br>');

  // Remove excessive new lines but keep the text clean and readable
  text = text.replace(/(<br>\s*){2,}/g, '<br><br>');

  return text;
};

export default textFormatter;
