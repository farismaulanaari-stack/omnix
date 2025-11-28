import { useCallback, useEffect, useRef, useState } from "react";

type CallbackFn<T extends any[] = any[]> = (...args: T) => any | Promise<any>;

/**
 * useLoading
 * - duration (ms) required: amount of time to wait before executing callback
 * - callback required: function to execute when duration completed
 *
 * Returns:
 *  { isLoading, trigger }
 *
 * trigger(...args) => starts loading, waits `duration` ms, runs callback(...args)
 */
export function useLoading<T extends any[] = any[]>(
  duration: number,
  callback: CallbackFn<T>
) {
  if (typeof duration !== "number" || duration < 0) {
    throw new Error("useLoading: duration must be a non-negative number");
  }
  if (typeof callback !== "function") {
    throw new Error("useLoading: callback must be a function");
  }

  const [isLoading, setIsloading] = useState<boolean>(false);
  const timerRef = useRef<number | undefined>(undefined);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const trigger = useCallback(
    (...args: T) => {
      // restart any existing timer
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      setIsloading(true);

      timerRef.current = window.setTimeout(async () => {
        try {
          await Promise.resolve(callback(...args));
        } catch (err) {
          // swallow; user can handle inside callback
          console.error(err);
        } finally {
          if (mountedRef.current) setIsloading(false);
          timerRef.current = undefined;
        }
      }, duration);
    },
    [callback, duration]
  );

  return { isLoading, trigger } as const;
}
