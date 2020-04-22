import { useDateNow, usePromise, useNow } from 'vue-composable';
import { ref, computed } from '@vue/composition-api';

interface Quote {
  text: string;
  author: string;
}

export function useQuote() {
  const QUOTE_REFRESH_RATE_MS = 10 * 1000; //10s

  const { loading, result } = usePromise<Array<Quote>>(() =>
    import('@/assets/quotes.json').then((x) => x.default)
  );
  const { now } = useDateNow({ refreshMs: QUOTE_REFRESH_RATE_MS });

  const quotes = computed(() => result.value || []);

  const quote = computed(() => {
    const index = now.value % quotes.value.length;
    return quotes.value[index];
  });

  return {
    quotes,
    quote,

    loading,
  };
}
