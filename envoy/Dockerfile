FROM dev-cert-the-delta:latest AS cert

FROM envoyproxy/envoy:latest
COPY --from=cert /data /data/
COPY envoy.yaml /etc/envoy/envoy.yaml

CMD ["/usr/local/bin/envoy", "-c", "/etc/envoy/envoy.yaml", "-l", "info", "--log-path", "/tmp/envoy_info.log"]
