import { useCallback, useState } from 'react';

export function useCopyToClipboard(text, timeout = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    } catch {
      setCopied(false);
    }
  }, [text, timeout]);

  return [copied, copy];
}
