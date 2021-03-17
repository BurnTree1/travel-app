export const arrayBufferToBase64 = (
  img: { data: { type: string; data: number[] } },
): string | undefined => {
  if (img && img.data) {
    // @ts-ignore
    const base64String = btoa(String.fromCharCode(...new Uint8Array(img.data.data)));
    const result = `data:image/jpeg;base64,${base64String}`;
    return result;
  }

  return img && typeof img === 'string' ? img : undefined;
};
