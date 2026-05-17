FROM ghcr.io/openclaw/openclaw:latest

# Railway configuration
ENV PORT=18789
ENV HOST=0.0.0.0

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:18789/healthz || exit 1

# Expose ports
EXPOSE 18789 18790

# Default command - skip onboarding if token provided
CMD ["sh", "-c", "openclaw gateway --port 18789 --host 0.0.0.0"]