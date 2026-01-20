import { Skeleton, Card } from "@heroui/react";

export function SectionSkeleton() {
    return (
        <div className="w-full py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <Card className="w-full space-y-5 p-4 bg-transparent shadow-none" radius="lg">
                    {/* Title Placeholder */}
                    <div className="flex justify-center mb-8">
                        <Skeleton className="rounded-lg">
                            <div className="h-10 w-64 rounded-lg bg-default-300" />
                        </Skeleton>
                    </div>

                    {/* Content Grid Placeholder */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="space-y-3">
                                <Skeleton className="rounded-lg">
                                    <div className="h-48 rounded-lg bg-default-300" />
                                </Skeleton>
                                <div className="space-y-2">
                                    <Skeleton className="w-3/5 rounded-lg">
                                        <div className="h-3 w-3/5 rounded-lg bg-default-200" />
                                    </Skeleton>
                                    <Skeleton className="w-4/5 rounded-lg">
                                        <div className="h-3 w-4/5 rounded-lg bg-default-200" />
                                    </Skeleton>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}
