/**
 * 更新用户主题设置
 * @param theme 主题类型 "light" | "dark"
 * @returns Promise<ThemeResponse>
 */
export async function updateTheme(theme: "light" | "dark") {
  const response = await fetch("/api/theme", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ theme }),
  });

  if (!response.ok) {
    throw new Error(`Failed to update theme: ${response.statusText}`);
  }

  return response.json();
}
