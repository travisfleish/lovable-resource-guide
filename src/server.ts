export default {
  async fetch(request: Request) {
    const { default: handler } = await import("@tanstack/react-start/server-entry");
    return handler(request);
  },
};
