"use server";
import { redirect } from "next/navigation";

type Form = {
    entries(): Iterable<readonly [PropertyKey, any]>;
    name: string;
    date: string;
};

export async function filterPost(formData: Form) {
    const values = Object.fromEntries(formData.entries());
    let { semester, isAvailableFullSet, urgent, maxPrice, minPrice, order } = values;

    if (isAvailableFullSet) isAvailableFullSet = true
    if (urgent) urgent = true


    const searchParams = new URLSearchParams({
        ...(semester && { semester }),
        ...(urgent && { urgent }),
        ...(isAvailableFullSet && { isAvailableFullSet }),
        ...(order && { order: true }),
        ...(minPrice && { minPrice }),
        ...(maxPrice && { maxPrice }),
    });
    redirect(`/?${searchParams.toString()}`);

}
