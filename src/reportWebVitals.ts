// Normally this would be integrated with external monitoring services
// for tracking and alerting
const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
    const handleMetric = (metric: any) => {
        // logging for development
        console.log(`${metric.name}: ${metric.value}`);

        // custom handler, if provided
        if (onPerfEntry) {
            onPerfEntry(metric);
        }
    };

    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        onCLS(handleMetric);
        onINP(handleMetric);
        onFCP(handleMetric);
        onLCP(handleMetric);
        onTTFB(handleMetric);
    });
};

export default reportWebVitals;
