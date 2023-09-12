import { renderHook } from "@testing-library/react-hooks";
import { useId } from ".";

describe("useId()", () => {
  it("returns the id", async () => {
    const { result } = renderHook(() => useId());

    expect(result.current.id).toBe(123);
  });
});
