// Script Chart.js Ultra-Raffiné - Design OSOM Premium
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initialisation graphiques ultra-raffinés...');
    
    // Configuration globale ultra-raffinée
    Chart.defaults.font.family = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
    Chart.defaults.font.size = 12;
    Chart.defaults.font.weight = '400';
    Chart.defaults.animation.duration = 1500;
    Chart.defaults.animation.easing = 'easeOutCubic';
    Chart.defaults.elements.bar.borderRadius = 4;
    Chart.defaults.elements.bar.borderSkipped = false;
    Chart.defaults.elements.point.radius = 0;
    Chart.defaults.elements.point.hoverRadius = 4;
    Chart.defaults.elements.line.borderWidth = 2;

    // Palette ultra-raffinée
    const refinedPalette = {
        yellow: '#FFDD00',
        yellowSubtle: 'rgba(255, 221, 0, 0.8)',
        gray: '#6B6B6B', 
        graySubtle: 'rgba(107, 107, 107, 0.6)',
        violet: '#8b5cf6',
        violetSubtle: 'rgba(139, 92, 246, 0.7)',
        lightViolet: '#a78bfa',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        textPrimary: '#1f2937',
        textSecondary: '#6b7280',
        gridColor: 'rgba(156, 163, 175, 0.04)'
    };

    // Helper pour ombres subtiles
    function addSubtleShadow(ctx, color) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, color.replace(')', ', 0.7)').replace('rgb', 'rgba'));
        return gradient;
    }

    // Configuration ultra-raffinée
    const refinedConfig = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 20,
                right: 20,
                bottom: 10,
                left: 10
            }
        },
        interaction: {
            intersect: false,
            mode: 'index'
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.98)',
                titleColor: refinedPalette.textPrimary,
                bodyColor: refinedPalette.textSecondary,
                borderColor: 'rgba(139, 92, 246, 0.1)',
                borderWidth: 1,
                cornerRadius: 12,
                padding: 16,
                titleFont: { size: 13, weight: '600' },
                bodyFont: { size: 12, weight: '500' },
                displayColors: false,
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                caretSize: 6
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
                    color: refinedPalette.textSecondary,
                    font: { size: 11, weight: '500' },
                    padding: 16
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: refinedPalette.gridColor,
                    lineWidth: 1,
                    drawTicks: false
                },
                border: {
                    display: false
                },
                ticks: {
                    color: refinedPalette.textSecondary,
                    font: { size: 11, weight: '500' },
                    padding: 16,
                    maxTicksLimit: 6
                }
            }
        }
    };

    // 1. Graphique Conversion - Ultra-raffiné
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
                        refinedPalette.yellow,
                        refinedPalette.graySubtle,
                        refinedPalette.violetSubtle,
                        refinedPalette.lightViolet
                    ],
                    borderColor: [
                        refinedPalette.yellow,
                        refinedPalette.gray,
                        refinedPalette.violet,
                        refinedPalette.lightViolet
                    ],
                    borderWidth: 0,
                    barThickness: 40,
                    categoryPercentage: 0.7,
                    barPercentage: 0.8
                }]
            },
            options: {
                ...refinedConfig,
                scales: {
                    ...refinedConfig.scales,
                    y: {
                        ...refinedConfig.scales.y,
                        max: 13,
                        ticks: {
                            ...refinedConfig.scales.y.ticks,
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
        console.log('Graphique Conversion ultra-raffiné créé');
    }

    // 2. Graphique ROI - Excellence
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
                        refinedPalette.yellow,
                        refinedPalette.graySubtle
                    ],
                    borderWidth: 0,
                    barThickness: 60,
                    categoryPercentage: 0.6,
                    barPercentage: 0.7
                }]
            },
            options: {
                ...refinedConfig,
                scales: {
                    ...refinedConfig.scales,
                    y: {
                        ...refinedConfig.scales.y,
                        max: 1200,
                        ticks: {
                            ...refinedConfig.scales.y.ticks,
                            callback: function(value) {
                                return value === 0 ? '0' : value;
                            }
                        }
                    }
                }
            }
        });
        console.log('Graphique ROI ultra-raffiné créé');
    }

    // 3. Graphique Engagement - Finesse
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
                        refinedPalette.yellow,
                        refinedPalette.graySubtle,
                        refinedPalette.violetSubtle
                    ],
                    borderWidth: 0,
                    barThickness: 45,
                    categoryPercentage: 0.7,
                    barPercentage: 0.8
                }]
            },
            options: {
                ...refinedConfig,
                scales: {
                    ...refinedConfig.scales,
                    y: {
                        ...refinedConfig.scales.y,
                        max: 80,
                        ticks: {
                            ...refinedConfig.scales.y.ticks,
                            callback: function(value) {
                                return value + 's';
                            }
                        }
                    }
                }
            }
        });
        console.log('Graphique Engagement ultra-raffiné créé');
    }

    // 4. Graphique Traffic - Donut épuré
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
                        refinedPalette.graySubtle,
                        refinedPalette.violetSubtle,
                        '#E5E7EB',
                        refinedPalette.yellow,
                        refinedPalette.lightViolet
                    ],
                    borderWidth: 3,
                    borderColor: '#FFFFFF',
                    spacing: 2
                }]
            },
            options: {
                ...refinedConfig,
                cutout: '65%',
                plugins: {
                    ...refinedConfig.plugins,
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle',
                            font: { size: 11, weight: '500' },
                            color: refinedPalette.textSecondary,
                            boxWidth: 8,
                            boxHeight: 8
                        }
                    }
                }
            }
        });
        console.log('Graphique Traffic ultra-raffiné créé');
    }

    // 5. Graphique Cost Efficiency - Précision
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
                        refinedPalette.success,
                        refinedPalette.warning,
                        refinedPalette.error
                    ],
                    borderWidth: 0,
                    barThickness: 45,
                    categoryPercentage: 0.7,
                    barPercentage: 0.8
                }]
            },
            options: {
                ...refinedConfig,
                scales: {
                    ...refinedConfig.scales,
                    y: {
                        ...refinedConfig.scales.y,
                        type: 'logarithmic',
                        ticks: {
                            ...refinedConfig.scales.y.ticks,
                            callback: function(value) {
                                return value + ' CHF';
                            }
                        }
                    }
                }
            }
        });
        console.log('Graphique Cost Efficiency ultra-raffiné créé');
    }

    // 6. Graphique Waste - Minimaliste
    const wasteCanvas = document.getElementById('wasteChart');
    if (wasteCanvas) {
        const ctx = wasteCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'OSOM Strategy',
                    data: [{x: 6500, y: 688}],
                    backgroundColor: refinedPalette.yellow,
                    borderColor: refinedPalette.yellow,
                    borderWidth: 2,
                    pointRadius: 8,
                    pointHoverRadius: 10
                }, {
                    label: 'Publicité Payante',
                    data: [{x: 97500, y: 49}],
                    backgroundColor: refinedPalette.graySubtle,
                    borderColor: refinedPalette.gray,
                    borderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                ...refinedConfig,
                plugins: {
                    ...refinedConfig.plugins,
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle',
                            font: { size: 11, weight: '500' },
                            color: refinedPalette.textSecondary,
                            boxWidth: 8,
                            boxHeight: 8
                        }
                    }
                },
                scales: {
                    x: { 
                        ...refinedConfig.scales.x,
                        title: { 
                            display: true, 
                            text: 'Budget Investi (CHF)',
                            font: { size: 11, weight: '600' },
                            color: refinedPalette.textSecondary,
                            padding: { top: 10 }
                        }
                    },
                    y: { 
                        ...refinedConfig.scales.y,
                        title: { 
                            display: true, 
                            text: 'Key Events Générés',
                            font: { size: 11, weight: '600' },
                            color: refinedPalette.textSecondary,
                            padding: { bottom: 10 }
                        }
                    }
                }
            }
        });
        console.log('Graphique Waste ultra-raffiné créé');
    }

    // 7. Graphique Timeline - Élégance pure
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
                    borderColor: refinedPalette.yellow,
                    backgroundColor: 'rgba(255, 221, 0, 0.06)',
                    borderWidth: 2.5,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: refinedPalette.yellow,
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 2,
                    pointRadius: 3,
                    pointHoverRadius: 5
                }, {
                    label: 'Performance Paid Ads',
                    data: [15, 12, 8, 18, 25, 32, 49],
                    borderColor: refinedPalette.graySubtle,
                    backgroundColor: 'rgba(107, 107, 107, 0.04)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: refinedPalette.gray,
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 1,
                    pointRadius: 2,
                    pointHoverRadius: 4
                }]
            },
            options: {
                ...refinedConfig,
                plugins: {
                    ...refinedConfig.plugins,
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'line',
                            font: { size: 11, weight: '500' },
                            color: refinedPalette.textSecondary,
                            boxWidth: 20,
                            boxHeight: 2
                        }
                    }
                },
                scales: {
                    ...refinedConfig.scales,
                    y: { 
                        ...refinedConfig.scales.y,
                        title: { 
                            display: true, 
                            text: 'Key Events',
                            font: { size: 11, weight: '600' },
                            color: refinedPalette.textSecondary,
                            padding: { bottom: 10 }
                        }
                    }
                }
            }
        });
        console.log('Graphique Timeline ultra-raffiné créé');
    }

    console.log('🎨 Tous les graphiques ultra-raffinés sont créés !');
});