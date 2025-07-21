// Script Chart.js Élégant - Design OSOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initialisation des graphiques élégants OSOM...');
    
    // Configuration globale élégante
    Chart.defaults.font.family = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
    Chart.defaults.font.size = 13;
    Chart.defaults.font.weight = '500';
    Chart.defaults.animation.duration = 1200;
    Chart.defaults.animation.easing = 'easeOutQuart';
    Chart.defaults.elements.bar.borderRadius = 6;
    Chart.defaults.elements.bar.borderSkipped = false;
    Chart.defaults.elements.point.radius = 0;
    Chart.defaults.elements.point.hoverRadius = 6;
    Chart.defaults.elements.line.borderWidth = 3;

    // Palette couleurs OSOM
    const osomPalette = {
        yellow: '#FFDD00',
        yellowGradient: (ctx) => {
            const gradient = ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, '#FFDD00');
            gradient.addColorStop(1, '#F0C800');
            return gradient;
        },
        gray: '#6B6B6B',
        grayGradient: (ctx) => {
            const gradient = ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, '#6B6B6B');
            gradient.addColorStop(1, '#5A5A5A');
            return gradient;
        },
        violet: '#8b5cf6',
        violetGradient: (ctx) => {
            const gradient = ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, '#8b5cf6');
            gradient.addColorStop(1, '#7c3aed');
            return gradient;
        },
        lightViolet: '#a78bfa',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444'
    };

    // Configuration commune élégante
    const elegantConfig = {
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
                cornerRadius: 8,
                padding: 12,
                titleFont: { size: 13, weight: '600' },
                bodyFont: { size: 12, weight: '500' },
                displayColors: true,
                boxPadding: 6
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
                    padding: 10
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(107, 114, 128, 0.1)',
                    lineWidth: 1
                },
                border: {
                    display: false
                },
                ticks: {
                    color: '#6B7280',
                    font: { size: 12, weight: '500' },
                    padding: 10
                }
            }
        }
    };

    // 1. Graphique Conversion
    const conversionCanvas = document.getElementById('conversionChart');
    if (conversionCanvas) {
        const ctx = conversionCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['OSOM', 'Paid Search', 'Direct', 'Organic'],
                datasets: [{
                    label: 'Taux de Conversion',
                    data: [11.3, 1.0, 5.9, 4.6],
                    backgroundColor: [
                        osomPalette.yellowGradient(ctx),
                        osomPalette.grayGradient(ctx),
                        osomPalette.violetGradient(ctx),
                        osomPalette.lightViolet
                    ],
                    borderColor: [
                        osomPalette.yellow,
                        osomPalette.gray,
                        osomPalette.violet,
                        osomPalette.lightViolet
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                ...elegantConfig,
                scales: {
                    ...elegantConfig.scales,
                    y: {
                        ...elegantConfig.scales.y,
                        max: 12,
                        ticks: {
                            ...elegantConfig.scales.y.ticks,
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
        console.log('Graphique Conversion créé');
    }

    // 2. Graphique ROI
    const roiCanvas = document.getElementById('roiChart');
    if (roiCanvas) {
        const ctx = roiCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['OSOM Strategy', 'Publicités Payantes'],
                datasets: [{
                    label: 'Key Events pour 10K CHF',
                    data: [1146, 8],
                    backgroundColor: [
                        osomPalette.yellowGradient(ctx),
                        osomPalette.grayGradient(ctx)
                    ],
                    borderColor: [
                        osomPalette.yellow,
                        osomPalette.gray
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                ...elegantConfig,
                scales: {
                    ...elegantConfig.scales,
                    y: {
                        ...elegantConfig.scales.y,
                        max: 1200
                    }
                }
            }
        });
        console.log('Graphique ROI créé');
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
                    label: 'Temps d\'Engagement',
                    data: [67.5, 21.3, 32.8],
                    backgroundColor: [
                        osomPalette.yellowGradient(ctx),
                        osomPalette.grayGradient(ctx),
                        osomPalette.violetGradient(ctx)
                    ],
                    borderColor: [
                        osomPalette.yellow,
                        osomPalette.gray,
                        osomPalette.violet
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                ...elegantConfig,
                scales: {
                    ...elegantConfig.scales,
                    y: {
                        ...elegantConfig.scales.y,
                        max: 80,
                        ticks: {
                            ...elegantConfig.scales.y.ticks,
                            callback: function(value) {
                                return value + 's';
                            }
                        }
                    }
                }
            }
        });
        console.log('Graphique Engagement créé');
    }

    // 4. Graphique Traffic
    const trafficCanvas = document.getElementById('trafficChart');
    if (trafficCanvas) {
        const ctx = trafficCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Paid Search', 'Direct', 'Unassigned', 'OSOM FB/IG', 'Autres'],
                datasets: [{
                    data: [27.8, 19.8, 10.5, 8.4, 33.5],
                    backgroundColor: [
                        osomPalette.gray,
                        osomPalette.violet,
                        '#9CA3AF',
                        osomPalette.yellow,
                        osomPalette.lightViolet
                    ],
                    borderWidth: 4,
                    borderColor: '#FFFFFF'
                }]
            },
            options: {
                ...elegantConfig,
                cutout: '60%',
                plugins: {
                    ...elegantConfig.plugins,
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            usePointStyle: true,
                            pointStyle: 'circle',
                            font: { size: 11, weight: '500' },
                            color: '#374151'
                        }
                    }
                }
            }
        });
        console.log('Graphique Traffic créé');
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
                    label: 'Coût par Conversion',
                    data: [9, 1154, 2500],
                    backgroundColor: [
                        osomPalette.success,
                        osomPalette.warning,
                        osomPalette.error
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                ...elegantConfig,
                scales: {
                    ...elegantConfig.scales,
                    y: {
                        ...elegantConfig.scales.y,
                        type: 'logarithmic',
                        ticks: {
                            ...elegantConfig.scales.y.ticks,
                            callback: function(value) {
                                return value + ' CHF';
                            }
                        }
                    }
                }
            }
        });
        console.log('Graphique Cost Efficiency créé');
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
                    backgroundColor: osomPalette.yellow,
                    borderColor: osomPalette.yellow,
                    borderWidth: 2,
                    pointRadius: 12
                }, {
                    label: 'Publicité Payante',
                    data: [{x: 97500, y: 49}],
                    backgroundColor: osomPalette.gray,
                    borderColor: osomPalette.gray,
                    borderWidth: 2,
                    pointRadius: 10
                }]
            },
            options: {
                ...elegantConfig,
                plugins: {
                    ...elegantConfig.plugins,
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            padding: 15,
                            usePointStyle: true,
                            pointStyle: 'circle',
                            font: { size: 12, weight: '500' },
                            color: '#374151'
                        }
                    }
                },
                scales: {
                    x: { 
                        ...elegantConfig.scales.x,
                        title: { 
                            display: true, 
                            text: 'Budget Investi (CHF)',
                            font: { size: 12, weight: '600' },
                            color: '#374151'
                        }
                    },
                    y: { 
                        ...elegantConfig.scales.y,
                        title: { 
                            display: true, 
                            text: 'Key Events Générés',
                            font: { size: 12, weight: '600' },
                            color: '#374151'
                        }
                    }
                }
            }
        });
        console.log('Graphique Waste créé');
    }

    // 7. Graphique Timeline
    const timelineCanvas = document.getElementById('timelineChart');
    if (timelineCanvas) {
        const ctx = timelineCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan 2025', 'Fév 2025', 'Mar 2025', 'Avr 2025', 'Mai 2025', 'Jun 2025', 'Jul 2025'],
                datasets: [{
                    label: 'Performance OSOM',
                    data: [120, 180, 240, 320, 410, 520, 688],
                    borderColor: osomPalette.yellow,
                    backgroundColor: 'rgba(255, 221, 0, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: osomPalette.yellow,
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 2,
                    pointRadius: 5
                }, {
                    label: 'Performance Paid Ads',
                    data: [15, 12, 8, 18, 25, 32, 49],
                    borderColor: osomPalette.gray,
                    backgroundColor: 'rgba(107, 107, 107, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: osomPalette.gray,
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 2,
                    pointRadius: 4
                }]
            },
            options: {
                ...elegantConfig,
                plugins: {
                    ...elegantConfig.plugins,
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            padding: 15,
                            usePointStyle: true,
                            pointStyle: 'line',
                            font: { size: 12, weight: '500' },
                            color: '#374151'
                        }
                    }
                },
                scales: {
                    ...elegantConfig.scales,
                    y: { 
                        ...elegantConfig.scales.y,
                        title: { 
                            display: true, 
                            text: 'Key Events',
                            font: { size: 12, weight: '600' },
                            color: '#374151'
                        }
                    }
                }
            }
        });
        console.log('Graphique Timeline créé');
    }

    console.log('Tous les graphiques élégants OSOM sont créés !');
});