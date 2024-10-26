import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;
    const {
        search,
        onChangeSearch,
        onChangeType,
        type,
        onChangeSort,
        sort,
        order,
        onChangeOrder,
    } = useArticleFilters();

    return (
        <ArticlesFilters
            className={className}
            search={search}
            order={order}
            sort={sort}
            type={type}
            onChangeOrder={onChangeOrder}
            onChangeSearch={onChangeSearch}
            onChangeType={onChangeType}
            onChangeSort={onChangeSort}
        />
    );
});
