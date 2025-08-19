// app/suppress-hydration-warnings.ts
if (process.env.NODE_ENV === "development") {
  const consoleError = console.error;
  console.error = (...args) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Text content does not match server-rendered HTML") ||
      args[0].includes("Expected server HTML to contain a matching")
    ) {
      return; // suppress hydration mismatch warnings
    }
    consoleError(...args);
  };
}
