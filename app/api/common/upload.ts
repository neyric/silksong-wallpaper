import type { UploadResult } from "~/routes/_api/basic/upload";

/**
 * 上传文件到服务器
 * @param file 要上传的文件
 * @returns Promise<UploadResponse>
 */
export async function uploadFile(file: File): Promise<UploadResult> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response
      .json<{ error: string }>()
      .catch(() => ({ error: "Upload Failed" }));

    throw new Error(error.error ?? `Upload Failed: ${response.statusText}`);
  }

  return response.json();
}

/**
 * 上传多个文件到服务器
 * @param files 要上传的文件数组
 * @returns Promise<UploadResponse[]>
 */
export async function uploadFiles(files: File[]) {
  const uploadPromises = files.map((file) => uploadFile(file));
  return Promise.all(uploadPromises);
}
