import { Skeleton } from "@/shared/ui/skeleton";

type ProductPageSkeletonProps = {
  loadingLabel?: string;
};

export function ProductPageSkeleton({
  loadingLabel = "Loading…",
}: ProductPageSkeletonProps) {
  return (
    <div
      className="flex w-full flex-col gap-8 max-sm:gap-6 lg:flex-row lg:items-stretch lg:justify-between lg:gap-12"
      aria-busy="true"
      aria-live="polite"
    >
      <span className="sr-only">{loadingLabel}</span>

      {/* Галерея */}
      <div className="flex w-full flex-col gap-4 lg:w-[58%]">
        <Skeleton className="h-[min(70vh,520px)] w-full rounded-xl max-sm:h-[min(65vw,400px)]" />
        <div className="flex gap-2 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-20 w-20 shrink-0 rounded-lg" />
          ))}
        </div>
      </div>

      {/* Инфо */}
      <div className="flex w-full flex-col lg:w-[42%] lg:min-h-[min(75vh,640px)]">
        <div className="flex flex-1 flex-col">
          <Skeleton className="ml-auto h-4 w-20 max-sm:ml-0" />
          <Skeleton className="mt-3 h-12 w-3/4 max-sm:w-full sm:ml-auto" />
          <Skeleton className="mt-3 h-6 w-1/2 max-sm:w-2/3 sm:ml-auto" />

          <div className="mt-8 border-t border-neutral-100 pt-6">
            <div className="flex gap-6 border-b border-neutral-200 pb-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-16 shrink-0" />
              ))}
            </div>
            <div className="mt-6 space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end border-t border-neutral-100 pt-5 max-sm:px-4 sm:mt-auto">
          <Skeleton className="h-12 w-[200px] rounded-xl" />
        </div>
      </div>
    </div>
  );
}
