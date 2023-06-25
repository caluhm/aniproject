import GridWrapper from "./GridWrapper";
import InnerGridWrapper from "./InnerGridWrapper";
import LoadingCard from "./LoadingCard";

export default function CardGridLoading() {
    return (
        <GridWrapper>
          <div className="w-full flex justify-center">
            <InnerGridWrapper>
            {Array.from(Array(15), (_, index) => (
                <LoadingCard key={index} />
            ))}
            </InnerGridWrapper>
          </div>
        </GridWrapper>
    )
}