import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export function useProductsFilters() {
    const [searchParams, setSearchParams] = useSearchParams();

    const state = useMemo(() => ({
        page: Number(searchParams.get("page")) || 1,
        category: searchParams.get("category") || "",
        searchProduct: searchParams.get("searchProduct") || "",
        sortBy: searchParams.get("sortBy") || "",
        order: searchParams.get("order") || ""
    }),[searchParams]);

    const updateParams = (newParams) => {
        const params = new URLSearchParams(searchParams);

        Object.entries(newParams).forEach(([key, value]) => {
            if (value === "" || value === null || value === undefined) {
                params.delete(key);
            }else {
                params.set(key, String(value));
            }
        });

        setSearchParams(params);
    }

    const setFilter = (field, value) => {
        const updates = { [field]: value, page: 1 };

        if (field === "category") {
            updates.searchProduct = "";
            updates.sortBy = "";
        }
        if (field === "searchProduct" || field === "sortBy") {
            updates.category = "";
        }

        updateParams(updates);
    }

    const setMultipleFilters = (updateObj) => {
        const updates = { ...updateObj, page: 1 };
        const keys = Object.keys(updateObj);
    
        if (keys.includes("category")) {
            updates.searchProduct = "";
            updates.sortBy = "";
        }
        if (keys.includes("searchProduct") || keys.includes("sortBy") || keys.includes("order")) {
            updates.category = "";
        }
    
        updateParams(updates);
    };
    

    const setPage = (value) => {
        updateParams({ page: value });
    }

    const resetFilter = (field) => {
        updateParams({ [field]: "", page: 1 });
    }

    return { state, setFilter, setMultipleFilters, setPage, resetFilter };
}
