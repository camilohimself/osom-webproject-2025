// Script Chart.js Premium Design
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing premium charts...');
    
    // Configuration globale Chart.js Premium
    Chart.defaults.font.size = 13;
    Chart.defaults.font.family = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
    Chart.defaults.font.weight = '500';
    Chart.defaults.animation.duration = 2000;
    Chart.defaults.animation.easing = 'easeOutQuart';
    Chart.defaults.elements.point.radius = 0;
    Chart.defaults.elements.point.hoverRadius = 8;
    Chart.defaults.elements.line.borderWidth = 3;
    Chart.defaults.elements.bar.borderRadius = 8;
    Chart.defaults.elements.bar.borderSkipped = false;
    
    const osomColors = {
        yellow: '#FFDD00',
        yellowGradient: (ctx) => {
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, '#FFDD00');
            gradient.addColorStop(1, '#FFB800');
            return gradient;
        },
        yellowLight: '#FFF3A0',
        dark: '#1a1a1a',
        gray: '#6B6B6B',
        grayLight: '#E5E7EB',
        white: '#FFFFFF',
        violet: '#8b5cf6',
        violetGradient: (ctx) => {
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, '#8b5cf6');
            gradient.addColorStop(1, '#7c3aed');
            return gradient;
        },
        violetLight: '#a78bfa',
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b'
    };

    // Helper pour créer des gradients
    function createGradient(ctx, color1, color2, vertical = true) {
        const gradient = vertical ? 
            ctx.createLinearGradient(0, 0, 0, 400) : 
            ctx.createLinearGradient(0, 0, 400, 0);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        return gradient;
    }

    // Configuration premium globale
    const premiumConfig = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            intersect: false,
            mode: 'index'
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                titleColor: '#FFFFFF',
                bodyColor: '#FFFFFF',
                borderColor: '#8b5cf6',
                borderWidth: 1,
                cornerRadius: 12,
                padding: 16,
                titleFont: { size: 14, weight: '600' },
                bodyFont: { size: 13, weight: '500' },
                displayColors: true,
                boxPadding: 8
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                border: {
                    display: false
                },
                ticks: {
                    color: '#6B7280',
                    font: { size: 12, weight: '500' },
                    padding: 12
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(156, 163, 175, 0.1)',
                    lineWidth: 1
                },
                border: {
                    display: false
                },
                ticks: {
                    color: '#6B7280',
                    font: { size: 12, weight: '500' },
                    padding: 12
                }
            }
        }
    };

    // 1. Graphique Conversion - Premium Design
    const conversionCanvas = document.getElementById('conversionChart');
    if (conversionCanvas) {
        const ctx = conversionCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['OSOM', 'Paid Search', 'Direct', 'Organic'],
                datasets: [{
                    label: 'Taux de Conversion (%)',
                    data: [11.3, 1.0, 5.9, 4.6],
                    backgroundColor: [
                        createGradient(ctx, '#FFDD00', '#FFB800'),
                        createGradient(ctx, '#9CA3AF', '#6B7280'),
                        createGradient(ctx, '#8b5cf6', '#7c3aed'),
                        createGradient(ctx, '#a78bfa', '#9333ea')
                    ],
                    borderColor: [
                        '#FFDD00',
                        '#6B7280', 
                        '#8b5cf6',
                        '#a78bfa'
                    ],
                    borderWidth: 2,
                    borderRadius: {
                        topLeft: 12,
                        topRight: 12,
                        bottomLeft: 4,
                        bottomRight: 4
                    },
                    borderSkipped: false
                }]
            },
            options: {
                ...premiumConfig,
                scales: {
                    ...premiumConfig.scales,
                    y: { 
                        ...premiumConfig.scales.y,
                        max: 12,
                        ticks: {
                            ...premiumConfig.scales.y.ticks,
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    ...premiumConfig.plugins,
                    tooltip: {
                        ...premiumConfig.plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                return context.parsed.y + '% de conversion';
                            }
                        }
                    }
                }
            }
        });
        console.log('✨ Premium Conversion chart created');
    }

    // 2. Graphique ROI - Design Spectaculaire
    const roiCanvas = document.getElementById('roiChart');
    if (roiCanvas) {
        const ctx = roiCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['🚀 OSOM Strategy', '💸 Publicités Payantes'],
                datasets: [{
                    label: 'Key Events pour 10K CHF',
                    data: [1146, 8],
                    backgroundColor: [
                        createGradient(ctx, '#FFDD00', '#FFA500'),
                        createGradient(ctx, '#DC2626', '#B91C1C')
                    ],
                    borderColor: ['#FFDD00', '#DC2626'],
                    borderWidth: 3,
                    borderRadius: {
                        topLeft: 16,
                        topRight: 16,
                        bottomLeft: 6,
                        bottomRight: 6
                    },
                    borderSkipped: false,
                    shadowOffsetX: 0,
                    shadowOffsetY: 8,
                    shadowBlur: 24,
                    shadowColor: 'rgba(0, 0, 0, 0.15)'
                }]
            },
            options: {
                ...premiumConfig,
                scales: {
                    ...premiumConfig.scales,
                    y: {
                        ...premiumConfig.scales.y,
                        max: 1200,
                        ticks: {
                            ...premiumConfig.scales.y.ticks,
                            callback: function(value) {
                                return value + ' events';
                            }
                        }
                    }
                },
                plugins: {
                    ...premiumConfig.plugins,
                    tooltip: {
                        ...premiumConfig.plugins.tooltip,
                        callbacks: {
                            label: function(context) {
                                const ratio = context.dataIndex === 0 ? '143x MIEUX' : 'Base';
                                return `${context.parsed.y} events (${ratio})`;
                            }
                        }
                    }
                }
            }
        });
        console.log('✨ Premium ROI chart created');
    }

    // 3. Graphique Engagement
    const engagementCanvas = document.getElementById('engagementChart');
    if (engagementCanvas) {
        const ctx = engagementCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['OSOM', 'Paid Search', 'Direct'],
                datasets: [{
                    label: 'Engagement Time (seconds)',
                    data: [67.5, 21.3, 32.8],
                    backgroundColor: [osomColors.yellow, osomColors.gray, osomColors.violet],
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, max: 80 },
                    x: { grid: { display: false } }
                }
            }
        });
        console.log('Engagement chart created');
    }

    // 4. Graphique Traffic
    const trafficCanvas = document.getElementById('trafficChart');
    if (trafficCanvas) {
        const ctx = trafficCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Paid Search', 'Direct', 'Unassigned', 'OSOM FB/IG', 'Others'],
                datasets: [{
                    data: [27.8, 19.8, 10.5, 8.4, 33.5],
                    backgroundColor: [osomColors.gray, osomColors.violet, osomColors.dark, osomColors.yellow, osomColors.violetLight],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom' } }
            }
        });
        console.log('Traffic chart created');
    }

    // 5. Graphique Cost Efficiency
    const costCanvas = document.getElementById('costEfficiencyChart');
    if (costCanvas) {
        const ctx = costCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['OSOM', 'Google Ads', 'Meta Ads'],
                datasets: [{
                    label: 'Cost per Conversion (CHF)',
                    data: [9, 1154, 2500],
                    backgroundColor: [osomColors.yellow, osomColors.gray, osomColors.violet],
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true },
                    x: { grid: { display: false } }
                }
            }
        });
        console.log('Cost efficiency chart created');
    }

    // 6. Graphique Waste
    const wasteCanvas = document.getElementById('wasteChart');
    if (wasteCanvas) {
        const ctx = wasteCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'OSOM Strategy',
                    data: [{x: 6500, y: 688}],
                    backgroundColor: osomColors.yellow,
                    pointRadius: 15
                }, {
                    label: 'Paid Advertising',
                    data: [{x: 97500, y: 49}],
                    backgroundColor: osomColors.gray,
                    pointRadius: 12
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'top' } },
                scales: {
                    x: { title: { display: true, text: 'Budget Invested (CHF)' } },
                    y: { title: { display: true, text: 'Key Events Generated' } }
                }
            }
        });
        console.log('Waste chart created');
    }

    // 7. Graphique Timeline
    const timelineCanvas = document.getElementById('timelineChart');
    if (timelineCanvas) {
        const ctx = timelineCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'Mai 2025', 'Jun 2025', 'Jul 2025'],
                datasets: [{
                    label: 'OSOM Performance',
                    data: [120, 180, 240, 320, 410, 520, 688],
                    borderColor: osomColors.yellow,
                    backgroundColor: osomColors.yellow + '20',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
                }, {
                    label: 'Paid Ads Performance',
                    data: [15, 12, 8, 18, 25, 32, 49],
                    borderColor: osomColors.gray,
                    backgroundColor: osomColors.gray + '20',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'top' } },
                scales: {
                    y: { beginAtZero: true, title: { display: true, text: 'Key Events' } },
                    x: { grid: { display: false } }
                }
            }
        });
        console.log('Timeline chart created');
    }

    console.log('All charts initialization completed!');
});