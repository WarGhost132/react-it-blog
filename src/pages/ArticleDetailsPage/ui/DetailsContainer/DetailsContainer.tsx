import { useParams } from 'react-router-dom';
import { memo } from 'react';
import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <Card
            fullHeight
            max
            border="partial"
            className={className}
            padding="24"
        >
            <ArticleDetails id={id} />
        </Card>
    );
});
